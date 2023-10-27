<?php 
require "../../../functions/functions.php";
?>
<div id="" class="relative h-[100vh] w-full">
    <div class="mb-8">
        <h2 class="text-sm md:text-xl font-bold text-dark-font">Create Glombang PPDB</h2>
    </div>
    <div class="w-full">
        <form action="">
            <div class="flex flex-col lg:flex-row">
                <div class="w-full lg:w-1/2 bg-white shadow-sm py-5 px-3 rounded-xl flex gap-5 flex-col lg:flex-row">
                    <select name="ekstrakurikuler" id="ekstrakurikuler" class="!py-4 sm:!py-6 px-2 rounded-xl text-xl font-semibold w-full lg:w-1/2">
                        <option value="" selected disabled class="font-medium">Edit Gelombang</option>
                        <option value="1" class="font-medium">Gel.I</option>
                        <option value="2" class="font-medium">Gel.II</option>
                        <option value="3" class="font-medium">Gel.III</option>
                    </select>
                    <select name="ekstrakurikuler" id="ekstrakurikuler" class="!py-4 sm:!py-6 px-2 rounded-xl text-xl font-semibold w-full lg:w-1/2">
                        <option value="" selected disabled class="font-medium">Periode</option>
                        <option value="" class="font-medium">2024-2025</option>
                        <option value="" class="font-medium">2023-2024</option>
                        <option value="" class="font-medium">2022-2023</option>
                        <option value="" class="font-medium">2021-2022</option>
                    </select>
                </div>
                <div class="w-full lg:w-1/2 bg-white shadow-sm py-7 px-3 rounded-xl">
                    <button class="bg-dark-font text-white rounded-xl py-3 w-full text-xl font-semibold" type="submit">Buat</button>
                </div>
            </div>
        </form>
    </div>
    <div class="mt-[200px]" >
    <table class="table-data-santri w-full">
      <thead>
        <tr>
          <th class="tb-center">No</th>
          <th>Periode</th>
          <th class="th-action">Action</th>
        </tr>
      </thead>
      <tbody>
        <!--Baris-baris data santri-->
        <?php for($i=1; $i<=10; $i++):?>
          <tr>
            <td>1</td>
            <td>2023/2024 - Gel 2</td>
            <td>
              <!-- Tombol aksi (contoh: edit, hapus, dll.) -->
              <div>
                <a href="#view-data-santri" id="button-view-data">
                  <img src="<?= baseUrl("src/img/icons/stop.svg"); ?>" alt="stop" class="image-initial">
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