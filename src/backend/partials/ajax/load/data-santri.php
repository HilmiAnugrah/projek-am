<?php
require "../../../functions/functions.php";
$db = new Database();
$dataSantriQuery = "SELECT *
                    FROM students
                    NATURAL JOIN student_residence
                    LEFT JOIN gelombang ON students.glb_id = gelombang.glb_id
                    LEFT JOIN periode ON gelombang.prd_id = periode.prd_id";
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
$jumlahDataPerhalamanSantri = 5;
$jumlahDataSantri = count($jumlahDataSantri);
$jumlahHalamanSantri = ceil($jumlahDataSantri / $jumlahDataPerhalamanSantri);
$halamanAktifSantri = (isset($_GET['page'])) ? $_GET['page'] : 1;
$awalDataSantri = ($jumlahDataPerhalamanSantri * $halamanAktifSantri) - $jumlahDataPerhalamanSantri;
$dataSantriQuery .= " LIMIT $awalDataSantri, $jumlahDataPerhalamanSantri";
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
            <td><?= $no++ ?></td>
            <td><img class="image-initial w-12" src="<?= baseUrl("src/img/uploaded/person/") . $santri['std_img']; ?>" alt="Gambar Santri"></td>
            <td><?= $santri['std_full_name']; ?></td>
            <td><?= $santri['str_address']; ?></td>
            <td class="w-[150px]"><?= $santri['prd_name'] . '/' . $santri['prd_name'] + 1; ?> - Gel <?= $santri['glb_name']; ?></td>
            <td>
              <!-- Tombol aksi (contoh: edit, hapus, dll.) -->
              <div class="button-action-container">
                <a href="#view-santri?id=<?=$santri['std_id'];?>" id="button-view-data" onclick="closeAndToggleEyeView(<?= $santri['std_id']; ?>);">
                  <img src="<?= baseUrl("src/img/icons/eye.svg"); ?>" alt="view" id="replace-view<?= $santri['std_id']; ?>">
                </a>
                <a href="<?= baseUrl('edit-data'); ?>?id=<?= $santri['std_id']; ?>" target="_blank">
                  <img src="<?= baseUrl("src/img/icons/edit.svg"); ?>" alt="edit">
                </a>
                <a href="cetak-pdf?id=<?= $santri['std_id']; ?>" target="_blank">
                  <img src="<?= baseUrl("src/img/icons/cetak.svg"); ?>" alt="print">
                </a>
                <a href="https://api.whatsapp.com/send?phone=<?= $santri['std_whatsapp']; ?>&text=<?= $broadcast['wbd_content']; ?>" target="_blank">
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
        <a href="#" class="flex items-center justify-center px-4 h-10 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700" onclick="pageSantri(<?= ($halamanAktifSantri > 1) ? $halamanAktifSantri - 1 : $halamanAktifArticle . '#'; ?>)">
          <span class="sr-only">Previous</span>
          <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4" />
          </svg>
        </a>
      </li>
      <?php for ($i = 1; $i <= $jumlahHalamanSantri; $i++) : ?>
        <?php if ($halamanAktifSantri == $i) : ?>
          <li>
            <a href="#" class="z-10 flex items-center justify-center px-4 h-10 leading-tight text-blue-600 border border-blue-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700" onclick="pageSantri(<?= $i; ?>)"><?= $i; ?></a>
          </li>
        <?php else : ?>
          <li>
            <a href="#" class="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700" onclick="pageSantri(<?= $i; ?>)"><?= $i; ?></a>
          </li>
        <?php endif ?>
      <?php endfor ?>
      <li>
        <a href="#" class="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700" onclick="pageSantri(<?= ($halamanAktifSantri < $jumlahHalamanSantri) ? $halamanAktifSantri + 1 : $halamanAktifSantri . '#'; ?>)">
          <span class="sr-only">Next</span>
          <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
          </svg>
        </a>
      </li>
    </ul>
  </nav>
</div>