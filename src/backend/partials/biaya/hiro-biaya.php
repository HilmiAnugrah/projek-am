<section class="max-sm:-mt-1 pt-8  bg-[url('../img/hiro-biaya.svg')] w-full lg:h-[500px] bg-no-repeat bg-cover bg-body" style="background-position: center 100%">
    <h2 class="font-bold sm:mt-5 lg:mt-12 px-[5%] text-center text-3xl sm:text-4xl text-white ">
        Buruan Pilih Program
    </h2>
    <p class="text-base tracking-widest px-[5%] text-center sm:text-xl lg:text-2xl mt-1 mb-5 lg:mb-8 text-white">
        Ayo segera wujudkan mimpi kamu bersama kami
    </p>
    <div class="swiper swiper-card">
        <div class="swiper-wrapper">
            <div class="swiper-slide">

                <div class="w-[260px] h-[200px] px-4 mx-4 flex flex-col gap-5  justify-center items-center rounded-3xl bg-main-green relative overflow-hidden">
                    <img src="<?= baseUrl("src/img/program_pilihan/vector.png"); ?>" alt="al ashr al madani" class="bg-cover absolute top-[-30px] right-[-30px] w-[60%] " />
                    <img src="<?= baseUrl("src/img/program_pilihan/vector.png"); ?> " alt="" class="bg-cover absolute bottom-[-30px] left-[-30px] w-[60%]" />
                    <h2 class="text-3xl text-body font-bold tracking-wide  ">BEASISWA</h2>
                    <button class="card__content flex items-center flex-col  bg-young-orange w-[90%] p-2 rounded-xl relative z-10">
                        <a href="#beasiswa">
                            <h3 class="card__title text-2xl font-bold text-body">Cek Biaya</h3>
                            <p class="card__text text-body">Program 3 Tahun</p>
                        </a>
                    </button>
                </div>

            </div>
            <div class="swiper-slide">

                <div class="w-[260px] h-[200px] flex flex-col gap-5 justify-center items-center rounded-3xl px-4 mx-4 bg-main-red overflow-hidden relative">
                    <img src="<?= baseUrl("src/img/program_pilihan/vector.png"); ?>" alt="" class="bg-cover absolute top-[-30px] right-[-30px]  w-[60%] rotate-90 " />
                    <img src="<?= baseUrl("src/img/program_pilihan/vector.png"); ?>" alt="" class="bg-cover absolute bottom-[-30px] left-[-30px] w-[60%] rotate-90" />
                    <h2 class="text-3xl text-body font-bold ">SMP PLUS</h2>
                    <button class="card__content flex items-center flex-col  bg-young-orange w-[90%] p-2 rounded-xl relative z-10">
                        <h3 class="card__title text-2xl font-bold text-body">Cek Biaya</h3>
                        <p class="card__text text-center text-[1.1rem] font-normal text-body">Program 3 Tahun</p>
                    </button>
                </div>

            </div>

            <div class="swiper-slide">

                <div class="w-[260px] h-[200px] px-4 mx-4 flex flex-col gap-5 justify-center items-center rounded-3xl bg-main-purple overflow-hidden relative">
                    <img src="<?= baseUrl("src/img/program_pilihan/vector.png"); ?>" alt="" class="bg-cover absolute top-[-30px] right-[-30px] w-[60%] " />
                    <img src="<?= baseUrl("src/img/program_pilihan/vector.png"); ?>" alt="" class="bg-cover absolute bottom-[-30px] left-[-30px] w-[60%] " />
                    <h2 class="text-3xl text-body font-bold ">SMATER</h2>
                    <button class="card__content flex items-center flex-col  bg-young-orange w-[90%] p-2 rounded-xl relative z-10">
                        <h3 class="card__title text-2xl font-bold text-body">Cek Biaya</h3>
                        <p class="card__text text-body">Program 3 Tahun</p>
                    </button>
                </div>

            </div>

        </div>
        <div class="lg:ml-80 md:ml-2 ml-4 p-1 prev swiper-button-prev rounded-full sm:w-12 sm:h-12 bg-main-purple top-20 max-md:hidden">
            <img src="<?= baseUrl("src/img/arrow-left.svg"); ?>" alt="left" class="invert hue-rotate-[160deg] contrast-200">
        </div>
        <div class="lg:mr-80 md:mr-2 mr-4 p-1 next swiper-button-next rounded-full sm:w-12 sm:h-12 bg-main-purple top-20 max-md:hidden">
            <img src="<?= baseUrl("src/img/arrow-right.svg"); ?>" alt="right" class="invert hue-rotate-[160deg] contrast-200">
        </div>
    </div>
</section>