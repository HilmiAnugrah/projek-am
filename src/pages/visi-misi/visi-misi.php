<?php
require "../../backend/functions/functions.php";
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1, maximum-scale=1" />
    <!-- Meta untuk SEO dan pembagian tautan -->
    <meta name="robots" content="index,follow">
    <meta name="title" content="Pondok Pesantren Tahfidz Al Ashr Al Madani">
    <meta name="description" content="Pondok pesantren Al Ashr Al Madani adalah salah satu pesantren tahfidz di kota bandung yang memiliki moto mencetak generasi hafidz hafidzoh da'i da'iyyah qori qori'ah">
    <meta name="keywords" content="pondok pesantren, tahfidz, Al Ashr Al Madani, generasi hafidz, da'i, qori">
    <meta name="author" content="Nama Anda">
    <!-- Meta Schema Markup (Structured Data) -->
    <script type="application/ld+json">
        {
            "@context": "http://schema.org",
            "@type": "Organization",
            "name": "Pondok Pesantren Tahfidz Al Ashr Al Madani",
            "description": "Pondok pesantren Al Ashr Al Madani adalah salah satu pesantren tahfidz di kota bandung yang memiliki moto mencetak generasi hafidz hafidzoh da'i da'iyyah qori qori'ah",
            "url": "https://hilmi.pptqam.ponpes.id/",
            "logo": "https://hilmi.pptqam.ponpes.id/src/img/logo.svg"
        }
    </script>
    <!-- meta social media-->
    <meta property="og:title" content="Pondok Pesantren Tahfidz Al Ashr Al Madani">
    <meta property="og:description" content="Pondok pesantren Al Ashr Al Madani adalah salah satu pesantren tahfidz di kota bandung yang memiliki moto mencetak generasi hafidz hafidzoh da'i da'iyyah qori qori'ah ">
    <meta property="og:image" content="https://hilmi.pptqam.ponpes.id/src/img/program_pilihan/smp.png">
    <meta property="og:image:alt" content="Al Ashr Al Madani">
    <meta property="og:image:width" content="1200">
    <meta property="og:image:height" content="630">
    <meta property="og:url" content="https://hilmi.pptqam.ponpes.id/">
    <meta property="og:type" content="website">
    <meta property="og:site_name" content="Pondok Pesantren Tahfidz Qur'an Al Ashr Al Madani di Bandung">
    <!-- Meta Google -->
    <meta name="googlebot" content="index,follow">
    <meta name="googlebot-news" content="index,follow">
    <!-- Meta untuk bahasa -->
    <meta name="language" content="Indonesian">
    <meta property="og:locale" content="id_ID">
    <!-- Meta Geo Tag -->
    <meta name="geo.position" content="-6.890412520250064, 107.6852906045344">
    <meta name="geo.placename" content="Jl. Arcamanik, Sindanglaya, Kec. Cimenyan, Kab. Bandung, Jawa Barat 40195">
    <!-- Tambahkan Canonical URL untuk menghindari duplikasi konten -->
    <link rel="canonical" href="https://hilmi.pptqam.ponpes.id/">
    <title>Al Ashr Al Madani</title>
    <!-- favicon.io -->
    <link rel="icon" href="<?= baseUrl("src/img/favicon/favicon.ico"); ?>" />
    <!-- swiper -->
    <link rel="stylesheet" href="<?= baseUrl("src/css/swiper.min.css"); ?>" />

    <link href="<?= baseUrl("src/css/index.css"); ?>" rel="stylesheet" />
</head>

