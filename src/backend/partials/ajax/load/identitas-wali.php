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
$db->bind('role', 'Wali');
$db->execute();
$profile = $db->single();

$query = "SELECT std_id
            FROM users
            WHERE usr_id = :id";
$db->query($query);
$db->bind('id', $_SESSION['id']);
$db->execute();
$std = $db->single();

$query = "SELECT mrs_id,
                    mrs_name
            FROM married_status";
$db->query($query);
$db->execute();
$married = $db->resultSet();

$query = "SELECT prw_id,
                    prw_name
            FROM parents_wages";
$db->query($query);
$db->execute();
$wages = $db->resultSet();

$relation = ['Kakek', 'Nenek', 'Paman', 'Bibi', 'Ayah Sambung', 'Ibu Sambung', 'Kakak Kandung', 'Kakak Sambung', 'Orang Tua Asuh'];
?>
<div class="mb-10">
    <h1 class="text-lg font-bold text-dark-font">E. DATA WALI </h1>
    <p class="text-lg">Silahkan Lengkapi Data Wali Kamu dibawah Ini.</p>
</div>

<div class="pb-16">
    <form action="<?= baseUrl('src/backend/partials/dashboard/profile-santri/identitas-parent.php'); ?>" method="post" id="identitas-santri-am">
        <input type="hidden" value="<?= isset($profile['prt_id']) ? $profile['prt_id'] : ''; ?>" name="id">
        <input type="hidden" value="<?= $std['std_id']; ?>" name="std_id">
        <input type="hidden" value="3" name="roles">
        <div class="flex flex-col lg:flex-row gap-5 my-5">
            <div class="w-full lg:w-1/2 bg-white shadow-sm py-5 px-3 rounded-xl">
                <label class="block text-gray-700 text-sm sm:text-base md:text-md font-bold mb-2" for="nama_lengkap">Nama Lengkap<span class="text-main-red">*</span></label>
                <input class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="nama_lengkap" type="text" placeholder="Masukkan Nama Lengkap" value="<?= isset($profile['prt_full_name']) ? $profile['prt_full_name'] : ''; ?>" name="full_name" required>
            </div>
            <div class="w-full lg:w-1/2 bg-white shadow-sm py-5 px-3 rounded-xl">
                <label class="block text-gray-700 text-sm sm:text-base md:text-md font-bold mb-2" for="suku_bangsa">Suku Bangsa</label>
                <input class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="suku_bangsa" type="text" placeholder="Masukkan Suku" value="<?= isset($profile['prt_tribes']) ? $profile['prt_tribes'] : ''; ?>" name="tribes" required>
            </div>
        </div>
        <div class="flex gap-5 flex-col lg:flex-row my-5">
            <div class="w-full lg:w-1/2 bg-white shadow-sm py-5 px-3 rounded-xl">
                <label class="block text-gray-700 text-sm sm:text-base md:text-md font-bold mb-2" for="tgl">Tempat Lahir</label>
                <input class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="tgl" type="text" placeholder="contoh: Bandung" value="<?= isset($profile['prt_birth_place']) ? $profile['prt_birth_place'] : ''; ?>" name="birth_place" required>
            </div>
            <div class="w-full lg:w-1/2 bg-white shadow-sm py-5 px-3 rounded-xl">
                <label class="block text-gray-700 text-sm sm:text-base md:text-md font-bold mb-2" for="tanggal_lahir">Tanggal Lahir</label>
                <input class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="tanggal_lahir" type="date" value="<?= isset($profile['prt_birthdate']) ? $profile['prt_birthdate'] : ''; ?>" name="birthdate" required>
            </div>
        </div>
        <div class="flex gap-5 flex-col lg:flex-row my-5">
            <div class="w-full lg:w-1/2 bg-white shadow-sm py-5 px-3 rounded-xl">
                <label class="block text-gray-700 text-sm sm:text-base md:text-md font-bold mb-2" for="alamat_rumah">Alamat Rumah<span class="text-main-red">*</span></label>
                <input class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline placeholder:text-sm" id="alamat_rumah" type="text" placeholder="Jl. Kenangan, No.30 RT02 RW07 Margahayu" value="<?= isset($profile['prt_home_address']) ? $profile['prt_home_address'] : ''; ?>" name="home_address" required>
            </div>
            <div class="w-full lg:w-1/2 bg-white shadow-sm py-5 px-3 rounded-xl">
                <label class="block text-gray-700 text-sm sm:text-base md:text-md font-bold mb-2" for="kode_pos">Kode Pos<span class="text-main-red">*</span></label>
                <input class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline placeholder:text-sm" id="kode_pos" type="text" placeholder="Masukkan Kode Pos" value="<?= isset($profile['prt_postal_code']) ? $profile['prt_postal_code'] : ''; ?>" name="postal_code" required>
            </div>
        </div>
        <h2 class="text-gray-700 text-base sm:text-md md:text-xl font-bold justify-center items-center mt-10 mb-5">E.I. Kontak Wali</h2>
        <div class="flex flex-col py-3 items-start my-5 bg-white shadow-sm rounded-xl">
            <div class="w-full py-2 px-3">
                <label class="block text-gray-700 text-sm sm:text-base md:text-md font-bold mb-2" for="email">Email<span class="text-main-red">*</span></label>
                <input class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline placeholder:text-sm" id="email" type="text" placeholder="example@gmail.com" value="<?= isset($profile['prt_email']) ? $profile['prt_email'] : ''; ?>" name="email" required>
            </div>
            <div class="flex gap-2 flex-col lg:flex-row  w-full">
                <div class="w-full  py-2 px-3 ">
                    <label class="block text-gray-700 text-sm sm:text-base md:text-md font-bold mb-2" for="whatsapp">WhatsApp Aktif<span class="text-main-red">*</span></label>
                    <input class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline placeholder:text-sm" id="whatsapp" type="number" placeholder="contoh : 628953888352" value="<?= isset($profile['prt_no_hp']) ? $profile['prt_no_hp'] : ''; ?>" name="no_hp" required>
                </div>
                <div class="w-full  py-2 px-3 ">
                    <label class="block text-gray-700 text-sm sm:text-base md:text-md font-bold mb-2" for="tel_rumah">Telepon Rumah</label>
                    <input class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline placeholder:text-sm" id="tel_rumah" type="number" placeholder="contoh : 2268443322" value="<?= isset($profile['prt_home_no_telp']) ? $profile['prt_home_no_telp'] : ''; ?>" name="home_no_telp">
                </div>
            </div>
        </div>
        <h2 class="text-gray-700 text-base sm:text-md md:text-xl font-bold justify-center items-center mt-10 mb-5">E.II. Status Pernikahan Wali</h2>
        <div class="w-full bg-white shadow-sm py-5 px-3 rounded-xl">
            <div class="flex flex-col gap-5 items-start">
                <div class="flex flex-col gap-2 items-start w-full">
                    <label for="status_pernikahan" class="block text-gray-700 text-sm sm:text-base md:text-md font-bold">Status Pernikahan<span class="text-main-red">*</span></label>
                    <select class="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline placeholder:text-sm" id="status_pernikahan" type="number" placeholder="Masukan Number" max="100" name="married_status" required>
                        <option value="" disabled selected>Pilih</option>
                        <?php foreach ($married as $m) : ?>
                            <option <?= isset($profile['mrs_id']) && $profile['mrs_id'] == $m['mrs_id'] ? "SELECTED" : '' ?> value="<?= $m['mrs_id']; ?>"><?= $m['mrs_name']; ?></option>
                        <?php endforeach ?>
                    </select>
                </div>
                <div class="flex justify-between w-full gap-5">
                    <div class="flex flex-col gap-2 items-start w-full">
                        <label class=" text-gray-700 text-sm sm:text-base md:text-md font-bold justify-center items-center" for="menikah_pada_usia">Menikah Pada Usia</label>
                        <input class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline placeholder:text-sm " id="menikah_pada_usia" type="number" placeholder="Masukkan Number" max="100" value="<?= isset($profile['prt_married_at_age']) ? $profile['prt_married_at_age'] : ''; ?>" name="married_at_age">
                    </div>
                    <div class="flex flex-col gap-2 items-start w-full">
                        <label class=" text-gray-700 text-sm sm:text-base md:text-md font-bold justify-center items-center" for="pernikahan_ke">Pernikahan Ke</label>
                        <input class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline placeholder:text-sm " id="pernikahan_ke" type="number" placeholder="Masukkan Number" max="100" value="<?= isset($profile['prt_married_number']) ? $profile['prt_married_number'] : ''; ?>" name="married_number">
                    </div>
                </div>
            </div>
        </div>
        <h2 class="text-gray-700 text-base sm:text-md md:text-xl font-bold justify-center items-center mt-10 mb-5">E.III. Hubungan Wali Dengan Anak</h2>
        <div class="w-full bg-white shadow-sm py-5 px-3 rounded-xl">
            <div class="flex flex-col gap-5 items-start">
                <div class="flex flex-col gap-2 items-start w-full">
                    <label for="status_wali" class="block text-gray-700 text-sm sm:text-base md:text-md font-bold">Status Wali Dengan Anak<span class="text-main-red">*</span></label>
                    <select class="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline placeholder:text-sm" id="status_wali" type="number" placeholder="Masukan Number" max="100" name="relation" required>
                        <option value="" disabled selected>Pilih</option>
                        <?php foreach ($relation as $r) : ?>
                            <option <?= isset($profile['prt_relationship']) && $profile['prt_relationship'] == $r ? 'SELECTED' : ''; ?> value="<?= $r; ?>"><?= $r; ?></option>
                        <?php endforeach ?>
                    </select>
                </div>
            </div>
        </div>
        <h2 class="text-gray-700 text-base sm:text-md md:text-xl font-bold justify-center items-center mt-10">E.IIII. Riwayat Pendidikan Wali</h2>
        <div class="w-full bg-white shadow-sm py-5 px-3 rounded-xl mt-5">
            <div class="flex flex-col gap-5 items-start">
                <div class="flex flex-col lg:flex-row w-full gap-5">
                    <div class="flex flex-col gap-2 items-start w-full">
                        <label class=" text-gray-700 text-sm sm:text-base md:text-md font-bold justify-center items-center" for="smp">SMP</label>
                        <input class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline placeholder:text-sm " id="smp" type="text" placeholder="Masukan Asal SMP" max="100" value="<?= isset($profile['prt_smp']) ? $profile['prt_smp'] : ''; ?>" name="smp">
                    </div>
                    <div class="flex flex-col gap-2 items-start w-full">
                        <label class=" text-gray-700 text-sm sm:text-base md:text-md font-bold justify-center items-center" for="sma">SMA</label>
                        <input class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline placeholder:text-sm " id="sma" type="text" placeholder="Masukan Asal SMA" max="100" value="<?= isset($profile['prt_sma']) ? $profile['prt_sma'] : ''; ?>" name="sma">
                    </div>
                </div>
                <h2 class="text-gray-700 text-base sm:text-md md:text-xl font-bold justify-center items-center mt-5">A. Riwayat Perguruan Tinggi Wali</h2>
                <div class="flex flex-col lg:flex-row justify-between w-full gap-5">
                    <div class="flex flex-col gap-2 items-start w-full">
                        <label class=" text-gray-700 text-sm sm:text-base md:text-md font-bold justify-center items-center" for="perguruan_tinggi">Nama Perguruan Tinggi</label>
                        <input class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline placeholder:text-sm " id="perguruan_tinggi" type="text" placeholder="Masukan Nama Perguruan Tinggi" max="100" value="<?= isset($profile['prt_university']) ? $profile['prt_university'] : ''; ?>" name="university">
                    </div>
                    <div class="flex flex-col gap-2 items-start w-full">
                        <label class=" text-gray-700 text-sm sm:text-base md:text-md font-bold justify-center items-center" for="fakultas">Fakultas</label>
                        <input class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline placeholder:text-sm" id="fakultas" type="text" placeholder="Masukan Nama Fakultas" max="100" value="<?= isset($profile['prt_faculty']) ? $profile['prt_faculty'] : ''; ?>" name="faculty">
                    </div>
                    <div class="flex flex-col gap-2 items-start w-full">
                        <label class=" text-gray-700 text-sm sm:text-base md:text-md font-bold justify-center items-center" for="jurusan">Jurusan</label>
                        <input class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline placeholder:text-sm " id="jurusan" type="text" placeholder="Masukan Nama Fakultas" max="100" value="<?= isset($profile['prt_major']) ? $profile['prt_major'] : ''; ?>" name="major">
                    </div>
                </div>
            </div>
        </div>
        <h2 class="text-gray-700 text-base sm:text-md md:text-xl font-bold justify-center items-center mt-10">E.IIII. Pekerjaan Wali</h2>
        <div class="w-full bg-white shadow-sm py-5 px-3 rounded-xl mt-5">
            <div class="flex flex-col gap-5 items-start">
                <div class="flex flex-col lg:flex-row w-full gap-5">
                    <div class="flex flex-col gap-2 items-start w-full">
                        <label class=" text-gray-700 text-sm sm:text-base md:text-md font-bold justify-center items-center" for="profesi">Pekerjaan/Profesi</label>
                        <input class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline placeholder:text-sm " id="profesi" type="text" placeholder="Contoh: Arsitek, Dosen, Guru, Ibu Rumah Tanngga dan Lainnya..." max="100" value="<?= isset($profile['prt_job']) ? $profile['prt_job'] : ''; ?>" name="job">
                    </div>
                    <div class="flex flex-col gap-2 items-start w-full">
                        <label class=" text-gray-700 text-sm sm:text-base md:text-md font-bold justify-center items-center" for="jabatan">Jabatan</label>
                        <input class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline placeholder:text-sm " id="jabatan" type="text" placeholder="Jabatan Anda Sebagai" max="100" value="<?= isset($profile['prt_job_position']) ? $profile['prt_job_position'] : ''; ?>" name="job_position">
                    </div>
                </div>
                <div class="flex flex-col justify-between w-full gap-5">
                    <div class="flex flex-col lg:flex-row justify-between w-full gap-5">
                        <div class="flex flex-col gap-2 items-start w-full">
                            <label class=" text-gray-700 text-sm sm:text-base md:text-md font-bold justify-center items-center" for="alamat_kantor">Alamat Kantor</label>
                            <input class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline placeholder:text-sm " id="alamat_kantor" type="text" placeholder="Masukan Alamt Kantor" value="<?= isset($profile['prt_office_address']) ? $profile['prt_office_address'] : ''; ?>" name="office_address">
                        </div>
                        <div class="flex flex-col gap-2 items-start w-full">
                            <label class=" text-gray-700 text-sm sm:text-base md:text-md font-bold justify-center items-center" for="telephone_kantor">Telepon Kantor</label>
                            <input class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline placeholder:text-sm " id="telephone_kantor" type="number" placeholder="Masukan Nomor kantor" value="<?= isset($profile['prt_office_no_telp']) ? $profile['prt_office_no_telp'] : ''; ?>" name="office_no_telp">
                        </div>
                    </div>
                    <div class="flex flex-col gap-2 items-start w-full">
                        <label for="gaji_ayah" class="block text-gray-700 text-sm sm:text-base md:text-md font-bold">Rata Rata Gaji Wali<span class="text-main-red">*</span></label>
                        <select class="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline placeholder:text-sm" id="gaji_ayah" type="number" max="100" name="wages" required>
                            <option value="" disabled selected>Pilih</option>
                            <?php foreach ($wages as $wage) : ?>
                                <option <?= isset($profile['prw_id']) && $profile['prw_id'] == $wage['prw_id'] ? 'SELECTED' : ''; ?> value="<?= $wage['prw_id']; ?>"><?= $wage['prw_name']; ?></option>
                            <?php endforeach ?>
                        </select>
                    </div>
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