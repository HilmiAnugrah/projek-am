<?php
require "../../../functions/functions.php";
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
                    WHERE rss_id = 1
                    ORDER BY CASE WHEN rgs_tf_prove IS NULL THEN 1 ELSE 0 END, rgs_tf_prove";
$db->query($dataSantriQuery);
$db->execute();
$jumlahDataSantri = $db->resultSet();

// pagination
// konfigurasi
$jumlahDataPerhalamanCalonSantri = 7;
$jumlahDataCalonSantri = count($jumlahDataSantri);
$jumlahHalamanCalonSantri = ceil($jumlahDataCalonSantri / $jumlahDataPerhalamanCalonSantri);
$halamanAktifCalonSantri = (isset($_GET['page'])) ? $_GET['page'] : 1;
$awalDataCalonSantri = ($jumlahDataPerhalamanCalonSantri * $halamanAktifCalonSantri) - $jumlahDataPerhalamanCalonSantri;
$dataSantriQuery .= " LIMIT $awalDataCalonSantri, $jumlahDataPerhalamanCalonSantri";
$db->query($dataSantriQuery);
$db->execute();
$dataSantri = $db->resultSet();

?>
<?php if (isset($_SESSION['roles']) && $_SESSION['roles'] == 'admin') : ?>
  <div id="data-santri">
    <h1 class="text-xl font-bold text-dark-font">Data Calon Santri PPTQAM</h1>
    <p>Data calon santri baru Pondok Pesantren Tahfidz Qur'an Al 'Ashr Al Madani</p>
    <form action="" method="post" class="mt-5">
      <input class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="search" placeholder="Cari Nama Calon Santri" name="keyword" id="keyword-cs" onfocus='getCs()'>
    </form>
  </div>
  <div class="content-container my-10" id="container-table-cs">
    <div class="container-table">
      <table class="table-data-santri">
        <thead>
          <tr>
            <th class="tb-center">No</th>
            <th class="th-image">Image</th>
            <th class="th-name">Nama Santri</th>
            <th>Alamat</th>
            <th>Tau dari mana pesantren</th>
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
              <td><?= $santri['rgs_known_from'];?></td>
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
    <nav aria-label="Page navigation example" class="flex justify-center items-center mt-10">
      <ul class="flex items-center -space-x-px h-10 text-base">
        <li>
          <a href="#data-calon-santri" class="flex items-center justify-center px-4 h-10 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700" onclick="pageCalonSantri(<?= ($halamanAktifCalonSantri > 1) ? $halamanAktifCalonSantri - 1 : $halamanAktifCalonSantri; ?>)">
            <span class="sr-only">Previous</span>
            <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4" />
            </svg>
          </a>
        </li>

        <?php
        // Batasi jumlah tautan halaman menjadi 5
        $minHalaman = max(1, $halamanAktifCalonSantri - 2);
        $maxHalaman = min($minHalaman + 4, $jumlahHalamanCalonSantri);

        for ($i = $minHalaman; $i <= $maxHalaman; $i++) : ?>
          <li>
            <?php if ($halamanAktifCalonSantri == $i) : ?>
              <span class="z-10 flex items-center justify-center px-4 h-10 leading-tight text-blue-600 border border-blue-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700"><?= $i; ?></span>
            <?php else : ?>
              <a href="#" class="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700" onclick="pageCalonSantri(<?= $i; ?>)"><?= $i; ?></a>
            <?php endif ?>
          </li>
        <?php endfor ?>

        <li>
          <a href="#data-calon-santri" class="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700" onclick="pageCalonSantri(<?= ($halamanAktifCalonSantri < $jumlahHalamanCalonSantri) ? $halamanAktifCalonSantri + 1 : $halamanAktifCalonSantri; ?>)">
            <span class="sr-only">Next</span>
            <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
            </svg>
          </a>
        </li>
      </ul>
    </nav>
  </div>
<?php endif; ?>