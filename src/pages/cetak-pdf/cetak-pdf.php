<?php

use Mpdf\Tag\Table;

require_once '../../vendor/autoload.php';
require "../../backend/functions/functions.php";

$id = $_GET['id'];
$db = new Database();
$query = "SELECT *, DATE_FORMAT(std_birthdate, '%e %M, %Y') AS formatted_date,
            REPLACE(DATE_FORMAT(std_birthdate, '%e %M, %Y'), 'March', 'Maret') AS indonesian_month 
            FROM students
            LEFT JOIN student_health ON students.std_id = student_health.std_id
            LEFT JOIN student_residence ON students.std_id = student_residence.std_id
            LEFT JOIN program ON students.prg_id = program.prg_id
            LEFT JOIN gelombang ON students.glb_id = gelombang.glb_id
            LEFT JOIN periode ON gelombang.prd_id = periode.prd_id
            LEFT JOIN genders ON students.gnr_id = genders.gnr_id
            WHERE students.std_id = :id";
$db->query($query);
$db->bind('id', $id, PDO::PARAM_INT);
$db->execute();
$profile = $db->single();
if (isset($profile['str_distance_ponpes_am'])) {
    $distance = explode(" ", $profile['str_distance_ponpes_am']);
    $distanceLast = count($distance) - 1;
}
if($profile['gnr_id'] === 1){
    $genders = "PA";
}else if($profile['gnr_id'] === 2){
    $genders ="PI";
}

if($profile['prg_id'] === 1){
    $program ="SMA";
}else if($profile['prg_id'] === 2){
    $program ="SMP";
}

$query = "SELECT *, DATE_FORMAT(prt_birthdate, '%e %M, %Y') AS formatted_date
            FROM parents
            LEFT JOIN parents_roles ON parents.prr_id = parents_roles.prr_id
            LEFT JOIN parents_wages ON parents.prw_id = parents_wages.prw_id
            LEFT JOIN married_status ON parents.mrs_id = married_status.mrs_id
            WHERE std_id = :id AND prr_name = :role";
$db->query($query);
$db->bind('id', $id);
$db->bind('role', 'Ayah');
$db->execute();
$ayah = $db->single();

$query = "SELECT *, DATE_FORMAT(prt_birthdate, '%e %M, %Y') AS formatted_date
            FROM parents
            LEFT JOIN parents_roles ON parents.prr_id = parents_roles.prr_id
            LEFT JOIN parents_wages ON parents.prw_id = parents_wages.prw_id
            LEFT JOIN married_status ON parents.mrs_id = married_status.mrs_id
            WHERE std_id = :id AND prr_name = :role";
$db->query($query);
$db->bind('id', $id);
$db->bind('role', 'Ibu');
$db->execute();
$ibu = $db->single();

$query = "SELECT *, DATE_FORMAT(prt_birthdate, '%e %M, %Y') AS formatted_date
            FROM parents
            LEFT JOIN parents_roles ON parents.prr_id = parents_roles.prr_id
            LEFT JOIN parents_wages ON parents.prw_id = parents_wages.prw_id
            LEFT JOIN married_status ON parents.mrs_id = married_status.mrs_id
            WHERE std_id = :id AND prr_name = :role";
$db->query($query);
$db->bind('id', $id);
$db->bind('role', 'Wali');
$db->execute();
$wali = $db->single();

$query = "SELECT *, DATE_FORMAT(prt_birthdate, '%e %M, %Y') AS formatted_date
            FROM parents
            LEFT JOIN parents_roles ON parents.prr_id = parents_roles.prr_id
            LEFT JOIN parents_wages ON parents.prw_id = parents_wages.prw_id
            LEFT JOIN married_status ON parents.mrs_id = married_status.mrs_id
            WHERE std_id = :id AND prr_name = :role";
$db->query($query);
$db->bind('id', $id);
$db->bind('role', 'Others');
$db->execute();
$others = $db->single();

$mpdf = new \Mpdf\Mpdf();
$margin_inch_top = 5;
$margin_inch_right = 0;
$margin_inch_bottom = 5;
$margin_inch_left = 0;
$mpdf->SetMargins($margin_inch_top, $margin_inch_right, $margin_inch_bottom, $margin_inch_left);

