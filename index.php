<!doctype html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no, minimum-scale=1, maximum-scale=1" />
    <title>Al Ashr Al Madani</title>
    <!-- Link ke file Tailwind CSS -->
    <link href="https://cdn.jsdelivr.net/npm/daisyui@3.5.0/dist/full.css" rel="stylesheet" type="text/css" />
    <!-- favicon.io -->
    <link rel="icon" href="src/img/favicon/favicon.ico" />
    <!-- swiper -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.css" />

    <link href="src/css/index.css" rel="stylesheet" />
</head>

<body class="bg-body">
    <!-- Navbar -->
    <?php require "src/backend/partials/header.php"; ?>
    <!-- main -->
    <?php require "src/backend/partials/main.php"; ?>
   <section class="maps">
   <h2 class="font-bold text-center text-3xl sm:text-4xl text-body">
            Kunjungi Kami Sekarang
        </h2>
        <p class="text-base tracking-widest text-center sm:text-xl text-body">
        Jl. Arcamanik, Sindanglaya, Kec. Cimenyan, Kab. Bandung, Jawa Barat 40195
        </p>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.0001135748507!2d107.68234017487042!3d-6.890588267428023!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68dd713e76b2a7%3A0xfee7580a9351b376!2sPondok%20Pesantren%20Al-&#39;Ashr%20Al-Madani!5e0!3m2!1sid!2sid!4v1691380325148!5m2!1sid!2sid" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
   </section>
    <!-- main end -->
    <script src="https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/swiper@10/swiper-element-bundle.min.js"></script>

    <script src="./src/js/index.js"></script>
    <script src="./src/js/card.js"></script>
</body>

</html>