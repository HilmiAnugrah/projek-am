<?php
require "../../backend/functions/functions.php";
if (isset($_SESSION['login']) == true) {
    header('Location: ' . baseUrl('dashboard'));
}
if (isset($_POST['buttonPass'])) {
    $pesan = loginAccount($_POST);
}
if (isset($_POST['buttonCode'])) {
    $pesan = loginAccountCode($_POST);
}
?>

<!DOCTYPE html>
<html lang="en">

<head>
<meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1, maximum-scale=1" />
    <!-- Meta untuk SEO dan pembagian tautan -->
    <meta name="robots" content="index,follow">
    <meta name="title" content="Login">
    <meta name="description" content="Login untuk masuk ke dashboard pesnatren">
    <meta name="keywords" content="login, pondok pesantren, tahfidz, Al Ashr Al Madani, generasi hafidz, da'i, qori">
    <meta name="author" content="pptqam">
    <!-- Meta Schema Markup (Structured Data) -->
    <script type="application/ld+json">
        {
            "@context": "http://schema.org",
            "@type": "Organization",
            "name": "Pondok Pesantren Tahfidz Al Ashr Al Madani",
            "description": "Pondok pesantren Al Ashr Al Madani adalah salah satu pesantren tahfidz di kota bandung yang memiliki moto mencetak generasi hafidz hafidzoh da'i da'iyyah qori qori'ah",
            "url": "https://pptqam.ponpes.id/",
            "logo": "https://pptqam.ponpes.id/src/img/logo.svg"
        }
    </script>
    <title>Login</title>
    <link rel="stylesheet" href="<?= baseUrl("src/css/dashboard-content.css"); ?>">
    <link rel="icon" href="<?= baseUrl("src/img/favicon/favicon.ico"); ?>" />
    <!-- sweetalert -->
    <link rel="stylesheet" href="<?= baseUrl('src/css/sweetalert2.min.css'); ?>">
    <script src="<?= baseUrl('src/js/sweetalert2.all.min.js'); ?>"></script>
    <script src="<?= baseUrl('src/js/sweetalert2.min.js'); ?>"></script>
</head>

<body class="bg-blue-100 h-[100vh] flex items-center justify-center">
<<<<<<< HEAD
<<<<<<< HEAD
    <div class="w-[90%] lg:w-[50%] mx-auto mb-[50px] flex flex-col gap-5 mt-[150px]">
