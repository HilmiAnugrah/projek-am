<?php 
require "../../../functions/functions.php";
$db = new Database();
$query = "SELECT program_biaya.pgb_id, program_biaya.pgb_biaya, prg_id FROM program_biaya";
$db->query($query);
$db->execute();
$biaya = $db->resultSet();
var_dump($biaya);

?>
<?php if (isset($_SESSION['roles']) && $_SESSION['roles'] == 'admin') : ?>
<div id="show-edit-biaya" class="bg-old-blue p-10 rounded-lg">
    <div id="input-biaya-smp" class="bg-main p-10 rounded-lg">

        <a href="#edit-biaya-smp" class="w-full  bg-old-blue shadow-sm py-5 px-3 rounded-xl items-center flex gap-2 justify-center" id="btn-edit-biaya-smp">
            <div class="group/text text-white text-xl font-bold group-hover/kategori:text-white group-focus/kategori:text-white focus:text-white flex gap-2 justify-center ">
                <i class='bx bxs-edit bx-md group-hover/kategori:text-white group-focus/kategori:text-white focus:text-white'></i>
                Edit Biaya SMP
            </div>
        </a>
        
        <form action="<?= baseUrl('src/backend/partials/dashboard/edit-biaya/edit-biaya-smp.php'); ?>" method="post" id="identitas-santri-am">
            <input type="number" name="prg_id" value="<?=$biaya[0]['prg_id'];?>" hidden>
            <div class="flex flex-col lg:flex-row gap-5 my-5">
                <div class="w-full lg:w-1/2 bg-white shadow-sm py-5 px-3 rounded-xl">
                    <label class="block text-gray-700 text-sm sm:text-base md:text-md font-bold mb-2" for="biaya_pendaftaran">Biaya Pendaftaran SMP</label>
                    <input class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="biaya_pendaftaran" type="number" placeholder="Masukkan Nominal biaya Pendaftaran" name="biaya_daftar" value="<?=$biaya[0]['pgb_biaya'];?>" required>
                </div>
                <div class="w-full lg:w-1/2 bg-white shadow-sm py-5 px-3 rounded-xl">
                    <label class="block text-gray-700 text-sm sm:text-base md:text-md font-bold mb-2" for="biaya_masuk">Biaya Masuk SMP</label>
                    <input class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="biaya_masuk" type="number" placeholder="Masukkan Nominal biaya Masuk" name="biaya_masuk" value="<?=$biaya[1]['pgb_biaya'];?>" required>
                </div>
            </div>
            <div class="flex gap-5 flex-col lg:flex-row my-5">
                <div class="w-full lg:w-1/2 bg-white shadow-sm py-5 px-3 rounded-xl">
                    <label class="block text-gray-700 text-sm sm:text-base md:text-md font-bold mb-2" for="biaya_tahunan">Biaya Tahunan SMP</label>
                    <input class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="biaya_tahunan" type="number" placeholder="Masukan Nominal biaya Tahunan" name="biaya_year" value="<?=$biaya[2]['pgb_biaya'];?>" required>
                </div>
                <div class="w-full lg:w-1/2 bg-white shadow-sm py-5 px-3 rounded-xl">
                    <label class="block text-gray-700 text-sm sm:text-base md:text-md font-bold mb-2" for="biaya_bulanan">Biaya Bulanan SMP</label>
                    <input class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="biaya_bulanan" type="number" placeholder="Masukan Nominal biaya Bulanan" name="biaya_month" value="<?=$biaya[3]['pgb_biaya'];?>" required>
                </div>
            </div>
            <div class="flex gap-5 flex-col lg:flex-row my-5">
                <div class="w-full lg:w-1/2 bg-white shadow-sm py-5 px-3 rounded-xl">
                    <label class="block text-gray-700 text-sm sm:text-base md:text-md font-bold mb-2" for="biaya_seragam_putra">Biaya Seragam SMP Putra</label>
                    <input class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="biaya_seragam_putra" type="number" placeholder="Masukan Nominal biaya Seragam Putra" name="biaya_seragam_pa" value="<?=$biaya[4]['pgb_biaya'];?>" required>
                </div>
                <div class="w-full lg:w-1/2 bg-white shadow-sm py-5 px-3 rounded-xl">
                    <label class="block text-gray-700 text-sm sm:text-base md:text-md font-bold mb-2" for="biaya_seragam_putri">Biaya Seragam SMP Putri</label>
                    <input class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="biaya_seragam_putri" type="number" placeholder="Masukan Nominal biaya Seragam Putri" name="biaya_seragam_pi" value="<?=$biaya[5]['pgb_biaya'];?>" required>
                </div>
            </div>
            <div class="flex gap-5 flex-col lg:flex-row my-5">
                <div class="w-full lg:w-1/2 bg-white shadow-sm py-5 px-3 rounded-xl">
                    <label class="block text-gray-700 text-sm sm:text-base md:text-md font-bold mb-2" for="biaya_seragam_putri">Biaya Buku SMP</label>
                    <input class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="biaya_seragam_putri" type="number" placeholder="Masukan Nominal biaya buku" name="biaya_buku" value="<?=$biaya[10]['pgb_biaya'];?>" required>
                </div>
            </div>
            <div class="w-full bg-white shadow-sm py-7 px-3 rounded-xl">
                <button class="bg-dark-font text-white rounded-xl py-3 w-full text-xl font-semibold" name="buttonSmp" type="submit">Simpan</button>
            </div>
        </form>
    </div>




