<?php
require "../php/functions.php";
// get_extracurricular.php
$limitButton = intval(isset($_GET['limit']) ? $_GET['limit'] : 0);
$limit = 6 + $limitButton;

$extracurricular = query("SELECT * FROM activity LIMIT $limit");

ob_start(); // Start output buffering
?>


<!-- desktop -->
<div class="container-card-extracurricular m-auto">
  <?php foreach ($extracurricular as $ex) : ?>
    <div class="card-extracurricular" effect="cards">
      <swiper-slide style="background-color: <?= $ex['atv_background_color']; ?>;" class="overflow-hidden">
        <div>
          <img class="relative z-10 h-[210px] bg-bottom" src="./src/img/uploaded/ekstrakurikuler/<?= $ex['atv_img']; ?>" alt="<?= $ex['atv_name']; ?>" loading="lazy">
          <div class="title-extracurricular flex flex-col justify-center items-center z-10 absolute bottom-0 left-0 h-[50px] w-full text-center " style="background-color: <?= $ex['atv_button_color']; ?>;">
            <h3 class="m-auto"><?= $ex['atv_name']; ?></h3>
          </div>
          <img src="src/img/program_pilihan/Vector.png" alt="al ashr al madani" class="bg-cover absolute top-[-70px] right-[-70px] w-[50%] " />
          <img src="src/img/program_pilihan/Vector.png" alt="" class="bg-cover absolute bottom-[-40px] left-[-30px] w-[50%]" />
        </div>
      </swiper-slide>
    </div>
  <?php endforeach; ?>
</div>
<!-- end desktop -->

<div class="text-center mt-8 mb-10">
  <a href="javascript:void(0);" onclick="loadExtracurricular(<?= $limitButton + 2; ?>);" class="px-5 py-3 bg-main-green text-white rounded-full">
    Lainnya...
  </a>
</div>