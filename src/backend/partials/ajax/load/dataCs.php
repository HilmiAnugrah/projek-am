<?php
require "../../../functions/functions.php";
  $keyword = $_GET['keyword'];
$db = new Database();
$dataSantriQuery = "SELECT rgs_id,
                            rgs_name,
                            rgs_profile,
                            rgs_tf_prove,
                            rgs_code,
                            rgs_click,
                            rgs_adress,
                            rgs_whatsapp,
                            rgs_known_from,
                            YEAR(rgs_timestamp) AS rgs_year
                    FROM register_student
                    WHERE rss_id = 1 AND rgs_name LIKE '%$keyword%'
                    ORDER BY CASE WHEN rgs_tf_prove IS NULL THEN 1 ELSE 0 END, rgs_tf_prove";
$db->query($dataSantriQuery);
$db->execute();
$jumlahDataSantri = $db->resultSet();


$jumlahDataCalonSantri = count($jumlahDataSantri);
$dataSantriQuery .= " LIMIT 0, $jumlahDataCalonSantri";
$db->query($dataSantriQuery);
$db->execute();
$dataSantri = $db->resultSet();

?>
<?php if (isset($_SESSION['roles']) && $_SESSION['roles'] == 'admin') : ?>
  
  <div class="content-container my-10" id="container-table-cs">
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
                <div class="button-action-container flex justify-center items-center">
                  <?php if (!is_null($santri['rgs_tf_prove']) && $santri['rgs_click'] > 0) : ?>
                    <a name="approved-santri-baru" onclick="return confirm('yakin ingin approved data?')" href="<?= baseUrl('src/backend/partials/dashboard/calon-santri/approved-data-santri.php?id=') . $santri['rgs_id']; ?>">
                      <img src="<?= baseUrl("src/img/icons/approve.svg"); ?>" alt="Approved Santri Baru">
                    </a>
                  <?php endif ?>
                  <a href="#data-calon-santri">
                    <img src="<?= baseUrl("src/img/icons/") . ($santri['rgs_tf_prove'] == null ? 'bukti-tf-gray.svg' : 'bukti-tf.svg'); ?>" alt="Bukti Transfer" onclick="showImage('<?= baseUrl('src/img/uploaded/bukti-tf/') . $santri['rgs_tf_prove']; ?>');">
                  </a>
                  <a href="<?= baseUrl('src/backend/partials/dashboard/calon-santri/clickWa.php?id=') . $santri['rgs_id']; ?>" target="_blank">
                    <img src="<?= baseUrl("src/img/icons/whatsapp-action.svg"); ?>" alt="whatsapp">
                  </a>
                  <a href="<?= baseUrl('src/backend/partials/dashboard/calon-santri/delete-rgs.php?id=') . $santri['rgs_id']; ?>" onclick="return confirm('Yakin Hapus Data?\n<?= $santri['rgs_name']; ?>');">
                    <img src="<?= baseUrl("src/img/icons/delete.svg"); ?>" alt="Delete">
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
<?php endif; ?>