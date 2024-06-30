<?php
require "../../backend/functions/functions.php";
require "../../backend/functions/recaptcha.php";
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, user-scalable=no, minimum-scale=1, maximum-scale=1">
    <!-- Meta untuk SEO dan pembagian tautan -->
    <meta name="robots" content="index,follow">
    <meta name="title" content="Pendaftaran Santri Baru pptqam">
    <meta name="description" content="pendaftaran santri baru Pondok pesantren Al Ashr Al Madani adalah salah satu pesantren tahfidz di kota Bandung yang memiliki moto mencetak generasi hafidz hafidzoh da'i da'iyyah qori qori'ah">
    <meta name="keywords" content="daftar,pendaftaran,pondok pesantren, tahfidz, Al Ashr Al Madani, generasi hafidz, da'i, qori">
    <meta name="author" content="Nama Anda">
    <!-- Meta Schema Markup (Structured Data) -->
    <script type="application/ld+json">
        {
            "@context": "http://schema.org",
            "@type": "Organization",
            "name": "Pondok Pesantren Tahfidz Al Ashr Al Madani",
            "description": "Pondok pesantren Al Ashr Al Madani adalah salah satu pesantren tahfidz di kota Bandung yang memiliki moto mencetak generasi hafidz hafidzoh da'i da'iyyah qori qori'ah",
            "url": "https://pptqam.ponpes.id/",
            "logo": "https://pptqam.ponpes.id/src/img/logo.svg"
        }
    </script>
    <!-- Meta social media -->
    <meta property="og:title" content="Pendaftaran Santri Baru">
    <meta property="og:description" content="Pendaftaran santri baru Pondok pesantren Al Ashr Al Madani adalah salah satu pesantren tahfidz di kota Bandung yang memiliki moto mencetak generasi hafidz hafidzoh da'i da'iyyah qori qori'ah ">
    <meta property="og:image" content="https://pptqam.ponpes.id/src/img/uploaded/og-image/pptqam.png">
    <meta property="og:image:alt" content="Al Ashr Al Madani pendaftaran">
    <meta property="og:image:width" content="1200">
    <meta property="og:image:height" content="630">
    <meta property="og:url" content="https://pptqam.ponpes.id/">
    <meta property="og:type" content="website">
    <meta property="og:site_name" content="pendaftaran santri baru Pondok Pesantren Tahfidz Qur'an Al Ashr Al Madani di Bandung">
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
    <link rel="canonical" href="https://pptqam.ponpes.id/daftar">
    <title>Daftar | Al 'Ashr Al Madani</title>
    <!-- hCaptcha -->
    <script src="https://www.google.com/recaptcha/api.js" async defer></script>
    <!-- Favicon -->
    <link rel="icon" href="<?= baseUrl("src/img/favicon/favicon.ico"); ?>" />
    <!-- Swiper -->
    <link rel="stylesheet" href="<?= baseUrl("src/css/swiper.min.css"); ?>" />
    <link href="<?= baseUrl("src/css/index.css"); ?>" rel="stylesheet" />
    <!-- SweetAlert -->
    <script src="<?= baseUrl('src/js/sweetalert2.all.min.js'); ?>" ></script>
    <script src="<?= baseUrl('src/js/sweetalert2.min.js'); ?>" ></script>
    
<script type="text/javascript">
function checkRecaptcha() {
    var recaptchaResponse = grecaptcha.getResponse();

    // Check if reCAPTCHA is not empty
    if (recaptchaResponse.length == 0) {
        Swal.fire({
            position: "center",
            title: "Rechaptcha",
            text: "Silakan centang ReCAPTCHA",
            icon: "warning",
            showCancelButton: false,
            showConfirmButton: true,
        });
        return false;
    }

    // Check if all required fields are filled
    var requiredInputs = document.querySelectorAll('[required]');
    for (var i = 0; i < requiredInputs.length; i++) {
        var input = requiredInputs[i];

        // Handle select elements
        if (input.tagName.toLowerCase() === 'select' && input.value === '') {
            Swal.fire({
                position: "center",
                title: "Inputan Kosong",
                text: "Pilih opsi pada " + input.name,
                icon: "warning",
                showCancelButton: false,
                showConfirmButton: true,
            });
            return false;
        }

        // Handle file input elements
        if (input.type === 'file' && input.files.length === 0) {
            Swal.fire({
                position: "center",
                title: "Inputan Kosong",
                text: "Pilih file pada " + input.name,
                icon: "warning",
                showCancelButton: false,
                showConfirmButton: true,
            });
            return false;
        }

        // Handle other input elements
        if (input.value.trim() === '') {
            Swal.fire({
                position: "center",
                title: "Inputan Kosong",
                text: "Inputan ada yang kosong pada " + input.name,
                icon: "warning",
                showCancelButton: false,
                showConfirmButton: true,
            });
            return false;
        }
    }

    return true;
}

// Enable the submit button after the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('daftar').disabled = false;
});

</script>
</head>

<body class="bg-body overflow-hidden h-screen">
    <div class="overflow-y-scroll h-screen">
        <!-- Navbar -->
        <?php require "../../backend/partials/header.php"; ?>
        <!-- Main -->
        <?php require "../../backend/partials/daftar/main-daftar.php"; ?>
        <!-- Main end -->
        <!-- Footer -->
        <?php require "../../backend/partials/footer.php"; ?>
        <!-- End Footer -->
    </div>
    <script src="<?= baseUrl("src/js/vendors.min.js"); ?>"></script>
    <script src="<?= baseUrl("src/js/menu-category.js"); ?>"></script>
    <script src="<?= baseUrl("src/js/question.js"); ?>"></script>
    <script src="<?= baseUrl("src/js/card.js"); ?>"></script>
    <script src="<?= baseUrl("src/js/navbar.js"); ?>"></script>
    <script src="<?= baseUrl("src/js/dropdown.js"); ?>"></script>
</body>
</html>
