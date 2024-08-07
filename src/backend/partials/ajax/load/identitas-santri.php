<?php
require "../../../functions/functions.php";
$db = new Database();
$query = "SELECT users.std_id,
                    std_full_name,
                    std_img,
                    std_email,
                    std_whatsapp,
                    std_nickname,
                    std_birth_place,
                    std_birthdate,
                    std_language_home,
                    std_child_of,
                    std_number_sibling,
                    std_school_from,
                    std_home_no_telp,
                    str_address,
                    str_postal_code,
                    str_urban_village,
                    str_sub_district,
                    str_distance_ponpes_am,
                    prg_name,
                    glb_name,
                    prd_name,
                    gnr_id,
                    usr_id,
                    program.prg_id AS prg_id
            FROM users
            LEFT JOIN students on users.std_id = students.std_id
            LEFT JOIN student_residence on student_residence.std_id = students.std_id
            LEFT JOIN program on students.prg_id = program.prg_id
            LEFT JOIN gelombang on students.glb_id = gelombang.glb_id
            LEFT JOIN periode on gelombang.prd_id = periode.prd_id
            WHERE usr_id = :id";
$db->query($query);
$db->bind('id', $_SESSION['id']);
$db->execute();
$profile = $db->single();
//program study santri
if($profile['prg_id'] === 1){
    $program = "SMP";
}else if($profile['prg_id'] === 2){
    $program = "SMA";
} 

// gender 
if($profile['gnr_id'] === 1){
    $genders = "PA";
}else if($profile['gnr_id'] === 2){
    $genders = "PI";
}

$noTest = $profile['std_id'];
?>
<div class="mb-10">
    <h1 class="text-sm md:text-lg font-bold text-dark-font">Assalamu'alaikum, <?= $profile['std_full_name']; ?> </h1>
    <p class="text-sm md:text-lg">Silahkan Lengkapi Formulir Pendaftaran Kamu yuk, dibawah Ini.</p>
    <h2 class="mt-5 text-sm md:text-lg font-bold text-dark-font">A. DATA ANAK</h2>