$html = '<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Data Santri</title>
    <link rel="stylesheet" href="../../css/cetak-pdf.css">
    <link rel="icon" href="../../img/logo.svg" />
</head>
<body>
<table class="hayde">
    <tr>
        <td class="text-right">
            <img src="' . baseUrl("src/img/logo.png") . '" alt="" class="logo">
        </td>
        <td class="text-center height">
            <p class="heading">YAYASAN FADHILAH ASWANDA</p>
            <p class="heading1 green line-height">PONDOK PESANTREN TAHFIDZUL QUR\'AN</p>
            <p class="heading1 dark-font comicsans">"AL-\'ASHR AL-MADANI"</p>
            <p class="alamat">Jl. Arcamanik Raya Bihbul No.48 Sindanglaya, Kecamatan Cimenyan, 
            Kabupaten Bandung, Jawa Barat, Telp. 022-63754325
            </p>
            </td>
            </tr>
            </table>
            <div class="pt-5">
            <hr class="double-line-1">
            <hr class="double-line-2">
            </div>

';
//warna untuk heading smp black untuk sma #002060
$html .= '
    <h2 class="heading2 dark-font">FORMULIR ' . $program . ' SANTRI TAKHOSSUS
    <br>PONDOK PESANTREN TAHFIDZUL QUR\'AN AL-\'ASHR AL-MADANI</h2>
';

// Tambahkan struktur tabel HTML
$html .= '<table class="table-data">
<tbody>
    <tr>
        <td colspan="4" class="text-bold heading3">Data</td>
    <tr>
        <td width="300px">No. Peserta Test</td>
        <td width="10px">:</td>
        <td>' . $program . '.'.$genders.'.' . $profile['glb_name'] . '-' . $profile['prd_name'] . '/' . $profile['prd_name'] + 1 . '.' . $profile['std_id'] . '</td>
        <td class="text-right" rowspan="5" width="80px" style="overflow:hidden;">
            <img src="' . baseUrl("src/img/uploaded/person/") . $profile['std_img'] . '" alt="" width="80px">
        </td>
    </tr>
    <tr>
        <td>Nama Lengkap Anak (Calon Siswa/Santri)</td>
        <td>:</td>
        <td>' . $profile['std_full_name'] . '</td>
    </tr>
    <tr>
        <td>Tanggal lahir</td>
        <td>:</td>
        <td>' . (isset($profile['std_birth_place']) ? $profile['std_birth_place'] : '-') . ', ' . (isset($profile['indonesian_month']) ? $profile['indonesian_month'] : '') . '</td>
    </tr>
</tbody>
</table>';
$html .= '
    <p class="paragraf">Formulir diisi dengan lengkap dan <span class="underline text-bold">dikembalikan</span> ke sekretariat Pondok Pesantren Tahfidzul Qur\'an Al-\'Ashr Al-Madani <span class="underline text-bold">Pada saat Pelaksanaan Test</span>.</P>
    <h2 class="heading2">FORMULIR ISIAN DATA ANAK DAN ORANG TUA</h2>
';
$html .= '
<h3 class="heading3 margin-top">A. ANAK</h3>
<table class="data-anak" cellspacing="0" cellpadding="1"
border="1">
<tr style="background-color:#E4E4E4;">
    <td>Nama Lengkap</td>
    <td width="10px">:</td>
    <td colspan="3">
        ' . $profile['std_full_name'] . '
    </td>
    <td width="50px" style="text-align: center;">
        L / P
    </td>
</tr>
<tr>
    <td>Nama Panggilan</td>
    <td>:</td>
    <td colspan="4">' . (isset($profile['std_nickname']) ? $profile['std_nickname'] : '-') . '</td>
</tr>
<tr>
    <td>Jenis Kelamin</td>
    <td>:</td>
    <td colspan="4">' . $profile['gnr_name'] . '</td>
</tr>
<tr>
    <td>Golongan Darah</td>
    <td>:</td>
    <td colspan="4" >' . (isset($profile['sth_blood_type']) ? $profile['sth_blood_type'] : '-') . '</td>