=======
=======
>>>>>>> origin/nara-backend
    <?php
    if (isset($pesan['error']) && $pesan['error'] == 1) {
        echo '<script> 
            Swal.fire({
            position: "center",
            icon: "error",
            title: "Oops...",
            text: "' . $pesan['pesan'] . '",
            showConfirmButton: false,
            timer: 1500
            }) 
        </script>';
    }
    ?>
    <div class="w-[90%] lg:w-[60%] mx-auto mb-[50px] flex flex-col gap-5">

        <div class="flex flex-col gap-5">
            <div class="w-full bg-white shadow-sm py-2 px-2 mt-5 rounded-xl">
                <img src="<?= baseUrl("src/img/banner-login.png"); ?>" alt="">
            </div>
            <div class="w-full bg-white shadow-sm py-5 px-3 rounded-xl flex gap-5 text-white justify-center items-center flex-col lg:flex-row">
                <a href="#" class="rounded-xl w-full bg-dark-font py-2 px-5 font-medium flex items-center justify-center gap-1 text-sm" id="btn-lg-code">
                    <img src="<?= baseUrl("src/img/icons/barcode.svg"); ?>" alt="" class="w-7">
                    Login Dengan Kode
                </a>
                <a href="#" class="rounded-xl w-full bg-dark-font text-sm py-2 px-5 font-medium flex items-center justify-center gap-1" id="btn-lg-pass">
                    <img src="<?= baseUrl("src/img/icons/password.svg"); ?>" alt="" class="w-7">
                    Login Dengan Password</a>
            </div>
        </div>
        <form action="" method="post" id="login-with-password">
            <div class="flex flex-col gap-5">
                <div class="flex flex-col gap-3">
                    <div class="w-full bg-white shadow-sm py-5 px-3 rounded-xl">
                        <label class="block text-gray-700 text-sm sm:text-base md:text-md font-bold mb-2" for="email">Email</label>
                        <input class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline placeholder:text-sm" id="email" name="email" type="email" placeholder="Masukkan Email yang di daftarkan" autocomplete="off" required>
                    </div>
                    <div class="w-full bg-white shadow-sm py-5 px-3 rounded-xl">
                        <label class="block text-gray-700 text-sm sm:text-base md:text-md font-bold mb-2" for="password">Password</label>
                        <input class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline placeholder:text-sm" id="password" name="password" type="password" placeholder="Masukkan Password Yang di daftarkan" required>
                    </div>
                </div>
                <div class="w-full bg-white shadow-sm py-7 px-3 rounded-xl">
                    <button class="bg-dark-font text-white rounded-xl py-3 w-full text-xl font-semibold" data-callback='onSubmit' data-action='submit' type="submit" name="buttonPass">Login</button>
                    <div class="flex gap-1 mt-5 justify-center">
                        <p>Belum punya akun?</p>
                        <a href="<?= baseUrl("daftar"); ?>">Daftar disini</a>
                    </div>
                </div>
            </div>
        </form>
        <form action="" method="post" class="hidden" id="login-with-code">
            <div class="flex flex-col gap-5">
                <div class="flex flex-col gap-3">
                    <div class="w-full bg-white shadow-sm py-5 px-3 rounded-xl">
                        <p class="font-bold">Kamu akan mendapatkan Kode ini ketika sudah melakukan <a href="konfirmasi-pendaftaran" class="text-jingga underline">konfirmasi Pendaftaran klik disini</a>, kemudian kodenya akan di kirim via WhatsApp. jika kamu sudah Melakukan pembayaran dan konfirmasi Pembayaran pendaftaran tapi belum menerima kode <a href="https://wa.me/62895708114777?text=Assalamualaikum%20AM%2C%20saya%20sudah%20daftar%20dan%20melakukan%20konfirmasi%20pendaftaran%20tapi%20belum%20menerima%20kode" class="text-jingga underline" target="_blank">Klik disini</a>
                        <ul>
                            <li></li>
                        </ul>
                        </p>
                    </div>
                    <div class="w-full bg-white shadow-sm py-5 px-3 rounded-xl">
                        <label class="block text-gray-700 text-sm sm:text-base md:text-md font-bold mb-2" for="code">Masukan Code</label>
                        <input class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline placeholder:text-sm" id="code" name="code" type="password" placeholder="Masukkan Code yang dikirim via WhatsApp" required>
                    </div>
                </div>
                <div class="w-full bg-white shadow-sm py-7 px-3 rounded-xl">
                    <button class="bg-dark-font text-white rounded-xl py-3 w-full text-xl font-semibold" data-callback='onSubmit' data-action='submit' type="submit" name="buttonCode">Login</button>
                    <div class="flex gap-1 mt-5 justify-center">
                        <p>Belum punya akun?</p>
                        <a href="<?= baseUrl("daftar"); ?>">Daftar disini</a>
                    </div>
                </div>
            </div>
        </form>
    </div>

    <script>
        const lgWithPass = document.getElementById("login-with-password");
        const lgWithCode = document.getElementById("login-with-code");
        const btnPass = document.getElementById("btn-lg-pass");
        const btnCode = document.getElementById("btn-lg-code");

        btnCode.addEventListener("click", () => {
            lgWithPass.classList.add("hidden");
            lgWithCode.classList.remove("hidden");
        });

        btnPass.addEventListener("click", () => {
            lgWithCode.classList.add("hidden");
            lgWithPass.classList.remove("hidden");
        });
    </script>
</body>

</html>