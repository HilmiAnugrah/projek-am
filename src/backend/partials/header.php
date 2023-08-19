<?php
$protocol = isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] === 'on' ? 'https' : 'http';
$host = $_SERVER['HTTP_HOST'];
$url = $protocol . '://' . $host . $_SERVER['REQUEST_URI'];
$url = $_SERVER['REQUEST_URI'];
$parsedUrl = parse_url($url);
$path = $parsedUrl['path'];
?>

<header>
  <div id="nav-wrapper" class=" <?= checkURI($url, $path); ?> px-7 text-body lg:justify-around absolute w-full flex z-50 items-center top-0 left-0 shadow-lg  lg:text-white">

    <div class="my-[14px] sm:my-[1.1em] ">
      <a href="<?= base_url(); ?>" class="flex items-center">
        <img src="<?= base_url("src/img/logo.svg"); ?>" alt="logo" class="w-[50px] sm:w-[60px]" />
        <span class="ml-3 text-lg font-semibold tracking-wide sm:text-xl">Al 'Ashr Al Madani</span>
      </a>
    </div>
    <button id="hamburger-menu" class="block absolute right-4 z-10 lg:hidden" type="button">
      <div class="flex flex-col mr-">
        <span class="hamburger-line"></span>
        <span class="hamburger-line !w-[20px] self-end"></span>
        <span class="hamburger-line"></span>
      </div>
    </button>
    <nav id="nav-menu" class="hidden overflow-y-auto lg:overflow-y-visible text-dark-font bg-white lg:bg-body max-lg:w-full max-lg:h-[100vh] absolute top-[100%] left-0 lg:block lg:text-white lg:static lg:bg-transparent">
      <ul class="px-6 lg:flex lg:items-center">
        <li class="max-lg:mt-8 font-bold lg:mr-8">
          <a href="<?= base_url(); ?>" class="block">Home</a>
        </li>
        <li class="max-lg:mt-8 lg:mr-8 font-bold relative">
          <div class="group/about">
            <button type="button" class="inline-flex w-full items-center gap-x-2" id="about">
              About
              <svg xmlns=" http://www.w3.org/2000/svg" width="15" class="lg:group-hover/about:rotate-180 transition-all" viewBox="0 0 20 20">
                <path d="M10 0C4.486 0 0 4.486 0 10C0 15.514 4.486 20 10 20C15.514 20 20 15.514 20 10C20 4.486 15.514 0 10 0ZM10 14.414L4.293 8.707L5.707 7.293L10 11.586L14.293 7.293L15.707 8.707L10 14.414Z" fill="currentColor" />
              </svg>
            </button>
            <div id="dropdown-about" class="hidden lg:absolute scale-0 lg:transition-all lg:right-0 lg:z-10 lg:origin-top-right lg:rounded-lg bg-body lg:shadow-lg lg:ring-1 lg:w-[500px] lg:ring-black lg:ring-opacity-5 p-4 lg:group-hover/about:scale-100 lg:group-hover/about:block rounded-lg lg:translate-x-1/3">
              <div class="bg-body lg:bg-white rounded-lg flex flex-col gap-1">
                <a href="#" class="text-second-blue flex gap-3 px-4 items-center py-2 text-sm lg:text-xl font-bold hover:bg-young-blue tracking-wide rounded-lg bg-white">
                  <div class="bg-body w-7 h-7 lg:w-10 lg:h-10 rounded-lg flex justify-center items-center">
                    <svg class="w-7 h-7" viewBox="0 0 304 320" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <title>Profile Pondok Pesantren Tahfidz Al Ashr Al Madani</title>
                      <desc>sejarah pondok pesantren dari mulai berdiri sampai sekarang</desc>
                      <path d="M271.434 0H111.975C94.225 0 79.8623 14.3627 79.8623 32.1123V122.17L4.7419 196.332C2.49109 198.558 0.952352 201.403 0.320977 204.505C-0.310398 207.607 -0.00594793 210.827 1.19569 213.756C2.39733 216.684 4.44197 219.19 7.07015 220.955C9.69833 222.72 12.7915 223.664 15.9572 223.668V303.549C15.9572 307.786 17.6404 311.85 20.6366 314.846C23.6327 317.842 27.6963 319.525 31.9335 319.525H287.554C291.791 319.525 295.855 317.842 298.851 314.846C301.847 311.85 303.53 307.786 303.53 303.549V32.0963C303.53 14.3627 289.183 0 271.434 0ZM142.521 209.465V287.573H47.9098V198.617L95.6309 151.503L142.521 199.48V209.465ZM175.72 111.834H143.767V79.8813H175.72V111.834ZM239.625 239.644H207.672V207.691H239.625V239.644ZM239.625 175.739H207.672V143.786H239.625V175.739ZM239.625 111.834H207.672V79.8813H239.625V111.834Z" fill="#0397C9" />
                      <path d="M79.8643 207.691H111.817V239.643H79.8643V207.691Z" fill="#0397C9" />
                    </svg>
                  </div>
                  Profile Pondok Pesantren
                </a>
                <a href="#" class="text-main-purple flex gap-3 px-4 items-center py-2 text-sm lg:text-xl font-bold hover:bg-young-blue tracking-wide rounded-lg bg-white">
                  <div class="bg-body w-7 h-7 lg:w-10 lg:h-10 rounded-lg flex justify-center items-center">
                    <svg class="w-7 h-7" viewBox="0 0 304 304" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <title>Pendiri Pondok Pesantren Tahfidz Al Ashr Al Madani</title>
                      <desc>pendiri pondok pesantren tahfidz al madani</desc>
                      <path d="M151.765 0C69.4932 0 0 69.4932 0 151.765C0 234.037 69.4932 303.53 151.765 303.53C234.037 303.53 303.53 234.037 303.53 151.765C303.53 69.4932 234.037 0 151.765 0ZM151.765 75.8825C177.975 75.8825 197.295 95.187 197.295 121.412C197.295 147.637 177.975 166.941 151.765 166.941C125.57 166.941 106.236 147.637 106.236 121.412C106.236 95.187 125.57 75.8825 151.765 75.8825ZM74.2738 224.187C87.8871 204.154 110.591 190.799 136.589 190.799H166.941C192.954 190.799 215.643 204.154 229.256 224.187C209.861 244.949 182.346 258.001 151.765 258.001C121.184 258.001 93.6694 244.949 74.2738 224.187Z" fill="#51218E" />
                    </svg>

                  </div>
                  Pendiri Pesantren
                </a>
                <a href="#" class="text-second-green flex gap-3 px-4 items-center py-2 text-sm lg:text-xl font-bold hover:bg-young-blue tracking-wide rounded-lg bg-white">
                  <div class="bg-body w-7 h-7 lg:w-10 lg:h-10 rounded-lg flex justify-center items-center">
                    <svg class="w-7 h-7" viewBox="0 0 304 321" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <title>Pimpinan Pondok pesantren Tahfidz Al Ashr Al Madani</title>
                      <desc>Pimpinan Pondok pesantren Tahfidz Al Ashr Al Madani</desc>
                      <path d="M75.8825 75.8825C75.8825 117.719 109.928 151.765 151.765 151.765C193.602 151.765 227.647 117.719 227.647 75.8825C227.647 34.0459 193.602 0 151.765 0C109.928 0 75.8825 34.0459 75.8825 75.8825ZM286.667 320.393H303.53V303.53C303.53 238.457 250.564 185.491 185.491 185.491H118.039C52.9491 185.491 0 238.457 0 303.53V320.393H286.667Z" fill="#B1D136" />
                    </svg>

                  </div>
                  Pimpinan Pesnatren
                </a>
                <a href="#" class="text-old-yellow flex gap-3 px-4 items-center py-2 text-sm lg:text-xl font-bold hover:bg-young-blue tracking-wide rounded-lg bg-white">
                  <div class="bg-body w-7 h-7 lg:w-10 lg:h-10 rounded-lg flex justify-center items-center">
                    <svg class="w-7 h-7" viewBox="0 0 304 269" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <title>Asatidz Asatidzah</title>
                      <desc>para asatidz asatidzah pondok pesantren tahfidz al ashr al madani</desc>
                      <path d="M119.817 141.097C155.059 141.097 183.719 112.437 183.719 77.1945C183.719 41.9524 155.059 13.2922 119.817 13.2922C84.5747 13.2922 55.9145 41.9524 55.9145 77.1945C55.9145 112.437 84.5747 141.097 119.817 141.097ZM143.78 157.072H95.8534C42.9903 157.072 0 200.063 0 252.926V268.901H239.634V252.926C239.634 200.063 196.643 157.072 143.78 157.072Z" fill="#DFA100" />
                      <path d="M233.301 125.888C243.031 109.306 247.233 90.0592 245.299 70.9315C242.439 42.4311 226.528 17.2376 200.519 0L182.866 26.6153C200.743 38.4692 211.622 55.3554 213.508 74.1267C214.377 82.8509 213.291 91.6592 210.328 99.9109C207.366 108.163 202.601 115.65 196.382 121.83L177.339 140.873L203.187 148.461C270.796 168.271 271.579 236.263 271.579 236.95H303.53C303.53 208.369 288.257 152.519 233.301 125.888Z" fill="#DFA100" />
                    </svg>


                  </div>
                  Asatidz Asatidzah
                </a>
                <a href="#" class="text-dark-font flex gap-3 px-4 items-center py-2 text-sm lg:text-xl font-bold hover:bg-young-blue tracking-wide rounded-lg bg-white">
                  <div class="bg-body w-7 h-7 lg:w-10 lg:h-10 rounded-lg flex justify-center items-center">
                    <svg class="w-7 h-7" viewBox="0 0 304 304" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <title>Guru Guru</title>
                      <desc>para guru guru pondok pesantren tahfidz al ashr al madani</desc>
                      <path d="M273.177 0H91.0591C83.009 0 75.2885 3.1979 69.5962 8.89019C63.904 14.5825 60.7061 22.3029 60.7061 30.353V212.471C60.7061 220.521 63.904 228.242 69.5962 233.934C75.2885 239.626 83.009 242.824 91.0591 242.824H273.177C281.227 242.824 288.948 239.626 294.64 233.934C300.332 228.242 303.53 220.521 303.53 212.471V30.353C303.53 22.3029 300.332 14.5825 294.64 8.89019C288.948 3.1979 281.227 0 273.177 0ZM182.118 37.9413C192.181 37.9413 201.831 41.9387 208.947 49.054C216.062 56.1694 220.059 65.8199 220.059 75.8826C220.059 85.9452 216.062 95.5957 208.947 102.711C201.831 109.826 192.181 113.824 182.118 113.824C172.056 113.824 162.405 109.826 155.29 102.711C148.174 95.5957 144.177 85.9452 144.177 75.8826C144.177 65.8199 148.174 56.1694 155.29 49.054C162.405 41.9387 172.056 37.9413 182.118 37.9413ZM258.001 197.295H106.236V193.501C106.236 165.439 140.443 136.589 182.118 136.589C223.793 136.589 258.001 165.439 258.001 193.501V197.295Z" fill="#1F2D3D" />
                      <path d="M30.353 91.0591H0V273.177C0 289.917 13.6133 303.53 30.353 303.53H212.471V273.177H30.353V91.0591Z" fill="#1F2D3D" />
                    </svg>



                  </div>
                  Guru Guru
                </a>

              </div>
            </div>
          </div>
        </li>
        <li class="max-lg:mt-8 lg:mr-8 font-bold relative">
          <div class="group/ppdb">
            <button type="button" class="inline-flex w-full items-center gap-x-2" id="ppdb">
              PPDB
              <svg xmlns=" http://www.w3.org/2000/svg" width="15" class="lg:group-hover/ppdb:rotate-180 transition-all" viewBox="0 0 20 20">
                <path d="M10 0C4.486 0 0 4.486 0 10C0 15.514 4.486 20 10 20C15.514 20 20 15.514 20 10C20 4.486 15.514 0 10 0ZM10 14.414L4.293 8.707L5.707 7.293L10 11.586L14.293 7.293L15.707 8.707L10 14.414Z" fill="currentColor" />
              </svg>
            </button>
            <div id="dropdown-ppdb" class="hidden lg:absolute scale-0 lg:transition-all lg:right-0 lg:z-10 lg:origin-top-right rounded-lg bg-body lg:shadow-lg lg:ring-1 lg:ring-opacity-5 lg:group-hover/ppdb:scale-100 lg:group-hover/ppdb:block lg:p-4 p-4  lg:w-[450px] lg:translate-x-1/3">
              <div class="bg-body lg:bg-white rounded-lg flex flex-col gap-1">
                <a href="#" class="text-main flex gap-3 px-4 items-center py-3 lg:py-2 text-sm sm:text-base lg:text-xl lg:font-bold
                 tracking-wide hover:bg-young-blue bg-white rounded-lg">
                  <div class="bg-body w-7 h-7 lg:w-10 lg:h-10 rounded-lg flex justify-center items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-7 h-7" viewBox="0 0 300 302" fill="none">
                      <path d="M33.3333 301.526H266.667C285.05 301.526 300 286.5 300 268.023V33.5029C300 15.026 285.05 0 266.667 0H33.3333C14.95 0 0 15.026 0 33.5029V134.028H116.633V67.0058L216.633 150.763L116.633 234.52V167.531H0V268.023C0 286.5 14.95 301.526 33.3333 301.526Z" fill="#02C2F2" />
                    </svg>
                  </div>
                  Informasi PPDB 2023-2024
                </a>
                <a href="#" class="text-main-orange bg-white flex gap-3 px-4 items-center py-3 lg:py-2 text-sm sm:text-base lg:text-xl lg:font-bold tracking-wide hover:bg-young-blue rounded-lg">
                  <div class="bg-body w-7 h-7 lg:w-10 lg:h-10 rounded-lg flex justify-center items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-7 h-7" viewBox="0 0 305 245" fill="none">
                      <path d="M274.112 0.808838H31.2907C14.5512 0.808838 0.937988 14.4648 0.937988 31.257V213.946C0.937988 230.738 14.5512 244.394 31.2907 244.394H274.112C290.852 244.394 304.465 230.738 304.465 213.946V31.257C304.465 14.4648 290.852 0.808838 274.112 0.808838ZM46.4671 69.3172C46.4671 65.1153 49.8666 61.7052 54.0553 61.7052H99.5843C103.773 61.7052 107.173 65.1153 107.173 69.3172V99.7654C107.173 103.967 103.773 107.377 99.5843 107.377H54.0553C49.8666 107.377 46.4671 103.967 46.4671 99.7654V69.3172ZM137.525 183.498H46.4671V153.05H137.525V183.498ZM258.936 183.498H167.878V153.05H258.936V183.498Z" fill="#F48120" />
                    </svg>
                  </div>
                  Investasi Pendaftaran Santri
                </a>
              </div> 
            </div>
          </div>
        </li>
        <li class="max-lg:mt-8 lg:mr-8 font-bold relative">
          <div class="group/contact">
            <button type="button" class="inline-flex w-full items-center gap-x-2" id="contact">
              Contact
              <svg xmlns=" http://www.w3.org/2000/svg" width="15" class="lg:group-hover/contact:rotate-180 transition-all" viewBox="0 0 20 20">
                <path d="M10 0C4.486 0 0 4.486 0 10C0 15.514 4.486 20 10 20C15.514 20 20 15.514 20 10C20 4.486 15.514 0 10 0ZM10 14.414L4.293 8.707L5.707 7.293L10 11.586L14.293 7.293L15.707 8.707L10 14.414Z" fill="currentColor" />
              </svg>
            </button>
            <div id="dropdown-contact" class="hidden lg:absolute scale-y-0 lg:transition lg:right-0 lg:z-10 lg:w-[400px] lg:origin-top-right rounded-lg lg:bg-body lg:shadow-lg lg:ring-1 lg:ring-black lg:ring-opacity-5 p-4 lg:group-hover/contact:scale-100 lg:group-hover/contact:block lg:translate-x-1/3">
              <div class="bg-body p-4 lg:bg-white rounded-lg flex flex-col gap-1">
                <a href="https://api.whatsapp.com/send?phone=62895708114777&text=Assalamualaikum%20saya%20ingin%20bertanya%20tentang%20pesantren...%0Asaya%20mendapatkan%20nomor%20ini%20dari%20website%20https%3A%2F%2Fpptqam.ponpes.id%2F" target="_blank" class=" text-dark-font lg:text-center flex gap-5 px-4 items-center p-[12px_16px] text-sm lg:text-lg font-bold hover:bg-main-green hover:text-white tracking-wide rounded-lg bg-white">
                 
                  <svg class="w-7 h-7 sm:w-10 sm:h-10 md:w-12 md:h-12" viewBox="0 0 15 14" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.3721 2.05375C11.0949 0.770063 9.39198 0.0648499 7.57858 0.0648499C3.84453 0.0648499 0.802698 3.10669 0.799449 6.84075C0.799449 8.03668 1.11143 9.20012 1.7029 10.2303L0.744202 13.7434L4.33851 12.8009C5.3297 13.3404 6.44439 13.6264 7.57858 13.6264H7.58183C11.3159 13.6264 14.3577 10.5845 14.361 6.84724C14.3577 5.03709 13.6525 3.33418 12.3721 2.05375ZM7.57858 12.4792C6.56463 12.4792 5.57344 12.2062 4.70899 11.6927L4.50425 11.5692L2.37236 12.1282L2.94108 10.0483L2.80784 9.83384C2.24237 8.93688 1.94664 7.90019 1.94664 6.83749C1.94664 3.73716 4.475 1.20879 7.58183 1.20879C9.0865 1.20879 10.5002 1.79701 11.5661 2.8597C12.6288 3.92565 13.2138 5.33932 13.2138 6.84399C13.2105 9.95408 10.6822 12.4792 7.57858 12.4792ZM10.6692 8.26092C10.5002 8.17643 9.66821 7.76695 9.51222 7.70845C9.35623 7.6532 9.24249 7.62395 9.132 7.79295C9.01825 7.96194 8.69327 8.34542 8.59577 8.45591C8.49828 8.56965 8.39753 8.58265 8.22854 8.49816C8.05955 8.41366 7.51358 8.23492 6.86687 7.65645C6.36315 7.20798 6.02516 6.65225 5.92442 6.48326C5.82692 6.31427 5.91467 6.22328 5.99917 6.13878C6.07391 6.06404 6.16816 5.94054 6.25265 5.84305C6.33715 5.74555 6.3664 5.67406 6.42164 5.56031C6.47689 5.44657 6.45089 5.34907 6.40864 5.26458C6.3664 5.18008 6.02841 4.34488 5.88542 4.00689C5.74893 3.67541 5.60919 3.72091 5.50519 3.71766C5.4077 3.71116 5.29395 3.71116 5.18021 3.71116C5.06647 3.71116 4.88448 3.75341 4.72848 3.9224C4.57249 4.09139 4.13702 4.50087 4.13702 5.33607C4.13702 6.17128 4.74473 6.97399 4.82923 7.08773C4.91372 7.20148 6.02191 8.91089 7.72157 9.64535C8.12455 9.82084 8.43978 9.92483 8.68677 10.0028C9.093 10.1328 9.46023 10.1133 9.75271 10.0711C10.0777 10.0223 10.7537 9.6616 10.8966 9.26512C11.0364 8.86864 11.0364 8.53066 10.9941 8.45916C10.9519 8.38766 10.8382 8.34542 10.6692 8.26092Z" fill="currentColor" />
                  </svg>
                  <p class="text-left">
                    Admin Ikhwan<br>
                    0895 7081 14777
                  </p>
                </a>
                <a href="https://api.whatsapp.com/send?phone=628996122488&text=Assalamualaikum%20saya%20ingin%20bertanya%20tentang%20pesantren...%0Asaya%20mendapatkan%20nomor%20ini%20dari%20website%20https%3A%2F%2Fpptqam.ponpes.id%2F" target="_blank" class="text-dark-font md:text-center flex gap-3 px-4 items-center p-[12px_16px] text-sm lg:text-lg font-bold hover:bg-main-green hover:text-white tracking-wide rounded-lg bg-white">
                  <svg class="w-7 h-7 sm:w-10 sm:h-10 md:w-12 md:h-12" viewBox="0 0 15 14" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.3721 2.05375C11.0949 0.770063 9.39198 0.0648499 7.57858 0.0648499C3.84453 0.0648499 0.802698 3.10669 0.799449 6.84075C0.799449 8.03668 1.11143 9.20012 1.7029 10.2303L0.744202 13.7434L4.33851 12.8009C5.3297 13.3404 6.44439 13.6264 7.57858 13.6264H7.58183C11.3159 13.6264 14.3577 10.5845 14.361 6.84724C14.3577 5.03709 13.6525 3.33418 12.3721 2.05375ZM7.57858 12.4792C6.56463 12.4792 5.57344 12.2062 4.70899 11.6927L4.50425 11.5692L2.37236 12.1282L2.94108 10.0483L2.80784 9.83384C2.24237 8.93688 1.94664 7.90019 1.94664 6.83749C1.94664 3.73716 4.475 1.20879 7.58183 1.20879C9.0865 1.20879 10.5002 1.79701 11.5661 2.8597C12.6288 3.92565 13.2138 5.33932 13.2138 6.84399C13.2105 9.95408 10.6822 12.4792 7.57858 12.4792ZM10.6692 8.26092C10.5002 8.17643 9.66821 7.76695 9.51222 7.70845C9.35623 7.6532 9.24249 7.62395 9.132 7.79295C9.01825 7.96194 8.69327 8.34542 8.59577 8.45591C8.49828 8.56965 8.39753 8.58265 8.22854 8.49816C8.05955 8.41366 7.51358 8.23492 6.86687 7.65645C6.36315 7.20798 6.02516 6.65225 5.92442 6.48326C5.82692 6.31427 5.91467 6.22328 5.99917 6.13878C6.07391 6.06404 6.16816 5.94054 6.25265 5.84305C6.33715 5.74555 6.3664 5.67406 6.42164 5.56031C6.47689 5.44657 6.45089 5.34907 6.40864 5.26458C6.3664 5.18008 6.02841 4.34488 5.88542 4.00689C5.74893 3.67541 5.60919 3.72091 5.50519 3.71766C5.4077 3.71116 5.29395 3.71116 5.18021 3.71116C5.06647 3.71116 4.88448 3.75341 4.72848 3.9224C4.57249 4.09139 4.13702 4.50087 4.13702 5.33607C4.13702 6.17128 4.74473 6.97399 4.82923 7.08773C4.91372 7.20148 6.02191 8.91089 7.72157 9.64535C8.12455 9.82084 8.43978 9.92483 8.68677 10.0028C9.093 10.1328 9.46023 10.1133 9.75271 10.0711C10.0777 10.0223 10.7537 9.6616 10.8966 9.26512C11.0364 8.86864 11.0364 8.53066 10.9941 8.45916C10.9519 8.38766 10.8382 8.34542 10.6692 8.26092Z" fill="currentColor" />
                  </svg>
                  <p class="text-left">
                    Admin Akhwat<br>
                    0899 6122 488
                  </p>
                </a>
                <a href="https://api.whatsapp.com/send?phone=62895360541541&text=Assalamualaikum%20saya%20ingin%20bertanya%20tentang%20pesantren...%0Asaya%20mendapatkan%20nomor%20ini%20dari%20website%20https%3A%2F%2Fpptqam.ponpes.id%2F" target="_blank" class="text-dark-font md:text-center flex gap-5 px-4 items-center p-[12px_16px] text-sm lg:text-lg font-bold hover:bg-main-green hover:text-white tracking-wide rounded-lg bg-white">
                  <svg class="w-7 h-7 sm:w-10 sm:h-10 md:w-12 md:h-12" viewBox="0 0 15 14" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.3721 2.05375C11.0949 0.770063 9.39198 0.0648499 7.57858 0.0648499C3.84453 0.0648499 0.802698 3.10669 0.799449 6.84075C0.799449 8.03668 1.11143 9.20012 1.7029 10.2303L0.744202 13.7434L4.33851 12.8009C5.3297 13.3404 6.44439 13.6264 7.57858 13.6264H7.58183C11.3159 13.6264 14.3577 10.5845 14.361 6.84724C14.3577 5.03709 13.6525 3.33418 12.3721 2.05375ZM7.57858 12.4792C6.56463 12.4792 5.57344 12.2062 4.70899 11.6927L4.50425 11.5692L2.37236 12.1282L2.94108 10.0483L2.80784 9.83384C2.24237 8.93688 1.94664 7.90019 1.94664 6.83749C1.94664 3.73716 4.475 1.20879 7.58183 1.20879C9.0865 1.20879 10.5002 1.79701 11.5661 2.8597C12.6288 3.92565 13.2138 5.33932 13.2138 6.84399C13.2105 9.95408 10.6822 12.4792 7.57858 12.4792ZM10.6692 8.26092C10.5002 8.17643 9.66821 7.76695 9.51222 7.70845C9.35623 7.6532 9.24249 7.62395 9.132 7.79295C9.01825 7.96194 8.69327 8.34542 8.59577 8.45591C8.49828 8.56965 8.39753 8.58265 8.22854 8.49816C8.05955 8.41366 7.51358 8.23492 6.86687 7.65645C6.36315 7.20798 6.02516 6.65225 5.92442 6.48326C5.82692 6.31427 5.91467 6.22328 5.99917 6.13878C6.07391 6.06404 6.16816 5.94054 6.25265 5.84305C6.33715 5.74555 6.3664 5.67406 6.42164 5.56031C6.47689 5.44657 6.45089 5.34907 6.40864 5.26458C6.3664 5.18008 6.02841 4.34488 5.88542 4.00689C5.74893 3.67541 5.60919 3.72091 5.50519 3.71766C5.4077 3.71116 5.29395 3.71116 5.18021 3.71116C5.06647 3.71116 4.88448 3.75341 4.72848 3.9224C4.57249 4.09139 4.13702 4.50087 4.13702 5.33607C4.13702 6.17128 4.74473 6.97399 4.82923 7.08773C4.91372 7.20148 6.02191 8.91089 7.72157 9.64535C8.12455 9.82084 8.43978 9.92483 8.68677 10.0028C9.093 10.1328 9.46023 10.1133 9.75271 10.0711C10.0777 10.0223 10.7537 9.6616 10.8966 9.26512C11.0364 8.86864 11.0364 8.53066 10.9941 8.45916C10.9519 8.38766 10.8382 8.34542 10.6692 8.26092Z" fill="currentColor" />
                  </svg>
                  <p class="text-left">
                    Admin Akhwat<br>
                    0895 3605 41541
                  </p>
                </a>
                <a href="tel:02263754325" target="_blank" class="text-dark-font md:text-center flex gap-3 px-4 items-center p-[12px_16px] text-sm lg:text-lg font-bold hover:bg-main-green hover:text-white tracking-wide rounded-lg bg-white">
                  <svg class="w-7 h-7 sm:w-10 sm:h-10 md:w-12 md:h-12" viewBox="0 0 11 12" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.5473 8.86544L8.23051 6.75895C8.0031 6.55206 7.65202 6.56289 7.43772 6.78345L6.07386 8.18607C5.74557 8.12338 5.08558 7.91763 4.40622 7.23998C3.72685 6.56004 3.5211 5.89834 3.46012 5.57233L4.8616 4.2079C5.08274 3.9936 5.09299 3.64309 4.88611 3.41512L2.78018 1.09888C2.57329 0.870339 2.22164 0.848682 1.9874 1.0493L0.75063 2.10996C0.652031 2.20913 0.593327 2.34021 0.585348 2.47985C0.576799 2.62233 0.413796 5.99751 3.03096 8.61581C5.31413 10.8984 8.17408 11.0654 8.96174 11.0654C9.07687 11.0654 9.14754 11.062 9.16635 11.0608C9.30598 11.0529 9.43707 10.9942 9.53567 10.895L10.5958 9.65766C10.7975 9.42341 10.7753 9.07233 10.5473 8.86544Z" fill="currentColor" />
                  </svg>
                  <p class="text-left">
                    Call Center<br>
                    (022) 6375 4325
                  </p>
                  
                </a>
              </div>
            </div>
          </div>
        </li>
        <li>
          <a href="#" class="bg-main block mt-5 py-5 text-center rounded-full text-white md:hidden">Login</a>
        </li>
      </ul>
    </nav>
  </div>
</header>