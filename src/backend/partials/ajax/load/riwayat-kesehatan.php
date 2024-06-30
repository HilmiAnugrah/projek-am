<?php
require "../../../functions/functions.php";
$db = new Database();
$query = "SELECT users.std_id,
                    sth_height,
                    sth_weight,
                    sth_eyes_complaint,
                    sth_ears_complaint,
                    sth_physical_complaint,
                    sth_therapy_history,
                    sth_hospitalized,
                    sth_important_massage,
                    sth_blood_type
            FROM users
            LEFT JOIN student_health on student_health.std_id = users.std_id
            WHERE usr_id = :id";
$db->query($query);
$db->bind('id', $_SESSION['id']);
$db->execute();
$profile = $db->single();
?>
<div class="mb-10">
    <h1 class="text-lg font-bold text-dark-font">B. Riwayat Kesehatan Anak</h1>
    <p class="text-lg">Silahkan Lengkapi Riwayat Kesehatan.</p>
</div>

<div class="pb-16">
    <form action="<?= baseUrl('src/backend/partials/dashboard/profile-santri/riwayat-kesehatan.php'); ?>" method="post" id="identitas-santri-am">
        <input type="hidden" name="id" value="<?= $profile['std_id']; ?>">
        <h2 class="text-gray-700 text-base sm:text-md md:text-xl font-bold justify-center items-center mt-10 mb-5">B.I. Riwayat Kesehatan Anak</h2>
        <!-- Tinggi Badan berat badan -->
        <div class="flex flex-col py-3 items-start my-5 bg-white shadow-sm rounded-xl">
            <div class="flex gap-2 w-full">
                <div class="w-full lg:w-1/2 py-2 px-3">
                    <label class="block text-gray-700 text-sm sm:text-base md:text-md font-bold mb-2" for="tinggi_badan">Tinggi Badan</label>
                    <div class="flex gap-2">
                        <input class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline placeholder:text-sm" id="tinggi_badan" type="number" placeholder="160" value="<?= $profile['sth_height']; ?>" name="height">
                        <span class="block text-gray-700 text-sm sm:text-base md:text-md font-bold mb-2" for="tinggi_badan">cm</span>
                    </div>
                </div>
                <div class="w-full lg:w-1/2 py-2 px-3">
                    <label class="block text-gray-700 text-sm sm:text-base md:text-md font-bold mb-2" for="berat_badan">Berat Badan</label>
                    <div class="flex gap-2">
                        <input class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline placeholder:text-sm" id="berat_badan" type="number" placeholder="60" value="<?= $profile['sth_weight']; ?>" name="weight">
                        <span class="block text-gray-700 text-sm sm:text-base md:text-md font-bold mb-2" for="berat_badan">kg</span>
                    </div>
                </div>
            </div>
            <div class="w-full py-2 px-3">
                    <label class="block text-gray-700 text-sm sm:text-base md:text-md font-bold mb-2" for="gol_darah">Golongan Darah</label>
                    <div class="flex gap-2">
                        <input class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline placeholder:text-sm" id="gol_darah" type="text" placeholder="Masukan Gol Darah Contoh : A, Ab, O dll" value="<?= $profile['sth_blood_type']; ?>" name="sth_blood_type">
                    </div>
                </div>
        </div>
        <h2 class="text-gray-700 text-base sm:text-md md:text-xl font-bold justify-center items-center mt-10 mb-5">B.II. Keluhan Fisik</h2>
        <div class="flex flex-col py-3 items-start my-5 bg-white shadow-sm rounded-xl">
            <div class="flex gap-2 flex-col lg:flex-row  w-full">
                <div class="w-full  py-2 px-3 ">
                    <label class="block text-gray-700 text-sm sm:text-base md:text-md font-bold mb-2" for="mata">Mata</label>
                    <input class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline placeholder:text-sm" id="mata" type="text" placeholder="Keluhan Mata Pada Anak" value="<?= $profile['sth_eyes_complaint']; ?>" name="eyes">
                </div>
                <div class="w-full  py-2 px-3 ">
                    <label class="block text-gray-700 text-sm sm:text-base md:text-md font-bold mb-2" for="telinga">Telinga</label>
                    <input class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline placeholder:text-sm" id="telinga" type="text" placeholder="Keluhan Telinga Pada Anak" value="<?= $profile['sth_ears_complaint']; ?>" name="ears">
                </div>
            </div>
            <div class="w-full  py-2 px-3 ">
                <label class="block text-gray-700 text-sm sm:text-base md:text-md font-bold mb-2" for="keluhan_fisik">Keluhan Fisik Lain Yang Sering Dirasakan Anak</label>
                <textarea rows="5" class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline placeholder:text-sm" id="keluhan_fisik" type="text" placeholder="Keluhan lain yang sering dirasakan oleh anak" name="physical"><?= $profile['sth_physical_complaint']; ?></textarea>
            </div>
        </div>
        <h2 class="text-gray-700 text-base sm:text-md md:text-xl font-bold justify-center items-center mt-10 mb-5">B.III. Pertanyaan Kesehatan Anak</h2>
        <div class="w-full bg-white shadow-sm py-5 px-3 rounded-xl">
            <div class="flex flex-col gap-5 items-start">
                <div class="w-full  py-2 px-3 ">
                    <label class="block text-gray-700 text-sm sm:text-base md:text-md font-bold mb-2" for="riwayat_terapi">Riwayat Terapi</label>
                    <textarea rows="5" class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline placeholder:text-sm" id="riwayat_terapi" type="text" placeholder="Masukan Riwayat Terapi jika tidak pernah kosongkan saja" name="therapy"><?= $profile['sth_therapy_history']; ?></textarea>
                </div>
                <div class="w-full  py-2 px-3 ">
                    <label class="block text-gray-700 text-sm sm:text-base md:text-md font-bold mb-2" for="dirawat_rumah_sakit">Pernah di Rawat di Rumah Sakit? Jika Ya, Jelaskan</label>
                    <textarea rows="5" class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline placeholder:text-sm" id="dirawat_rumah_sakit" type="text" placeholder="Jika pernah di rawat isi dan jelaskan kalo tidak pernah kosongkan saja" name="hospital"><?= $profile['sth_hospitalized']; ?></textarea>
                </div>
                <div class="w-full  py-2 px-3 ">
                    <label class="block text-gray-700 text-sm sm:text-base md:text-md font-bold mb-2" for="hal_penting_tentang_anak">Hal Penting Yang Menurut Orang Tua Perlu Diketahui Pihak Pesantren/SMP Plus/SMA Mengenai Perkembangan Anak</label>
                    <textarea rows="5" class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline placeholder:text-sm" id="hal_penting_tentang_anak" type="text" placeholder="jika tidak ada kosongkan saja" name="important_massage"><?= $profile['sth_important_massage']; ?></textarea>
                </div>
            </div>
        </div>
        <div class="flex gap-5 flex-col lg:flex-row my-5">
            <div class="w-full bg-white shadow-sm py-7 px-3 rounded-xl">
                <button class="bg-dark-font text-white rounded-xl py-3 w-full text-xl font-semibold" data-sitekey="6LeyygIoAAAAAIyvclei-owI7kikOO7PDObEpK74" data-callback='onSubmit' data-action='submit' type="submit">kirim</button>
            </div>
        </div>
</div>
</div>
</form>
</div>