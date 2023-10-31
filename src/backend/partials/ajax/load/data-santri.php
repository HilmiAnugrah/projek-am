<?php
require "../../../functions/functions.php";
$db = new Database();
$dataSantriQuery = "SELECT *
                    FROM students
                    NATURAL JOIN student_residence
                    LEFT JOIN gelombang ON students.glb_id = gelombang.glb_id
                    LEFT JOIN periode ON gelombang.prd_id = periode.prd_id
                    LIMIT 5";
$db->query($dataSantriQuery);
$db->execute();
$dataSantri = $db->resultSet();
?>
<div id="data-santri">
  <h1 class="text-xl font-bold text-dark-font">Data Santri PPTQAM</h1>
  <p>Data Santri Yang sudah menyelesaikan pendaftaran santri Pondok Pesantren Tahfidzul Qur'an Al Ashr Al Madani</p>
</div>
<div class="content-container my-10">
  <div class="container-table">
    <table class="table-data-santri">
      <thead>
        <tr>
          <th class="tb-center">No</th>
          <th class="th-image">Image</th>
          <th class="th-name">Nama Santri</th>
          <th>Alamat</th>
          <th>Periode</th>
          <th class="th-action">Actions</th>
        </tr>
      </thead>
      <tbody>
        <!--Baris-baris data santri-->
        <?php
        $no = 1;
        foreach ($dataSantri as $santri) : ?>
          <tr>
            <td><?= $no ?></td>
            <td><img class="image-initial w-12" src="<?= baseUrl("src/img/uploaded/person/") . $santri['std_img']; ?>" alt="Gambar Santri"></td>
            <td><?= $santri['std_full_name']; ?></td>
            <td><?= $santri['str_address']; ?></td>
            <td class="w-[150px]"><?= $santri['prd_name'] . '/' . $santri['prd_name'] + 1; ?> - Gel <?= $santri['glb_name']; ?></td>
            <td>
              <!-- Tombol aksi (contoh: edit, hapus, dll.) -->
              <div class="button-action-container">
                <a href="#view-data-santri" id="button-view-data" onclick="closeAndToggleEyeView(<?= $no; ?>);">
                  <img src="<?= baseUrl("src/img/icons/eye.svg"); ?>" alt="view" id="replace-view<?= $no++; ?>">
                </a>
                <a href="edit-data" target="_blank">
                  <img src="<?= baseUrl("src/img/icons/edit.svg"); ?>" alt="edit">
                </a>
                <a href="cetak-pdf" target="_blank">
                  <img src="<?= baseUrl("src/img/icons/cetak.svg"); ?>" alt="print">
                </a>
                <a href="#">
                  <img src="<?= baseUrl("src/img/icons/whatsapp-action.svg"); ?>" alt="whatsapp">
                </a>
              </div>
            </td>
          </tr>
        <?php endforeach; ?>

        <!-- Tambahkan baris data santri lainnya sesuai kebutuhan -->
      </tbody>
    </table>
  </div>
</div>