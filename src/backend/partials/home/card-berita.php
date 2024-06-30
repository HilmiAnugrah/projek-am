<?php
// $newsQuery = "SELECT nws_id,
//                     nws_title,
//                     nws_img,
//                     nws_short_desc
//             FROM news ORDER BY nws_id DESC LIMIT 2";
// $db->query($newsQuery);
// $db->execute();
// $news = $db->resultSet();

// $limit = intval(isset($_GET['limit']) ? $_GET['limit'] : 0)
$url = 'https://profile.pptqam.ponpes.id/wp-json/wp/v2/posts';
$response = file_get_contents($url);
$dataNews = json_decode($response, true);
// for desktop
$urlD = 'https://profile.pptqam.ponpes.id/wp-json/wp/v2/posts?per_page=3';
$responseD = file_get_contents($urlD);
$dataNewsD = json_decode($responseD, true);
?>

<section class="text-main-purple  w-full h-fit py-12" id="berita">
    <h2 class="font-bold text-4xl px-[5%] text-center">Berita Terbaru</h2>
    <p class="text-base px-[5%] tracking-widest text-center lg:text-2xl mt-1 sm:text-xl">
        Berita Seputar Kegiatan Santri/Siswa dan Pesantren
    </p>
    <!-- mobile -->
    <div class="mt-10 sm:flex sm:flex-row sm:flex-column sm:justify-center sm:gap-10">
        <div class="swiper swiper-berita sm:hidden">
            <div class="swiper-wrapper">
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
                    <div class="swiper-slide">
                        <div class="w-[85%] mx-auto rounded-xl overflow-hidden border-2 bg-white">
                            <a href="<?= $post['link']; ?>">
                            <div class="w-full h-40 flex justify-center items-center overflow-hidden">
                            <img class="object-cover w-full h-full" src="<?= $ogImageUrl; ?>" alt="<?= $title; ?>" />
                        </div>
                                <div class="px-5 py-10">
                                    <h3 class="font-bold text-2xl"><?= $title; ?></h3>
                                    <p class="text-base"><?= $description; ?></p>
                                </div>
                            </a>
                        </div>
                    </div>
                <?php endforeach; ?>

            </div>
            <!-- If we need pagination -->
            <div class="swiper-pagination mt-5"></div>

            <!-- If we need navigation buttons -->
            <div class="swiper-button-prev">
                <img src="./src/img/arrow-left.svg" alt="left" />
            </div>
            <div class="swiper-button-next">
                <img src="./src/img/arrow-right.svg" alt="left" />
            </div>
        </div>
    </div>

    <!-- desktop -->
    <div id="container-berita">
        <div class="mt-10 sm:flex sm:flex-row sm:flex-wrap sm:justify-center sm:gap-10">
            <?php foreach ($dataNewsD as $post) : ?>
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
                <div class="rounded-lg overflow-hidden sm:shadow-lg hidden sm:w-80 sm:block lg:w-[350px] bg-white h-80">
                    <a href="<?= $post['link']; ?>">
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
            <a href="#" class="px-5 py-3 bg-main-purple text-white rounded-full">
                Cari berita lain...
            </a>
        </div>
    </div>
</section>