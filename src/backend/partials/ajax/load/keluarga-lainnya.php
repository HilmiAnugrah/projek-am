<?php
require "../../../functions/functions.php";
$db = new Database();
$query = "SELECT users.std_id,
                    parents.prt_id,
                    prt_full_name,
                    prt_tribes,
                    prt_birth_place,
                    prt_birthdate,
                    prt_home_address,
                    prt_postal_code,
                    prt_email,
                    prt_no_hp,
                    prt_home_no_telp,
                    prt_married_at_age,
                    prt_married_number,
                    prt_smp,
                    prt_sma,
                    prt_university,
                    prt_faculty,
                    prt_major,
                    prt_job,
                    prt_job_position,
                    prt_office_address,
                    prt_office_no_telp,
                    prt_relationship,
                    prw_id,
                    mrs_id
            FROM users
            LEFT JOIN parents ON users.std_id = parents.std_id
            LEFT JOIN parents_roles ON parents.prr_id = parents_roles.prr_id
            WHERE usr_id = :id AND prr_name = :role";
$db->query($query);
$db->bind('id', $_SESSION['id']);
$db->bind('role', 'Others');
$db->execute();
$profile = $db->single();

$query = "SELECT std_id
            FROM users
            WHERE usr_id = :id";
$db->query($query);
$db->bind('id', $_SESSION['id']);
$db->execute();
$std = $db->single();
?>
<div id="data-santri">
    <h1 class="text-xl font-bold text-dark-font">F. Keluarga Lainnya</h1>
    <p>Apakah ada orang lain atau keluarga yang tinggal di rumah? Siapa? Apa hubungannya dengan siswa/santri?</p>
</div>
<div class="pb-16">
    <form action="<?= baseUrl('src/backend/partials/dashboard/profile-santri/identitas-parent.php'); ?>" method="post" id="identitas-santri-am">
        <input type="hidden" value="<?= isset($profile['prt_id']) ? $profile['prt_id'] : ''; ?>" name="id">
        <input type="hidden" value="<?= $std['std_id']; ?>" name="std_id">
        <input type="hidden" value="4" name="roles">
        <div class="flex flex-col lg:flex-row gap-5 my-5">
            <div class="w-full lg:w-1/2 bg-white shadow-sm py-5 px-3 rounded-xl">
                <label class="block text-gray-700 text-sm sm:text-base md:text-md font-bold mb-2" for="nama_lengkap">Nama Lengkap<span class="text-main-red">*</span></label>
                <input class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="nama_lengkap" type="text" placeholder="Masukkan Nama Lengkap" value="<?= isset($profile['prt_full_name']) ? $profile['prt_full_name'] : ''; ?>" name="full_name" required>
            </div>
            <div class="w-full lg:w-1/2 bg-white shadow-sm py-5 px-3 rounded-xl">
                <label class="block text-gray-700 text-sm sm:text-base md:text-md font-bold mb-2" for="suku_bangsa">Hubungan<span class="text-main-red">*</span></label>
                <input class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="suku_bangsa" type="text" placeholder="Hubungan Dengan Anak" value="<?= isset($profile['prt_relationship']) ? $profile['prt_relationship'] : ''; ?>" name="relation" required>
            </div>
        </div>
        <div class="flex gap-5 flex-col lg:flex-row my-5">

            <div class="w-full lg:w-1/2 bg-white shadow-sm py-5 px-3 rounded-xl">
                <label class="block text-gray-700 text-sm sm:text-base md:text-md font-bold mb-2" for="alamat_rumah">Alamat<span class="text-main-red">*</span></label>
                <input class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline placeholder:text-sm" id="alamat_rumah" type="text" placeholder="Jl. Kenangan, No.30 RT02 RW07 Margahayu" value="<?= isset($profile['prt_home_address']) ? $profile['prt_home_address'] : ''; ?>" name="home_address" required>
            </div>
            <div class="w-full lg:w-1/2 bg-white shadow-sm py-5 px-3 rounded-xl">
                <label class="block text-gray-700 text-sm sm:text-base md:text-md font-bold mb-2" for="whatsApp">WhatsApp<span class="text-main-red">*</span></label>
                <input class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline placeholder:text-sm" id="whatsApp" type="text" placeholder="contoh : 6249330294838" value="<?= isset($profile['prt_no_hp']) ? $profile['prt_no_hp'] : ''; ?>" name="no_hp" required>
            </div>

        </div>
        <div class="flex gap-5 flex-col lg:flex-row my-5">
            <div class="w-full lg:w-1/2 bg-white shadow-sm py-5 px-3 rounded-xl">
                <label class="block text-gray-700 text-sm sm:text-base md:text-md font-bold mb-2" for="telepon_rumah">Telepon Rumah </label>
                <input class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline placeholder:text-sm" id="telepon_rumah" type="text" placeholder="022678378427" value="<?= isset($profile['prt_home_no_telp']) ? $profile['prt_home_no_telp'] : ''; ?>" name="home_no_telp">
            </div>
            <div class="w-full lg:w-1/2 bg-white shadow-sm py-7 px-3 rounded-xl">
                <button class="bg-dark-font text-white rounded-xl py-3 w-full text-xl font-semibold" type="submit">Kirim</button>
            </div>
        </div>
        <input type="hidden" name="tribes">
        <input type="hidden" name="birth_place">
        <input type="hidden" name="birthdate">
        <input type="hidden" name="postal_code">
        <input type="hidden" name="email">
        <input type="hidden" name="married_status">
        <input type="hidden" name="married_at_age">
        <input type="hidden" name="married_number">
        <input type="hidden" name="smp">
        <input type="hidden" name="sma">
        <input type="hidden" name="university">
        <input type="hidden" name="faculty">
        <input type="hidden" name="major">
        <input type="hidden" name="job">
        <input type="hidden" name="job_position">
        <input type="hidden" name="office_address">
        <input type="hidden" name="office_no_telp">
        <input type="hidden" name="wages">
    </form>
</div>