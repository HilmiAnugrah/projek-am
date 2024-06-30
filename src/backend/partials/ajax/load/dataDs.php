<?php
require "../../../functions/functions.php";
$db = new Database();
if(isset($_GET['keyword'])){
$keyword = $_GET['keyword'];
$dataSantriQuery =
  "SELECT *, 
            DATE_FORMAT(std_birthdate, '%e %M, %Y') AS formatted_date,
            REPLACE(REPLACE(DATE_FORMAT(std_birthdate, '%e %M, %Y'), ',', ''), 'March', 'Maret') AS indonesian_month,
            std_created_at
            FROM students
            LEFT JOIN student_health ON students.std_id = student_health.std_id
            LEFT JOIN student_residence ON students.std_id = student_residence.std_id
            LEFT JOIN program ON students.prg_id = program.prg_id
            LEFT JOIN gelombang ON students.glb_id = gelombang.glb_id
            LEFT JOIN periode ON gelombang.prd_id = periode.prd_id
            LEFT JOIN genders ON students.gnr_id = genders.gnr_id
            WHERE std_full_name LIKE '%$keyword%' OR students.glb_id LIKE '%$keyword%' 
            ";
}elseif(isset($_GET['gel'])){
$gelombang = $_GET['gel'];
  $dataSantriQuery =
  "SELECT *, 
            DATE_FORMAT(std_birthdate, '%e %M, %Y') AS formatted_date,
            REPLACE(REPLACE(DATE_FORMAT(std_birthdate, '%e %M, %Y'), ',', ''), 'March', 'Maret') AS indonesian_month,
            std_created_at
            FROM students
            LEFT JOIN student_health ON students.std_id = student_health.std_id
            LEFT JOIN student_residence ON students.std_id = student_residence.std_id
            LEFT JOIN program ON students.prg_id = program.prg_id
            LEFT JOIN gelombang ON students.glb_id = gelombang.glb_id
            LEFT JOIN periode ON gelombang.prd_id = periode.prd_id
            LEFT JOIN genders ON students.gnr_id = genders.gnr_id
            WHERE students.glb_id = '$gelombang'
            ";
}else{
  $dataSantriQuery =
  "SELECT *, 
            DATE_FORMAT(std_birthdate, '%e %M, %Y') AS formatted_date,
            REPLACE(REPLACE(DATE_FORMAT(std_birthdate, '%e %M, %Y'), ',', ''), 'March', 'Maret') AS indonesian_month,
            std_created_at
            FROM students
            LEFT JOIN student_health ON students.std_id = student_health.std_id
            LEFT JOIN student_residence ON students.std_id = student_residence.std_id
            LEFT JOIN program ON students.prg_id = program.prg_id
            LEFT JOIN gelombang ON students.glb_id = gelombang.glb_id
            LEFT JOIN periode ON gelombang.prd_id = periode.prd_id
            LEFT JOIN genders ON students.gnr_id = genders.gnr_id
            ";
}
$db->query($dataSantriQuery);
$db->execute();
$jumlahDataSantri = $db->resultSet();

$query = "SELECT wbd_content
            FROM wa_broadcast
            WHERE wbd_name = :name";
$db->query($query);
$db->bind('name', 'data santri');
$db->execute();
$broadcast = $db->single();
$broadcast['wbd_content'] = preg_replace('/\r\n/', '%0a', $broadcast['wbd_content']);
$broadcast['wbd_content'] = preg_replace('/\s+/', '%20', $broadcast['wbd_content']);

// pagination
// konfigurasi
$jumlahDataSantri = count($jumlahDataSantri);
$dataSantriQuery .= " LIMIT 0, $jumlahDataSantri";
$db->query($dataSantriQuery);
$db->execute();
$dataSantri = $db->resultSet();

$query = "SELECT *,
            DATE_FORMAT(prt_birthdate, '%e %M, %Y') AS formatted_date,
            REPLACE(REPLACE(DATE_FORMAT(prt_birthdate, '%e %M, %Y'), ',', ''), 'March', 'Maret') AS indonesian_month,
            married_status.mrs_name AS marital_status
            FROM parents
            LEFT JOIN parents_roles ON parents.prr_id = parents_roles.prr_id
            LEFT JOIN parents_wages ON parents.prw_id = parents_wages.prw_id
            LEFT JOIN married_status ON parents.mrs_id = married_status.mrs_id
            WHERE prr_name = :role
            ";
$db->query($query);
$db->bind('role', 'Ibu');
$db->execute();
$ibu = $db->resultSet();
$query = "SELECT *,
            DATE_FORMAT(prt_birthdate, '%e %M, %Y') AS formatted_date,  
            REPLACE(REPLACE(DATE_FORMAT(prt_birthdate, '%e %M, %Y'), ',', ''), 'March', 'Maret') AS indonesian_month,
            married_status.mrs_name AS marital_status
            FROM parents
            LEFT JOIN parents_roles ON parents.prr_id = parents_roles.prr_id
            LEFT JOIN parents_wages ON parents.prw_id = parents_wages.prw_id
            LEFT JOIN married_status ON parents.mrs_id = married_status.mrs_id
            WHERE prr_name = :role";
