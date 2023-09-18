<?php

require_once '../../../backend/functions/functions.php';

?>

<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Dashboard</title>
  <link rel="stylesheet" href="<?= baseUrl("src/css/index.css"); ?>" />
  <link rel="stylesheet" href="<?= baseUrl("src/css/dashboard/dashboard-style.css"); ?>" />
  <link rel="stylesheet" href="<?= baseUrl("src/css/dashboard/dashboard.css"); ?>">
  <link flex href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css" rel="stylesheet" />
</head>

<body class="bg-body overflow-hidden h-screen">
  <div class="overflow-y-scroll h-screen">
    <!-- Navbar -->
    <?php require "../../../backend/partials/dashboard-header.php"; ?>
    <!-- main -->
    <?php require "../../../backend/partials/dashboard/user/main-user.php"; ?>
    <!-- main end -->
  </div>
  <script src="<?= baseUrl("src/js/vendors.min.js"); ?>"></script>
  <!-- dashboard -->
  <script src="<?= baseUrl("src/js/dashboard/script.js"); ?>"></script>
  <script src="<?= baseUrl("src/js/dashboard/dashboard.js"); ?>"></script>
</body>

<body>

</body>

</html>