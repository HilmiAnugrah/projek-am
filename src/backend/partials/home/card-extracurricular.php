<?php
$extracurricularQuery = "SELECT atv_id,
                                atv_name,
                                atv_img,
                                atv_background_color,
                                atv_button_color
                        FROM activity LIMIT 6";
$db->query($extracurricularQuery);
$db->execute();
$extracurricular = $db->resultSet();
?>

<section class="container-extracurricular p-5 bg-white">
  <div class="title text-center">
    <h2 class="font-bold text-4xl px-[5%] text-center">Ekstrakurikuler</h2>
    <p class="text-base tracking-widest px-[5%] text-center sm:text-xl lg:text-2xl mt-1 text-main-green">Tingkatkan Skill Anda Dengan Kami</p>
  </div>

  <!-- mobile -->
  <swiper-container class="mySwiper display-extracurricular w-[85%] h-[200px] sm:w-[70%] sm:h-[280px]" effect="cards" grab-cursor="true" autoplay-delay="2000" autoplay-disable-on-interaction="false">
    <?php foreach ($extracurricular as $ex) : ?>
      <swiper-slide style="background-color: <?= $ex['atv_background_color']; ?>;" class=" overflow-hidden">
        <div>
          <img class="relative z-10 bg-cover h-[200px]" src="./src/img/uploaded/ekstrakurikuler/<?= $ex['atv_img']; ?>" alt="<?= $ex['atv_name']; ?>" loading="lazy">
          <div class="title-extracurricular flex flex-col justify-center  z-10 absolute bottom-0 left-0 h-[40px] w-full text-center items-center sm:h-[60px]" style="background-color: <?= $ex['atv_button_color']; ?>;">
            <h3 class="m-auto "><?= $ex['atv_name']; ?></h3>
          </div>
          <img src="<?=baseUrl("src/img/program_pilihan/vector.png");?>" alt="al ashr al madani" class="bg-cover absolute top-[-25px] right-[-30px] w-[40%] " />
          <img src="<?=baseUrl("src/img/program_pilihan/vector.png");?>" alt="" class="bg-cover absolute bottom-[10px] left-[-10px] w-[40%]" />
        </div>
      </swiper-slide>
    <?php endforeach; ?>
  </swiper-container>
  <!-- end mobile -->

  <div id="extracurricular-container">
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
              <img src="<?=baseUrl("src/img/program_pilihan/vector.png");?>" alt="al ashr al madani" class="bg-cover absolute top-[-70px] right-[-70px] w-[50%] " />
              <img src="<?=baseUrl("src/img/program_pilihan/vector.png");?>" alt="" class="bg-cover absolute bottom-[-40px] left-[-30px] w-[50%]" />
            </div>
          </swiper-slide>
        </div>
      <?php endforeach; ?>
    </div>
    <!-- end desktop -->
    <div class="text-center mt-8 mb-10">
      <a href="javascript:void(0);" onclick="loadExtracurricular(2);" class="px-5 py-3 bg-main-green text-white rounded-full">
        Lainnya...
      </a>
    </div>
  </div>

</section>