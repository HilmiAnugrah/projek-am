<?php require "../../../functions/functions.php" ?>
<div class="mb-10">
    <h1 class="text-sm md:text-lg font-bold text-dark-font">Assalamu'alaikum, Hilmi Anugrah Bela Negara </h1>
    <p class="text-sm md:text-lg">Silahkan Lengkapi Formulir Pendaftaran Kamu yuk, dibawah Ini.</p>
</div>
<div class="bg-white p-5 rounded-xl shadow-sm flex flex-col lg:flex-row lg:items-start gap-5">
    <div>
        <div class="flex flex-col lg:flex-row gap-10 ">
            <div class="w-[200px] h-[250px] overflow-hidden">
                <img src="<?= baseUrl("src/img/uploaded/person/santri.jpg"); ?>" alt="hilmi" class="bg-cover bg-[center_100%]">
            </div>
            <div>
                <label class="block text-gray-700 text-sm sm:text-base md:text-md font-bold mb-2" for="edit_profile">Ganti Profile</label>
                <input class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="edit_profile" type="file">
                <p class="mt-1 text-sm text-gray-500 dark:text-gray-300" id="file_input_help">JPEG, PNG or JPG (MAX. 10MB).</p>
            </div>
        </div>
        <div class="flex flex-col lg:flex-row items-start gap-5 mt-5">
            <div class="flex flex-col items-start">
                <!--nara ini ngambil dari database -->
                <div class="">
                    <label for="nama_santri" class=" text-gray-700 text-xs sm:text-base md:text-md font-bold mb-2">Nama Lengkap :</label>
                    <span id="nama_santri" class="text-xs">Hilmi Anugrah Bela Negara</span>
                </div>
                <div>
                    <label for="email_santri" class="text-gray-700 text-xs sm:text-base md:text-md font-bold mb-2">Email :</label>
                    <span class="text-xs">hilmianugrah.bn@gmail.com</span>
                </div>
            </div>
            <div>
                <div>
                    <label for="program" class="text-gray-700 text-xs sm:text-base md:text-md font-bold mb-2">Program :</label>
                    <span class="text-xs">SMP PLUS</span>
                </div>
                <div>
                    <label for="whatsapp" class="text-gray-700 text-xs sm:text-base md:text-md font-bold mb-2">WhatsApp :</label>
                    <p class="text-xs">0895601616644</p>
                </div>
            </div>
        </div>
        <div class="flex flex-col gap-5 items-start">
            <div>
                <h2 class="text-gray-700 text-xs sm:text-base md:text-md font-bold">status Santri:</h2>
                    <!-- ini di ambil dari database nar -->
                <p class="text-xs">Santri Al 'Ashr Al Madani Tahun 2023 - 2024</p>
            </div>  
            <div class="flex flex-col items-start gap-2">
                <span class="text-gray-700 text-xs sm:text-base md:text-md font-bold">No. Peserta Test : <span class="font-normal text-xs">1</span></span>
                <span class="text-gray-700 text-xs sm:text-base md:text-md font-bold">Alamat : <span class="font-normal text-xs">Jl. Arcamanik, Sindanglaya, Kec. Cimenyan, Kab. Bandung, Jawa Barat 40195</span></span>
                
            </div>
    </div>
    </div>
</div>

