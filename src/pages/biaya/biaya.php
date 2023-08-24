<?php
require "../../backend/functions/functions.php";
?>
<!doctype html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, user-scalable=no, minimum-scale=1, maximum-scale=1" />
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

<body class="bg-body overflow-hidden h-screen">
    <div class="overflow-y-scroll h-screen">
        <!-- Navbar -->
        <?php require "../../backend/partials/header.php"; ?>
        <!-- main -->
        <?php require "../../backend/partials/biaya/main-biaya.php"; ?>

        <!-- main end -->

        <?php require "../../backend/partials/footer.php"; ?>
        <!-- footer -->
        <!-- end footer -->
    </div>
    <script src="<?= baseUrl("src/js/vendors.min.js"); ?>"></script>
    <script async src="<?= baseUrl("src/js/menu-category.js"); ?>"></script>
    <script src="<?= baseUrl("src/js/card.js"); ?>"></script>
    <script src="<?= baseUrl("src/js/navbar.js"); ?>"></script>
    <script src="<?= baseUrl("src/js/dropdown.js"); ?>"></script>
</body>

</html>