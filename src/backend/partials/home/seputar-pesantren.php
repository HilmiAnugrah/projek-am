<section class="container-wrapper w-full pb-12 bg-body">
  <h2 class="font-bold text-center text-2xl py-6 sm:text-4xl text-dark-font">
    Seputar Pesantren
  </h2>
  <div class="wrapper-content w-[90%] mx-auto grid grid-cols-3 md:flex flex-rows justify-center items-center gap-[2em] lg:gap-12 sm:gap-[2em] md:gap-5">
    <div class="flex flex-col justify-bottom items-center gap-2 md:gap-1  ">
      <a href="https://ppdb.pptqam.ponpes.id/" class="flex flex-col justify-bottom items-center gap-2 md:gap-1">
      <div class="card-seputar-pesantren items-center justify-center w-[80px] h-[70px] sm:w-[100px] sm:h-[90px] md:w-[80px] md:h-[70px] lg:w-[100px] lg:h-[90px] bg-white flex flex-col p-4 rounded-xl main-shadow">
        <img src="<?= baseUrl("src/img/icons/ppdb.svg"); ?>" alt="PPDB">
      </div>
      <p class=" text-sm sm:text-base md:text-sm sm:font-medium text-center font-medium text-dark-font">PPDB</p>
      </a>
    </div>
    <div>
      <a href="https://profile.pptqam.ponpes.id/gallery-pesantren/" class="flex flex-col justify-bottom items-center gap-2 md:gap-1">
        <div class="card-seputar-pesantren items-center justify-center w-[80px] h-[70px] sm:w-[100px] sm:h-[90px] md:w-[80px] md:h-[70px] lg:w-[100px] lg:h-[90px] bg-white flex flex-col p-4 rounded-xl main-shadow">
          <img src="<?= baseUrl("src/img/icons/image.svg"); ?>" alt="Image Gallery">
        </div>
        <p class=" text-sm sm:text-base md:text-sm sm:font-medium text-center font-medium text-dark-font">Image Gallery</p>
      </a>
    </div>
    <div class="flex flex-col justify-bottom items-center gap-2 md:gap-1">
      <a href="https://profile.pptqam.ponpes.id/kegiatan/" class="flex flex-col justify-bottom items-center gap-2 md:gap-1">
        <div class="card-seputar-pesantren items-center justify-center w-[80px] h-[70px] sm:w-[100px] sm:h-[90px] md:w-[80px] md:h-[70px] lg:w-[100px] lg:h-[90px] bg-white flex flex-col p-4 rounded-xl main-shadow">
          <img src="<?= baseUrl("src/img/icons/kegiatan.svg"); ?>" alt="Kegiatan">
        </div>
        <p class=" text-sm sm:text-base md:text-sm sm:font-medium  text-center font-medium text-dark-font">Kegiatan</p>
      </a>
    </div>
    <div>
      <a href="<?= baseUrl("biaya"); ?>" class="flex flex-col justify-bottom items-center gap-2 md:gap-1">
        <div class="card-seputar-pesantren items-center justify-center w-[80px] h-[70px] sm:w-[100px] sm:h-[90px] md:w-[80px] md:h-[70px] lg:w-[100px] lg:h-[90px] bg-white flex flex-col p-4 rounded-xl main-shadow">
          <img src="<?= baseUrl("src/img/icons/biaya.svg"); ?>" alt="Biaya">
        </div>
        <p class=" text-sm sm:text-base md:text-sm sm:font-medium  text-center font-medium text-dark-font">Biaya</p>
      </a>
    </div>
    <div>
      <a href="<?= baseUrl("daftar"); ?>" class="flex flex-col justify-bottom items-center gap-2 md:gap-1">
        <div class="card-seputar-pesantren items-center justify-center w-[80px] h-[70px] sm:w-[100px] sm:h-[90px] md:w-[80px] md:h-[70px] lg:w-[100px] lg:h-[90px] bg-white flex flex-col p-4 rounded-xl main-shadow">
          <img src="<?= baseUrl("src/img/icons/daftar.svg"); ?>" alt="Daftar">
        </div>
        <p class=" text-sm sm:text-base md:text-sm sm:font-medium  text-center font-medium text-dark-font">Daftar</p>
      </a>
    </div>
    <div class="flex flex-col justify-bottom items-center gap-2 md:gap-1 cursor-pointer" id="menu-category">
      <div class="card-seputar-pesantren items-center justify-center w-[80px] h-[70px] sm:w-[100px] sm:h-[90px] md:w-[80px] md:h-[70px] lg:w-[100px] lg:h-[90px] bg-white flex flex-col p-4 rounded-xl main-shadow">
        <img src="<?= baseUrl("src/img/icons/kategori.svg"); ?>" alt="Semua Menu">
      </div>
      <p class="text-sm sm:text-base md:text-sm sm:font-medium  text-center font-medium text-dark-font">Semua Menu</p>
    </div>
  </div>
</section>