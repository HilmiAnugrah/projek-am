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
    
<body class="bg-blue-100 ">
    <div class="w-[90%] lg:w-[60%] mx-auto mb-[50px]">
        <form action="" method="pos" >
            <div class="flex flex-col gap-5">
                <div class="w-full bg-white shadow-sm py-5 px-3 rounded-xl mt-7 ">
                    <h1 class="text-xl sm:text-2xl font-bold text-gray-700 leading-[50px] mb-4 text-center lg:text-4xl">Konfirmasi Pendaftaran Santri</h1>
                    <div class="flex flex-col lg:flex-row justify-center gap-5 items-center">
                        <div class="">
                            <img src="<?= baseUrl("src/img/icons/logo-bank-bsi.svg"); ?>" alt="" class="w-[100px] sm:w-[200px]">
                        </div>
                        <div class="justify-self-start">
                            <h2 class="text-xl text-center sm:text-left sm:text-3xl font-semibold text-gray-700 !text-[#0CA49D] ">BANK SYARIAH INDONESIA</h2>
                            <p class="text-center sm:text-left text-gray-700 font-semibold text-2xl py-2">a.n Yayasan Fadhila Aswanda</p>
                            <div class="flex gap-1 flex-col justify-center items-center lg:items-start w-full">
                                <div>
                                    <label for="myInput" class="text-xl font-semibold text-gray-700">No. Rek</label>
                                </div>
                                <div class="flex">
                                    <input type="text" value="7094658335" id="myInput" disabled class="text-xl bg-[rgb(12,164,157,40%)] py-1 px-3 rounded-lg font-bold w-[70%]">
                                    <!-- The text field -->
                                    <!-- The button used to copy the text -->
                                    <button onclick="copyText()" class="!bg-[#0CA49D] text-white py-1 px-4 rounded-lg">Copy</button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div class="w-full bg-white shadow-sm py-5 px-3 rounded-xl">
                    <p>Supaya pendaftaran berhasil silahkan infaq pendaftaran sebesar 
                        <ul>
                            <li>Rp.200.000 (SMATER) </li>
                            <li>Rp.250.000 (SMP PLUS) </li>
                        </ul> <span class="!text-[#0CA49D] font-bold">BSI No. Rek 7094658335 </span> a.n 
                    Yayasan Fadhila Aswanda
                   
                    </p>

                </div>
                <div>

                </div>
                <div class="w-full bg-white shadow-sm py-5 px-3 rounded-xl mt-7">
                    <label class="block text-gray-700 text-sm sm:text-base md:text-md font-bold mb-2" for="upload_tf">Upload Bukti Transfer</label>
                    <input class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="upload_tf" type="file">
                    <p class="mt-1 text-sm text-gray-500 dark:text-gray-300" id="upload_tf">Format document JPEG, PNG or JPG (MAX. 10MB).</p>
                </div>
                <div class="flex flex-col gap-3">
                    <div class="w-full bg-white shadow-sm py-5 px-3 rounded-xl">
                        <label class="block text-gray-700 text-sm sm:text-base md:text-md font-bold mb-2" for="nama">Nama Calon Santri</label>
                        <input class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline placeholder:text-sm" id="nama" type="text" placeholder="Masukkan Nama Calon Santri">
                    </div>
                    <div class="w-full bg-white shadow-sm py-5 px-3 rounded-xl">
                        <label class="block text-gray-700 text-sm sm:text-base md:text-md font-bold mb-2" for="pesan">Pesan</label>
                        <textarea rows="5" class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline placeholder:text-sm" id="pesan" type="text" placeholder="Assalamu'alaikum, saya sudah transfer 🙏🏻"></textarea>
                    </div>
                </div>
                <div class="w-full bg-white shadow-sm py-7 px-3 rounded-xl">
                <button class="bg-dark-font text-white rounded-xl py-3 w-full text-xl font-semibold" data-sitekey="6LeyygIoAAAAAIyvclei-owI7kikOO7PDObEpK74" data-callback='onSubmit' data-action='submit' type="submit">kirim</button>
            </div>
            </div>
        </form>
    </div>
    <script>
        function copyText() {
            // Get the text field
            let copyText = document.getElementById("myInput");

            // Select the text field
            copyText.select();
            copyText.setSelectionRange(0, 99999); // For mobile devices

            // Copy the text inside the text field
            navigator.clipboard.writeText(copyText.value);

            // Alert the copied text
            alert("No Rek Sudah di Copy: " + copyText.value);
        }
    </script>
</body>

</html>