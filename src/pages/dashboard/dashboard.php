<?php
require "../../backend/functions/functions.php";
?>

<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Hayde | Dashboard</title>
    <!-- favicon -->
    <link rel="icon" href="<?= baseUrl("src/img/favicon/favicon.ico"); ?>" />
  <link rel="stylesheet" href="<?= baseUrl("src/css/dashboard.css"); ?>">
  <link rel="stylesheet" href="<?= baseUrl("src/css/dashboard-content.css"); ?>">
  <link rel="stylesheet" href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css">
</head>
<body>
  <nav class="sidebar locked">  
    <div class="logo_items flex">
      <a href="index.php">
        <span class="nav_image"><img src="<?= baseUrl("src/img/logo.svg"); ?>" alt="logo_img" /></span>
        <span class="logo_name text-dark-font">PPTQAM</span>
      </a>
      <i class="bx bx-lock-alt" id="lock-icon" title="Unlock Sidebar"></i>
      <i class="bx bx-x" id="sidebar-close"></i>
    </div>
    <div class="menu_container">
      <div class="menu_items">
        <ul class="menu_item">
          <div class="menu_title flex">
            <span class="title">Dashboard</span>
            <span class="line"></span>
          </div>
          <li class="item">
            <a href="#" class="link flex" id="overview-link">
              <i class='bx bxs-dashboard'></i>
              <span>Overview</span>
            </a>
          </li>
          <!-- data santri -->
          <li class="item">
            <a class="link flex cursor-pointer" id="santri-pptqam">
            <i class='bx bx-user-circle'></i>
              <span>Data Santri</span>
              <i class='bx bxs-chevron-down' id="arrow-santri-pptqam"></i>
            </a>
            <!-- dropdown data santri -->
            <ul id="dropdown-santri-pptqam" class="hidden">
              <li class="item">
                <a class="flex link sublink cursor-pointer" id="data-calon-santri-pptqam">
                  <img src="<?= baseUrl("src/img/icons/data-calon-santri.svg"); ?>" alt="">
                  <span>Calon Santri Baru</span>
                </a>
              </li>
              <li class="item">
                <a class="flex link sublink cursor-pointer" id="data-santri-am">
                  <img src="<?= baseUrl("src/img/icons/data-base-santri.svg"); ?>" alt="">
                  <span>Data Santri AM</span>
                </a>
              </li>
            </ul>
          </li>
          <li class="item">
            <a href="#" class="link flex" id="profile-santri">
              <i class="bx bx-user"></i>
              <span>Profile Santri</span>
              <i class='bx bxs-chevron-down' id="arrow-profile"></i>
            </a>
            <!-- dropdown menu profile santri -->
            <ul id="dropdown-profile" class="hidden">
              <li class="item">
                <a href="#" class="flex link sublink">
                  <img src="<?= baseUrl("src/img/icons/id-card.svg"); ?>" alt="">
                  <span>Identitas Santri</span>
                </a>
              </li>
              <li class="item">
                <a href="#" class="flex link sublink">
                  <img src="<?= baseUrl("src/img/icons/pendidikan.svg"); ?>" alt="">
                  <span>Pendidikan Terakhir</span>
                </a>
              </li>
              <li class="item">
                <a href="#" class="flex link sublink">
                  <img src="<?= baseUrl("src/img/icons/potensidiri.svg"); ?>" alt="">
                  <span>Potensi Diri</span>
                </a>
              </li>
              <li class="item">
                <a href="#" class="flex link sublink">
                  <img src="<?= baseUrl("src/img/icons/dokumen-pendukung.svg"); ?>" alt="">
                  <span>Dokumen Pendukung</span>
                </a>
              </li>
            </ul>

          </li>
          <li class="item">
            <a href="#" class="link flex" id="overview-link">
              <i class="bx bx-bell"></i>
              <span>Pengumuman</span>
              <i class='bx bxs-circle notification'></i>
            </a>
          </li>
          <div class="menu_title flex">
            <span class="line"></span>
          </div>
        </ul>
      </div>

      <div class="side-foot">
        <ul class="item">
          <a href="logout.php" class="link flex" id="setting-link">
            <i class='bx bx-caret-left-square'></i>
            <span>Logout</span>
          </a>
        </ul>
        <div class="sidebar-profile flex">
          <span class="nav_image">
            <img src="<?= baseUrl("src/img/uploaded/person/hilmi.png"); ?>" alt="Hilmi Anugrah" />
          </span>
          <div class="data-user">
            <span class="name">hilmi Anugrah</span>
            <span class="user-email">Santri Al Ashr AL Madani</span>
          </div>
        </div>
      </div>
    </div>
  </nav>
  <nav class="navbar flex md:hidden">
    <i class="bx bx-menu" id="sidebar-open"></i>
    <input type="text" placeholder="Search..." class="search_box" autocomplete="off" id="keyword" />
    <span class="nav_image">
      <img src="<?= baseUrl("src/img/uploaded/person/hilmi.png"); ?>" alt="logo_img" />
    </span>
  </nav>
  <?php require "../../backend/partials/ajax/content-dashboard.php";?>
  <?php require "../../backend/partials/ajax/load/view-data.php";?>
  <?php require "../../backend/partials/ajax/load/view-image.php";?>
  <script src="<?= baseUrl("src/js/dashboard.js"); ?>"></script>
</body>
</html>