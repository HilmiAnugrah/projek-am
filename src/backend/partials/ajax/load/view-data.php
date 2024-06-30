<?php 
require_once "../../backend/functions/functions.php";

?>



<section id="view-data" class=" w-full h-[100vh] fixed top-0 bg-[rgb(0,0,0,0.4)] hidden-data z-[9999999]">
    <button id="closeview" class="fixed top-0 right-0 z-50 block border-none rounded-lg close w-14 h-14 md:mr-20 lg:mr-60"><img src="<?= baseUrl("src/img/icons/close.svg"); ?>" class="justify-end block w-full text-main" alt="close"></button>
    <div id="tabel-view-data-santri" class="w-[95%] md:w-[80%] lg:w-[75%] absolute bg-body px-5 py-10 bottom-0 left-1/2 -translate-x-1/2 overflow-y-scroll rounded-t-lg content-data-view">
        <div class="heading">
            <h1 class="text-base sm:text-xl font-bold text-center">FORMULIR <span id="program-placeholder"></span> SANTRI TAKHOSSUS<br>PONDOK PESANTREN TAHFIDZUL QUR'AN AL-'ASHR AL-MADANI
            </h1>
        </div>
        <div>
            <table class="table-data w-full lg:w-[90%] mx-auto my-5 text-[10px] sm:text-sm lg:text-base ">
                <tbody>
                    <tr class="bg-slate-300">
                    <td colspan="4" class="font-bold">DATA</td>
                    <tr>
                        <td>No. Peserta Test</td>
                        <td width="10px">:</td>
                        <td id="nomor-test-placeholder"></td>
                        <td class="text-right" rowspan="5" width="80px" style="overflow:hidden;">
                            <img src="" alt="" width="80px" id="image-profile">
                        </td>
                    </tr>
                    
                    <tr>
                        <td id=>Nama Lengkap Anak (Calon Siswa/Santri)</td>
                        <td>:</td>
                        <td class="w-[150px] lg:w-[300px] capitalize" id="nama-santri-placeholder" ></td>
                    </tr>
                    <tr>
                        <td>Tanggal lahir</td>
                        <td>:</td>
                        <td id="tgl-santri-placeholder" class="capitalize"></td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="w-full lg:w-[90%] mx-auto">

            <h3 class="font-bold">A. ANAK</h3>
            <table class="text-[10px] sm:text-sm lg:text-base w-full" cellspacing="0" cellpadding="1" border="1">
                <tr class="bg-slate-300">
                    <td class="capitalize">Nama Lengkap</td>
                    <td width="10px">:</td>
                    <td colspan="3" id="nama-lengkap-placeholder">
                    </td>
                    <td width="50px" style="text-align: center;">
                        L / P
                    </td>
                </tr>
                <tr>
                    <td>Nama Panggilan</td>
                    <td>:</td>
                    <td colspan="4" id="nama-panggilan-placeholder" class="capitalize"></td>
                </tr>
                <tr>
                    <td>Jenis Kelamin</td>
                    <td>:</td>
                    <td colspan="4" id="jenis-kelamin-placeholder" class="capitalize"></td>
                </tr>
                <tr>
                    <td>Golongan Darah</td>
                    <td>:</td>
                    <td colspan="4" id="golongan-darah-placeholder" class="uppercase"></td>
                </tr>
                <tr>
                    <td>Tempat Tanggal Lahir</td>
                    <td>:</td>
                    <td colspan="4" id="tgl-placeholder" class="capitalize"></td>
                </tr>
                <tr>
                    <td>Alamat Rumah</td>
                    <td>:</td>
                    <td colspan="4" id="alamat-santri-placeholder"></td>
                </tr>
                <tr>
                    <td>Kode Pos</td>
                    <td>:</td>
                    <td colspan="4" id="kode-pos-placeholder"></td>
                </tr>
                <tr>
                    <td>Telp Rumah</td>
                    <td>:</td>
                    <td colspan="4" id="telepon-rumah-placeholder"></td>
                </tr>
                <tr>
                    <td>Kecamatan</td>
                    <td>:</td>
                    <td colspan="4" id="kecamatan-placeholder" class="uppercase"></td>
                </tr>
                <tr>
                    <td>Kelurahan</td>
                    <td>:</td>
                    <td colspan="4" id="kelurahan-placeholder" class="uppercase"></td>
                </tr>
                <tr>
                    <td>Bahasa Sehari-hari</td>
                    <td>:</td>
                    <td colspan="4" id="bahasa-sehari-placeholder"></td>
                </tr>
                <tr>
                    <td>Jarak Tempuh dari Rumah ke Pesantren</td>
                    <td>:</td>
                    <td colspan="3" id="jarak-rumah-placeholder">
                       
                    </td>
                    <td style="text-align: center;">
                        KM
                    </td>
                </tr>
                <tr>
                    <td>Anak ke</td>
                    <td>:</td>
                    <td colspan="4" width="200px">
                        <div style="display: flex; justify-content: start;">
                            <span style="padding-right: 10px;" id="anak-ke-placeholder"></span>
                            <span style="padding:0px 10px; ">dari</span>
                            <span style="padding:0px 10px; " id="anak-dari-placeholder">4</span>
                            <span style="padding:0px 10px; ">bersaudara</span>
                        </div>
                    </td>
                </tr>
            </table>
        </div>

        <div class="w-full lg:w-[90%] mx-auto">
            <h3 class="font-bold" style="margin-top:10px;">B. DATA ORANG TUA</h3>
            <table cellspacing="0" cellpadding="0px" border="1" class="text-[8px] sm:text-sm lg:text-base w-full">
                <tr class="bg-slate-300">
                    <td colspan="2"></td>
                    <td class="font-bold">AYAH</td>
                    <td class="font-bold">IBU</td>
                </tr>
                <tr>
                    <td>Nama Lengkap</td>
                    <td width="10px">:</td>
                    <td id="nama-ayah-placeholder" class="capitalize"></td>
                    <td id="nama-ibu-placeholder" class="capitalize"></td>
                </tr>
                <tr>
                    <td>Tempat Tanggal Lahir</td>
                    <td>:</td>
                    <td id="tgl-ayah-placeholder" class="capitalize"></td>
                    <td id="tgl-ibu-placeholder" class="capitalize"></td>
                </tr>
                <tr>
                    <td>Suku Bangsa</td>
                    <td>:</td>
                    <td id="suku-ayah-placeholder" class="uppercase"></td>
                    <td id="suku-ibu-placeholder" class="uppercase"></td>
                </tr>
                <tr>
                    <td>Alamat Rumah</td>
                    <td>:</td>
                    <td id="alamat-ayah-placeholder"></td>
                    <td id="alamat-ibu-placeholder"></td>
                </tr>
                <tr>
                    <td>Kode Pos</td>
                    <td>:</td>
                    <td id="kode-pos-ayah-placeholder"></td>
                    <td id="kode-pos-ibu-placeholder"></td>
                </tr>
                <tr>
                    <td>Email</td>
                    <td>:</td>
                    <td id="email-ayah-placeholder" class="lowercase"></td>
                    <td id="email-ibu-placeholder" class="lowercase"></td>
                </tr>
                <tr>
                    <td>WhatsApp</td>
                    <td>:</td>
                    <td id="whatsapp-ayah-placeholder"></td>
                    <td id="whatsapp-ibu-placeholder"></td>
                </tr>
                <tr>
                    <td>Telepon Rumah</td>
                    <td>:</td>
                    <td id="telp-ayah-placeholder"></td>
                    <td id="telp-ibu-placeholder"></td>
                </tr>
                <tr>
                    <td colspan="4" class="bg-slate-300 font-bold">Status Pernikahan</td>
                </tr>
                <tr>
                    <td>Status Pernikahan</td>
                    <td>:</td>
                    <td id="status-nikah-ayah-placeholder"></td>
                    <td id="status-nikah-ibu-placeholder"></td>
                </tr>
                <tr>
                    <td>Menikah Pada Usia</td>
                    <td>:</td>
                    <td id="ayah-menikah-pada-placeholder"></td>
                    <td id="ibu-menikah-pada-placeholder"></td>
                </tr>
                <tr>
                    <td>Pernikahan Ke</td>
                    <td>:</td>
                    <td id="pernikahan-ayah-ke-placeholder"></td>
                    <td id="pernikahan-ibu-ke-placeholder"></td>
                </tr>
                <tr>
                    <td colspan="4" class="bg-slate-300 font-bold">Riwayat Perguruan Tinggi Ayah</td>
                </tr>
                <tr>
                    <td>Nama Perguruan Tinggi</td>
                    <td>:</td>
                    <td id="universitas-ayah-placeholder" class="uppercase"></td>
                    <td id="universitas-ibu-placeholder" class="uppercase"></td>
                </tr>
                <tr>
                    <td>Fakultas</td>
                    <td>:</td>
                    <td id="fakultas-ayah-placeholder" class="uppercase"></td>
                    <td id="fakultas-ibu-placeholder" class="uppercase"></td>
                </tr>
                <tr>
                    <td>Jurusan</td>
                    <td>:</td>
                    <td id="jurusan-ayah-placeholder" class="uppercase"></td>
                    <td id="jurusan-ibu-placeholder" class="uppercase"></td>
                </tr>
                <tr>
                    <td colspan="4" class="bg-slate-300 font-bold">Pekerjaan Ayah</td>
                </tr>
                <tr>
                    <td>Pekerjaan/Profesi</td>
                    <td>:</td>
                    <td id="pekerjaan-ayah-placeholder" class="capitalize"></td>
                    <td id="pekerjaan-ibu-placeholder" class="capitalize"></td>
                </tr>
                <tr>
                    <td>Jabatan</td>
                    <td>:</td>
                    <td id="posisi-ayah-placeholder" class="capitalize"></td>
                    <td id="posisi-ibu-placeholder" class="capitalize"></td>
                </tr>
                <tr>
                    <td>Rata Rata Gaji</td>
                    <td>:</td>
                    <td id="gaji-ayah-placeholder"></td>
                    <td id="gaji-ibu-placeholder"></td>
                </tr>
                <tr>
                    <td>Alamat Kantor</td>
                    <td>:</td>
                    <td id="alamat-kantor-ayah-placeholder"></td>
                    <td id="alamat-kantor-ibu-placeholder"></td>
                </tr>
                <tr>
                    <td>Telepon Kantor</td>
                    <td>:</td>
                    <td id="telp-kantor-ayah-placeholder"></td>
                    <td id="telp-kantor-ibu-placeholder"></td>
                </tr>
            </table>
        </div>


        <div class="w-full lg:w-[90%] mx-auto">
            <h3 class="font-bold" style="margin-top:10px;">C. DATA WALI SANTRI</h3>
            <table cellspacing="0" cellpadding="0px" border="1" class="text-[8px] sm:text-sm lg:text-base w-full">

                <tr class="bg-slate-300">
                    <td >Nama Lengkap</td>
                    <td width="10px">:</td>
                    <td id="nama-wali-placeholder" class="capitalize"></td>
                </tr>
                <tr>
                    <td>Tempat Tanggal Lahir</td>
                    <td>:</td>
                    <td id="tgl-wali-placeholder"></td>
                </tr>
                <tr>
                    <td>Suku Bangsa</td>
                    <td>:</td>
                    <td id="suku-wali-placeholder"></td>
                </tr>
                <tr>
                    <td>Hubungan Wali Dengan Anak</td>
                    <td>:</td>
                    <td id="hubungan-wali-placeholder"></td>
                </tr>
                <tr>
                    <td>Alamat Rumah</td>
                    <td>:</td>
                    <td id="alamat-wali-placeholder"></td>
                </tr>
                <tr>
                    <td>Kode Pos</td>
                    <td>:</td>
                    <td id="kode-pos-wali-placeholder"></td>
                </tr>
                <tr>
                    <td>Email</td>
                    <td>:</td>
                    <td id="email-wali-placeholder" class="lowercase"></td>
                </tr>
                <tr>
                    <td>WhatsApp</td>
                    <td>:</td>
                    <td id="whatsapp-wali-placeholder"></td>
                </tr>
                <tr>
                    <td>Telepon Rumah</td>
                    <td>:</td>
                    <td id="telp-wali-placeholder"></td>
                </tr>
                <tr>
                    <td colspan="4" class="bg-slate-300 font-bold">Status Pernikahan</td>
                </tr>
                <tr>
                    <td>Status Pernikahan</td>
                    <td>:</td>
                    <td id="status-nikah-wali-placeholder"></td>
                </tr>
                <tr>
                    <td>Menikah Pada Usia</td>
                    <td>:</td>
                    <td id="wali-menikah-pada-placeholder"></td>
                </tr>
                <tr>
                    <td>Pernikahan Ke</td>
                    <td>:</td>
                    <td id="pernikahan-wali-ke-placeholder"></td>
                </tr>
                <tr>
                    <td colspan="4" class="bg-slate-300 font-bold">Riwayat Perguruan Tinggi Wali Santri</td>
                </tr>
                <tr>
                    <td>Nama Perguruan Tinggi</td>
                    <td>:</td>
                    <td id="universitas-wali-placeholder" class="uppercase"></td>
                </tr>
                <tr>
                    <td>Fakultas</td>
                    <td>:</td>
                    <td id="fakultas-wali-placeholder" class="uppercase"></td>
                </tr>
                <tr>
                    <td>Jurusan</td>
                    <td>:</td>
                    <td id="jurusan-wali-placeholder" class="uppercase"></td>
                </tr>
                <tr>
                    <td colspan="4" class="bg-slate-300 font-bold">Pekerjaan Wali Santri</td>
                </tr>
                <tr>
                    <td>Pekerjaan/Profesi</td>
                    <td>:</td>
                    <td id="pekerjaan-wali-placeholder" class="uppercase"></td>
                </tr>
                <tr>
                    <td>Jabatan</td>
                    <td>:</td>
                    <td id="posisi-wali-placeholder" class="uppercase"></td>
                </tr>
                <tr>
                    <td>Rata Rata Gaji</td>
                    <td>:</td>
                    <td id="gaji-wali-placeholder" ></td>
                </tr>
                <tr>
                    <td>Alamat Kantor</td>
                    <td>:</td>
                    <td id="alamat-kantor-wali-placeholder"></td>
                </tr>
                <tr>
                    <td>Telepon Kantor</td>
                    <td>:</td>
                    <td id="telp-kantor-wali-placeholder"></td>
                </tr>
            </table>

        </div>
        <div class="w-full lg:w-[90%] mx-auto">
            <h3 class="font-bold" style="margin-top:10px;">D. Keluarga Lainnya</h3>
            <table cellspacing="0" cellpadding="0px" border="1" class="text-[8px] sm:text-sm lg:text-base w-full">
                <tr class="bg-slate-300 ">
                    <td class="capitalize">Nama</td>
                    <td width="10px">:</td>
                    <td id="nama-others-placeholder"></td>
                </tr>
                <tr>
                    <td>Hubungan</td>
                    <td>:</td>
                    <td id="hubungan-others-placeholder"></td>
                </tr>
                <tr>
                    <td>Alamat</td>
                    <td>:</td>
                    <td id="alamat-others-placeholder"></td>
                </tr>
                <tr>
                    <td>WhatsApp</td>
                    <td>:</td>
                    <td id="whatsapp-others-placeholder"></td>
                </tr>
                <tr>
                    <td>Telepon Rumah</td>
                    <td>:</td>
                    <td id="telp-others-placeholder"></td>
                </tr>
            </table>
        </div>


        <div class="w-full lg:w-[90%] mx-auto">
            <h3 class="font-bold" style="margin-top:5px;">E. Riwayat Kesehatan</h3>
            <table cellspacing="0" cellpadding="0px" border="1" class="text-[8px] sm:text-sm lg:text-base w-full">
                <tr>
                    <td>Berat Badan</td>
                    <td class="w-2 text-center">:</td>
                    <td id="berat-badan-placeholder"></td>
                    <td width="50px">KG</td>
                </tr>
                <tr>
                    <td>Tinggi Badan</td>
                    <td>:</td>
                    <td id="tinggi-badan-placeholder"></td>
                    <td width="50px">CM</td>
                </tr>
                <tr>
                    <td colspan="4" class="bg-slate-300 font-bold">Keluhan Fisik</td>
                </tr>
                <tr>
                    <td>Keluhan Mata</td>
                    <td>:</td>
                    <td colspan="4" id="keluhan-mata-placeholder"></td>
                </tr>
                <tr>
                    <td>Keluhan Telinga</td>
                    <td>:</td>
                    <td colspan="4" id="keluhan-telinga-placeholder"></td>
                </tr>

                <tr>
                    <td colspan="4" class="bg-slate-300 font-bold">keluhan Lain Yang Sering disampaikan anak</td>
                </tr>
                <tr>
                    <td colspan="4" id="keluhan-anak-placeholder"></td>
                </tr>
                <tr>
                    <td colspan="4" class="bg-slate-300 font-bold">Riwayat Terapi</td>
                </tr>
                <tr>
                    <td colspan="4" id="riwayat-terapi-placeholder"></td>
                </tr>
                <tr>
                    <td colspan="4" class="bg-slate-300 font-bold">Pernah dirawat di rumah sakit? jika ya, jelaskan </td>
                </tr>
                <tr>
                    <td colspan="4" id="riwayat-rumah-sakit-placeholder"></td>
                </tr>
                <tr>
                    <td colspan="4" class="bg-slate-300 font-bold">Hal penting yang menurut orang tua perlu diketahui pihak Pesantren / SMP Plus mengenai perkembangan anak </td>
                </tr>
                <tr>
                    <td colspan="4" id="hal-penting-placeholder"></td>
                </tr>
            </table>
        </div>
    </div>
</section>

<script>
    document.getElementById("data-id-placeholder").textContent = "Data ID: " + dataId;
</script>