<!-- ini biaya sma -->

<div id="input-biaya-sma" class="bg-main-green p-10 rounded-lg mt-10">
        <a href="#edit-biaya-sma" class="w-full bg-second-green shadow-sm py-5 px-3 rounded-xl items-center flex gap-2 justify-center" id="btn-edit-biaya-sma">
                    <div class="group/text text-white text-xl font-bold group-hover/kategori:text-white group-focus/kategori:text-white focus:text-white flex gap-2 justify-center ">
                        <i class='bx bxs-edit bx-md group-hover/kategori:text-white group-focus/kategori:text-white focus:text-white'></i>
                        Edit Biaya SMA
                    </div>
                </a>
        <form action="<?= baseUrl('src/backend/partials/dashboard/edit-biaya/edit-biaya-sma.php'); ?>" method="get" id="identitas-santri-am">
        <input type="number" name="prg_id" value="<?=$biaya[7]['prg_id'];?>" hidden>
            <div class="flex flex-col lg:flex-row gap-5 my-5">
                <div class="w-full lg:w-1/2 bg-white shadow-sm py-5 px-3 rounded-xl">
                    <label class="block text-gray-700 text-sm sm:text-base md:text-md font-bold mb-2" for="biaya_pendaftaran">Biaya Pendaftaran SMA</label>
                    <input class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="biaya_pendaftaran" type="number" placeholder="Masukkan Nominal biaya Pendaftaran" value="<?=$biaya[7]['pgb_biaya'];?>" name="biaya_daftar">
                </div>
                <div class="w-full lg:w-1/2 bg-white shadow-sm py-5 px-3 rounded-xl">
                    <label class="block text-gray-700 text-sm sm:text-base md:text-md font-bold mb-2" for="biaya_masuk">Biaya Masuk SMA</label>
                    <input class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="biaya_masuk" type="number" placeholder="Masukkan Nominal biaya Masuk" value="<?=$biaya[8]['pgb_biaya'];?>" name="biaya_masuk">
                </div>
            </div>
            <div class="flex gap-5 flex-col lg:flex-row my-5">
                <div class="w-full lg:w-1/2 bg-white shadow-sm py-5 px-3 rounded-xl">
                    <label class="block text-gray-700 text-sm sm:text-base md:text-md font-bold mb-2" for="biaya_tahunan">Biaya Tahunan SMA</label>
                    <input class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="biaya_tahunan" type="number" placeholder="Masukan Nominal biaya Tahunan"value="<?=$biaya[9]['pgb_biaya'];?>" name="biaya_year">
                </div>
                <div class="w-full lg:w-1/2 bg-white shadow-sm py-5 px-3 rounded-xl">
                    <label class="block text-gray-700 text-sm sm:text-base md:text-md font-bold mb-2" for="biaya_bulanan">Biaya Bulanan SMA</label>
                    <input class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="biaya_bulanan" type="number" placeholder="Masukan Nominal biaya Bulanan"value="<?=$biaya[10]['pgb_biaya'];?>" name="biaya_month">
                </div>
            </div>
            <div class="w-full bg-white shadow-sm py-7 px-3 rounded-xl">
                <button class="bg-dark-font text-white rounded-xl py-3 w-full text-xl font-semibold" type="submit">Simpan</button>
            </div>
    </div>
    </form>
</div>
</div>
<?php endif;?>