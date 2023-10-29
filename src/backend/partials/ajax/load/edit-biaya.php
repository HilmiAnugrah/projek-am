<div id="show-edit-biaya">
    <div class="flex gap-5">
        
        <a  href="#" class="group/kategori group-focus/text:bg-dark-font w-full lg:w-1/2 bg-white shadow-sm py-5 px-3 rounded-xl items-center hover:bg-main-green focus:bg-dark-font flex gap-2 justify-center" id="btn-edit-biaya-smp" onclick="inputBiayaSmpSma('btn-edit-biaya-smp');">
            <div class="group/text text-xl font-bold group-hover/kategori:text-white group-focus/kategori:text-white focus:text-white flex gap-2 justify-center ">
                <i class='bx bxs-edit bx-md group-hover/kategori:text-white group-focus/kategori:text-white focus:text-white'></i> 
            Edit Biaya SMP
            </div>
        </a>
        <a  href="#" class="group/kategori group-focus/text:bg-dark-font w-full lg:w-1/2 bg-white shadow-sm py-5 px-3 rounded-xl items-center hover:bg-main-green focus:bg-dark-font flex gap-2 justify-center" id="btn-edit-biaya-sma" onclick="inputBiayaSmpSma('btn-edit-biaya-sma');">
            <div class="group/text text-xl font-bold group-hover/kategori:text-white group-focus/kategori:text-white focus:text-white flex gap-2 justify-center ">
                <i class='bx bxs-edit bx-md group-hover/kategori:text-white group-focus/kategori:text-white focus:text-white'></i> 
            Edit Biaya SMA
            </div>
        </a>
    </div>
    <div class="hidden" id="input-biaya-smp">
        <form action="" method="post" id="identitas-santri-am">
            <div class="flex flex-col lg:flex-row gap-5 my-5">
                <div class="w-full lg:w-1/2 bg-white shadow-sm py-5 px-3 rounded-xl">
                    <label class="block text-gray-700 text-sm sm:text-base md:text-md font-bold mb-2" for="biaya_pendaftaran">Biaya Pendaftaran</label>
                    <input class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="biaya_pendaftaran" type="number" placeholder="Masukkan Nominal biaya Pendaftaran">
                </div>
                <div class="w-full lg:w-1/2 bg-white shadow-sm py-5 px-3 rounded-xl">
                    <label class="block text-gray-700 text-sm sm:text-base md:text-md font-bold mb-2" for="biaya_masuk">Biaya Masuk</label>
                    <input class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="biaya_masuk" type="number" placeholder="Masukkan Nominal biaya Masuk">
                </div>
            </div>
            <div class="flex gap-5 flex-col lg:flex-row my-5">
                <div class="w-full lg:w-1/2 bg-white shadow-sm py-5 px-3 rounded-xl">
                    <label class="block text-gray-700 text-sm sm:text-base md:text-md font-bold mb-2" for="biaya_tahunan">Biaya Tahunan</label>
                    <input class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="biaya_tahunan" type="number" placeholder="Masukan Nominal biaya Tahunan">
                </div>
                <div class="w-full lg:w-1/2 bg-white shadow-sm py-5 px-3 rounded-xl">
                    <label class="block text-gray-700 text-sm sm:text-base md:text-md font-bold mb-2" for="biaya_bulanan">Biaya Bulanan</label>
                    <input class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="biaya_bulanan" type="number" placeholder="Masukan Nominal biaya Bulanan">
                </div>
            </div>
            <div class="flex gap-5 flex-col lg:flex-row my-5">
                <div class="w-full lg:w-1/2 bg-white shadow-sm py-5 px-3 rounded-xl">
                    <label class="block text-gray-700 text-sm sm:text-base md:text-md font-bold mb-2" for="biaya_seragam_putra">Biaya Seragam Putra</label>
                    <input class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="biaya_seragam_putra" type="number" placeholder="Masukan Nominal biaya Seragam Putra">
                </div>
                <div class="w-full lg:w-1/2 bg-white shadow-sm py-5 px-3 rounded-xl">
                    <label class="block text-gray-700 text-sm sm:text-base md:text-md font-bold mb-2" for="biaya_seragam_putri">Biaya Seragam Putri</label>
                    <input class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="biaya_seragam_putri" type="number" placeholder="Masukan Nominal biaya Seragam Putri">
                </div>
            </div>
            <div class="w-full bg-white shadow-sm py-7 px-3 rounded-xl">
                <button class="bg-dark-font text-white rounded-xl py-3 w-full text-xl font-semibold" type="submit">Simpan</button>
            </div>
        </form>
    </div>
    <div class="hidden" id="input-biaya-sma">
        <form action="" method="post" id="identitas-santri-am">
            <div class="flex flex-col lg:flex-row gap-5 my-5">
                <div class="w-full lg:w-1/2 bg-white shadow-sm py-5 px-3 rounded-xl">
                    <label class="block text-gray-700 text-sm sm:text-base md:text-md font-bold mb-2" for="biaya_pendaftaran">Biaya Pendaftaran</label>
                    <input class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="biaya_pendaftaran" type="number" placeholder="Masukkan Nominal biaya Pendaftaran">
                </div>
                <div class="w-full lg:w-1/2 bg-white shadow-sm py-5 px-3 rounded-xl">
                    <label class="block text-gray-700 text-sm sm:text-base md:text-md font-bold mb-2" for="biaya_masuk">Biaya Masuk</label>
                    <input class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="biaya_masuk" type="number" placeholder="Masukkan Nominal biaya Masuk">
                </div>
            </div>
            <div class="flex gap-5 flex-col lg:flex-row my-5">
                <div class="w-full lg:w-1/2 bg-white shadow-sm py-5 px-3 rounded-xl">
                    <label class="block text-gray-700 text-sm sm:text-base md:text-md font-bold mb-2" for="biaya_tahunan">Biaya Tahunan</label>
                    <input class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="biaya_tahunan" type="number" placeholder="Masukan Nominal biaya Tahunan">
                </div>
                <div class="w-full lg:w-1/2 bg-white shadow-sm py-5 px-3 rounded-xl">
                    <label class="block text-gray-700 text-sm sm:text-base md:text-md font-bold mb-2" for="biaya_bulanan">Biaya Bulanan</label>
                    <input class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="biaya_bulanan" type="number" placeholder="Masukan Nominal biaya Bulanan">
                </div>
            </div>
            <div class="flex gap-5 flex-col lg:flex-row my-5">
                <div class="w-full lg:w-1/2 bg-white shadow-sm py-5 px-3 rounded-xl">
                    <label class="block text-gray-700 text-sm sm:text-base md:text-md font-bold mb-2" for="biaya_seragam_putra">Biaya Seragam Putra</label>
                    <input class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="biaya_seragam_putra" type="number" placeholder="Masukan Nominal biaya Seragam Putra">
                </div>
                <div class="w-full lg:w-1/2 bg-white shadow-sm py-5 px-3 rounded-xl">
                    <label class="block text-gray-700 text-sm sm:text-base md:text-md font-bold mb-2" for="biaya_seragam_putri">Biaya Seragam Putri</label>
                    <input class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="biaya_seragam_putri" type="number" placeholder="Masukan Nominal biaya Seragam Putri">
                </div>
            </div>
            <div class="w-full bg-white shadow-sm py-7 px-3 rounded-xl">
                <button class="bg-dark-font text-white rounded-xl py-3 w-full text-xl font-semibold" type="submit">hayde</button>
            </div>
        </form>
    </div>
</div>


