<header>
  <div id="nav-wrapper" class="bg-main px-7 transition-all duration-400 text-white md:justify-around absolute w-full flex z-50 items-center top-0 left-0 shadow-lg md:bg-main md:text-white">
    <div class="my-[14px] sm:my-[1.1em] ">
      <a href="/" class="flex items-center">
        <img src="./src/img/logo.svg" alt="logo" class="w-[50px] sm:w-[60px]" />
        <span class="ml-3 text-lg font-semibold tracking-wide sm:text-xl">Al 'Ashr Al Madani</span>
      </a>
    </div>
    <button id="hamburger-menu" class="block absolute right-4 z-10 md:hidden" type="button">
      <div class="flex flex-col">
        <span class="hamburger-line"></span>
        <span class="hamburger-line !w-[20px] self-end"></span>
        <span class="hamburger-line"></span>
      </div>
    </button>
    <nav id="nav-menu" class="hidden overflow-y-auto lg:overflow-y-visible text-black bg-white max-md:w-full max-md:h-[87vh] absolute top-20 left-0 md:block md:text-white md:static md:bg-transparent">
      <ul class="px-6 md:flex md:items-center">
        <li class="max-md:mt-8 font-bold md:mr-8">
          <a href="#" class="block">Home</a>
        </li>
        <li class="max-md:mt-8 md:mr-8 font-bold relative">
          <div>
            <button type="button" class="inline-flex w-full items-center gap-x-2" id="about">
              About
              <svg xmlns=" http://www.w3.org/2000/svg" width="15" viewBox="0 0 20 20">
                <path d="M10 0C4.486 0 0 4.486 0 10C0 15.514 4.486 20 10 20C15.514 20 20 15.514 20 10C20 4.486 15.514 0 10 0ZM10 14.414L4.293 8.707L5.707 7.293L10 11.586L14.293 7.293L15.707 8.707L10 14.414Z" fill="currentColor" />
              </svg>
            </button>
          </div>
          <div id="dropdown-about" class="hidden lg:absolute scale-0 lg:transition lg:right-0 lg:z-10 lg:mt-2 lg:w-56 lg:origin-top-right lg:rounded-md lg:bg-white lg:shadow-lg lg:ring-1 lg:ring-black lg:ring-opacity-5">
            <div class="py-1">
              <a href="#" class="text-gray-700 flex gap-3 px-4 items-center py-2 text-sm hover:bg-gray-100">
                1
              </a>
              <a href="#" class="text-gray-700 flex gap-3 px-4 items-center py-2 text-sm hover:bg-gray-100">
                2
              </a>
              <a href="#" class="text-gray-700 flex gap-3 px-4 items-center py-2 text-sm hover:bg-gray-100">
                3
              </a>
            </div>
          </div>
        </li>
        <li class="max-md:mt-8 md:mr-8 font-bold relative">
          <div>
            <button type="button" class="inline-flex w-full items-center gap-x-2" id="ppdb">
              PPDB
              <svg xmlns=" http://www.w3.org/2000/svg" width="15" viewBox="0 0 20 20">
                <path d="M10 0C4.486 0 0 4.486 0 10C0 15.514 4.486 20 10 20C15.514 20 20 15.514 20 10C20 4.486 15.514 0 10 0ZM10 14.414L4.293 8.707L5.707 7.293L10 11.586L14.293 7.293L15.707 8.707L10 14.414Z" fill="currentColor" />
              </svg>
            </button>
          </div>
          <div id="dropdown-ppdb" class="hidden lg:absolute scale-0 lg:transition lg:right-0 lg:z-10 lg:mt-2 lg:w-56 lg:origin-top-right lg:rounded-md lg:bg-white lg:shadow-lg lg:ring-1 lg:ring-black lg:ring-opacity-5">
            <div class="py-1">
              <a href="#" class="text-gray-700 flex gap-3 px-4 items-center py-2 text-sm hover:bg-gray-100">
                <div class="bg-body w-7 h-7 rounded-sm flex justify-center items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" viewBox="0 0 300 302" fill="none">
                    <path d="M33.3333 301.526H266.667C285.05 301.526 300 286.5 300 268.023V33.5029C300 15.026 285.05 0 266.667 0H33.3333C14.95 0 0 15.026 0 33.5029V134.028H116.633V67.0058L216.633 150.763L116.633 234.52V167.531H0V268.023C0 286.5 14.95 301.526 33.3333 301.526Z" fill="#02C2F2" />
                  </svg>
                </div>
                Informasi PPDB 2023-2024
              </a>
              <a href="#" class="text-gray-700 flex gap-3 px-4 items-center py-2 text-sm hover:bg-gray-100">
                <div class="bg-body w-7 h-7 rounded-sm flex justify-center items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" viewBox="0 0 305 245" fill="none">
                    <path d="M274.112 0.808838H31.2907C14.5512 0.808838 0.937988 14.4648 0.937988 31.257V213.946C0.937988 230.738 14.5512 244.394 31.2907 244.394H274.112C290.852 244.394 304.465 230.738 304.465 213.946V31.257C304.465 14.4648 290.852 0.808838 274.112 0.808838ZM46.4671 69.3172C46.4671 65.1153 49.8666 61.7052 54.0553 61.7052H99.5843C103.773 61.7052 107.173 65.1153 107.173 69.3172V99.7654C107.173 103.967 103.773 107.377 99.5843 107.377H54.0553C49.8666 107.377 46.4671 103.967 46.4671 99.7654V69.3172ZM137.525 183.498H46.4671V153.05H137.525V183.498ZM258.936 183.498H167.878V153.05H258.936V183.498Z" fill="#F48120" />
                  </svg>
                </div>
                Investasi Pendaftaran santri
              </a>
            </div>
          </div>
        </li>
        <li class="max-md:mt-8 md:mr-8 font-bold relative">
          <div>
            <button type="button" class="inline-flex w-full items-center gap-x-2" id="contact">
              Contact
              <svg xmlns=" http://www.w3.org/2000/svg" width="15" viewBox="0 0 20 20">
                <path d="M10 0C4.486 0 0 4.486 0 10C0 15.514 4.486 20 10 20C15.514 20 20 15.514 20 10C20 4.486 15.514 0 10 0ZM10 14.414L4.293 8.707L5.707 7.293L10 11.586L14.293 7.293L15.707 8.707L10 14.414Z" fill="currentColor" />
              </svg>
            </button>
          </div>
          <div id="dropdown-contact" class="hidden lg:absolute scale-y-0 lg:transition lg:right-0 lg:z-10 lg:mt-2 lg:w-56 lg:origin-top-right lg:rounded-md lg:bg-white lg:shadow-lg lg:ring-1 lg:ring-black lg:ring-opacity-5">
            <div class="py-1">
              <a href="#" class="text-gray-700 flex gap-3 px-4 items-center py-2 text-sm hover:bg-gray-100">
                Admin 1 +62 8999 6122 488 Ikhwan
              </a>
              <a href="#" class="text-gray-700 flex gap-3 px-4 items-center py-2 text-sm hover:bg-gray-100">
                Admin 2 <img src="./src/img/icons/whatsapp.svg" alt="whatsapp"> +62 8999 6122 488 Akhwat
              </a>
              <a href="#" class="text-gray-700 flex gap-3 px-4 items-center py-2 text-sm hover:bg-gray-100">
                Admin 2 <img src="./src/img/icons/whatsapp.svg" alt="whatsapp"> +62 8999 6122 488 Akhwat
              </a>
              <a href="#" class="text-gray-700 flex gap-3 px-4 items-center py-2 text-sm hover:bg-gray-100">
                Contact <img src="./src/img/icons/phone.svg" alt="phone"> Center +62 8999 6122 488
              </a>
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