</tr>
<tr>
    <td>Tempat Tanggal Lahir</td>
    <td>:</td>
    <td colspan="4">' . (isset($profile['std_birth_place']) ? $profile['std_birth_place'] : '-') . ', ' . (isset($profile['formatted_date']) ? $profile['formatted_date'] : '') . '</td>
</tr>
<tr>
    <td>Alamat Rumah</td>
    <td>:</td>
    <td colspan="4">' . (isset($profile['str_address']) ? $profile['str_address'] : '-') . '</td>
</tr>
<tr>
    <td>Kode Pos</td>
    <td>:</td>
    <td colspan="4">' . (isset($profile['str_postal_code']) ? $profile['str_postal_code'] : '-') . '</td>
</tr>
<tr>
    <td>Telp Rumah</td>
    <td>:</td>
    <td colspan="4">' . (isset($profile['std_home_no_telp']) ? $profile['std_home_no_telp'] : '-') . '</td>
</tr>
<tr>
    <td>Kecamatan</td>
    <td>:</td>
    <td colspan="4">' . (isset($profile['str_sub_district']) ? $profile['str_sub_district'] : '-') . '</td>
</tr>
<tr>
    <td>Kelurahan</td>
    <td>:</td>
    <td colspan="4">' . (isset($profile['str_urban_village']) ? $profile['str_urban_village'] : '-') . '</td>
</tr>
<tr>
    <td>Bahasa Sehari-hari</td>
    <td>:</td>
    <td colspan="4">' . (isset($profile['std_language_home']) ? $profile['std_language_home'] : '-') . '</td>
</tr>
<tr>
    <td>Jarak Tempuh dari Rumah ke Pesantren</td>
    <td>:</td>
    <td colspan="3">
        ' . (isset($profile['str_distance_ponpes_am']) ? $distance[0] : '-') . '
    </td>
    <td style="text-align: center;">
        KM
    </td>
</tr>
<tr>
    <td>Anak ke</td>
    <td>:</td>
    <td colspan="4" width="200px"><div style="display: flex; justify-content: start;">
        <span style="padding-right: 10px;">' . (isset($profile['std_child_of']) ? $profile['std_child_of'] : '-') . '</span>
        <span style="padding:0px 10px; ">dari</span>
        <span style="padding:0px 10px; ">' . (isset($profile['std_number_sibling']) ? $profile['std_number_sibling'] : '-') . '</span>
        <span style="padding:0px 10px; ">bersaudara</span>
    </div></td>
