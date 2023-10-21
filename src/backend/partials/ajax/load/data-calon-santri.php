<?php
require "../../../functions/functions.php";
$db = new Database();
$dataSantriQuery = "SELECT rgs_name,
                            rgs_profile,
                            rgs_adress,
                            rgs_whatsapp
                    FROM register_student
                    WHERE rss_id = 1
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
          <th class="th-action">Actions</th>
        </tr>
      </thead>
      <tbody>
        <!--Baris-baris data santri-->
        <?php
        $no = 1;
        foreach ($dataSantri as $santri) : ?>
          <tr>
            <td><?= $no++ ?></td>
            <td><img class="image-initial w-12" src="<?= baseUrl("src/img/uploaded/person/") . $santri['rgs_profile']; ?>" alt="Gambar Santri"></td>
            <td><?= $santri['rgs_name']; ?></td>
            <td><?= $santri['rgs_adress']; ?></td>
            <td>
              <!-- Tombol aksi (contoh: edit, hapus, dll.) -->
              <div class="button-action-container">
                <a name="approved-santri-baru" onclick="return confirm('yakin ingin approved data?')" href="<?= baseUrl('src/backend/partials/dashboard/approved-data-santri?id=') . $santri['rgs_id']; ?>">
                  <img src="<?= baseUrl("src/img/icons/approve.svg"); ?>" alt="Approved Santri Baru">
                </a>
                <a href="#">
                  <img src="<?= baseUrl("src/img/icons/bukti-tf.svg"); ?>" alt="Bukti Transfer" onclick="showImage();">
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