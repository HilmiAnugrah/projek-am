<?php require "../../../functions/functions.php"?>
<div class="mb-10">
    <h1 class="text-lg font-bold text-dark-font">B. DATA AYAH </h1>
    <p class="text-lg">Silahkan Lengkapi Data Ayah Kamu dibawah Ini.</p>
</div>

<div class="pb-16">
    <form action="" method="post" id="identitas-santri-am">
        <div class="flex flex-col lg:flex-row gap-5 my-5">
            <div class="w-full lg:w-1/2 bg-white shadow-sm py-5 px-3 rounded-xl">
                <label class="block text-gray-700 text-sm sm:text-base md:text-md font-bold mb-2" for="nama_lengkap">Nama Lengkap</label>
                <input class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="nama_lengkap" type="text" placeholder="Masukkan Nama Lengkap">
            </div>
            <div class="w-full lg:w-1/2 bg-white shadow-sm py-5 px-3 rounded-xl">
                <label class="block text-gray-700 text-sm sm:text-base md:text-md font-bold mb-2" for="suku_bangsa">Suku Bangsa</label>
                <input class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="suku_bangsa" type="text" placeholder="Masukkan Nama Panggilan">
            </div>
        </div>
        <div class="flex gap-5 flex-col lg:flex-row my-5">
            <div class="w-full lg:w-1/2 bg-white shadow-sm py-5 px-3 rounded-xl">
                <label class="block text-gray-700 text-sm sm:text-base md:text-md font-bold mb-2" for="tgl">Tempat Lahir</label>
                <input class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="tgl" type="text" placeholder="contoh: Bandung">
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
                <input class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline placeholder:text-sm" id="whatsapp" type="text" placeholder="contoh : 628953888352">
            </div>
            <div class="w-full lg:w-1/2 bg-white shadow-sm py-5 px-3 rounded-xl">
                <label class="block text-gray-700 text-sm sm:text-base md:text-md font-bold mb-2" for="tel_rumah">Telephone Rumah</label>
                <input class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline placeholder:text-sm" id="tel_rumah" type="text" placeholder="contoh : 08953888352">
            </div>
        </div>
        <div class="flex gap-5 flex-col lg:flex-row my-5">
            <div class="w-full lg:w-1/2 bg-white shadow-sm py-5 px-3 rounded-xl">
                <label class="block text-gray-700 text-sm sm:text-base md:text-md font-bold mb-2" for="email_ayah">Email</label>
                <input class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline placeholder:text-sm" id="email_ayah" type="text" placeholder="example@gmail.com">
            </div>
            <div class="w-full lg:w-1/2 bg-white shadow-sm py-5 px-3 rounded-xl">
                <div class="flex items-end gap-5">
                    <div class="flex flex-col gap-2 items-start">
                        <label for="status_pernikahan" class="block text-gray-700 text-sm sm:text-base md:text-md font-bold">Status Pernikahan</label>
                        <select class="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline placeholder:text-sm" id="status_pernikahan" type="number" placeholder="Masukan Number" max="100">
                        <option value="default" disabled selected>Pilih</option>
                        <option value="Nikah">Nikah</option>    
                        <option value="Nikah">Cerai Hidup</option>    
                        <option value="Nikah">Cerai Mati</option>    
                    </select>
                    </div>
                    <div class="flex flex-col gap-2 items-start">
                        <label class=" text-gray-700 text-sm sm:text-base md:text-md font-bold justify-center items-center" for="dari">Bersaudara</label>
                        <input class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline placeholder:text-sm " id="dari" type="number" placeholder="Masukkan Number" max="100">
                    </div>
                </div>
            </div>

        </div>
        <div class="flex gap-5 flex-col lg:flex-row my-5">
            <div class="w-full lg:w-1/2 bg-white shadow-sm py-5 px-3 rounded-xl">
                <label class="block text-gray-700 text-sm sm:text-base md:text-md font-bold mb-2" for="kecamatan">Kecamatan</label>
                <input class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline placeholder:text-sm" id="kecamatan" type="text" placeholder="Masukan Nama Kecamatan">
            </div>
            <div class="w-full lg:w-1/2 bg-white shadow-sm py-5 px-3 rounded-xl">
                <label class="block text-gray-700 text-sm sm:text-base md:text-md font-bold mb-2" for="jrk_pesantren">Jarak tempuh dari rumah ke pesantren </label>
                <input class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline placeholder:text-sm" id="jrk_pesantren" type="text" placeholder="Contoh: 1 KM">
            </div>
        </div>
        <div class="flex gap-5 flex-col lg:flex-row my-5">
            <div class="w-full lg:w-1/2 bg-white shadow-sm py-5 px-3 rounded-xl">
                <label class="block text-gray-700 text-sm sm:text-base md:text-md font-bold mb-2" for="bahasa_sehari_hari">Bahasa Sehari-hari</label>
                <input class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline placeholder:text-sm" id="bahasa_sehari_hari" type="text" placeholder="Masukan Bahasa Sehari-Hari">
            </div>
            <div class="w-full lg:w-1/2 bg-white shadow-sm py-5 px-3 rounded-xl">
                <div class="flex items-end gap-5">
                    <div class="flex flex-col gap-2 items-start">
                        <label for="anak_ke" class="block text-gray-700 text-sm sm:text-base md:text-md font-bold">Anak Ke</label>
                        <input class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline placeholder:text-sm" id="anak_ke" type="number" placeholder="Masukan Number" max="100">
                    </div>
                    <label class="block text-gray-700 text-sm sm:text-base md:text-md font-bold" for="dari">dari</label>
                    <div class="flex flex-col gap-2 items-start">
                        <label class=" text-gray-700 text-sm sm:text-base md:text-md font-bold justify-center items-center" for="dari" >Bersaudara</label>
                        <input class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline placeholder:text-sm " id="dari" type="number" placeholder="Masukkan Number" max="100">
                    </div>
                </div>
            </div>
        </div>
        <div class="flex gap-5 flex-col lg:flex-row my-5">
        <div class="w-full lg:w-1/2 bg-white shadow-sm py-5 px-3 rounded-xl">
                <label class="block text-gray-700 text-sm sm:text-base md:text-md font-bold mb-2" for="asal-sekolah">Asal Sekolah</label>
                <input class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline placeholder:text-sm" id="asal-sekolah" type="text" placeholder="Masukan Nama Asal Sekolah">
            </div>
            <div class="w-full lg:w-1/2 bg-white shadow-sm py-7 px-3 rounded-xl">
                <button class="bg-dark-font text-white rounded-xl py-3 w-full text-xl font-semibold" data-sitekey="6LeyygIoAAAAAIyvclei-owI7kikOO7PDObEpK74" data-callback='onSubmit' data-action='submit' type="submit">kirim</button>
            </div>
        </div>
</div>

</form>
</div>