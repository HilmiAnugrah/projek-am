<?php 
require "../../backend/functions/functions.php"

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hilmi Anugrah</title>
    <link rel="stylesheet" href="<?=baseUrl("src/css/dashboard-content.css");?>">
  <link rel="icon" href="<?= baseUrl("src/img/favicon/favicon.ico"); ?>"/>
</head>
<body>
<section class="h-[100vh]">
    <div id="tabel-view-data-santri" class="w-[95%] md:w-[80%] lg:w-[60%] bg-body px-5 py-10 rounded-t-lg mx-auto">
    <div class="flex flex-col items-center">
        <div class="w-[150px] h-[150px] overflow-hidden rounded-full">
            <img src="<?=baseUrl("src/img/uploaded/person/santri.jpg");?>" alt="" class="bg-cover bg-[center_100%]">
        </div>
        <!-- nama ini di ambil dari data base -->
        <h2 class="text-xl font-semibold">Edit Data Santri Hilmi Anugrah</h2>
    </div>
    <form action="" method="post" id="identitas-santri-am">
            <div class="flex flex-col lg:flex-row gap-5 my-5">
                <div class="w-full lg:w-1/2 bg-white shadow-sm py-5 px-3 rounded-xl">
                    <label class="block text-gray-700 text-sm sm:text-base md:text-md font-bold mb-2" for="nama_lengkap">Nama Lengkap</label>
                    <input class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="nama_lengkap" type="text" value="Hilmi Anugrah">
                </div>
                <div class="w-full lg:w-1/2 bg-white shadow-sm py-5 px-3 rounded-xl">
                    <label class="block text-gray-700 text-sm sm:text-base md:text-md font-bold mb-2" for="email">Email</label>
                    <input class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" value="hilmianugrah@gmail.com">
                </div>
            </div>
            <div class="flex gap-5 flex-col lg:flex-row my-5">
                <div class="w-full lg:w-1/2 bg-white shadow-sm py-5 px-3 rounded-xl">
                <span class="text-lg font-bold sm:text-xl py-1 sm:py-2 ml-3">Jenis Kelamin</span>
                    <div class="flex max-lg:flex-col mt-2">
                        <div>
                            <input type="radio" name="gender" value="" id="laki-laki">
                            <label for="laki-laki" class="text-base sm:text-md lg:text-2xl ml-3 mb-1">Laki-laki</label>
                        </div>
                        <div>
                            <input type="radio" name="gender" value="" id="perempuan">
                            <label for="perempuan" class="text-base sm:text-md lg:text-2xl ml-3 mb-1">Perempuan</label>
                        </div>
                    </div>
                </div>
                <div class="w-full lg:w-1/2 bg-white shadow-sm py-5 px-3 rounded-xl">
                <span class="text-lg font-bold sm:text-xl py-1 sm:py-2 ml-3">Program</span>
                    <div class="flex max-lg:flex-col mt-2">
                        <div>
                            <input type="radio" name="program" value="" id="smp">
                            <label for="smp" class="text-base sm:text-md lg:text-2xl ml-3 mb-1">SMP PLUS</label>
                        </div>
                        <div>
                            <input type="radio" name="program" value="" id="sma">
                            <label for="sma" class="text-base sm:text-md lg:text-2xl ml-3 mb-1">SMATER</label>
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex gap-5 flex-col lg:flex-row my-5">
                <div class="w-full lg:w-1/2 bg-white shadow-sm py-5 px-3 rounded-xl">
                <select name="ekstrakurikuler" id="ekstrakurikuler" class="!py-4 sm:!py-6 px-2 rounded-xl text-xl font-semibold w-full">
                        <option value="" selected disabled class="font-medium">Pilih Ekstrakurikuler</option>
                            <option value="" class="font-medium">Pencaksilat</option>
                            <option value="" class="font-medium">Memanah</option>
                            <option value="" class="font-medium">Hadroh</option>
                            <option value="" class="font-medium">Futsal</option>
                            <option value="" class="font-medium">Pramuka</option>
                            <option value="" class="font-medium">Djimbe</option>
                            <option value="" class="font-medium">Marawis</option>
                    </select>
                </div>
                <div class="w-full lg:w-1/2 bg-white shadow-sm py-5 px-3 rounded-xl flex">
                <select name="ekstrakurikuler" id="ekstrakurikuler" class="!py-4 sm:!py-6 px-2 rounded-xl text-xl font-semibold w-full lg:w-1/2">
                        <option value="" selected disabled class="font-medium">Edit Gelombang</option>
                            <option value="1" class="font-medium">Gel.I</option>
                            <option value="2" class="font-medium">Gel.II</option>
                            <option value="3" class="font-medium">Gel.III</option>
                    </select>
                <select name="ekstrakurikuler" id="ekstrakurikuler" class="!py-4 sm:!py-6 px-2 rounded-xl text-xl font-semibold w-full lg:w-1/2">
                        <option value="" selected disabled class="font-medium">Periode</option>
                            <option value="" class="font-medium">2023-2024</option>
                            <option value="" class="font-medium">2022-2023</option>
                            <option value="" class="font-medium">2021-2022</option>
                    </select>
                </div>
                
            </div>
            <div class="w-full bg-white shadow-sm py-7 px-3 rounded-xl">
                <button class="bg-dark-font text-white rounded-xl py-3 w-full text-xl font-semibold" type="submit">Perbarui</button>
            </div>
        </form>
    </div>
</section>
</body>
</html>