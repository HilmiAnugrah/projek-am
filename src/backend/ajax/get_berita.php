<?php
require "../functions/functions.php";
// get_berita.php
$limitButton = intval(isset($_GET['limit']) ? $_GET['limit'] : 0);
$limit = 2 + $limitButton;

$url = "https://profile.pptqam.ponpes.id/wp-json/wp/v2/posts?per_page=$limit";
$response = file_get_contents($url);
$dataNews = json_decode($response, true);

ob_start(); // Start output buffering
?>


<div class="mt-10 sm:flex sm:flex-row sm:flex-wrap sm:justify-center sm:gap-10 h-96">
<?php foreach ($dataNews as $post) : ?>
    <?php 
        // Mengambil properti 'yoast_head_json'
        $yoastHeadJson = $post['yoast_head_json'];

        // Mengambil URL gambar dari 'og_image'
        $ogImageUrl = isset($yoastHeadJson['og_image'][0]['url']) ? $yoastHeadJson['og_image'][0]['url'] : '';

        // Mengambil title dari 'yoast_head_json'
        $title = isset($yoastHeadJson['title']) ? $yoastHeadJson['title'] : '';

        // Mengambil description dari 'yoast_head_json'
        $description = isset($yoastHeadJson['description']) ? $yoastHeadJson['description'] : '';
    ?>
    <div class="rounded-lg overflow-hidden sm:shadow-lg hidden sm:w-80 sm:block lg:w-[350px] bg-white">
    <a href="<?=$post['link'];?>">
    <div class="w-full h-[50%] flex justify-center items-center overflow-hidden">
      <img class="object-cover w-full h-full" src="<?= $ogImageUrl; ?>" alt="<?= $title; ?>" />
    </div>
        <div class="p-5">
            <h3 class="font-bold text-xl"><?= $title; ?></h3>
            <p class="text-base"><?= $description; ?></p>
        </div>
    </a>
    </div>
<?php endforeach; ?>
</div>
<div class="text-center mt-8 mb-10">
  <a href="javascript:void(0);" onclick="loadBerita(2);" class="px-5 py-3 bg-main-purple text-white rounded-full">
    Cari berita lain...
  </a>
</div>