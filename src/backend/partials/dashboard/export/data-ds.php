<?php
require "../../../functions/functions.php";
$db = new Database();

$dataSantriQuery =
  "SELECT *, 
           DATE_FORMAT(std_birthdate, '%e %M, %Y') AS formatted_date,
            REPLACE(REPLACE(DATE_FORMAT(std_birthdate, '%e %M, %Y'), ',', ''), 'March', 'Maret') AS indonesian_month
            FROM students
            LEFT JOIN student_health ON students.std_id = student_health.std_id
            LEFT JOIN student_residence ON students.std_id = student_residence.std_id
            LEFT JOIN program ON students.prg_id = program.prg_id
            LEFT JOIN gelombang ON students.glb_id = gelombang.glb_id
            LEFT JOIN periode ON gelombang.prd_id = periode.prd_id
            LEFT JOIN genders ON students.gnr_id = genders.gnr_id
            LEFT JOIN register_student ON students.rgs_id = register_student.rgs_id
            ";
$db->query($dataSantriQuery);
$db->execute();
$dataCs = $db->resultSet();

$query = "SELECT *, DATE_FORMAT(prt_birthdate, '%e %M, %Y') AS formatted_date
            FROM parents
            LEFT JOIN parents_roles ON parents.prr_id = parents_roles.prr_id
            LEFT JOIN parents_wages ON parents.prw_id = parents_wages.prw_id
            LEFT JOIN married_status ON parents.mrs_id = married_status.mrs_id
            WHERE prr_name = :role";
$db->query($query);
$db->bind('role', 'Ayah');
$db->execute();
$ayah = $db->resultSet();
$query = "SELECT *, DATE_FORMAT(prt_birthdate, '%e %M, %Y') AS formatted_date
            FROM parents
            LEFT JOIN parents_roles ON parents.prr_id = parents_roles.prr_id
            LEFT JOIN parents_wages ON parents.prw_id = parents_wages.prw_id
            LEFT JOIN married_status ON parents.mrs_id = married_status.mrs_id
            WHERE prr_name = :role";
$db->query($query);
$db->bind('role', 'Ibu');
$db->execute();
$ibu = $db->resultSet();
$query = "SELECT *, DATE_FORMAT(prt_birthdate, '%e %M, %Y') AS formatted_date
            FROM parents
            LEFT JOIN parents_roles ON parents.prr_id = parents_roles.prr_id
            LEFT JOIN parents_wages ON parents.prw_id = parents_wages.prw_id
            LEFT JOIN married_status ON parents.mrs_id = married_status.mrs_id
            WHERE prr_name = :role";
$db->query($query);
$db->bind('role', 'Wali');
$db->execute();
$wali = $db->resultSet();
$query = "SELECT *, DATE_FORMAT(prt_birthdate, '%e %M, %Y') AS formatted_date
            FROM parents
            LEFT JOIN parents_roles ON parents.prr_id = parents_roles.prr_id
            LEFT JOIN parents_wages ON parents.prw_id = parents_wages.prw_id
            LEFT JOIN married_status ON parents.mrs_id = married_status.mrs_id
            WHERE prr_name = :role";
$db->query($query);
$db->bind('role', 'Others');
$db->execute();
$others = $db->resultSet();


?>
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Data Santri</title>
</head>

