<div id="data-santri">
    <h1>Data Santri PPTQAM</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, animi repudiandae ducimus blanditiis, esse eveniet placeat labore reiciendis nam, eos alias sunt debitis neque tempora autem facere atque! Officiis, numquam?</p>
</div>
<div class="content-container">
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
          <tr>
            <td >1</td>
            <td><img src="<?=baseUrl("src/img/uploaded/person/hilmi.png");?>" alt="Gambar Santri"></td>
            <td>Hilmi Anugrah Bela Negara</td>
            <td> Jl. Arcamanik, Sindanglaya, Kec. Cimenyan, Kota Bandung, Jawa Barat 40195</td>
            <td>
              <!-- Tombol aksi (contoh: edit, hapus, dll.) -->
              <div class="button-action-container">
                <a href="#" id="view-data">
                <img src="<?=baseUrl("src/img/icons/eye.svg");?>" alt="view" id="replace-view">
                </a>
                <a href="#">
                  <img src="<?=baseUrl("src/img/icons/edit.svg");?>" alt="edit">
                </a>
                <a href="#">
                  <img src="<?=baseUrl("src/img/icons/cetak.svg");?>" alt="print">
                </a>
                <a href="#">
                  <img src="<?=baseUrl("src/img/icons/whatsapp-action.svg");?>" alt="whatsapp">
                </a>
              </div>
            </td>
          </tr>
          <!-- Tambahkan baris data santri lainnya sesuai kebutuhan -->
        </tbody>
      </table>
    </div>
  </div>

