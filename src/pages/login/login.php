<?php require "../../backend/functions/functions.php" ?>

<!DOCTYPE html>
<html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Konfirmasi Pendaftaran</title>
        <link rel="stylesheet" href="<?= baseUrl("src/css/dashboard-content.css"); ?>">
    <link rel="icon" href="<?= baseUrl("src/img/favicon/favicon.ico"); ?>" />

    </head>
    
<body class="bg-blue-100 h-[100vh] flex items-center justify-center">
    <div class="w-[90%] lg:w-[60%] mx-auto mb-[50px] ">
        <form action="" method="pos" >
            <div class="flex flex-col gap-5">
                <div class="w-full bg-white shadow-sm py-2 px-2 mt-5 rounded-xl">
                    <img src="<?=baseUrl("src/img/banner-login.png");?>" alt="">
                </div>
                <div class="flex flex-col gap-3">
                    <div class="w-full bg-white shadow-sm py-5 px-3 rounded-xl">
                        <label class="block text-gray-700 text-sm sm:text-base md:text-md font-bold mb-2" for="email">Email</label>
                        <input class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline placeholder:text-sm" id="email" type="email" placeholder="Masukkan Email yang di daftarkan">
                    </div>
                    <div class="w-full bg-white shadow-sm py-5 px-3 rounded-xl">
                        <label class="block text-gray-700 text-sm sm:text-base md:text-md font-bold mb-2" for="password">Password</label>
                        <input class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline placeholder:text-sm" id="password" type="password" placeholder="Masukkan Password Yang di daftarkan">
                    </div>
                   
                </div>
                <div class="w-full bg-white shadow-sm py-7 px-3 rounded-xl">
                <button class="bg-dark-font text-white rounded-xl py-3 w-full text-xl font-semibold" data-callback='onSubmit' data-action='submit' type="submit">Login</button>
            </div>
            </div>
        </form>
    </div>
</body>

</html>