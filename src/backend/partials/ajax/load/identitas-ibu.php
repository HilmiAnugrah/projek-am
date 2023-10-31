<?php require "../../../functions/functions.php" ?>
<div class="mb-10">
    <h1 class="text-lg font-bold text-dark-font">D. DATA IBU </h1>
    <p class="text-lg">Silahkan Lengkapi Data Ibu Kamu dibawah Ini.</p>
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
                <label class="block text-gray-700 text-sm sm:text-base md:text-md font-bold mb-2" for="tempat_lahir">Tempat Lahir</label>
                <input class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="tempat_lahir" type="text" placeholder="contoh: Bandung">
            </div>
            <div class="w-full lg:w-1/2 bg-white shadow-sm py-5 px-3 rounded-xl">
                <label class="block text-gray-700 text-sm sm:text-base md:text-md font-bold mb-2" for="tanggal_lahir">Tanggal Lahir</label>
                <input class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="tanggal_lahir" type="date">
            </div>

        </div>
        <div class="flex gap-5 flex-col lg:flex-row my-5">
            <div class="w-full lg:w-1/2 bg-white shadow-sm py-5 px-3 rounded-xl">
                <label class="block text-gray-700 text-sm sm:text-base md:text-md font-bold mb-2" for="alamat_rumah">Alamat Rumah</label>
                <input class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline placeholder:text-sm" id="alamat_rumah" type="text" placeholder="Jl. Kenangan, No.30 RT02 RW07 Margahayu">
            </div>
            <div class="w-full lg:w-1/2 bg-white shadow-sm py-5 px-3 rounded-xl">
                <label class="block text-gray-700 text-sm sm:text-base md:text-md font-bold mb-2" for="kode_pos">Kode Pos</label>
                <input class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline placeholder:text-sm" id="kode_pos" type="text" placeholder="Masukkan Kode Pos">
            </div>
        </div>
        <h2 class="text-gray-700 text-base sm:text-md md:text-xl font-bold justify-center items-center mt-10 mb-5">D.I. Kontak Ibu</h2>
        <div class="flex flex-col py-3 items-start my-5 bg-white shadow-sm rounded-xl">
            <div class="w-full py-2 px-3">
                <label class="block text-gray-700 text-sm sm:text-base md:text-md font-bold mb-2" for="email">Email</label>
                <input class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline placeholder:text-sm" id="email" type="text" placeholder="example@gmail.com">
            </div>
            <div class="flex gap-2 flex-col lg:flex-row  w-full">
                <div class="w-full  py-2 px-3 ">
                    <label class="block text-gray-700 text-sm sm:text-base md:text-md font-bold mb-2" for="whatsapp">WhatsApp Aktif</label>
                    <input class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline placeholder:text-sm" id="whatsapp" type="text" placeholder="contoh : 628953888352">
                </div>
                <div class="w-full  py-2 px-3 ">
                    <label class="block text-gray-700 text-sm sm:text-base md:text-md font-bold mb-2" for="tel_rumah">Telepon Rumah</label>
                    <input class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline placeholder:text-sm" id="tel_rumah" type="text" placeholder="contoh : 2268443322">
                </div>
            </div>
        </div>
        <h2 class="text-gray-700 text-base sm:text-md md:text-xl font-bold justify-center items-center mt-10 mb-5">D.II. Status Pernikahan Ibu</h2>
        <div class="w-full bg-white shadow-sm py-5 px-3 rounded-xl">
            <div class="flex flex-col gap-5 items-start">
                <div class="flex flex-col gap-2 items-start w-full">
                    <label for="status_pernikahan" class="block text-gray-700 text-sm sm:text-base md:text-md font-bold">Status Pernikahan</label>
                    <select class="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline placeholder:text-sm" id="status_pernikahan" type="number" placeholder="Masukan Number" max="100">
                        <option value="default" disabled selected>Pilih</option>
                        <option value="nikah">Nikah</option>
                        <option value="cerai hidup">Cerai Hidup</option>
                        <option value="cerai mati">Cerai Mati</option>
                    </select>
                </div>
                <div class="flex justify-between w-full gap-5">
                    <div class="flex flex-col gap-2 items-start w-full">
                        <label class=" text-gray-700 text-sm sm:text-base md:text-md font-bold justify-center items-center" for="menikah_pada_usia">Menikah Pada Usia</label>
                        <input class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline placeholder:text-sm " id="menikah_pada_usia" type="number" placeholder="Masukkan Number" max="100">
                    </div>
                    <div class="flex flex-col gap-2 items-start w-full">
                        <label class=" text-gray-700 text-sm sm:text-base md:text-md font-bold justify-center items-center" for="pernikahan_ke">Pernikahan Ke</label>
                        <input class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline placeholder:text-sm " id="pernikahan_ke" type="number" placeholder="Masukkan Number" max="100">
                    </div>
                </div>
            </div>
        </div>
        <h2 class="text-gray-700 text-base sm:text-md md:text-xl font-bold justify-center items-center mt-10">D.III. Riwayat Pendidikan Ibu</h2>
        <div class="w-full bg-white shadow-sm py-5 px-3 rounded-xl mt-5">
            <div class="flex flex-col gap-5 items-start">
                <div class="flex flex-col lg:flex-row w-full gap-5">
                    <div class="flex flex-col gap-2 items-start w-full">
                        <label class=" text-gray-700 text-sm sm:text-base md:text-md font-bold justify-center items-center" for="smp">SMP</label>
                        <input class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline placeholder:text-sm " id="smp" type="text" placeholder="Masukan Asal SMP" max="100">
                    </div>
                    <div class="flex flex-col gap-2 items-start w-full">
                        <label class=" text-gray-700 text-sm sm:text-base md:text-md font-bold justify-center items-center" for="sma">SMA</label>
                        <input class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline placeholder:text-sm " id="sma" type="text" placeholder="Masukan Asal SMA" max="100">
                    </div>
                </div>
                <h2 class="text-gray-700 text-base sm:text-md md:text-xl font-bold justify-center items-center mt-5">A. Riwayat Perguruan Tinggi Ibu</h2>
                <div class="flex flex-col lg:flex-row justify-between w-full gap-5">
                    <div class="flex flex-col gap-2 items-start w-full">
                        <label class=" text-gray-700 text-sm sm:text-base md:text-md font-bold justify-center items-center" for="perguruan_tinggi">Nama Perguruan Tinggi</label>
                        <input class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline placeholder:text-sm " id="perguruan_tinggi" type="text" placeholder="Masukan Nama Perguruan Tinggi" max="100">
                    </div>
                    <div class="flex flex-col gap-2 items-start w-full">
                        <label class=" text-gray-700 text-sm sm:text-base md:text-md font-bold justify-center items-center" for="fakultas">Fakultas</label>
                        <input class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline placeholder:text-sm " id="fakultas" type="text" placeholder="Masukan Nama Fakultas" max="100">
                    </div>
                    <div class="flex flex-col gap-2 items-start w-full">
                        <label class=" text-gray-700 text-sm sm:text-base md:text-md font-bold justify-center items-center" for="jurusan">Jurusan</label>
                        <input class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline placeholder:text-sm " id="jurusan" type="text" placeholder="Masukan Nama Fakultas" max="100">
                    </div>
                </div>
            </div>
        </div>
        <h2 class="text-gray-700 text-base sm:text-md md:text-xl font-bold justify-center items-center mt-10">D.III. Pekerjaan Ibu</h2>
        <div class="w-full bg-white shadow-sm py-5 px-3 rounded-xl mt-5">
            <div class="flex flex-col gap-5 items-start">
                <div class="flex flex-col lg:flex-row w-full gap-5">
                    <div class="flex flex-col gap-2 items-start w-full">
                        <label class=" text-gray-700 text-sm sm:text-base md:text-md font-bold justify-center items-center" for="profesi">Pekerjaan/Profesi</label>
                        <input class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline placeholder:text-sm " id="profesi" type="text" placeholder="Contoh: Arsitek, Dosen, Guru, Ibu Rumah Tanngga dan Lainnya..." max="100">
                    </div>
                    <div class="flex flex-col gap-2 items-start w-full">
                        <label class=" text-gray-700 text-sm sm:text-base md:text-md font-bold justify-center items-center" for="jabatan">Jabatan</label>
                        <input class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline placeholder:text-sm " id="jabatan" type="text" placeholder="Jabatan Anda Sebagai" max="100">
                    </div>
                </div>
                <div class="flex flex-col justify-between w-full gap-5">
                    <div class="flex flex-col lg:flex-row justify-between w-full gap-5">
                        <div class="flex flex-col gap-2 items-start w-full">
                            <label class=" text-gray-700 text-sm sm:text-base md:text-md font-bold justify-center items-center" for="alamat_kantor">Alamat Kantor</label>
                            <input class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline placeholder:text-sm " id="alamat_kantor" type="text" placeholder="Masukan Alamt Kantor" max="100">
                        </div>
                        <div class="flex flex-col gap-2 items-start w-full">
                            <label class=" text-gray-700 text-sm sm:text-base md:text-md font-bold justify-center items-center" for="telephone_kantor">Telepon Kantor</label>
                            <input class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline placeholder:text-sm " id="telephone_kantor" type="text" placeholder="Masukan Nomor kantor" max="100">
                        </div>
                    </div>
                    <div class="flex flex-col gap-2 items-start w-full">
                    <label for="gaji_ibu" class="block text-gray-700 text-sm sm:text-base md:text-md font-bold">Rata Rata Gaji Ibu</label>
                    <select class="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline placeholder:text-sm" id="gaji_ibu" type="number" max="100">
                        <option value="default" disabled selected>Pilih</option>
                        <option value="<2000.000">Kurang dari &lt; Rp. 2000.000</option>
                        <option value="2000.000 - 3000.000">Rp. 2000.000 - Rp. 3000.000</option>
                        <option value="3000.000 - 4000.000">Rp. 3000.000 - Rp. 4000.000</option>
                        <option value="4000.000 - 5000.000">Rp. 4000.000 - Rp. 5000.000</option>
                        <option value=">5000.000">Lebih dari > Rp. 5000.000</option>
                    </select>
                </div>
            </div>
        </div>
        <div class="flex gap-5 flex-col lg:flex-row my-5">
            <div class="w-full bg-white shadow-sm py-7 px-3 rounded-xl">
                <button class="bg-dark-font text-white rounded-xl py-3 w-full text-xl font-semibold" data-sitekey="6LeyygIoAAAAAIyvclei-owI7kikOO7PDObEpK74" data-callback='onSubmit' data-action='submit' type="submit">kirim</button>
            </div>
        </div>
</div>

</form>
</div>