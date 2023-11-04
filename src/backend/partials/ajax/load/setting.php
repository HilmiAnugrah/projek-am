<?php
require "../../../functions/functions.php";
$roles = $_SESSION['roles'];

$db = new Database();
$query = "SELECT usr_password";

if ($roles === 'Student') {
    $query .= ", std_full_name as full_name,
                std_img as img, 
                prg_name";
}

$query .= " FROM users
            LEFT JOIN students on users.std_id = students.std_id
            LEFT JOIN parents on users.prt_id = parents.prt_id
            LEFT JOIN program on users.prg_id = program.prg_id
            WHERE usr_id = :id";
$db->query($query);
$db->bind('id', $_SESSION['id']);
$db->execute();
$profile = $db->single();
?>
<div class="w-full lg:w-1/2 mx-auto">
    <div class="pb-16">
        <form action="<?= baseUrl('src/backend/partials/dashboard/setting/changePassword.php'); ?>" method="post" id="identitas-santri-am">
            <div class="flex flex-col lg:flex-row py-3 px-3 items-center my-5 bg-white shadow-sm rounded-xl gap-5">
                <div class="w-[150px] h-[200px] overflow-hidden">
                    <img src="<?= baseUrl("src/img/uploaded/person/") ?><?= isset($profile['img']) ? $profile['img'] : 'user.png'; ?>" alt="<?= isset($profile['full_name']) ? $profile['full_name'] : 'Admin'; ?>" class="bg-cover bg-[center_100%]">
                </div>
                <div class="text-base font-semibold text-dark-font ">
                    <p>Nama : <?= isset($profile['full_name']) ? $profile['full_name'] : 'Admin'; ?></p>
                    <p>Program : <?= isset($profile['prg_name']) ? $profile['prg_name'] : '-'; ?></p>
                </div>
            </div>
            <div class="flex flex-col py-3 items-start my-5 bg-white shadow-sm rounded-xl">
                <div class="flex gap-2 flex-col w-full">
                    <?php if (!is_null($profile['usr_password'])) : ?>
                        <div class="w-full  py-2 px-3">
                            <label class="block text-gray-700 text-sm sm:text-base md:text-md font-bold mb-2" for="password-lama">Password Lama</label>
                            <input class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline placeholder:text-sm" id="password-lama" name="password" type="password" placeholder="Masukan Password Lama">
                        </div>
                    <?php endif ?>
                    <div class="w-full  py-2 px-3 ">
                        <label class="block text-gray-700 text-sm sm:text-base md:text-md font-bold mb-2" for="password-baru">Password Baru</label>
                        <input class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline placeholder:text-sm" id="password-baru" name="newPassword" type="password" placeholder="Masukan Password Baru">
                    </div>
                    <div class="w-full  py-2 px-3 ">
                        <label class="block text-gray-700 text-sm sm:text-base md:text-md font-bold mb-2" for="konfirmasi-password-baru">Konfirmasi Password Baru</label>
                        <input class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline placeholder:text-sm" id="konfirmasi-password-baru" name="newPassword2" type="password" placeholder="Masukan Password Baru">
                    </div>
                </div>
            </div>
            <div class="flex gap-5 flex-col lg:flex-row my-5">
                <div class="w-full bg-white shadow-sm py-7 px-3 rounded-xl">
                    <button class="bg-dark-font text-white rounded-xl py-3 w-full text-xl font-semibold" type="submit">kirim</button>
                </div>
            </div>
    </div>
</div>
</form>
</div>
</div>