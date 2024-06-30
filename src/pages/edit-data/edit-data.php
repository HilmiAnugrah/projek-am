<?php
require "../../backend/functions/functions.php";
if ($_SESSION['roles'] != 'admin') {
    header('Location: ' . baseUrl());
}
if (isset($_POST['biaya_daftar'])) {
    echo $hayde = $_POST['biaya_daftar'];
}
if (isset($_POST['button'])) {
    $error = adminEditStudent($_POST);
}
$id = $_GET['id'];
$db = new Database();
$query = "SELECT *
            FROM students
            LEFT JOIN gelombang ON students.glb_id = gelombang.glb_id
            WHERE std_id = :id";
$db->query($query);
$db->bind('id', $id);
$db->execute();
$santri = $db->single();

$query = "SELECT *
            FROM genders";
$db->query($query);
$db->execute();
$genders = $db->resultSet();

$query = "SELECT *
            FROM program";
$db->query($query);
$db->execute();
$program = $db->resultSet();

$query = "SELECT *
            FROM activity";
$db->query($query);
$db->execute();
$activity = $db->resultSet();

$query = "SELECT *
            FROM periode";
$db->query($query);
$db->execute();
$periode = $db->resultSet();

$query = "SELECT *
            FROM gelombang";
$db->query($query);
$db->execute();
$gelombang = $db->resultSet();

?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?= $santri['std_full_name']; ?></title>
    <link rel="stylesheet" href="<?= baseUrl("src/css/dashboard-content.css"); ?>">
    <link rel="icon" href="<?= baseUrl("src/img/favicon/favicon.ico"); ?>" />
    <!-- sweetalert -->
    <link rel="stylesheet" href="<?= baseUrl('src/css/sweetalert2.min.css'); ?>">
    <script src="<?= baseUrl('src/js/sweetalert2.all.min.js'); ?>"></script>
    <script src="<?= baseUrl('src/js/sweetalert2.min.js'); ?>"></script>
</head>

