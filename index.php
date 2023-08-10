<!doctype html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no, minimum-scale=1, maximum-scale=1" />
    <title>Al Ashr Al Madani</title>
    <!-- favicon.io -->
    <link rel="icon" href="src/img/favicon/favicon.ico" />
    <!-- swiper -->
    <link rel="stylesheet" href="./src/css/swiper.css" />

    <link href="src/css/index.css" rel="stylesheet" />
</head>

<body class="bg-body overflow-hidden h-screen">
    <div class="overflow-y-scroll h-screen">
        <!-- Navbar -->
        <?php require "src/backend/partials/header.php"; ?>
        <!-- main -->
        <?php require "src/backend/partials/main.php"; ?>
        <!-- main end -->
        <!-- footer -->
        <?php require "src/backend/partials/footer.php"; ?>
        <!-- end footer -->
    </div>

    <script src="./src/js/vendors.js"></script>
    <script src="./src/js/navbar.js"></script>
    <script src="./src/js/card.js"></script>
    <script src="./src//js/dropdown.js"></script>
</body>

</html>