</tr>
</table>
';
$html .= '
<h3 class="heading3" style="margin-top:10px;">B. DATA ORANG TUA</h3>
<table cellspacing="0" cellpadding="0px" border="1" class="data-orangtua">
    <tr style="background-color:#E4E4E4;font-weight:bold;">
        <td colspan="2"></td>
        <td width="250px" >AYAH</td>
        <td width="250px">IBU</td>
    </tr>
    <tr>
        <td>Nama Lengkap</td>
        <td width="10px">:</td>
        <td>' . (isset($ayah['prt_full_name']) ? $ayah['prt_full_name'] : '-') . '</td>
        <td>' . (isset($ibu['prt_full_name']) ? $ibu['prt_full_name'] : '-') . '</td>
    </tr>
    <tr>
        <td>Tempat Tanggal Lahir</td>
        <td>:</td>
        <td>' . (isset($ayah['prt_birth_place']) ? $ayah['prt_birth_place'] . ', ' : '-') . (isset($ayah['formatted_date']) ? $ayah['formatted_date'] : '') . '</td>
        <td>' . (isset($ibu['prt_birth_place']) ? $ibu['prt_birth_place'] . ', ' : '-') . (isset($ibu['formatted_date']) ? $ibu['formatted_date'] : '') . '</td>
    </tr>
    <tr>
        <td>Suku Bangsa</td>
        <td>:</td>
        <td>' . (isset($ayah['prt_tribes']) ? $ayah['prt_tribes'] : '-') . '</td>
        <td>' . (isset($ibu['prt_tribes']) ? $ibu['prt_tribes'] : '-') . '</td>
    </tr>
    <tr>
        <td>Alamat Rumah</td>
        <td>:</td>
        <td>' . (isset($ayah['prt_home_address']) ? $ayah['prt_home_address'] : '-') . '</td>
        <td>' . (isset($ibu['prt_home_address']) ? $ibu['prt_home_address'] : '-') . '</td>
    </tr>
    <tr>
        <td>Kode Pos</td>
        <td>:</td>
        <td>' . (isset($ayah['prt_postal_code']) ? $ayah['prt_postal_code'] : '-') . '</td>
        <td>' . (isset($ibu['prt_postal_code']) ? $ibu['prt_postal_code'] : '-') . '</td>
    </tr>
    <tr>
        <td>Email</td>
        <td>:</td>
        <td>' . (isset($ayah['prt_email']) ? $ayah['prt_email'] : '-') . '</td>
        <td>' . (isset($ibu['prt_email']) ? $ibu['prt_email'] : '-') . '</td>
    </tr>
    <tr>
        <td>WhatsApp</td>
        <td>:</td>
        <td>' . (isset($ayah['prt_no_hp']) ? $ayah['prt_no_hp'] : '-') . '</td>
        <td>' . (isset($ibu['prt_no_hp']) ? $ibu['prt_no_hp'] : '-') . '</td>
    </tr>
    <tr>
        <td>Telepon Rumah</td>
        <td>:</td>
        <td>' . (isset($ayah['prt_home_no_telp']) ? $ayah['prt_home_no_telp'] : '-') . '</td>
        <td>' . (isset($ibu['prt_home_no_telp']) ? $ibu['prt_home_no_telp'] : '-') . '</td>
    </tr>
    <tr>
        <td colspan="4" style="background-color:#E4E4E4;font-weight:bold;">Status Pernikahan</td>
    </tr>
    <tr>
        <td>Status Pernikahan</td>
        <td>:</td>
        <td>' . (isset($ayah['mrs_name']) ? $ayah['mrs_name'] : '-') . '</td>
        <td>' . (isset($ibu['mrs_name']) ? $ibu['mrs_name'] : '-') . '</td>
    </tr>
    <tr>
        <td>Menikah Pada Usia</td>
        <td>:</td>
        <td>' . (isset($ayah['prt_married_at_age']) ? $ayah['prt_married_at_age'] . ' Tahun' : '-') . '</td>
        <td>' . (isset($ibu['prt_married_at_age']) ? $ibu['prt_married_at_age'] . ' Tahun' : '-') . '</td>
    </tr>
    <tr>
        <td>Pernikahan Ke</td>
        <td>:</td>
        <td>' . (isset($ayah['prt_married_number']) ? $ayah['prt_married_number'] : '-') . '</td>
        <td>' . (isset($ibu['prt_married_number']) ? $ibu['prt_married_number'] : '-') . '</td>
    </tr>

    <tr>
        <td colspan="4" style="background-color:#E4E4E4; font-weight:bold;">Riwayat Pendidikan SMP Sampai SMA Ayah dan Ibu</td>
    </tr>
    <tr>
        <td>SMP</td>
        <td>:</td>
        <td>' . (isset($ayah['prt_smp']) ? $ayah['prt_smp'] : '-') . '</td>
        <td>' . (isset($ibu['prt_smp']) ? $ibu['prt_smp'] : '-') . '</td>
    </tr>
    <tr>
        <td>SMA</td>
        <td>:</td>
        <td>' . (isset($ayah['prt_sma']) ? $ayah['prt_sma'] : '-') . '</td>
        <td>' . (isset($ibu['prt_sma']) ? $ibu['prt_sma'] : '-') . '</td>
    </tr>
    <tr>
        <td colspan="4" style="background-color:#E4E4E4; font-weight:bold;">Riwayat Perguruan Tinggi Ayah dan Ibu</td>
    </tr>
    <tr>
        <td>Nama Perguruan Tinggi</td>
        <td>:</td>
        <td>' . (isset($ayah['prt_university']) ? $ayah['prt_university'] : '-') . '</td>
        <td>' . (isset($ibu['prt_university']) ? $ibu['prt_university'] : '-') . '</td>
    </tr>
    <tr>
        <td>Fakultas</td>
        <td>:</td>
        <td>' . (isset($ayah['prt_faculty']) ? $ayah['prt_faculty'] : '-') . '</td>
        <td>' . (isset($ibu['prt_faculty']) ? $ibu['prt_faculty'] : '-') . '</td>
    </tr>
    <tr>
        <td>Jurusan</td>
        <td>:</td>
        <td>' . (isset($ayah['prt_major']) ? $ayah['prt_major'] : '-') . '</td>
        <td>' . (isset($ibu['prt_major']) ? $ibu['prt_major'] : '-') . '</td>
    </tr>
    <tr>
        <td colspan="4" style="background-color:#E4E4E4; font-weight:bold;">Pekerjaan Ayah</td>
    </tr>
    <tr>
        <td>Pekerjaan/Profesi</td>
        <td>:</td>
        <td>' . (isset($ayah['prt_job']) ? $ayah['prt_job'] : '-') . '</td>
        <td>' . (isset($ibu['prt_job']) ? $ibu['prt_job'] : '-') . '</td>
    </tr>
    <tr>
        <td>Jabatan</td>
        <td>:</td>
        <td>' . (isset($ayah['prt_job_position']) ? $ayah['prt_job_position'] : '-') . '</td>
        <td>' . (isset($ibu['prt_job_position']) ? $ibu['prt_job_position'] : '-') . '</td>
    </tr>
    <tr>
        <td>Rata Rata Gaji</td>
        <td>:</td>
        <td> ' . (isset($ayah['prw_name']) ? $ayah['prw_name'] : '-') . '</td>
        <td> ' . (isset($ibu['prw_name']) ? $ibu['prw_name'] : '-') . '</td>
    </tr>
    <tr>
        <td>Alamat Kantor</td>
        <td>:</td>
        <td>' . (isset($ayah['prt_office_address']) ? $ayah['prt_office_address'] : '-') . '</td>
        <td>' . (isset($ibu['prt_office_address']) ? $ibu['prt_office_address'] : '-') . '</td>
    </tr>
    <tr>
        <td>Telepon Kantor</td>
        <td>:</td>
        <td>' . (isset($ayah['prt_office_no_telp']) ? $ayah['prt_office_no_telp'] : '-') . '</td>
        <td>' . (isset($ibu['prt_office_no_telp']) ? $ibu['prt_office_no_telp'] : '-') . '</td>
    </tr>
