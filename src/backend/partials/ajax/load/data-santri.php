<?php
require "../../../functions/functions.php";
$db = new Database();
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
$jumlahDataPerhalamanSantri = 7;
$jumlahDataSantri = count($jumlahDataSantri);
$jumlahHalamanSantri = ceil($jumlahDataSantri / $jumlahDataPerhalamanSantri);
$halamanAktifSantri = (isset($_GET['page'])) ? $_GET['page'] : 1;
$awalDataSantri = ($jumlahDataPerhalamanSantri * $halamanAktifSantri) - $jumlahDataPerhalamanSantri;
$dataSantriQuery .= " LIMIT $awalDataSantri, $jumlahDataPerhalamanSantri";
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

$query = "SELECT *
            FROM gelombang";
$db->query($query);
$db->execute();
$gelombang = $db->resultSet();
?>
<div id="data-santri">
  <div class="flex justify-between flex-col md:flex-row items-start gap-5">
    <div>
      <h1 class="text-xl font-bold text-dark-font">Data Santri PPTQAM</h1>
      <p>Data Santri Yang sudah menyelesaikan pendaftaran santri Pondok Pesantren Tahfidzul Qur'an Al Ashr Al Madani</p>
    </div>
    <div>
      <a href="<?= baseUrl("src/backend/partials/dashboard/export/export-data.php"); ?>" class="py-2 px-5 bg-dark-font text-base font-semibold rounded-xl text-white"><button>EXPORT</button></a>
    </div>
  </div>
  <form action="" method="post" class="mt-5 flex gap-5">
    <input class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="search" placeholder="Cari Nama Santri" name="keyword" id="keyword-ds" onfocus='getDs()'>
    <select name="gelombang" id="gelombang-filter" class="py-2 px-2 rounded" required onchange="handleSelectChange()">
    <option value="" selected disabled class="font-medium">Filter Gel</option>
    <?php foreach ($gelombang as $g) : ?>
        <option value="<?= $g['glb_id']; ?>" class="font-medium">Gel.<?= $g['glb_name']; ?></option>
    <?php endforeach ?>
</select>
  </form>
</div>
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
  <nav aria-label="Page navigation example" class="flex justify-center items-center mt-10">
    <ul class="flex items-center -space-x-px h-10 text-base">
      <li>
        <a href="#data-santri" class="flex items-center justify-center px-4 h-10 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700" onclick="pageSantri(<?= ($halamanAktifSantri > 1) ? $halamanAktifSantri - 1 : 1; ?>)">
          <span class="sr-only">Previous</span>
          <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4" />
          </svg>
        </a>
      </li>

      <?php
      // Batasi jumlah tautan halaman menjadi 5
      $minHalaman = max(1, $halamanAktifSantri - 2);
      $maxHalaman = min($minHalaman + 4, $jumlahHalamanSantri);

      for ($i = $minHalaman; $i <= $maxHalaman; $i++) : ?>
        <li>
          <?php if ($halamanAktifSantri == $i) : ?>
            <span class="z-10 flex items-center justify-center px-4 h-10 leading-tight text-blue-600 border border-blue-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700"><?= $i; ?></span>
          <?php else : ?>
            <a href="#" class="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700" onclick="pageSantri(<?= $i; ?>)"><?= $i; ?></a>
          <?php endif ?>
        </li>
      <?php endfor ?>
      <li>
        <a href="#data-santri" class="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700" onclick="pageSantri(<?= ($halamanAktifSantri < $jumlahHalamanSantri) ? $halamanAktifSantri + 1 : $jumlahHalamanSantri; ?>)">
          <span class="sr-only">Next</span>
          <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
          </svg>
        </a>
      </li>
    </ul>
  </nav>

</div>