<body>
  <table class="table-data-santri" border="1" cellspacing="0" cellpadding="10px">
    <thead>
      <tr style="background-color: yellow;">
        <th class="tb-center">No</th>
        <th>No Gel Tes</th>
        <th>Tanggal Daftar</th>
        <th>Nama Santri</th>
        <th>Tempat Tanggal Lahir</th>
        <th>Gmail</th>
        <th>whatsapp</th>
        <th>Asal Sekolah</th>
        <th>Tau Dari Mana AM</th>
        <th>Nama Panggilan</th>
        <th>Jenis Kelamin</th>
        <th>Golongan Darah</th>
        <th>Alamat Rumah</th>
        <th>Kode Pos</th>
        <th>Telp Rumah</th>
        <th>Kecamatan</th>
        <th>Kelurahan</th>
        <th>Bahasa Sehari-hari</th>
        <th>Jarak Tempuh dari rumah Ke Pesantren</th>
        <th>Anak Ke</th>
        <th style="font-weight: bold;">Riwayat Kesehatan</th>
        <th>Berat Badan</th>
        <th>Tinggi Badan</th>
        <th>Keluhan Mata</th>
        <th>Keluhan Telinga</th>
        <th>Keluhan Lain yang sering di sampaikan Anak</th>
        <th>Riwayat Terapi</th>
        <th>Pernah dirawat di rumah sakit? jika ya, Jelaskan</th>
        <th>Hal Penting yang menurut orang tua perlu diketahui pihak pesantren / SMP Plus mengenai perkembangan anak</th>
        <th style="font-weight: bold;">Identitas Orang tua</th>
        <!-- data ayah -->
        <th>Nama Lengkap Ayah</th>
        <th>Tempat Tanggal Lahir Ayah</th>
        <th>Suku Bangsa Ayah</th>
        <th>Alamat Rumah Ayah</th>
        <th>Kode Pos Ayah</th>
        <th>Email Ayah</th>
        <th>WhatsApp Ayah</th>
        <th>Telepon Rumah Ayah</th>
        <th style="font-weight: bold;">Status Pernikahan Ayah</th>
        <th>Status Pernikahan Ayah</th>
        <th>Ayah Menikah Pada Usia</th>
        <th>Pernikahan Ayah Ke</th>
        <th style="font-weight: bold;">Riwayat Pendidikan SMP Sampai SMA Ayah</th>
        <th>SMP Ayah</th>
        <th>SMA Ayah</th>
        <th>Riwayat Perguruan Tinggi Ayah</th>
        <th>Nama Perguruan Tinggi Ayah</th>
        <th>Fakultas Ayah</th>
        <th>Jurusan Ayah</th>
        <th style="font-weight: bold;">Pekerjaan Ayah</th>
        <th>Nama Pekerjaan/Profesi Ayah</th>
        <th>Jabatan Ayah</th>
        <th>Rata-rata Gaji Ayah</th>
        <th>Alamat Kantor</th>
        <th>Telepon Kantor</th>
        <!-- data ibu -->
        <th>Nama Lengkap Ibu</th>
        <th>Tempat Tanggal Lahir Ibu</th>
        <th>Suku Bangsa Ibu</th>
        <th>Alamat Rumah Ibu</th>
        <th>Kode Pos Ibu</th>
        <th>Email Ibu</th>
        <th>WhatsApp Ibu</th>
        <th>Telepon Rumah Ibu</th>
        <th style="font-weight: bold;">Status Pernikahan Ibu</th>
        <th>Status Pernikahan Ibu</th>
        <th>Ibu Menikah Pada Usia</th>
        <th>Pernikahan Ibu Ke</th>
        <th style="font-weight: bold;">Riwayat Pendidikan SMP Sampai SMA Ibu</th>
        <th>SMP Ibu</th>
        <th>SMA Ibu</th>
        <th>Riwayat Perguruan Tinggi Ibu</th>
        <th>Nama Perguruan Tinggi Ibu</th>
        <th>Fakultas Ibu</th>
        <th>Jurusan Ibu</th>
        <th style="font-weight: bold;">Pekerjaan Ibu</th>
        <th>Nama Pekerjaan/Profesi Ibu</th>
        <th>Jabatan Ibu</th>
        <th>Rata-rata Gaji Ibu</th>
        <th>Alamat Kantor</th>
        <th>Telepon Kantor</th>
        <!-- data Wali -->
        <th style="font-weight: bold;">Data Wali</th>
        <th>Nama Lengkap Wali</th>
        <th>Tempat Tanggal Lahir Wali</th>
        <th>Suku Bangsa Wali</th>
        <th>Alamat Rumah Wali</th>
        <th>Kode Pos Wali</th>
        <th>Email Wali</th>
        <th>WhatsApp Wali</th>
        <th>Telepon Rumah Wali</th>
        <th style="font-weight: bold;">Status Pernikahan Wali</th>
        <th>Status Pernikahan Wali</th>
        <th>Wali Menikah Pada Usia</th>
        <th>Pernikahan Wali Ke</th>
        <th style="font-weight: bold;">Riwayat Pendidikan SMP Sampai SMA Wali</th>
        <th>SMP Wali</th>
        <th>SMA Wali</th>
        <th>Riwayat Perguruan Tinggi Wali</th>
        <th>Nama Perguruan Tinggi Wali</th>
        <th>Fakultas Wali</th>
        <th>Jurusan Wali</th>
        <th style="font-weight: bold;">Pekerjaan Wali</th>
        <th>Nama Pekerjaan/Profesi Wali</th>
        <th>Jabatan Wali</th>
        <th>Rata-rata Gaji Wali</th>
        <th>Alamat Kantor</th>
        <th>Telepon Kantor</th>
        <th style="font-weight: bold;">Data Keluarga Lainnya</th>
        <th>Nama</th>
        <th>Hubungan</th>
        <th>Alamat</th>
        <th>WhatsApp</th>
        <th>Telepon Rumah</th>
      </tr>
    </thead>
    <tbody>
      <!--Baris-baris data santri-->
      <?php
      $no = 1;
      foreach ($dataCs as $santri) : ?>
        <tr>
          <td><?= $no++ ?></td>
          <td><?php if ($santri['prg_id'] === 1) {
                $program = "SMP";
                echo $program;
              } else if ($santri['prg_id'] === 2) {
                $program = "SMA";
                echo $program;
              }?>.<?php if($santri['gnr_id'] === 1){
                $genders = "PA";
                echo $genders;
            }else if($santri['gnr_id'] === 2){
                $genders ="PI";
                echo $genders;
            }?>.<?=$santri['glb_id'];?>-<?=$santri['prd_name'];?>/<?=$santri['prd_name'] + 1;?>.<?=$santri['std_id'];?></td>
          <td><?= $santri['rgs_timestamp']; ?></td>
          <td><?= $santri['rgs_name']; ?></td>
          <td><?php
              if (!empty($santri['std_birth_place']) && !empty($santri['std_birthdate'])) {
                echo ucwords($santri['std_birth_place']) . ',' . date("d-m-Y", strtotime($santri['std_birthdate']));
              }
              ?></td>
          <td><?= $santri['rgs_email']; ?></td>
          <td><?= $santri['rgs_whatsapp']; ?></td>
          <td><?= $santri['rgs_school_from']; ?></td>
          <td><?= $santri['rgs_known_from']; ?></td>
          <td><?= $santri['std_nickname']; ?></td>
          <td><?= $santri['gnr_name']; ?></td>
          <td style="font-weight:bold; text-transform: uppercase;"><?= $santri['sth_blood_type']; ?></td>
          <td><?= $santri['rgs_adress']; ?></td>
          <td><?= $santri['str_postal_code']; ?></td>
          <td><?= $santri['std_home_no_telp']; ?></td>
          <td><?= $santri['str_sub_district']; ?></td>
          <td><?= $santri['str_urban_village']; ?></td>
          <td><?= $santri['std_language_home']; ?></td>
          <td><?= $santri['str_distance_ponpes_am']; ?> KM</td>
          <td><?= $santri['std_child_of']; ?>
            <?= (empty($santri['std_child_of']) == null) ? 'dari' : ''; ?>
            <?= $santri['std_number_sibling']; ?>
            <?= (empty($santri['std_child_of']) == null) ? 'bersaudara' : ''; ?>
          </td>
          <td style="border:none; background-color:orange;"></td>
          <td><?= $santri['sth_weight']; ?></td>
          <td><?= $santri['sth_height']; ?></td>
          <td><?= $santri['sth_eyes_complaint']; ?></td>
          <td><?= $santri['sth_ears_complaint']; ?></td>
          <td><?= $santri['sth_physical_complaint']; ?></td>
          <td><?= $santri['sth_therapy_history']; ?></td>
          <td><?= $santri['sth_hospitalized']; ?></td>
          <td><?= $santri['sth_important_massage']; ?></td>
          <!-- data Ayah -->
          <?php foreach ($ayah as $ac) : ?>
            <?php if ($ac['std_id'] == $santri['std_id']) : ?>
              <td style="border:none; background-color:orange;border-right:1px solid black;border-left:1px solid black;"></td>
              <td><?= $ac['prt_full_name']; ?></td>
              <td><?php
                  if (!empty($ac['prt_birth_place']) && !empty($ac['prt_birthdate'])) {
                    echo ucwords($ac['prt_birth_place']) . ',' . date("d-m-Y", strtotime($ac['prt_birthdate']));
                  }
                  ?></td>
              <td><?= $ac['prt_tribes']; ?></td>
              <td><?= $ac['prt_home_address']; ?></td>
              <td><?= $ac['prt_postal_code']; ?></td>
              <td><?= $ac['prt_email']; ?></td>
              <td><?= $ac['prt_no_hp']; ?></td>
              <td><?= $ac['prt_home_no_telp']; ?></td>
              <td style="border:none; background-color:orange;border-right:1px solid black;border-left:1px solid black;"></td>
              <?php if ($ac['mrs_id'] == 1) : ?>
                <td><?= 'Nikah'; ?></td>
              <?php elseif ($ac['mrs_id'] == 2) : ?>
                <td><?= 'Cerai Hidup'; ?></td>
              <?php elseif ($ac['mrs_id'] == 3) : ?>
                <td><?= 'Cerai Mati'; ?></td>
              <?php endif; ?>
              <td><?= $ac['prt_married_at_age']; ?></td>
              <td><?= $ac['prt_married_number']; ?></td>
              <td style="border:none; background-color:orange;border-right:1px solid black;border-left:1px solid black;"></td>
              <td><?= $ac['prt_smp']; ?></td>
              <td><?= $ac['prt_sma']; ?></td>
              <td style="border:none; background-color:orange;border-right:1px solid black;border-left:1px solid black;"></td>
              <td><?= $ac['prt_university']; ?></td>
              <td><?= $ac['prt_faculty']; ?></td>
              <td><?= $ac['prt_major']; ?></td>
              <td style="border:none; background-color:orange;border-right:1px solid black;border-left:1px solid black;"></td>
              <td><?= $ac['prt_job']; ?></td>
              <td><?= $ac['prt_job_position']; ?></td>
              <?php if ($ac['prw_id'] == 1) : ?>
                <td><?= 'Kurang dari < Rp.2000.000'; ?></td>
              <?php elseif ($ac['prw_id'] == 2) : ?>
                <td><?= 'Rp. 2.000.000 - Rp. 3.000.000'; ?></td>
              <?php elseif ($ac['prw_id'] == 3) : ?>
                <td><?= 'Rp. 3.000.000 - Rp. 4.000.000'; ?></td>
              <?php elseif ($ac['prw_id'] == 4) : ?>
                <td><?= 'Rp. 4.000.000 - Rp. 5.000.000'; ?></td>
              <?php elseif ($ac['prw_id'] == 5) : ?>
                <td><?= 'Lebih dari > Rp. 5.000.000'; ?></td>
              <?php else : ?>
                <td><?= 'Lainnya'; ?></td>
              <?php endif; ?>
              <td><?= $ac['prt_office_address']; ?></td>
              <td><?= $ac['prt_office_no_telp']; ?></td>
            <?php endif; ?>
          <?php endforeach; ?>
          <!-- data Ibu -->
          <?php foreach ($ibu as $ic) : ?>
            <?php if ($ic['std_id'] == $santri['std_id']) : ?>
              <td><?= $ic['prt_full_name']; ?></td>
              <td>
                <?php
                if (!empty($ic['prt_birth_place']) && !empty($ic['prt_birthdate'])) {
                  echo ucwords($ic['prt_birth_place']) . ',' . date("d-m-Y", strtotime($ic['prt_birthdate']));
                }
                ?>
              </td>
              <td><?= $ic['prt_tribes']; ?></td>
              <td><?= $ic['prt_home_address']; ?></td>
              <td><?= $ic['prt_postal_code']; ?></td>
              <td><?= $ic['prt_email']; ?></td>
              <td><?= $ic['prt_no_hp']; ?></td>
              <td><?= $ic['prt_home_no_telp']; ?></td>
              <td style="border:none; background-color:orange;border-right:1px solid black;border-left:1px solid black;"></td>
              <?php if ($ic['mrs_id'] == 1) : ?>
                <td><?= 'Nikah'; ?></td>
              <?php elseif ($ic['mrs_id'] == 2) : ?>
                <td><?= 'Cerai Hidup'; ?></td>
              <?php elseif ($ic['mrs_id'] == 3) : ?>
                <td><?= 'Cerai Mati'; ?></td>
              <?php endif; ?>
              <td><?= $ic['prt_married_at_age']; ?></td>
              <td><?= $ic['prt_married_number']; ?></td>
              <td style="border:none; background-color:orange;border-right:1px solid black;border-left:1px solid black;"></td>
              <td><?= $ic['prt_smp']; ?></td>
              <td><?= $ic['prt_sma']; ?></td>
              <td style="border:none; background-color:orange;border-right:1px solid black;border-left:1px solid black;"></td>
              <td><?= $ic['prt_university']; ?></td>
              <td><?= $ic['prt_faculty']; ?></td>
              <td><?= $ic['prt_major']; ?></td>
              <td style="border:none; background-color:orange;border-right:1px solid black;border-left:1px solid black;"></td>
              <td><?= $ic['prt_job']; ?></td>
              <td><?= $ic['prt_job_position']; ?></td>
              <?php if ($ic['prw_id'] == 1) : ?>
                <td><?= 'Kurang dari < Rp.2000.000'; ?></td>
              <?php elseif ($ic['prw_id'] == 2) : ?>
                <td><?= 'Rp. 2.000.000 - Rp. 3.000.000'; ?></td>
              <?php elseif ($ic['prw_id'] == 3) : ?>
                <td><?= 'Rp. 3.000.000 - Rp. 4.000.000'; ?></td>
              <?php elseif ($ic['prw_id'] == 4) : ?>
                <td><?= 'Rp. 4.000.000 - Rp. 5.000.000'; ?></td>
              <?php elseif ($ic['prw_id'] == 5) : ?>
                <td><?= 'Lebih dari > Rp. 5.000.000'; ?></td>
              <?php else : ?>
                <td><?= 'Lainnya'; ?></td>
              <?php endif; ?>
              <td><?= $ic['prt_office_address']; ?></td>
              <td><?= $ic['prt_office_no_telp']; ?></td>
            <?php endif; ?>
          <?php endforeach; ?>
          <!-- data wali -->
          <?php foreach ($wali as $wc) : ?>
            <?php if ($wc['std_id'] == $santri['std_id']) : ?>
              <td style="border:none; background-color:orange;border-right:1px solid black;border-left:1px solid black;"></td>
              <td><?= $wc['prt_full_name']; ?></td>
              <td>
                <?php
                if (!empty($wc['prt_birth_place']) && !empty($wc['prt_birthdate'])) {
                  echo ucwords($wc['prt_birth_place']) . ',' . date("d-m-Y", strtotime($wc['prt_birthdate']));
                } ?>
              </td>
              <td><?= $wc['prt_tribes']; ?></td>
              <td><?= $wc['prt_home_address']; ?></td>
              <td><?= $wc['prt_postal_code']; ?></td>
              <td><?= $wc['prt_email']; ?></td>
              <td><?= $wc['prt_no_hp']; ?></td>
              <td><?= $wc['prt_home_no_telp']; ?></td>
              <td style="border:none; background-color:orange;border-right:1px solid black;border-left:1px solid black;"></td>
              <?php if ($wc['mrs_id'] == 1) : ?>
                <td><?= 'Nikah'; ?></td>
              <?php elseif ($wc['mrs_id'] == 2) : ?>
                <td><?= 'Cerai Hidup'; ?></td>
              <?php elseif ($wc['mrs_id'] == 3) : ?>
                <td><?= 'Cerai Mati'; ?></td>
              <?php endif; ?>
              <td><?= $wc['prt_married_at_age']; ?></td>
              <td><?= $wc['prt_married_number']; ?></td>
              <td style="border:none; background-color:orange;border-right:1px solid black;border-left:1px solid black;"></td>
              <td><?= $wc['prt_smp']; ?></td>
              <td><?= $wc['prt_sma']; ?></td>
              <td style="border:none; background-color:orange;border-right:1px solid black;border-left:1px solid black;"></td>
              <td><?= $wc['prt_university']; ?></td>
              <td><?= $wc['prt_faculty']; ?></td>
              <td><?= $wc['prt_major']; ?></td>
              <td style="border:none; background-color:orange;border-right:1px solid black;border-left:1px solid black;"></td>
              <td><?= $wc['prt_job']; ?></td>
              <td><?= $wc['prt_job_position']; ?></td>
              <?php if ($wc['prw_id'] == 1) : ?>
                <td><?= 'Kurang dari < Rp.2000.000'; ?></td>
              <?php elseif ($wc['prw_id'] == 2) : ?>
                <td><?= 'Rp. 2.000.000 - Rp. 3.000.000'; ?></td>
              <?php elseif ($wc['prw_id'] == 3) : ?>
                <td><?= 'Rp. 3.000.000 - Rp. 4.000.000'; ?></td>
              <?php elseif ($wc['prw_id'] == 4) : ?>
                <td><?= 'Rp. 4.000.000 - Rp. 5.000.000'; ?></td>
              <?php elseif ($wc['prw_id'] == 5) : ?>
                <td><?= 'Lebih dari > Rp. 5.000.000'; ?></td>
              <?php else : ?>
                <td><?= 'Lainnya'; ?></td>
              <?php endif; ?>
              <td><?= $wc['prt_office_address']; ?></td>
              <td><?= $wc['prt_office_no_telp']; ?></td>
            <?php endif; ?>
          <?php endforeach; ?>
          <!-- data Others -->
          <?php foreach ($others as $oc) : ?>
            <?php if ($oc['std_id'] == $santri['std_id']) : ?>
              <td style="border:none; background-color:orange;border-right:1px solid black;border-left:1px solid black;"></td>
              <td><?= $oc['prt_full_name']; ?></td>
              <td><?= $oc['prt_relationship']; ?></td>
              <td><?= $oc['prt_home_address']; ?></td>
              <td><?= $oc['prt_no_hp']; ?></td>
              <td><?= $oc['prt_home_no_telp']; ?></td>
            <?php endif; ?>
          <?php endforeach; ?>
        </tr>
      <?php endforeach; ?>
    </tbody>
  </table>

</body>

</html>