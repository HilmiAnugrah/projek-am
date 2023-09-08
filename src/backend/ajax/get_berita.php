<?php
require "../functions/functions.php";
// get_berita.php
$limitButton = intval(isset($_GET['limit']) ? $_GET['limit'] : 0);
$limit = 2 + $limitButton;

$news = query("SELECT * FROM news ORDER BY nws_id DESC LIMIT $limit");

ob_start(); // Start output buffering
?>


<div class="mt-10 sm:flex sm:flex-row sm:flex-wrap sm:justify-center sm:gap-10">
  <?php foreach ($news as $new) : ?>
    <div class="rounded-lg overflow-hidden sm:shadow-lg hidden sm:w-80 sm:block lg:w-[350px] h-80 bg-white">
      <img src="./src/img/uploaded/berita/<?= $new['nws_img']; ?>" alt="<?= $new['nws_title']; ?>" />
      <div class="p-5">
        <h3 class="font-bold text-2xl"><?= $new['nws_title']; ?></h3>
        <p class="text-base">
          <?= $new['nws_short_desc']; ?>
        </p>
      </div>
    </div>
  <?php endforeach; ?>
</div>
<div class="text-center mt-8 mb-10">
  <a href="javascript:void(0);" onclick="loadBerita(2);" class="px-5 py-3 bg-main-purple text-white rounded-full">
    Cari berita lain...
  </a>
</div>