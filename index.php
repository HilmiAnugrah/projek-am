<?php require "src/backend/php/function.php" ?>

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
    <!-- main end -->
    <!-- footer -->
    <?php require "src/backend/partials/footer.php"; ?>
    <!-- end footer -->
    <script src="https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/swiper@10/swiper-element-bundle.min.js"></script>

    <script src="./src/js/index.js"></script>
    <script src="./src/js/card.js"></script>

    <script src="./src/js/ajax/card-extracurricular.js"></script>
</body>

</html>