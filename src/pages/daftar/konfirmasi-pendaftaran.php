<?php require "../../backend/functions/functions.php"?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Konfirmasi Pendaftaran</title>
    <link rel="stylesheet" href="<?=baseUrl("src/css/dashboard-content.css");?>">
</head>
<body class="bg-main">
    <div class="w-[90%] lg:w-[60%] mx-auto">
        <h2 class="text-xl font-bold text-gray-700">Konfirmasi Pendaftaran Santri</h2>
        <form action="" method="pos" >
            <div class="flex flex-col gap-5">
                <div class="w-full bg-white shadow-sm py-5 px-3 rounded-xl mt-7">
                    <label class="block text-gray-700 text-sm sm:text-base md:text-md font-bold mb-2" for="upload_tf">Upload Bukti Transfer</label>
                    <input class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="upload_tf" type="file">
                    <p class="mt-1 text-sm text-gray-500 dark:text-gray-300" id="upload_tf">Format document JPEG, PNG or JPG (MAX. 10MB).</p>
                </div>
                <div class="flex flex-col lg:flex-row gap-3">
                    <div class="w-full lg:w-1/2 bg-white shadow-sm py-5 px-3 rounded-xl">
                        <label class="block text-gray-700 text-sm sm:text-base md:text-md font-bold mb-2" for="kode_pos">Kode Pos</label>
                        <input class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline placeholder:text-sm" id="kode_pos" type="text" placeholder="Masukkan Kode Pos">
                    </div>
                    <div class="w-full lg:w-1/2 bg-white shadow-sm py-5 px-3 rounded-xl">
                        <label class="block text-gray-700 text-sm sm:text-base md:text-md font-bold mb-2" for="kode_pos">Kode Pos</label>
                        <input class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline placeholder:text-sm" id="kode_pos" type="text" placeholder="Masukkan Kode Pos">
                    </div>
                </div>
            </div>
        </form>
    </div>
</body>
</html>