</table>
';
$html .= '
<h3 class="heading3" style="margin-top:10px;">C. DATA WALI SANTRI</h3>
<table cellspacing="0" cellpadding="0px" border="1" class="data-orangtua">
    <tr style="background-color:#E4E4E4;">
        <td>Nama Lengkap</td>
        <td width="10px">:</td>
        <td>' . (isset($wali['prt_full_name']) ? $wali['prt_full_name'] : '-') . '</td>
    </tr>
    <tr>
        <td>Tempat Tanggal Lahir</td>
        <td>:</td>
        <td>' . (isset($wali['prt_birth_place']) ? $wali['prt_birth_place'] . ', ' : '-') . (isset($wali['formatted_date']) ? $wali['formatted_date'] : '') . '</td>
    </tr>
    <tr>
        <td>Suku Bangsa</td>
        <td>:</td>
        <td>' . (isset($wali['prt_tribes']) ? $wali['prt_tribes'] : '-') . '</td>
    </tr>
    <tr>
        <td>Hubungan Wali Dengan Anak</td>
        <td>:</td>
        <td>' . (isset($wali['prt_relationship']) ? $wali['prt_relationship'] : '-') . '</td>
    </tr>
    <tr>
        <td>Alamat Rumah</td>
        <td>:</td>
        <td>' . (isset($wali['prt_home_address']) ? $wali['prt_home_address'] : '-') . '</td>
    </tr>
    <tr>
        <td>Kode Pos</td>
        <td>:</td>
        <td>' . (isset($wali['prt_postal_code']) ? $wali['prt_postal_code'] : '-') . '</td>
    </tr>
    <tr>
        <td>Email</td>
        <td>:</td>
        <td>' . (isset($wali['prt_email']) ? $wali['prt_email'] : '-') . '</td>
    </tr>
    <tr>
        <td>WhatsApp</td>
        <td>:</td>
        <td>' . (isset($wali['prt_no_hp']) ? $wali['prt_no_hp'] : '-') . '</td>
    </tr>
    <tr>
        <td>Telepon Rumah</td>
        <td>:</td>
        <td>' . (isset($wali['prt_home_no_telp']) ? $wali['prt_home_no_telp'] : '-') . '</td>
    </tr>
    <tr>
        <td colspan="3" style="background-color:#E4E4E4; font-weight:bold;">Status Pernikahan</td>
    </tr>
    <tr>
        <td>Status Pernikahan</td>
        <td>:</td>
        <td>' . (isset($wali['mrs_name']) ? $wali['mrs_name'] : '-') . '</td>
    </tr>
    <tr>
        <td>Menikah Pada Usia</td>
        <td>:</td>
        <td>' . (isset($wali['prt_married_at_age']) ? $wali['prt_married_at_age'] . ' Tahun' : '-') . '</td>
    </tr>
    <tr>
        <td>Pernikahan Ke</td>
        <td>:</td>
        <td>' . (isset($wali['prt_married_number']) ? $wali['prt_married_number'] : '-') . '</td>
    </tr>
    <tr>
    <td colspan="3" style="background-color:#E4E4E4; font-weight:bold;">Riwayat Pendidikan SMP Sampai SMA Wali Santri</td>
