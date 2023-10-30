<?php
require "../../backend/functions/functions.php";
require "../../backend/functions/recaptcha.php";
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
    <!-- Font -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&family=Roboto+Condensed:wght@400;500;600;700&display=swap" rel="stylesheet">
    <!-- hcaptcha -->
    <script src="https://www.google.com/recaptcha/api.js"></script>
    <script src="https://www.google.com/recaptcha/api.js?render=6LcY39knAAAAACtF3yUxA5oOUz54vtCsmZJ_deMz"></script>
    <script>
        function onSubmit(token) {
            document.getElementById("identitas-santri-am").submit();
        }
    </script>
    <script src="<?= baseUrl("node_modules\chart.js\dist\chart.umd.js"); ?>"></script>
    <script src="<?= baseUrl("src/js/overview.js"); ?>"></script>
</head>

<body>
    <nav class="sidebar locked">
        <div class="flex logo_items">
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
                    <div class="flex menu_title">
                        <span class="title">Dashboard</span>
                        <span class="line"></span>
                    </div>
                    <li class="item">
                        <a href="#" class="flex link" id="overview-link">
                            <i class='bx bxs-dashboard'></i>
                            <span>Overview</span>
                        </a>
                    </li>
                    <!-- data santri -->
                    <li class="item">
                        <a class="flex cursor-pointer link" id="santri-pptqam">
                            <i class='bx bx-user-circle'></i>
                            <span>Data Santri</span>
                            <i class='bx bxs-chevron-down' id="arrow-santri-pptqam"></i>
                        </a>
                        <!-- dropdown data santri -->
                        <ul id="dropdown-santri-pptqam" class="hidden">
                            <li class="item">
                                <a href="#" class="flex cursor-pointer link sublink" id="data-calon-santri-pptqam">
                                    <img src="<?= baseUrl("src/img/icons/data-calon-santri.svg"); ?>" alt="">
                                    <span>Calon Santri Baru</span>
                                </a>
                            </li>
                            <li class="item">
                                <a href="#" class="flex cursor-pointer link sublink" id="data-santri-am">
                                    <img src="<?= baseUrl("src/img/icons/data-base-santri.svg"); ?>" alt="">
                                    <span>Data Santri AM</span>
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li class="item">
                        <a class="flex cursor-pointer link" id="profile-santri">
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
                        </ul>

                    </li>
                    <li class="item">
                        <a href="#" class="flex link" id="overview-link">
                            <i class="bx bx-bell"></i>
                            <span>Pengumuman</span>
                            <i class='bx bxs-circle notification'></i>
                        </a>
                    </li>
                    <div class="flex menu_title">
                        <span class="line"></span>
                    </div>
                </ul>
            </div>

            <div class="side-foot">
                <ul class="item">
                    <a href="#" class="flex link" id="setting-link">
                        <i class='bx bx-cog'></i>
                        <span>Setting</span>
                    </a>
                </ul>
                <ul class="item">
                    <a href="logout.php" class="flex link" id="setting-link">
                        <i class='bx bx-caret-left-square'></i>
                        <span>Logout</span>
                    </a>
                </ul>
                <div class="flex sidebar-profile">
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
    <nav class="flex navbar">
        <i class="bx bx-menu" id="sidebar-open"></i>
        <span class="text-base font-bold text-dark-font ">Dashboard PPTQAM</span>
        <span class="nav_image">
            <img src="<?= baseUrl("src/img/uploaded/person/hilmi.png"); ?>" alt="logo_img" />
        </span>
    </nav>
    <?php require "../../backend/partials/ajax/content-dashboard.php"; ?>
    <script src="<?= baseUrl("src/js/dashboard.js"); ?>"></script>



</body>

</html>