<body>
    <?php
    if (isset($error['error']) && $error['error'] == 1) {
        echo '<script> 
            Swal.fire({
            position: "center",
            icon: "error",
            title: "Oops...",
            text: "' . $error['pesan'] . '",
            showConfirmButton: false,
            timer: 1500
            }) 
        </script>';
    } elseif (isset($error['error']) && $error['error'] == false) {
        echo '<script> 
            Swal.fire({
            position: "center",
            icon: "success",
            title: "' . $error['pesan'] . '",
            showConfirmButton: false,
            timer: 1500
            }) 
        </script>';
    }
    ?>


    <section class="h-[100vh]">
        <div id="tabel-view-data-santri" class="w-[95%] md:w-[80%] lg:w-[60%] bg-body px-5 py-10 rounded-t-lg mx-auto">
            <div class="flex flex-col items-center">
                <div class="w-[150px] h-[150px] overflow-hidden rounded-full">
                    <img src="<?= baseUrl("src/img/uploaded/person/") . $santri['std_img']; ?>" alt="<?= $santri['std_img']; ?>" class="bg-cover bg-[center_100%]">
                </div>
                <!-- nama ini di ambil dari data base -->
                <h2 class="text-xl font-semibold">Edit Data Santri <?= $santri['std_full_name']; ?></h2>
            </div>
            <form method="post" id="identitas-santri-am">
                <input type="hidden" name="id" value="<?= $id; ?>">
                <div class="flex flex-col lg:flex-row gap-5 my-5">
                    <div class="w-full lg:w-1/2 bg-white shadow-sm py-5 px-3 rounded-xl">
                        <label class="block text-gray-700 text-sm sm:text-base md:text-md font-bold mb-2" for="nama_lengkap">Nama Lengkap</label>
                        <input class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="nama_lengkap" type="text" name="full_name" value="<?= $santri['std_full_name']; ?>" required>
                    </div>
                    <div class="w-full lg:w-1/2 bg-white shadow-sm py-5 px-3 rounded-xl">
                        <label class="block text-gray-700 text-sm sm:text-base md:text-md font-bold mb-2" for="email">Email</label>
                        <input class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" name="email" value="<?= $santri['std_email']; ?>" required>
                    </div>
                </div>
                <div class="flex gap-5 flex-col lg:flex-row my-5">
                    <div class="w-full lg:w-1/2 bg-white shadow-sm py-5 px-3 rounded-xl">
                        <span class="text-lg font-bold sm:text-xl py-1 sm:py-2 ml-3">Jenis Kelamin</span>
                        <div class="flex max-lg:flex-col mt-2">
                            <?php foreach ($genders as $gender) : ?>
                                <div>
                                    <input <?= $gender['gnr_id'] == $santri['gnr_id'] ? "CHECKED" : '' ?> type="radio" name="gender" value="<?= $gender['gnr_id']; ?>" id="<?= $gender['gnr_name']; ?>" required>
                                    <label for="<?= $gender['gnr_name']; ?>" class="text-base sm:text-md lg:text-2xl ml-3 mb-1"><?= $gender['gnr_name']; ?></label>
                                </div>
                            <?php endforeach ?>
                        </div>
                    </div>
                    <div class="w-full lg:w-1/2 bg-white shadow-sm py-5 px-3 rounded-xl">
                        <span class="text-lg font-bold sm:text-xl py-1 sm:py-2 ml-3">Program</span>
                        <div class="flex max-lg:flex-col mt-2">
                            <?php foreach ($program as $p) : ?>
                                <div>
                                    <input <?= $p['prg_id'] == $santri['prg_id'] ? "CHECKED" : '' ?> type="radio" name="program" value="<?= $p['prg_id']; ?>" id="<?= $p['prg_name']; ?>" required>
                                    <label for="<?= $p['prg_name']; ?>" class="text-base sm:text-md lg:text-2xl ml-3 mb-1"><?= strtoupper($p['prg_name']); ?></label>
                                </div>
                            <?php endforeach ?>
                        </div>
                    </div>
                </div>
                <div class="flex gap-5 flex-col lg:flex-row my-5">
                    <div class="w-full lg:w-1/2 bg-white shadow-sm py-5 px-3 rounded-xl">
                        <select name="ekstrakurikuler" id="ekstrakurikuler" class="!py-4 sm:!py-6 px-2 rounded-xl text-xl font-semibold w-full" required>
                            <option value="" selected disabled class="font-medium">Pilih Ekstrakurikuler</option>
                            <?php foreach ($activity as $a) : ?>
                                <option <?= $a['atv_id'] == $santri['atv_id'] ? "SELECTED" : '' ?> value="<?= $a['atv_id']; ?>" class="font-medium"><?= $a['atv_name']; ?></option>
                            <?php endforeach ?>
                        </select>
                    </div>
                    <div class="w-full lg:w-1/2 bg-white shadow-sm py-5 px-3 rounded-xl flex">
                        <select name="gelombang" id="ekstrakurikuler" class="!py-4 sm:!py-6 px-2 rounded-xl text-xl font-semibold w-full lg:w-1/2" required>
                            <option value="" selected disabled class="font-medium">Edit Gelombang</option>
                            <?php foreach ($gelombang as $g) : ?>
                                <option <?= $g['glb_id'] == $santri['glb_id'] ? "SELECTED" : '' ?> value="<?= $g['glb_id']; ?>" class="font-medium">Gel.<?= $g['glb_name']; ?></option>
                            <?php endforeach ?>
                        </select>
                        <select name="periode" id="ekstrakurikuler" class="!py-4 sm:!py-6 px-2 rounded-xl text-xl font-semibold w-full lg:w-1/2" required>
                            <option value="" selected disabled class="font-medium">Periode</option>
                            <?php foreach ($periode as $p) : ?>
                                <option <?= $p['prd_id'] == $santri['prd_id'] ? "SELECTED" : '' ?> value="<?= $p['prd_id']; ?>" class="font-medium"><?= $p['prd_name'] . '-' . $p['prd_name'] + 1; ?></option>
                            <?php endforeach ?>
                        </select>
                    </div>

                </div>
                <div class="flex flex-col lg:flex-row gap-5 my-5">
                    <div class="w-full lg:w-1/2 bg-white shadow-sm py-5 px-3 rounded-xl">
                        <label class="block text-gray-700 text-sm sm:text-base md:text-md font-bold mb-2" for="whatsapp">Edit No WhatsApp</label>
                        <input class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="whatsapp" type="text" name="whatsapp" value="<?= $santri['std_whatsapp']; ?>">
                    </div>
                    <div class="w-full lg:w-1/2 bg-white shadow-sm py-5 px-3 rounded-xl flex flex-row justify-between items-center">
                        <input class="appearance-none border rounded w-1/2 py-2 px-5 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="g-code" type="text" name="g-code">
                        <a id="generate_code" class="bg-dark-font rounded-lg py-2 px-5 text-white w-1/2 text-sm sm:text-base">Generate New Code</a>
                    </div>
                </div>
                <div class="w-full bg-white shadow-sm py-7 px-3 rounded-xl">
                    <button class="bg-dark-font text-white rounded-xl py-3 w-full text-xl font-semibold" type="submit" name="button">Perbarui</button>
                </div>
            </form>
        </div>
    </section>
    <script>
        document.addEventListener("DOMContentLoaded", function() {
            document.getElementById("generate_code").addEventListener("click", function() {
                var randomCode = generateRandomCode(13); // panggil fungsi generateRandomCode dengan panjang 13
                document.getElementById("g-code").value = randomCode; // isi nilai input g-code dengan kode yang di-generate
            });

            function generateRandomCode(length) {
                var result = '';
                var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
                var charactersLength = characters.length;
                for (var i = 0; i < length; i++) {
                    result += characters.charAt(Math.floor(Math.random() * charactersLength));
                }
                return result;
            }
        });
    </script>

</body>
</html>