<section class="mt-1 pt-8  bg-[url('../img/hiro.svg')] w-full bg-no-repeat bg-cover bg-body" style="background-position: center 100%">
    <h2 class="font-bold sm:mt-5 px-[5%] text-center text-3xl sm:text-4xl text-body">
        Program Unggulan
    </h2>
    <p class="text-base tracking-widest px-[5%] text-center sm:text-xl lg:text-2xl mt-1 text-body">
        Ayo Mencetak Generasi Imam Syafi'i
    </p>
    <div class="swiper swiper-card">
        <div class="swiper-wrapper">
            <div class="swiper-slide">

                <div class="card bg-main-purple relative overflow-hidden">
                    <img src="<?= baseUrl("src/img/program_pilihan/vector.png"); ?>" alt="al ashr al madani" class="bg-cover absolute top-[-30px] right-[-30px] w-[60%] " />
                    <img src="<?= baseUrl("src/img/program_pilihan/vector.png"); ?>" alt="" class="bg-cover absolute bottom-[-30px] left-[-30px] w-[60%]" />
                    <div class="card__image w-[80%] h-[80%] p-1 overflow-hidden relative z-10">
                        <img src="<?= baseUrl("src/img/program_pilihan/beasiswa.png"); ?>" alt="takhosus sma smp al ashr al madani" loading="lazy" class="w-full object-cover" />
                    </div>

                    <button class="card__content flex items-center flex-col -mt-12 bg-main-yellow w-[90%] p-2 rounded-xl relative z-10">
                        <h3 class="card__title text-2xl font-bold text-body">BEASISWA</h3>
                        <p class="card__text text-body">Program 3 Tahun</p>
                    </button>
                </div>

            </div>
            <div class="swiper-slide">

                <div class="card bg-second-blue overflow-hidden relative">
                    <img src="<?= baseUrl("src/img/program_pilihan/vector.png"); ?>" alt="" class="bg-cover absolute top-[-30px] right-[-30px]  w-[60%] rotate-90 " />
                    <img src="<?= baseUrl("src/img/program_pilihan/vector.png"); ?>" alt="" class="bg-cover absolute bottom-[-30px] left-[-30px] w-[60%] rotate-90" />
                    <div class="card__image w-[80%] h-[80%] p-1 overflow-hidden relative z-10">
                        <img src="<?= baseUrl("src/img/program_pilihan/smp.png"); ?>" alt="SMP Al Ashr Al Madani" loading="lazy" class="w-full object-cover" />
                    </div>

                    <button class="card__content flex items-center flex-col -mt-12 bg-main-green w-[90%] p-2 rounded-xl relative z-10">
                        <h3 class="card__title text-2xl font-bold text-body">SMP Plus</h3>
                        <p class="card__text text-center text-[1.1rem] font-normal text-body">Program 3 Tahun</p>
                    </button>
                </div>

            </div>

            <div class="swiper-slide">

                <div class="card bg-main-orange overflow-hidden relative">
                    <img src="<?= baseUrl("src/img/program_pilihan/vector.png"); ?>" alt="" class="bg-cover absolute top-[-30px] right-[-30px] w-[60%] " />
                    <img src="<?= baseUrl("src/img/program_pilihan/vector.png"); ?>" alt="" class="bg-cover absolute bottom-[-30px] left-[-30px] w-[60%] " />

                    <div class="card__image w-[80%] h-[80%] p-1 overflow-hidden relative z-10">
                        <img src="<?= baseUrl("src/img/program_pilihan/smater.png"); ?>" alt="SMA Al Ashr Al Madani" loading="lazy" class="w-full object-cover" />
                    </div>

                    <button class="card__content flex items-center flex-col -mt-12 bg-main-red w-[90%] p-2 rounded-xl relative z-10">
                        <h3 class="card__title text-2xl font-bold text-body">SMATER</h3>
                        <p class="card__text text-body">Program 3 Tahun</p>
                    </button>
                </div>

            </div>
        </div>
        <div class="lg:ml-80 md:ml-2 ml-1 prev swiper-button-prev w-8 h-8 sm:w-12 sm:h-12 rounded-full bg-second-blue p-1 top-[10rem] lg:top-32 max-md:hidden">
            <img src="<?= baseUrl("src/img/arrow-left.svg"); ?>" alt="left" class="invert hue-rotate-[160deg] contrast-200">
        </div>
        <div class="lg:mr-80 md:mr-2 mr-1 next swiper-button-next w-8 h-8 sm:w-12 sm:h-12 rounded-full bg-second-blue p-1 top-[10rem] lg:top-32 max-md:hidden">
            <img src="<?= baseUrl("src/img/arrow-right.svg"); ?>" alt="right" class="invert hue-rotate-[160deg] contrast-200">
        </div>
    </div>
</section>