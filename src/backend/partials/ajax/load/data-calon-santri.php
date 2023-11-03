<?php
require "../../../functions/functions.php";
$db = new Database();
$dataSantriQuery = "SELECT rgs_id,
                            rgs_name,
                            rgs_profile,
                            rgs_tf_prove,
                            rgs_adress,
                            rgs_whatsapp
                    FROM register_student
                    WHERE rss_id = 1";
$db->query($dataSantriQuery);
$db->execute();
$jumlahDataSantri = $db->resultSet();

// pagination
// konfigurasi
$jumlahDataPerhalamanCalonSantri = 5;
$jumlahDataCalonSantri = count($jumlahDataSantri);
$jumlahHalamanCalonSantri = ceil($jumlahDataCalonSantri / $jumlahDataPerhalamanCalonSantri);
$halamanAktifCalonSantri = (isset($_GET['page'])) ? $_GET['page'] : 1;
$awalDataCalonSantri = ($jumlahDataPerhalamanCalonSantri * $halamanAktifCalonSantri) - $jumlahDataPerhalamanCalonSantri;
$dataSantriQuery .= " LIMIT $awalDataCalonSantri, $jumlahDataPerhalamanCalonSantri";
$db->query($dataSantriQuery);
$db->execute();
$dataSantri = $db->resultSet();

?>
<div id="data-santri">
  <h1 class="text-xl font-bold text-dark-font">Data Calon Santri PPTQAM</h1>
  <p>Data calon santri baru Pondok Pesantren Tahfidz Qur'an Al 'Ashr Al Madani</p>
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
                <a name="approved-santri-baru" onclick="return confirm('yakin ingin approved data?')" href="<?= baseUrl('src/backend/partials/dashboard/calon-santri/approved-data-santri.php?id=') . $santri['rgs_id']; ?>">
                  <img src="<?= baseUrl("src/img/icons/approve.svg"); ?>" alt="Approved Santri Baru">
                </a>
                <a href="#">
                  <img src="<?= baseUrl("src/img/icons/") . ($santri['rgs_tf_prove'] == null ? 'bukti-tf-gray.svg' : 'bukti-tf.svg'); ?>" alt="Bukti Transfer" onclick="showImage('<?= baseUrl('src/img/uploaded/bukti-tf/') . $santri['rgs_tf_prove']; ?>');">
                </a>
                <a href="https://wa.me/<?= $santri['rgs_whatsapp']; ?>" target="_blank">
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
  <nav aria-label="Page navigation example" class="flex justify-center items-center mt-10">
    <ul class="flex items-center -space-x-px h-10 text-base">
      <li>
        <a href="#" class="flex items-center justify-center px-4 h-10 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700" onclick="pageCalonSantri(<?= ($halamanAktifCalonSantri > 1) ? $halamanAktifCalonSantri - 1 : $halamanAktifArticle . '#'; ?>)">
          <span class="sr-only">Previous</span>
          <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4" />
          </svg>
        </a>
      </li>
      <?php for ($i = 1; $i <= $jumlahHalamanCalonSantri; $i++) : ?>
        <?php if ($halamanAktifCalonSantri == $i) : ?>
          <li>
            <a href="#" class="z-10 flex items-center justify-center px-4 h-10 leading-tight text-blue-600 border border-blue-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700" onclick="pageCalonSantri(<?= $i; ?>)"><?= $i; ?></a>
          </li>
        <?php else : ?>
          <li>
            <a href="#" class="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700" onclick="pageCalonSantri(<?= $i; ?>)"><?= $i; ?></a>
          </li>
        <?php endif ?>
      <?php endfor ?>
      <li>
        <a href="#" class="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700" onclick="pageCalonSantri(<?= ($halamanAktifCalonSantri < $jumlahHalamanCalonSantri) ? $halamanAktifCalonSantri + 1 : $halamanAktifCalonSantri . '#'; ?>)">
          <span class="sr-only">Next</span>
          <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
          </svg>
        </a>
      </li>
    </ul>
  </nav>
</div>