</tr>
<tr>
    <td>SMP</td>
    <td>:</td>
    <td>' . (isset($wali['prt_smp']) ? $wali['prt_smp'] : '-') . '</td>
</tr>
<tr>
    <td>SMA</td>
    <td>:</td>
    <td>' . (isset($wali['prt_sma']) ? $wali['prt_sma'] : '-') . '</td>
</tr>
    <tr>
        <td colspan="3" style="background-color:#E4E4E4; font-weight:bold;">Riwayat Perguruan Tinggi Wali Santri</td>
    </tr>
    <tr>
        <td>Nama Perguruan Tinggi</td>
        <td>:</td>
        <td>' . (isset($wali['prt_university']) ? $wali['prt_university'] : '-') . '</td>
    </tr>
    <tr>
        <td>Fakultas</td>
        <td>:</td>
        <td>' . (isset($wali['prt_faculty']) ? $wali['prt_faculty'] : '-') . '</td>
    </tr>
    <tr>
        <td>Jurusan</td>
        <td>:</td>
        <td>' . (isset($wali['prt_major']) ? $wali['prt_major'] : '-') . '</td>
    </tr>
    <tr>
        <td colspan="3" style="background-color:#E4E4E4; font-weight:bold;">Pekerjaan Wali Santri</td>
    </tr>
    <tr>
        <td>Pekerjaan/Profesi</td>
        <td>:</td>
        <td>' . (isset($wali['prt_job']) ? $wali['prt_job'] : '-') . '</td>
    </tr>
    <tr>
        <td>Jabatan</td>
        <td>:</td>
        <td>' . (isset($wali['prt_job_position']) ? $wali['prt_tribes'] : '-') . '</td>
    </tr>
    <tr>
        <td>Rata Rata Gaji</td>
        <td>:</td>
        <td>' . (isset($wali['prw_name']) ? $wali['prw_name'] : '-') . '</td>
    </tr>
    <tr>
        <td>Alamat Kantor</td>
        <td>:</td>
        <td>' . (isset($wali['prt_office_address']) ? $wali['prt_office_address'] : '-') . '</td>
    </tr>
    <tr>
        <td>Telepon Kantor</td>
        <td>:</td>
        <td>' . (isset($wali['prt_office_no_telp']) ? $wali['prt_office_no_telp'] : '-') . '</td>
    </tr>
</table>

';