<div class="pb-16">
    <form action="" method="post" id="identitas-santri-am">
        <div class="flex gap-5 my-5">
            <div class="w-full lg:w-1/2 bg-white shadow-sm py-5 px-3 rounded-xl">
                <label class="block text-gray-700 text-sm sm:text-base md:text-md font-bold mb-2" for="nama_lengkap">Nama Lengkap</label>
                <input class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="nama_lengkap" type="text" placeholder="Masukkan Nama Lengkap">
            </div>
            <div class="w-full lg:w-1/2 bg-white shadow-sm py-5 px-3 rounded-xl">
                <label class="block text-gray-700 text-sm sm:text-base md:text-md font-bold mb-2" for="nama_panggilan">Nama Panggilan</label>
                <input class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="nama_panggilan" type="text" placeholder="Masukkan Nama Panggilan">
            </div>
        </div>
        <div class="flex gap-5 flex-col lg:flex-row my-5">
            <div class="w-full lg:w-1/2 bg-white shadow-sm py-5 px-3 rounded-xl">
                <label class="block text-gray-700 text-sm sm:text-base md:text-md font-bold mb-2" for="tgl">Tempat Tanggal Lahir</label>
                <input class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="tgl" type="text" placeholder="contoh: Bandung, 11 Mei 2023">
            </div>
            <div class="w-full lg:w-1/2 bg-white shadow-sm py-5 px-3 rounded-xl">
                <label class="block text-gray-700 text-sm sm:text-base md:text-md font-bold mb-2" for="tanggal_lahir">Tanggal Lahir</label>
                <input class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="tanggal_lahir" type="date">
            </div>

        </div>
        <div class="flex gap-5 flex-col lg:flex-row my-5">
            <div class="w-full lg:w-1/2 bg-white shadow-sm py-5 px-3 rounded-xl">
                <label class="block text-gray-700 text-sm sm:text-base md:text-md font-bold mb-2" for="alamat_rumah">Alamat Rumah</label>
                <input class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline placeholder:text-sm" id="alamat_rumah" type="text" placeholder="Jl. Arcamanik, Sindanglaya, Kec. Cimenyan, Kota Bandung, Jawa Barat 40195">
            </div>
            <div class="w-full lg:w-1/2 bg-white shadow-sm py-5 px-3 rounded-xl">
                <label class="block text-gray-700 text-sm sm:text-base md:text-md font-bold mb-2" for="kode_pos">Kode Pos</label>
                <input class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline placeholder:text-sm" id="kode_pos" type="text" placeholder="Masukkan Kode Pos">
            </div>
        </div>
        <div class="flex gap-5 flex-col lg:flex-row my-5">
            <div class="w-full lg:w-1/2 bg-white shadow-sm py-5 px-3 rounded-xl">
                <label class="block text-gray-700 text-sm sm:text-base md:text-md font-bold mb-2" for="whatsapp">WhatsApp Aktif</label>
                <input class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline placeholder:text-sm" id="whatsapp" type="text" placeholder="contoh : 08953888352">
            </div>
            <div class="w-full lg:w-1/2 bg-white shadow-sm py-5 px-3 rounded-xl">
                <label class="block text-gray-700 text-sm sm:text-base md:text-md font-bold mb-2" for="kelularahan">kelurahan</label>
                <input class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline placeholder:text-sm" id="kelularahan" type="text" placeholder="Masukkan Nama Kelurahan">
            </div>
        </div>
        <div class="flex gap-5 flex-col lg:flex-row my-5">
            <div class="w-full lg:w-1/2 bg-white shadow-sm py-5 px-3 rounded-xl">
                <label class="block text-gray-700 text-sm sm:text-base md:text-md font-bold mb-2" for="kecamatan">Kecamatan</label>
                <input class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline placeholder:text-sm" id="kecamatan" type="text" placeholder="Masukan Nama Kecamatan">
            </div>
            <div class="w-full lg:w-1/2 bg-white shadow-sm py-5 px-3 rounded-xl">
                <label class="block text-gray-700 text-sm sm:text-base md:text-md font-bold mb-2" for="jrk_pesantren">Jarak tempuh dari rumah ke pesantren </label>
                <input class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline placeholder:text-sm" id="jrk_pesantren" type="text" placeholder="Jarak dari rumah ke pesantren">
            </div>
        </div>
        <div class="flex gap-5 flex-col lg:flex-row my-5">
            <div class="w-full lg:w-1/2 bg-white shadow-sm py-5 px-3 rounded-xl">
                <label class="block text-gray-700 text-sm sm:text-base md:text-md font-bold mb-2" for="bahasa_sehari_hari">Bahasa Sehari-hari</label>
                <input class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline placeholder:text-sm" id="bahasa_sehari_hari" type="text" placeholder="Masukan Bahasa Sehari-Hari">
            </div>
            <div class="w-full lg:w-1/2 bg-white shadow-sm py-5 px-3 rounded-xl">
                <label for="anak_ke" class="block text-gray-700 text-sm sm:text-base md:text-md font-bold mb-2">Anak Ke</label>
                <div class="flex gap-5">
                    <input class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline placeholder:text-sm" id="anak_ke" type="number" placeholder="Masukan Number" max="100">
                    <label class=" text-gray-700 text-sm sm:text-base md:text-md font-bold mb-2" for="dari">dari</label>
                    <input class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline placeholder:text-sm" id="dari" type="number" placeholder="Masukkan Number" max="100">
                    <span class=" text-gray-700 text-sm sm:text-base md:text-md font-bold mb-2">Bersaudara</span>
                </div>
            </div>
        </div>
        <div class="flex gap-5 flex-col lg:flex-row my-5">

            <div class="w-full lg:w-1/2 bg-white shadow-sm py-9 px-3 rounded-xl">
                <button class="bg-dark-font text-white rounded-xl py-3 w-full text-xl font-semibold" data-sitekey="6LeyygIoAAAAAIyvclei-owI7kikOO7PDObEpK74" data-callback='onSubmit' data-action='submit' type="submit">kirim</button>
            </div>
        </div>
</div>

</form>
</div>