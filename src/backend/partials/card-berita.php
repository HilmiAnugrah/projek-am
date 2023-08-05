<section class="text-main-purple p-5" id="berita">
    <h2 class="font-bold text-4xl text-center">Berita Terbaru</h2>
    <p class="text-2xl tracking-widest text-center">
        Berita Seputar Kegiatan Santri dan Pesantren
    </p>
    <div class="mt-10 sm:flex sm:flex-wrap sm:justify-center sm:gap-10">
        <!-- desktop -->
        <div class="rounded-lg overflow-hidden sm:shadow-lg hidden sm:w-80 sm:block lg:w-[350px] h-80 bg-white">
            <img src="https://placeholder.com/440x230" alt="news" />
            <div class="p-5">
                <h3 class="font-bold text-2xl">Kajian Rutinan</h3>
                <p class="text-base">
                    Pengajian rutinan Ibu-ibu membaca Alquran, mendalami Hadis, ilmu
                    Tauhid, Akhlak dan Fiqh,
                </p>
            </div>
        </div>
        <div class="rounded-lg overflow-hidden sm:shadow-lg mb-10 hidden sm:w-80 sm:block lg:w-[350px] h-80 bg-white">
            <img src="https://placeholder.com/440x230" alt="news" />
            <div class="p-5">
                <h3 class="font-bold text-2xl">Pemeriksaan Barang</h3>
                <p class="text-base">
                    Pemeriksaan barang bawaan santri sebelum masuk pondok pesantren
                </p>
            </div>
        </div>

        <!-- mobile -->
        <div class="swiper swiper-berita sm:hidden">
            <div class="swiper-wrapper">
                <div class="swiper-slide">
                    <div class="rounded-lg overflow-hidden border-2 h-80 bg-white">
                        <img src="https://placeholder.com/440x230" alt="news" />
                        <div class="p-5">
                            <h3 class="font-bold text-2xl">Kajian Rutinan</h3>
                            <p class="text-base">
                                Pengajian rutinan Ibu-ibu membaca Alquran, mendalami
                                Hadis, ilmu Tauhid, Akhlak dan Fiqh,
                            </p>
                        </div>
                    </div>
                </div>
                <div class="swiper-slide">
                    <div class="rounded-lg overflow-hidden border-2 h-80 bg-white">
                        <img src="https://placeholder.com/440x230" alt="news" />
                        <div class="p-5">
                            <h3 class="font-bold text-2xl">Pemeriksaan Barang</h3>
                            <p class="text-base">
                                Pemeriksaan barang bawaan santri sebelum masuk pondok
                                pesantren
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <!-- If we need pagination -->
            <div class="swiper-pagination"></div>

            <!-- If we need navigation buttons -->
            <div class="swiper-button-prev">
                <img src="./src/img/arrow-left.svg" alt="left" />
            </div>
            <div class="swiper-button-next">
                <img src="./src/img/arrow-right.svg" alt="left" />
            </div>
        </div>
    </div>
    <div class="text-center mt-8">
        <a href="#" class="px-5 py-3 bg-main-purple text-white rounded-full">Cari berita lain...</a>
    </div>
</section>