$db->query($query);
$db->bind('role', 'Ayah');
$db->execute();
$ayah = $db->resultSet();
$query = "SELECT *, 
            DATE_FORMAT(prt_birthdate, '%e %M, %Y') AS formatted_date,  
            REPLACE(REPLACE(DATE_FORMAT(prt_birthdate, '%e %M, %Y'), ',', ''), 'March', 'Maret') AS indonesian_month
            FROM parents
            LEFT JOIN parents_roles ON parents.prr_id = parents_roles.prr_id
            LEFT JOIN parents_wages ON parents.prw_id = parents_wages.prw_id
            LEFT JOIN married_status ON parents.mrs_id = married_status.mrs_id
            WHERE prr_name = :role";
$db->query($query);
$db->bind('role', 'Wali');
$db->execute();
$wali = $db->resultSet();
$query = "SELECT *, 
            DATE_FORMAT(prt_birthdate, '%e %M, %Y') AS formatted_date
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
<div class="content-container my-10" id="container-table-ds">
  <div class="container-table">
    <table class="table-data-santri">
      <thead>
        <tr>
          <th class="tb-center">No</th>
          <th class="th-image">Image</th>
          <th class="th-name">Nama Santri</th>
          <th>Alamat</th>
          <th>Periode</th>
          <th class="th-action !w-[50px]">Actions</th>
        </tr>
      </thead>
      <tbody>
        <!--Baris-baris data santri-->
        <?php
        $no = 1;
        foreach ($dataSantri as $santri) : ?>
          <tr>
            <td><?= $no++ ?></td>
            <td><img class="image-initial w-12" src="<?= baseUrl("src/img/uploaded/person/") . $santri['std_img']; ?>" alt="Gambar Santri"></td>
            <td><?= $santri['std_full_name']; ?></td>
            <td><?= $santri['str_address']; ?></td>
            <td class="w-[150px]"><?= $santri['prd_name'] . '/' . $santri['prd_name'] + 1; ?> - Gel <?= $santri['glb_name']; ?></td>
            <td class="!w-[50px]">
              <!-- Tombol aksi (contoh: edit, hapus, dll.) -->
              <div class="group/action bg-white relative flex justify-center items-center py-3 rounded-xl">
                <img src="<?= baseUrl('src/img/icons/show-action.svg'); ?>" class="w-7 h-7" alt="show action">
                <div class="group-hover/action:flex button-action-container bg-white p-5 hidden absolute -top-2 right-0 z-10 !w-[350px]">
                <div class="group/wa">
                    <img src="<?= baseUrl('src/img/icons/whatsapp-action.svg'); ?>" alt="broadcast WA">
                    <div class="group-hover/wa:flex absolute top-5 left-0 hidden flex-col gap-2 bg-white rounded-xl p-5">
                      <a href="https://api.whatsapp.com/send?phone=<?= $santri['std_whatsapp']; ?>&text=<?= $broadcast['wbd_content']; ?>" target="_blank">
                        <img src="<?= baseUrl("src/img/icons/broadcast-whatsapp.svg"); ?>" alt="whatsapp">
                      </a>
                      <a href="<?= baseUrl('src/backend/partials/dashboard/calon-santri/clickWa.php?id=') . $santri['rgs_id']; ?>" target="_blank">
                        <img src="<?= baseUrl("src/img/icons/send-code.svg"); ?>" alt="whatsapp">
                      </a>
                    </div>
                  </div>
                  <a href="<?= baseUrl('edit-data'); ?>?id=<?= $santri['std_id']; ?>" target="_blank">
                    <img src="<?= baseUrl("src/img/icons/edit.svg"); ?>" alt="edit">
                  </a>
                  <a href="cetak-pdf?id=<?= $santri['std_id']; ?>" target="_blank">
                    <img src="<?= baseUrl("src/img/icons/cetak.svg"); ?>" alt="print">
                  </a>
                  <a href="#data-calon-santri">
                    <img src="<?= baseUrl("src/img/icons/") . ($santri['rgs_tf_prove'] == null ? 'bukti-tf-gray.svg' : 'bukti-tf.svg'); ?>" alt="Bukti Transfer" onclick="showImage('<?= baseUrl('src/img/uploaded/bukti-tf/') . $santri['rgs_tf_prove']; ?>');">
                  </a>
                  <button id="button-view-data" onclick="closeAndToggleEyeView(<?= $santri['std_id']; ?>,
                <?= htmlspecialchars(json_encode($santri), ENT_QUOTES, 'UTF-8'); ?>,
                <?= htmlspecialchars(json_encode($ibu), ENT_QUOTES, 'UTF-8'); ?>,
                <?= htmlspecialchars(json_encode($ayah), ENT_QUOTES, 'UTF-8'); ?>,
                <?= htmlspecialchars(json_encode($wali), ENT_QUOTES, 'UTF-8'); ?>,
                <?= htmlspecialchars(json_encode($others), ENT_QUOTES, 'UTF-8'); ?>);">
                    <img src="<?= baseUrl("src/img/icons/eye.svg"); ?>" alt="view" id="replace-view<?= $santri['std_id']; ?>">
                  </button>
                </div>
              </div>
            </td>
          </tr>
        <?php endforeach; ?>

        <!-- Tambahkan baris data santri lainnya sesuai kebutuhan -->
      </tbody>
    </table>
  </div>
</div>