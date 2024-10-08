<?php
require "../../../functions/functions.php";

$db = new Database();
$query = "SELECT prd_id,
                  prd_name
            FROM periode
            ORDER BY prd_id DESC";
$db->query($query);
$db->execute();
$periode = $db->resultSet();

$query = "SELECT glb_id,
                  glb_name,
                  glb_status,
                  prd_id,
                  prd_name
          FROM gelombang
          NATURAL JOIN periode
          ORDER BY glb_id DESC";
$db->query($query);
$db->execute();
$createdGelombang = $db->resultSet();
?>
<?php if (isset($_SESSION['roles']) && $_SESSION['roles'] == 'admin') : ?>
<div id="" class="relative h-[100vh] w-full">
  <div class="mb-8">
    <h2 class="text-sm md:text-xl font-bold text-dark-font">Create Gelombang PPDB</h2>
  </div>
  <div class="w-full">
    <form action="<?= baseUrl('src/backend/partials/dashboard/gelombang/createGelombang.php'); ?>" method="post">
      <div class="flex flex-col lg:flex-row">
        <div class="w-full lg:w-1/2 bg-white shadow-sm py-5 px-3 rounded-xl flex gap-5 flex-col lg:flex-row">
          <input type="text" placeholder="New Gelombang" value="New Gelombang" disabled>
          <select name="periode" id="periode" class="!py-4 sm:!py-6 px-2 rounded-xl text-xl font-semibold w-full lg:w-1/2">
            <?php foreach ($periode as $p) : ?>
              <option value="<?= $p['prd_id']; ?>" class="font-medium"><?= $p['prd_name'] . '-' . $p['prd_name'] + 1; ?></option>
            <?php endforeach ?>
          </select>
        </div>
        <div class="w-full lg:w-1/2 bg-white shadow-sm py-7 px-3 rounded-xl">
          <button onclick="confirm('Ingin Mengganti Gelombang?')" name="buttonBuat" class="bg-dark-font text-white rounded-xl py-3 w-full text-xl font-semibold" type="submit">Buat</button>
        </div>
      </div>
    </form>
  </div>
  <div class="mt-[200px]">
    <table class="table-data-santri w-full">
      <thead>
        <tr>
          <th>Periode</th>
          <th class="th-action">Status</th>
        </tr>
      </thead>
      <tbody>
        <!--Baris-baris data santri-->
        <?php foreach ($createdGelombang as $gel) : ?>
          <tr>
            <td><?= $gel['prd_name'] . '/' . $gel['prd_name'] + 1; ?> - Gel <?= $gel['glb_name']; ?></td>
            <td>
              <!-- Tombol aksi (contoh: edit, hapus, dll.) -->
              <div>
                <?php if ($gel['glb_status'] === 'active') { ?>
                  <div class="w-[100px] p-2 bg-green-600 text-white text-sm image-initial rounded-md">
                    <img src="<?= baseUrl('src/img/icons/in-progress-icon.svg'); ?>" width="20" alt="stoped" class="image-initial">
                    active
                  </div>
                <?php } else { ?>
                  <img src="<?= baseUrl("src/img/icons/stop.svg"); ?>" alt="stop" class="image-initial">
                <?php }; ?>
              </div>
            </td>
          </tr>
        <?php endforeach; ?>

        <!-- Tambahkan baris data santri lainnya sesuai kebutuhan -->
      </tbody>
    </table>
  </div>
</div>
<?php endif;?>