$html .= '
<h3 class="heading3" style="margin-top:10px;">D. Keluarga Lainnya</h3>
<table cellspacing="0" cellpadding="0px" border="1" class="data-orangtua">
    <tr style="background-color:#E4E4E4;">
        <td>Nama</td>
        <td width="10px">:</td>
        <td>' . (isset($others['prt_full_name']) ? $others['prt_full_name'] : '-') . '</td>
    </tr>
    <tr>
        <td>Hubungan</td>
        <td>:</td>
        <td>' . (isset($others['prt_relationship']) ? $others['prt_relationship'] : '-') . '</td>
    </tr>
    <tr>
        <td>Alamat</td>
        <td>:</td>
        <td>' . (isset($others['prt_home_address']) ? $others['prt_home_address'] : '-') . '</td>
    </tr>
    <tr>
        <td>WhatsApp</td>
        <td>:</td>
        <td>' . (isset($others['prt_no_hp']) ? $others['prt_no_hp'] : '-') . '</td>
    </tr>
    <tr>
        <td>Telepon Rumah</td>
        <td>:</td>
        <td>' . (isset($others['prt_home_no_telp']) ? $others['prt_home_no_telp'] : '-') . '</td>
    </tr>
</table>
';
$mpdf->WriteHTML($html);
$mpdf->AddPage();
$kesehatan = '
<h3 class="heading3" style="margin-top:5px;">E. Riwayat Kesehatan</h3>
<table cellspacing="0" cellpadding="0px" border="1" class="data-orangtua">
    <tr>
        <td>Berat Badan</td>
        <td>:</td>
        <td>' . (isset($profile['sth_weight']) ? $profile['sth_weight'] : '-') . '</td>
        <td width="50px">KG</td>
    </tr>
    <tr>
        <td>Tinggi Badan</td>
        <td width=10px;>:</td>
        <td>' . (isset($profile['sth_height']) ? $profile['sth_height'] : '-') . '</td>
        <td width="50px">CM</td>
    </tr>
    <tr>
        <td colspan="4" style="background-color: #E4E4E4; font-weight:bold;">Keluhan Fisik</td>
    </tr>
    <tr>
        <td>Keluhan Mata</td>
        <td>:</td>
        <td colspan="2">' . (isset($profile['sth_eyes_complaint']) ? $profile['sth_eyes_complaint'] : '-') . '</td>
    </tr>
    <tr>
        <td>Keluhan Telinga</td>
        <td>:</td>
        <td colspan="2">' . (isset($profile['sth_ears_complaint']) ? $profile['sth_ears_complaint'] : '-') . '</td>
    </tr>
    <tr>
        <td colspan="4" style="background-color: #E4E4E4; font-weight:bold;">keluhan Lain Yang Sering disampaikan anak</td>
    </tr>
    <tr>
        <td colspan="4">' . (isset($profile['sth_physical_complaint']) ? $profile['sth_physical_complaint'] : '-') . '</td>
    </tr>
    <tr>
        <td colspan="4" style="background-color: #E4E4E4; font-weight:bold;">Riwayat Terapi</td>
    </tr>
    <tr>
        <td colspan="4">' . (isset($profile['sth_therapy_history']) ? $profile['sth_therapy_history'] : '-') . '</td>
    </tr>
    <tr>
        <td colspan="4" style="background-color: #E4E4E4; font-weight:bold;">Pernah dirawat di rumah sakit? jika ya, jelaskan </td>
    </tr>
    <tr>
        <td colspan="4">' . (isset($profile['sth_hospitalized']) ? $profile['sth_hospitalized'] : '-') . '</td>
    </tr>
    <tr>
        <td colspan="4" style="background-color: #E4E4E4; font-weight:bold;">Hal penting yang menurut orang tua perlu diketahui pihak Pesantren / SMP Plus mengenai perkembangan anak </td>
    </tr>
    <tr>
        <td colspan="4">' . (isset($profile['sth_important_massage']) ? $profile['sth_important_massage'] : '-') . '</td>
    </tr>
</table>
';
$kesehatan .= '</body>
</html>';

$mpdf->WriteHTML($kesehatan);
$mpdf->Output();