</div>
<form action="<?= baseUrl('src/backend/partials/dashboard/profile-santri/identitas-santri.php'); ?>" method="post" id="identitas-santri-am" enctype="multipart/form-data">
    <input type="hidden" name="id" value="<?= $profile['std_id']; ?>">
    <div class="bg-white p-5 rounded-xl shadow-sm flex flex-col lg:flex-row lg:items-start gap-5">
        <div class="flex flex-col lg:flex-row gap-5 items-start">
            <div class="w-[90%]">
                <div class="flex flex-col lg:flex-row gap-10 ">
                    <div class="w-[200px] h-[250px] overflow-hidden">
                        <img src="<?= baseUrl("src/img/uploaded/person/") ?><?= !is_null($profile['std_img']) ? $profile['std_img'] : 'user.png'; ?>" alt="<?= explode(" ", $profile['std_full_name'])[0]; ?>" class="bg-cover bg-[center_100%]">
                    </div>
                    <div>
                        <label class="block text-gray-700 text-sm sm:text-sm md:text-base font-bold mb-2" for="edit_profile">Ganti Foto</label>
                        <input type="hidden" name="oldImg" value="<?= $profile['std_img']; ?>">
                        <input class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="edit_profile" type="file" accept="image/png, image/jpeg" name="newImg">
                        <p class="mt-1 text-sm text-gray-500 dark:text-gray-300" id="file_input_help">Latar Merah 3x4 JPEG, PNG or JPG (MAX. 10MB).</p>
                    </div>
                </div>
                <div class="flex flex-col lg:flex-row items-start gap-5 mt-5">
                    <div class="flex flex-col items-start">
                        <div class="">
                            <label for="nama_santri" class=" text-gray-700 text-xs sm:text-sm md:text-base font-bold mb-2">Nama Lengkap :</label>
                            <span id="nama_santri" class="text-xs sm:text-sm "><?= $profile['std_full_name']; ?></span>
                        </div>
                        <div>
                            <label for="email_santri" class="text-gray-700 text-xs sm:text-sm md:text-base font-bold mb-2">Email :</label>
                            <span class="text-xs sm:text-sm "><?= $profile['std_email']; ?></span>
                        </div>
                    </div>
                    <div>
                        <div>
                            <label for="program" class="text-gray-700 text-xs sm:text-sm md:text-base font-bold mb-2">Program :</label>
                            <span class="text-xs sm:text-sm "><?= $program; ?></span>
                        </div>
                        <div>
                            <label for="whatsapp_data" class="text-gray-700 text-xs sm:text-sm md:text-base font-bold mb-2">WhatsApp :</label>
                            <span class="text-xs sm:text-sm"><?= preg_replace('/628/', '08', $profile['std_whatsapp'], 1); ?></span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex flex-col items-start w-[90%] gap-2">
                <div>
                    <h2 class="text-gray-700 text-xs sm:text-sm md:text-base font-bold">Status Santri:</h2>
                    <p class="font-medium text-xs sm:text-sm">Santri Al 'Ashr Al Madani Tahun <?= $profile['prd_name'] . '/' . $profile['prd_name'] + 1; ?></p>
                </div>
                <div class="flex flex-col items-start">
                    <span class="text-gray-700 text-xs sm:text-sm md:text-base font-bold">No. Peserta Test : <span class="font-medium text-xs sm:text-sm"><?= $program; ?>.<?=$genders;?>.<?= $profile['glb_name']; ?>-<?= $profile['prd_name'] . '/' . $profile['prd_name'] + 1; ?>.<?=$noTest;?></span></span>
                    <span class="text-gray-700 text-xs sm:text-sm md:text-base font-bold">Alamat : <span class="font-medium text-xs sm:text-sm"><?= $profile['str_address']; ?>
                </div>
            </div>
        </div>
    </div>

    <div class="pb-16">
        <div class="flex flex-col lg:flex-row gap-5 my-5">
            <div class="w-full lg:w-1/2 bg-white shadow-sm py-5 px-3 rounded-xl">
                <label class="block text-gray-700 text-sm sm:text-base md:text-md font-bold mb-2" for="nama_lengkap">Nama Lengkap<span class="text-main-red">*</span></label>
                <input class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="nama_lengkap" type="text" placeholder="Masukkan Nama Lengkap" name="full_name" value="<?= $profile['std_full_name']; ?>" required>
            </div>
            <div class="w-full lg:w-1/2 bg-white shadow-sm py-5 px-3 rounded-xl">
                <label class="block text-gray-700 text-sm sm:text-base md:text-md font-bold mb-2" for="nama_panggilan">Nama Panggilan<span class="text-main-red">*</span></label>
                <input class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="nama_panggilan" type="text" placeholder="Masukkan Nama Panggilan" name="nickname" value="<?= $profile['std_nickname']; ?>" required>
            </div>
        </div>
        <div class="flex gap-5 flex-col lg:flex-row my-5">
            <div class="w-full lg:w-1/2 bg-white shadow-sm py-5 px-3 rounded-xl">
                <label class="block text-gray-700 text-sm sm:text-base md:text-md font-bold mb-2" for="tgl">Tempat Lahir<span class="text-main-red">*</span></label>
                <input class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="tgl" type="text" placeholder="contoh: Bandung" name="birth_place" value="<?= $profile['std_birth_place']; ?>" required>
            </div>
            <div class="w-full lg:w-1/2 bg-white shadow-sm py-5 px-3 rounded-xl">
                <label class="block text-gray-700 text-sm sm:text-base md:text-md font-bold mb-2" for="tanggal_lahir">Tanggal Lahir<span class="text-main-red">*</span></label>
                <input class="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="tanggal_lahir" type="date" name="birthdate" value="<?= $profile['std_birthdate']; ?>" required>
            </div>

        </div>
        <div class="flex gap-5 flex-col lg:flex-row my-5">
            <div class="w-full lg:w-1/2 bg-white shadow-sm py-5 px-3 rounded-xl">
                <label class="block text-gray-700 text-sm sm:text-base md:text-md font-bold mb-2" for="alamat_rumah">Alamat Rumah<span class="text-main-red">*</span></label>
                <input class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline placeholder:text-sm" id="alamat_rumah" type="text" placeholder="Jl. Kenangan, No.30 RT02 RW07 Margahayu" name="address" value="<?= $profile['str_address']; ?>" required>
            </div>
            <div class="w-full lg:w-1/2 bg-white shadow-sm py-5 px-3 rounded-xl">
                <label class="block text-gray-700 text-sm sm:text-base md:text-md font-bold mb-2" for="kode_pos">Kode Pos<span class="text-main-red">*</span></label>
                <input class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline placeholder:text-sm" id="kode_pos" type="text" placeholder="Masukkan Kode Pos" name="postal_code" value="<?= $profile['str_postal_code']; ?>" required>
            </div>
        </div>
        <div class="flex gap-5 flex-col lg:flex-row my-5">
            <div class="w-full lg:w-1/2 bg-white shadow-sm py-5 px-3 rounded-xl">
                <label class="block text-gray-700 text-sm sm:text-base md:text-md font-bold mb-2" for="whatsapp">WhatsApp Aktif<span class="text-main-red">*</span></label>
                <input class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline placeholder:text-sm" id="whatsapp" type="text" placeholder="contoh : 628953888352" name="whatsapp" value="<?= $profile['std_whatsapp']; ?>" required>
            </div>
            <div class="w-full lg:w-1/2 bg-white shadow-sm py-5 px-3 rounded-xl">
                <label class="block text-gray-700 text-sm sm:text-base md:text-md font-bold mb-2" for="no_telepon">No Telepon</label>
                <input class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline placeholder:text-sm" id="no_telepon" type="number" placeholder="Masukkan Nomor telepon" name="std_home_no_telp" value="<?= $profile['std_home_no_telp']; ?>">
            </div>
        </div>
        <div class="flex gap-5 flex-col lg:flex-row my-5">
        <div class="w-full lg:w-1/2 bg-white shadow-sm py-5 px-3 rounded-xl">
                <label class="block text-gray-700 text-sm sm:text-base md:text-md font-bold mb-2" for="kelularahan">kelurahan<span class="text-main-red">*</span></label>
                <input class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline placeholder:text-sm" id="kelularahan" type="text" placeholder="Masukkan Nama Kelurahan" name="urban_village" value="<?= $profile['str_urban_village']; ?>" required>
            </div>
            <div class="w-full lg:w-1/2 bg-white shadow-sm py-5 px-3 rounded-xl">
                <label class="block text-gray-700 text-sm sm:text-base md:text-md font-bold mb-2" for="kecamatan">Kecamatan<span class="text-main-red">*</span></label>
                <input class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline placeholder:text-sm" id="kecamatan" type="text" placeholder="Masukan Nama Kecamatan" name="sub_district" value="<?= $profile['str_sub_district']; ?>" required>
            </div>
           
        </div>
        
        <div class="flex gap-5 flex-col lg:flex-row my-5">
            <div class="w-full lg:w-1/2 bg-white shadow-sm py-5 px-3 rounded-xl">
                <label class="block text-gray-700 text-sm sm:text-base md:text-md font-bold mb-2" for="jrk_pesantren">Jarak tempuh dari rumah ke pesantren<span class="text-main-red">*</span></label>
                <div class="flex gap-5">
                    <input class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline placeholder:text-sm" id="jrk_pesantren" type="number" placeholder="Masukan Number" name="distance" value="<?= $profile['str_distance_ponpes_am']; ?>" required>
                    <span class="block text-gray-700 text-sm sm:text-base md:text-md font-bold">KM</span>
                </div>
            </div>
            <div class="w-full lg:w-1/2 bg-white shadow-sm py-5 px-3 rounded-xl">
                <label class="block text-gray-700 text-sm sm:text-base md:text-md font-bold mb-2" for="bahasa_sehari_hari">Bahasa Sehari-hari<span class="text-main-red">*</span></label>
                <input class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline placeholder:text-sm" id="bahasa_sehari_hari" type="text" placeholder="Masukan Bahasa Sehari-Hari" name="language" value="<?= $profile['std_language_home']; ?>" required>
            </div>
           
        </div>
        <div class="flex gap-5 flex-col lg:flex-row my-5">
        <div class="w-full lg:w-1/2 bg-white shadow-sm py-5 px-3 rounded-xl">
                <div class="flex items-end gap-5">
                    <div class="flex flex-col gap-2 items-start">
                        <label for="anak_ke" class="block text-gray-700 text-sm sm:text-base md:text-md font-bold">Anak Ke<span class="text-main-red">*</span></label>
                        <input class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline placeholder:text-sm" id="anak_ke" type="number" placeholder="Masukan Number" max="100" name="child_of" value="<?= $profile['std_child_of']; ?>" required>
                    </div>
                    <label class="block text-gray-700 text-sm sm:text-base md:text-md font-bold" for="dari">dari</label>
                    <div class="flex flex-col gap-2 items-start">
                        <label class=" text-gray-700 text-sm sm:text-base md:text-md font-bold justify-center items-center" for="dari">Bersaudara<span class="text-main-red">*</span></label>
                        <input class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline placeholder:text-sm " id="dari" type="number" placeholder="Masukkan Number" max="100" name="number_sibling" value="<?= $profile['std_number_sibling']; ?>" required>
                    </div>
                </div>
            </div>
            <div class="w-full lg:w-1/2 bg-white shadow-sm py-5 px-3 rounded-xl">
                <label class="block text-gray-700 text-sm sm:text-base md:text-md font-bold mb-2" for="asal-sekolah">Asal Sekolah<span class="text-main-red">*</span></label>
                <input class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline placeholder:text-sm" id="asal-sekolah" type="text" placeholder="Masukan Nama Asal Sekolah" name="school_from" value="<?= $profile['std_school_from']; ?>" required>
            </div>
           
        </div>
        <div class="w-full bg-white shadow-sm py-7 px-3 rounded-xl">
                <button class="bg-dark-font text-white rounded-xl py-3 w-full text-xl font-semibold" data-sitekey="6LeyygIoAAAAAIyvclei-owI7kikOO7PDObEpK74" data-callback='onSubmit' data-action='submit' type="submit">kirim</button>
            </div>
    </div>

</form>
</div>