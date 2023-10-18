<?php 
require "../../../functions/functions.php";
require "../../../functions/conect.php";




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
          <!-- Baris-baris data santri -->
<?php 
$no = 1;
for ($i = 0; $i < 5; $i++) :?>
  <tr>
    <td><?= $no ?></td>
    <td><img class="image-initial w-12" src="<?=baseUrl("src/img/uploaded/person/hilmi.png");?>" alt="Gambar Santri"></td>
    <td>Hilmi Anugrah Bela Negara</td>
    <td>Jl. Arcamanik, Sindanglaya, Kec. Cimenyan, Kota Bandung, Jawa Barat 40195</td>
    <td>
      <!-- Tombol aksi (contoh: edit, hapus, dll.) -->
      <div class="button-action-container">
      <a name="approved-santri-baru" onclick="return confirm('yakin ingin approved data?') "href="dashboard?approved-data-santri.php" >
          <img src="<?=baseUrl("src/img/icons/approve.svg");?>" alt="view" id="replace-view<?= $no ?>">
        </a>
        <a href="#">
          <img src="<?=baseUrl("src/img/icons/bukti-tf.svg");?>" alt="Bukti Transfer" onclick="showImage();">
        </a>
        <a href="#">
          <img src="<?=baseUrl("src/img/icons/whatsapp-action.svg");?>" alt="whatsapp">
        </a>
      </div>
    </td>
  </tr>
<?php endfor;?>


          <!-- Tambahkan baris data santri lainnya sesuai kebutuhan -->
        </tbody>
      </table>
    </div>
  </div>