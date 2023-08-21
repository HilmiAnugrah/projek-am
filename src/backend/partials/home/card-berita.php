<?php
$news = query("SELECT * FROM news ORDER BY nws_id DESC LIMIT 2");
?>

<section class="text-main-purple  w-full  py-12" id="berita">
    <h2 class="font-bold text-4xl px-[5%] text-center">Berita Terbaru</h2>
    <p class="text-base px-[5%] tracking-widest text-center lg:text-2xl mt-1 sm:text-xl">
        Berita Seputar Kegiatan Santri dan Pesantren
    </p>

    <!-- mobile -->
    <div class="mt-10 sm:flex sm:flex-row sm:flex-wrap sm:justify-center sm:gap-10">
        <div class="swiper swiper-berita sm:hidden">
            <div class="swiper-wrapper">
                <?php foreach ($news as $new) : ?>
                    <div class="swiper-slide">
                        <div class=" w-[85%] mx-auto rounded-xl overflow-hidden border-2  bg-white">
                            <img src="./src/img/uploaded/berita/<?= $new['nws_img']; ?>" alt="<?= $new['nws_title']; ?>" class="w-full" />
                            <div class="px-5 py-10">
                                <h3 class="font-bold text-2xl"><?= $new['nws_title']; ?></h3>
                                <p class="text-base">
                                    <?= $new['nws_short_desc']; ?>
                                </p>
                            </div>
                        </div>
                    </div>
                <?php endforeach; ?>
            </div>
            <!-- If we need pagination -->
            <div class="swiper-pagination top-10"></div>

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
    </div>
</section>