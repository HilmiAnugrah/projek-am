<?php

$db = new Database();
$programQuery = "SELECT lvl_id, lvl_name
                FROM levels";
$db->query($programQuery);
$db->execute();
$program = $db->resultSet();

$extracurricularQuery = "SELECT atv_id, atv_name
                        FROM activity";
$db->query($extracurricularQuery);
$db->execute();
$extracurricular = $db->resultSet();
?>

<section class="mx-auto w-[90%] lg:w-[60%] px-0 sm:px-5 py-[50px] sm:py-[50px]" id="pendaftaran">
    <div class="heading">
        <h2 class="text-lg md:text-lg lg:text-5xl font-bold text-center text-dark-font">Lengkapi Formulir dibawah ini</h2>
    </div>
    <!-- form pendaftaran -->
    <div class="text-dark-font my-12">
        <form action="konfirmasi-pendaftaran" method="post" class="flex flex-col" id="form-ppdb" enctype="multipart/form-data">
            <!-- email -->
            <div class="flex flex-col sm:flex-row gap-7 lg:gap-5 ">
                <div class="flex flex-col w-full sm:w-1/2">
                    <label for="name" class="text-base sm:text-md lg:text-2xl font-bold ml-3 mb-1">Nama Lengkap</label>
                    <input type="text" name="nama" id="name" class="focus:bg-white py-4 px-4 sm:py-5 sm:px-5 rounded-xl outline-dark-font border-1 text-sm sm:text-lg md:text-xl font-semibold placeholder:text-sm sm:placeholder:text-base" placeholder="contoh: Bacharuddin Jusuf Habibie">
                </div>
                <div class="flex flex-col w-full sm:w-1/2 ">
                    <label for="email" class="text-base sm:text-md lg:text-2xl font-bold ml-3 mb-1">Email</label>
                    <input type="email" name="email" id="email" class="py-4 px-4 sm:py-5 sm:px-5 rounded-xl outline-dark-font border-1 text-sm sm:text-lg md:text-xl font-semibold placeholder:text-sm sm:placeholder:text-base " placeholder="contoh: bacharuddin@gmail.com">
                </div>
            </div>
            <div class="flex flex-col w-full sm:w-full mt-7">
                <label for="alamat" class="text-base sm:text-md lg:text-2xl font-bold ml-3 mb-1">Alamat Lengkap</label>
                <input type="text" name="alamat" id="alamat" class="py-4 px-4 sm:py-5 sm:px-5 rounded-xl outline-dark-font border-1 text-sm sm:text-lg md:text-xl font-semibold placeholder:text-sm sm:placeholder:text-base" placeholder="Jl. Arcamanik, Sindanglaya, Kec. Cimenyan, Kota Bandung, Jawa Barat 40195">
            </div>
            <!-- Jenis Kelamin -->
            <div class="flex flex-col w-full sm:w-full mt-7 gap-2">
                <h3 class="text-lg font-bold sm:text-2xl py-1 sm:py-2 ml-3 ">Jenis Kelamin</h3>
                <div>
                    <input type="radio" name="jenis-kelamin" id="laki-laki" class="">
                    <label for="laki-laki" class="text-base sm:text-md lg:text-2xl ml-3 mb-1">Laki laki</label>
                </div>
                <div>
                    <input type="radio" name="jenis-kelamin" id="perempuan" class="">
                    <label for="perempuan" class="text-base sm:text-md lg:text-2xl ml-3 mb-1">Perempuan</label>
                </div>
            </div>
            <!-- radio button -->
            <div class="flex flex-col w-full sm:w-full mt-7 gap-2">
                <h3 class="text-lg font-bold sm:text-2xl py-1 sm:py-2 ml-3 ">Program Yang Akan di Pilih</h3>
                <?php foreach ($program as $p) : ?>
                    <div>
                        <input type="radio" name="program" id="<?= $p['lvl_name']; ?>" class="" value="<?= $p['lvl_id']; ?>">
                        <label for="<?= $p['lvl_name']; ?>" class="text-base sm:text-md lg:text-2xl ml-3 mb-1"><?= explode(' ', $p['lvl_name'])[0]; ?></label>
                    </div>
                <?php endforeach; ?>
            </div>
            <!-- asal sekolah -->
            <div class="flex flex-col w-full sm:w-full mt-7">
                <label for="asal-sekolah" class="text-base sm:text-md lg:text-2xl font-bold ml-3 mb-1">Asal Sekolah</label>
                <input type="text" name="asal-sekolah" id="asal-sekolah" class="py-4 px-4 sm:py-5 sm:px-5 rounded-xl outline-dark-font border-1 text-sm sm:text-lg md:text-xl font-semibold placeholder:text-sm sm:placeholder:text-base" placeholder="SD / SMP / sederajat. contoh: SMPN 30 Bandung">
            </div>
            <!-- whatsapp dan ekstrakurikuler -->
            <div class="flex flex-col sm:flex-row gap-7 lg:gap-5 mt-7 ">
                <div class="flex flex-col w-full sm:w-1/2">
                    <label for="whatsapp" class="text-base sm:text-md lg:text-2xl font-bold ml-3 mb-1">WhatsApp Aktif</label>
                    <input type="text" name="whatsapp" id="whatsapp" class="py-4 px-4 sm:py-5 sm:px-5 rounded-xl outline-dark-font border-1 text-sm sm:text-lg md:text-xl font-semibold placeholder:text-sm sm:placeholder:text-base" placeholder="contoh: 62895708114777">
                </div>
                <div class="flex flex-col w-full sm:w-1/2 ">
                    <label for="ekstrakurikuler" class="text-base sm:text-md lg:text-2xl font-bold ml-3 mb-1">Ekstrakurikuler</label>
                    <select name="ekstrakurikuler" id="ekstrakurikuler" class="!py-4 sm:!py-6 px-2 rounded-xl text-xl font-semibold">
                        <option value="" selected disabled class="font-medium">Pilih Ekstrakurikuler</option>
                        <?php foreach ($extracurricular as $e) : ?>
                            <option value="<?= $e['atv_id']; ?>" class="font-medium"><?= $e['atv_name']; ?></option>
                        <?php endforeach; ?>
                    </select>
                </div>
            </div>
            <!-- reCAPTCHA V3 -->
            <input type="hidden" name="submit_frm" value="1">
            <!-- question and hcaptcha -->
            <div class="flex flex-col w-full mt-7">
                <label for="question" class="text-base sm:text-md lg:text-2xl font-bold ml-3 mb-1">Tau Dari Mana Pesantren?</label>
                <div class="flex flex-col sm:flex-row justify-between gap-5">
                    <select name="question" id="question" class="flex-1 !py-4 sm:!py-6 px-2 rounded-xl text-xl font-semibold">
                        <option value="" selected disabled class="font-medium">pilih opsi</option>
                        <option value="google" class="font-medium">Google</option>
                        <option value="instagram" class="font-medium">Instagram</option>
                        <option value="youtube" class="font-medium">Youtube</option>
                        <option value="tiktok" class="font-medium">Tiktok</option>
                        <option value="facebook" class="font-medium">Facebook</option>
                        <option value="brosur" class="font-medium">Brosur</option>
                        <option value="sekolah" class="font-medium">Sekolah</option>
                        <option value="teman" class="font-medium">Teman</option>
                        <option value="ustadz/ustadzah" class="font-medium">Ustadz/Ustadzah</option>
                        <option value="Lainnya" class="font-medium">Lainnya</option>
                    </select>
                    <div class="g-recaptcha" data-sitekey="6Lev3tknAAAAACrJcIDEXV1JN0CraS9vJmyHRBx6"></div>
                </div>
            </div>
            <div class="w-full bg-white shadow-sm py-5 px-3 rounded-xl mt-7">
                <label class="block text-gray-700 text-sm sm:text-base md:text-md font-bold mb-2" for="upload_profile">Upload Pas Photo 3x4 Latar Merah</label>
                <input name="img-profile" class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="upload_profile" type="file">
                <p class="mt-1 text-sm text-gray-500 dark:text-gray-300" id="upload_profile">Pas Photo Ukuran 3x4 Latar Merah Format document JPEG, PNG or JPG (MAX. 10MB).</p>
            </div>
            <button data-sitekey="6LeyygIoAAAAAIyvclei-owI7kikOO7PDObEpK74" data-callback='onSubmit' data-action='submit' type="submit" name="daftar" class="g-recaptcha w-full h-16 mt-10 sm:mt-12 text-md sm:text-xl md:text-2xl text-body font-bold mx-auto bg-dark-font rounded-xl">kirim</button>
        </form>
        <?php if (!empty($statusMsg)) { ?>
            <p class="status-msg <?php echo $status; ?>"><?php echo $statusMsg; ?></p>
        <?php } ?>
    </div>
</section>