<body class="h-screen overflow-hidden bg-body">
    <div class="h-screen overflow-y-scroll">
        <!-- Navbar -->
        <header class="fixed">
            <div class="container px-10">
                <nav class="py-3">
                    <a href="<?= baseUrl(); ?>">
                        <div class="flex gap-2 items-center">
                            <svg width="28" height="20" viewBox="0 0 28 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.66895 0.418945C8.92676 0.139648 9.24902 0 9.63574 0C10.0225 0 10.3447 0.139648 10.6025 0.418945C10.8818 0.676758 11.0215 0.999023 11.0215 1.38574C11.0215 1.77246 10.8818 2.09473 10.6025 2.35254L4.70508 8.25H17.8857C18.2295 8.25 18.5356 8.36816 18.8042 8.60449C19.0728 8.84082 19.2178 9.13086 19.2393 9.47461L19.2715 9.63574C19.2715 10.0225 19.1372 10.3501 18.8687 10.6187C18.6001 10.8872 18.2725 11.0215 17.8857 11.0215H4.70508L10.6025 16.9189C10.8604 17.1553 10.9946 17.4507 11.0054 17.8052C11.0161 18.1597 10.9248 18.4658 10.7314 18.7236L10.6025 18.8525C10.3447 19.1318 10.0225 19.2715 9.63574 19.2715C9.24902 19.2715 8.92676 19.1318 8.66895 18.8525L0.418945 10.6025C0.139648 10.3447 0 10.0225 0 9.63574C0 9.24902 0.139648 8.92676 0.418945 8.66895L8.66895 0.418945ZM26.1357 8.25C26.5225 8.25 26.8501 8.38428 27.1187 8.65283C27.3872 8.92139 27.5215 9.24902 27.5215 9.63574C27.5215 10.0225 27.3872 10.3501 27.1187 10.6187C26.8501 10.8872 26.5225 11.0215 26.1357 11.0215H23.3965C23.0098 11.0215 22.6821 10.8872 22.4136 10.6187C22.145 10.3501 22.0107 10.0225 22.0107 9.63574C22.0107 9.24902 22.145 8.92139 22.4136 8.65283C22.6821 8.38428 23.0098 8.25 23.3965 8.25H26.1357Z" fill="#fff" />
                            </svg>

                            <span class="text-white">Beranda</span>
                        </div>
                    </a>
                </nav>
            </div>
        </header>

        <section class="bg-[url('../img/hiro-visi-misi.svg')] h-full lg:h-[600px] w-full bg-no-repeat bg-cover bg-[center_100%]">
            <div class="flex flex-col justify-center items-center h-full gap-10">
                <div class="justify-center flex"><img src="../../img/logo.svg" alt="logo" class="w-40"></div>
                <div>
                    <h2 class="text-white text-4xl text-center font-bold">Moto</h2>
                    <p class="text-white text-center">“Spiritual, Intelektual dan Akhlakul Karimah’’</p>
                </div>
            </div>
        </section>

        <!-- main -->
        <main>
            <section class="h-full py-10 w-full bg-no-repeat bg-cover bg-[center_100%] bg-main-purple">
                <div class="flex flex-col gap-5 items-center h-full">
                    <h2 class="text-white lg:text-4xl text-2xl text-center font-bold">Sekilas Tentang Al ‘Ashr Al Madani</h2>
                    <p class="text-white text-center lg:w-1/2">
                        Pondok pesantren tahfidz Qur’an Al ‘Ashr Al Madani adalah salah satu pesantren tahfidz moderen di kota Bandung berdiri sejak tahun 2012, Al ‘Ashr Al Madani dirancang sebagai pesantren yang menggunakan boarding school system berbasis pembinaan aqidah, akhlak karimah, dan ibadah praktis serta kurikulum yang berbasis pada kompetensi dalam nuansa Pesantren Tahfidzul Qur’an yang khas.
                    </p>
                </div>
            </section>
            <section class="bg-[url('../img/vector-visi.svg')] h-full lg:h-[600px] py-10 w-full bg-no-repeat bg-cover bg-[center_100%]">
                <div class="container px-5">
                    <div class="flex justify-center h-full items-center">
                        <div class="shadow-2xl overflow-hidden max-w-lg rounded-lg">
                            <div class="bg-main-green py-10 px-5">
                                <h2 class="text-white text-center">Visi</h2>
                            </div>
                            <div class="bg-white p-10">
                                <p>
                                    1. Mendidik santri yang mandiri, kreatif, inovatif, berprestasi mampu menguasai sains dan teknologi. <br>
                                    2. Mencetak santri yang hafal Al Qur’an, generasi Qur’ani, berilmu, bertakwa, disiplin, mandiri, berprestasi dan berakhlak mulia.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="bg-[url('../img/vector-misi.svg')] h-full py-10 w-full bg-no-repeat bg-cover bg-[top_100%] pb-40">
                <div class="container px-5">
                    <div class="flex justify-center">
                        <div class="shadow-2xl overflow-hidden max-w-lg rounded-lg">
                            <div class="bg-main-orange py-10 px-5">
                                <h2 class="text-white text-center">Misi</h2>
                            </div>
                            <div class="bg-white p-10">
                                <p>
                                    1. Menjadikan lembaga pendidikan yang mampu mencetak santri/siswa generasi penghafal Al Qur’an hafidz hafidzhoh, qori qori’ah, da’i da’iyyah, berakidah salimah, berakhlakul karimah dan berpengetahuan luas berkualitas yang dilandasi nilai nilai tauhid. <br>
                                    2. Menghasilkan santri/siswa yang mahir membaca Al Qur’an, mencintai Al Qur’an, mampu menghafal Al Qur’an, mampu memahami Al Qur’an, kitab kuning, bahasa arab, inggris, perancis, serta mengamalkan dalam kehidupan sehari hari
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
        <!-- main end -->
        <?php require "../../backend/partials/footer.php"; ?>
        <!-- footer -->
        <!-- end footer -->
    </div>

    <script src="<?= baseUrl("src/js/vendors.min.js"); ?>"></script>
    <script src="<?= baseUrl("src/js/menu-category.js"); ?>"></script>
    <script src="<?= baseUrl("src/js/card.js"); ?>"></script>
    <script src="<?= baseUrl("src/js/gallery.js"); ?>"></script>
    <script src="<?= baseUrl("src/js/dropdown.js"); ?>"></script>
</body>

</html>