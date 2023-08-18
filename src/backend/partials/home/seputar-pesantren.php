<section class="container-wrapper w-full pb-12 bg-body">
  <h2 class="font-bold text-center text-2xl py-6 sm:text-4xl text-dark-font">
    Seputar Pesantren
  </h2>
  <div class="wrapper-content w-[90%] mx-auto grid grid-cols-3 md:flex flex-rows justify-center items-center gap-[2em] lg:gap-12 sm:gap-[2em] md:gap-5">
    <div class="flex flex-col justify-bottom items-center gap-2 md:gap-1  ">
      <div class="card-seputar-pesantren items-center justify-center w-[80px] h-[70px] sm:w-[100px] sm:h-[90px] md:w-[80px] md:h-[70px] lg:w-[100px] lg:h-[90px] bg-white flex flex-col p-4 rounded-xl main-shadow">
        <img src="<?= base_url("src/img/icons/download.svg"); ?>" alt="download brosur pesantren">
      </div>
      <p class=" text-sm sm:text-base md:text-sm sm:font-medium text-center font-medium text-dark-font">Unduh Brosur</p>
    </div>
    <div>
      <a href="<?= base_url("src/pages/image-gallery/image-gallery.php"); ?>" class="flex flex-col justify-bottom items-center gap-2 md:gap-1">
        <div class="card-seputar-pesantren items-center justify-center w-[80px] h-[70px] sm:w-[100px] sm:h-[90px] md:w-[80px] md:h-[70px] lg:w-[100px] lg:h-[90px] bg-white flex flex-col p-4 rounded-xl main-shadow">
          <img src="<?= base_url("src/img/icons/image.svg"); ?>" alt="download brosur pesantren">
        </div>
        <p class=" text-sm sm:text-base md:text-sm sm:font-medium text-center font-medium text-dark-font">Image Gallery</p>
      </a>
    </div>
    <div class="flex flex-col justify-bottom items-center gap-2 md:gap-1">
      <div class="card-seputar-pesantren items-center justify-center w-[80px] h-[70px] sm:w-[100px] sm:h-[90px] md:w-[80px] md:h-[70px] lg:w-[100px] lg:h-[90px] bg-white flex flex-col p-4 rounded-xl main-shadow">
        <img src="<?= base_url("src/img/icons/kegiatan.svg"); ?>" alt="download brosur pesantren">
      </div>
      <p class=" text-sm sm:text-base md:text-sm sm:font-medium  text-center font-medium text-dark-font">Kegiatan</p>
    </div>
    <div>
      <a href="<?= base_url("src/pages/biaya/biaya.php"); ?>" class="flex flex-col justify-bottom items-center gap-2 md:gap-1">
        <div class="card-seputar-pesantren items-center justify-center w-[80px] h-[70px] sm:w-[100px] sm:h-[90px] md:w-[80px] md:h-[70px] lg:w-[100px] lg:h-[90px] bg-white flex flex-col p-4 rounded-xl main-shadow">
          <img src="<?= base_url("src/img/icons/biaya.svg"); ?>" alt="download brosur pesantren">
        </div>
        <p class=" text-sm sm:text-base md:text-sm sm:font-medium  text-center font-medium text-dark-font">Biaya</p>
      </a>
    </div>
    <div class="flex flex-col justify-bottom items-center gap-2 md:gap-1 sm:gap-4">
      <div class="card-seputar-pesantren items-center justify-center w-[80px] h-[70px] sm:w-[100px] sm:h-[90px] md:w-[80px] md:h-[70px] lg:w-[100px] lg:h-[90px] bg-white flex flex-col p-4 rounded-xl main-shadow">
        <img src="<?= base_url("src/img/icons/daftar.svg"); ?>" alt="download brosur pesantren">
      </div>
      <p class=" text-sm sm:text-base md:text-sm sm:font-medium  text-center font-medium text-dark-font">Daftar</p>
    </div>
    <div class="flex flex-col justify-bottom items-center gap-2 md:gap-1 cursor-pointer" id="menu-category">
      <div class="card-seputar-pesantren items-center justify-center w-[80px] h-[70px] sm:w-[100px] sm:h-[90px] md:w-[80px] md:h-[70px] lg:w-[100px] lg:h-[90px] bg-white flex flex-col p-4 rounded-xl main-shadow">
        <img src="<?= base_url("src/img/icons/kategori.svg"); ?>" alt="download brosur pesantren">
      </div>
      <p class="text-sm sm:text-base md:text-sm sm:font-medium  text-center font-medium text-dark-font">Semua Menu</p>
    </div>
  </div>
</section>