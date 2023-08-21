<section id="wrapper-menu-popup" class="transition duration-[0.1s] ease-in translate-y-0 hidden bg-black/50 w-full h-full fixed top-0 left-0 z-[9999]">
  <div class="menu-popup bg-body w-full h-[70%] translate-y-[300px] delay-[0.3s] transition duration-700 ease-in absolute bottom-0 rounded-t-[50px] ">
    <button class="close absolute block w-16 h-16 rounded-lg border-none -top-11 right-8  lg:right-40"><img src="<?= base_url("src/img/icons/close.svg"); ?>" class=" w-full justify-end block text-main" alt="close"></button>
    <div class="wrapper-content w-[90%] relative mx-auto grid grid-cols-3 md:flex flex-row  justify-center items-center gap-2 sm:gap-6 md:gap-12 gap-y-8 top-12">
      <div class="flex flex-col justify-bottom items-center gap-2 md:gap-1">
        <a href="src/pages/">
          <div class="card-seputar-pesantren items-center justify-center w-[80px] h-[70px] sm:w-[100px] sm:h-[90px] md:w-[80px] md:h-[70px] lg:w-[100px] lg:h-[90px] bg-white flex flex-col p-4 rounded-xl main-shadow">
            <img src="<?= base_url("src/img/icons/download.svg"); ?>" alt="download brosur pesantren">
          </div>
          <p class="text-sm sm:text-base md:text-sm sm:font-medium  text-center font-medium text-dark-font">Unduh Brosur</p>
        </a>
      </div>
      <div>
        <a href="<?= base_url("src/pages/image-gallery/image-gallery.php"); ?>" class="flex flex-col justify-bottom items-center gap-2 md:gap-1">
          <div class="card-seputar-pesantren items-center justify-center w-[80px] h-[70px] sm:w-[100px] sm:h-[90px] md:w-[80px] md:h-[70px] lg:w-[100px] lg:h-[90px] bg-white flex flex-col p-4 rounded-xl main-shadow">
            <img src="<?= base_url("src/img/icons/image.svg"); ?>" alt="image">
          </div>
          <p class="text-sm sm:text-base md:text-sm sm:font-medium  text-center font-medium text-dark-font">Image Gallery</p>
        </a>
      </div>
      <div class="flex flex-col justify-bottom items-center gap-2 md:gap-1">
        <div class="card-seputar-pesantren items-center justify-center w-[80px] h-[70px] sm:w-[100px] sm:h-[90px] md:w-[80px] md:h-[70px] lg:w-[100px] lg:h-[90px] bg-white flex flex-col p-4 rounded-xl main-shadow">
          <img src="<?= base_url("src/img/icons/kegiatan.svg"); ?>" alt="kegiatan pesantren">
        </div>
        <p class="text-sm sm:text-base md:text-sm sm:font-medium  text-center font-medium text-dark-font">Kegiatan</p>
      </div>
      <div class="flex flex-col justify-bottom items-center gap-2 md:gap-1">
        <a href="<?= base_url("src/pages/biaya/biaya.php"); ?>" class="flex flex-col justify-bottom items-center gap-2 md:gap-1">
          <div class="card-seputar-pesantren items-center justify-center w-[80px] h-[70px] sm:w-[100px] sm:h-[90px] md:w-[80px] md:h-[70px] lg:w-[100px] lg:h-[90px] bg-white flex flex-col p-4 rounded-xl main-shadow">
            <img src="<?= base_url("src/img/icons/biaya.svg"); ?>" alt="biaya">
          </div>
          <p class="text-sm sm:text-base md:text-sm sm:font-medium  text-center font-medium text-dark-font">Biaya</p>
        </a>
      </div>
      <div class="flex flex-col justify-bottom items-center gap-2 md:gap-1 sm:gap-4">
        <div class="card-seputar-pesantren items-center justify-center w-[80px] h-[70px] sm:w-[100px] sm:h-[90px] md:w-[80px] md:h-[70px] lg:w-[100px] lg:h-[90px] bg-white flex flex-col p-4 rounded-xl main-shadow">
          <img src="<?= base_url("src/img/icons/daftar.svg"); ?>" alt="daftar">
        </div>
        <p class="text-sm sm:text-base md:text-sm sm:font-medium  text-center font-medium text-dark-font">Daftar</p>
      </div>
      <div class="flex flex-col justify-bottom items-center gap-2 md:gap-1" id="menu-category">
        <div class="card-seputar-pesantren items-center justify-center w-[80px] h-[70px] sm:w-[100px] sm:h-[90px] md:w-[80px] md:h-[70px] lg:w-[100px] lg:h-[90px] bg-white flex flex-col p-4 rounded-xl main-shadow">
          <img src="<?= base_url("src/img/icons/kategori.svg"); ?>" alt="kategori">
        </div>
        <p class="text-sm sm:text-base md:text-sm sm:font-medium  text-center font-medium text-dark-font">Semua Menu</p>
      </div>
    </div>
  </div>
</section>