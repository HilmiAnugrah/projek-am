<?php
require "../../backend/functions/functions.php";
require "../../backend/functions/recaptcha.php";
$_SESSION['login'] = true;
$_SESSION['roles'] = 'admin';
$_SESSION['id'] = 1;
if (!isset($_SESSION['login'])) {
  header('Location: ' . baseUrl('login'));
}

$db = new Database();
$query = "SELECT std_full_name, prt_full_name, std_img
          FROM users
          LEFT JOIN students on users.std_id = students.std_id
          LEFT JOIN parents on users.prt_id = parents.prt_id
          WHERE usr_id = :id";
$db->query($query);
$db->bind('id', $_SESSION['id']);
$db->execute();
$profile = $db->single();
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
  <!-- hcaptcha -->
  <script src="https://www.google.com/recaptcha/api.js"></script>
  <script src="https://www.google.com/recaptcha/api.js?render=6LcY39knAAAAACtF3yUxA5oOUz54vtCsmZJ_deMz"></script>
  <script>
    function onSubmit(token) {
      document.getElementById("identitas-santri-am").submit();
    }
  </script>
</head>

<body>
  <nav class="sidebar locked">
    <div class="logo_items flex">
      <a href="<?=baseUrl();?>" class="flex">
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
          <?php if (isset($_SESSION['roles']) == 'admin') : ?>
            <!-- dropdown admin -->
            <li class="item">
              <a class="link flex cursor-pointer" id="admin-pptqam">
                <i class='bx bxs-user-circle'></i>
                <span>Admin</span>
                <i class='bx bxs-chevron-down' id="arrow-admin-pptqam"></i>
              </a>
              <!-- admin -->
              <ul id="dropdown-admin-pptqam" class="hidden">
                <li class="item">
                  <a href="#" class="flex link sublink cursor-pointer" id="edit-pengumuman">
                    <img src="<?= baseUrl("src/img/icons/edit-notification.svg"); ?>" alt="">
                    <span>Pengumuman</span>
                  </a>
                </li>
                <li class="item">
                  <a href="#" class="flex link sublink cursor-pointer" id="create-gel">
                    <img src="<?= baseUrl("src/img/icons/edit-gel.svg"); ?>" alt="">
                    <span>Edit Gelombang</span>
                  </a>
                </li>
                <li class="item">
                  <a href="#" class="flex link sublink cursor-pointer" id="broadcast-wa">
                    <img src="<?= baseUrl("src/img/icons/broadcast-wa.svg"); ?>" alt="">
                    <span>Broadcast WA</span>
                  </a>
                </li>
                <li class="item">
                  <a href="#" class="flex link sublink cursor-pointer" id="edit-biaya">
                    <img src="<?= baseUrl("src/img/icons/edit-biaya.svg"); ?>" alt="">
                    <span>Edit Biaya</span>
                  </a>
                </li>
              </ul>
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
                  <a href="#" class="flex link sublink cursor-pointer" id="data-calon-santri-pptqam">
                    <img src="<?= baseUrl("src/img/icons/data-calon-santri.svg"); ?>" alt="">
                    <span>Calon Santri Baru</span>
                  </a>
                </li>
                <li class="item">
                  <a href="#" class="flex link sublink cursor-pointer" id="data-santri-am">
                    <img src="<?= baseUrl("src/img/icons/data-base-santri.svg"); ?>" alt="">
                    <span>Data Santri AM</span>
                  </a>
                </li>
              </ul>
            </li>
          <?php endif; ?>
          <li class="item">
            <a class="link flex cursor-pointer" id="profile-santri">
              <i class="bx bx-user"></i>
              <span>Profile Santri</span>
              <i class='bx bxs-chevron-down' id="arrow-profile"></i>
            </a>
            <!-- dropdown menu profile santri -->
            <ul id="dropdown-profile" class="hidden">
              <li class="item">
                <a href="#" class="flex link sublink" id="identitas-santri">
                  <img src="<?= baseUrl("src/img/icons/id-card.svg"); ?>" alt="">
                  <span>Identitas Santri</span>
                </a>
              </li>
              <li class="item">
                <a href="#" class="flex link sublink" id="riwayat-kesehatan">
                  <img src="<?= baseUrl("src/img/icons/pendidikan.svg"); ?>" alt="">
                  <span>Riwayat Kesehatan</span>
                </a>
              </li>
              <li class="item">
                <a href="#" class="flex link sublink" id="identitas-ayah">
                  <img src="<?= baseUrl("src/img/icons/id-card.svg"); ?>" alt="">
                  <span>Identitas Ayah</span>
                </a>
              </li>
              <li class="item">
                <a href="#" class="flex link sublink" id="identitas-ibu">
                  <img src="<?= baseUrl("src/img/icons/id-card.svg"); ?>" alt="">
                  <span>Identitas Ibu</span>
                </a>
              </li>
              <li class="item">
                <a href="#" class="flex link sublink" id="identitas-wali">
                  <img src="<?= baseUrl("src/img/icons/id-card.svg"); ?>" alt="">
                  <span>Identitas Wali</span>
                </a>
              </li>
              <li class="item">
                <a href="#" class="flex link sublink" id="dokumen-pendukung">
                  <img src="<?= baseUrl("src/img/icons/dokumen-pendukung.svg"); ?>" alt="">
                  <span>Dokumen Pendukung</span>
                </a>
              </li>
              <li class="item">
                <a href="#" class="flex link sublink" id="cetak-data">
                  <img src="<?= baseUrl("src/img/icons/cetak-data.svg"); ?>" alt="">
                  <span>Cetak Data</span>
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
          <a href="#" class="link flex" id="setting">
            <i class='bx bx-cog'></i>
            <span>Setting</span>
          </a>
        </ul>
        <ul class="item">
          <a href="logout.php" class="link flex">
            <i class='bx bx-caret-left-square'></i>
            <span>Logout</span>
          </a>
        </ul>
        <div class="sidebar-profile flex">
          <span class="nav_image">
            <img src="<?= baseUrl("src/img/uploaded/person/") . is_null($profile['std_img']) ? $profile['std_img'] : 'hilmi.png'; ?>" alt="Hilmi Anugrah" />
          </span>
          <div class="data-user">
            <span class="name">
              <?php if ($profile['std_full_name'] != null) {
                echo $profile['std_full_name'];
              } elseif ($profile['prt_full_name'] != null) {
                echo $profile['prt_full_name'];
              } else {
                echo 'Admin';
              }; ?>
            </span>
            <span class="user-email">Santri Al Ashr AL Madani</span>
          </div>
        </div>
      </div>
    </div>
  </nav>
  <nav class="navbar flex">
    <i class="bx bx-menu" id="sidebar-open"></i>
    <span class="text-base text-dark-font font-bold ">Dashboard PPTQAM</span>
    <span class="nav_image">
      <img src="<?= baseUrl("src/img/uploaded/person/hilmi.png"); ?>" alt="logo_img" />
    </span>
  </nav>
  <?php require "../../backend/partials/ajax/content-dashboard.php"; ?>
  <?php require "../../backend/partials/ajax/load/view-data.php"; ?>
  <?php require "../../backend/partials/ajax/load/view-image.php"; ?>
  <script src="<?= baseUrl("src/js/dashboard.js"); ?>"></script>
</body>

</html>