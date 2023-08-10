<header>
  <div id="nav-wrapper" class="bg-main px-7 transition-all duration-400 text-body lg:justify-around absolute w-full flex z-50 items-center top-0 left-0 shadow-lg lg:bg-main lg:text-white">
    <div class="my-[14px] sm:my-[1.1em] ">
      <a href="/" class="flex items-center">
        <img src="./src/img/logo.svg" alt="logo" class="w-[50px] sm:w-[60px]" />
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
          <a href="#" class="block">Home</a>
        </li>
        <li class="max-lg:mt-8 lg:mr-8 font-bold relative">
          <div class="group/about">
            <button type="button" class="inline-flex w-full items-center gap-x-2" id="about">
              About
              <svg xmlns=" http://www.w3.org/2000/svg" width="15" class="lg:group-hover/about:rotate-180 transition-all" viewBox="0 0 20 20">
                <path d="M10 0C4.486 0 0 4.486 0 10C0 15.514 4.486 20 10 20C15.514 20 20 15.514 20 10C20 4.486 15.514 0 10 0ZM10 14.414L4.293 8.707L5.707 7.293L10 11.586L14.293 7.293L15.707 8.707L10 14.414Z" fill="currentColor" />
              </svg>
            </button>
            <div id="dropdown-about" class="hidden lg:absolute scale-0 lg:transition-all lg:right-0 lg:z-10 lg:w-56 lg:origin-top-right lg:rounded-lg bg-body lg:shadow-lg lg:ring-1 lg:ring-black lg:ring-opacity-5 p-4 lg:group-hover/about:scale-100 lg:group-hover/about:block rounded-lg">
              <div class="bg-body lg:bg-white rounded-lg flex flex-col gap-1">
                <a href="#" class="text-dark-font flex gap-3 px-4 items-center py-2 text-sm lg:text-md hover:bg-young-blue tracking-wide rounded-lg bg-white">
                  1
                </a>
                <a href="#" class="text-dark-font flex gap-3 px-4 items-center py-2 text-sm lg:text-md hover:bg-young-blue tracking-wide rounded-lg bg-white">
                  2
                </a>
                <a href="#" class="text-dark-font flex gap-3 px-4 items-center py-2 text-sm lg:text-md hover:bg-young-blue tracking-wide rounded-lg bg-white">
                  3
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
            <div id="dropdown-ppdb" class="hidden lg:absolute scale-0 lg:transition-all lg:right-0 lg:z-10 lg:origin-top-right rounded-lg bg-body lg:shadow-lg lg:ring-1 lg:ring-opacity-5 lg:group-hover/ppdb:scale-100 lg:group-hover/ppdb:block lg:p-4 p-4  lg:w-[450px] ">
              <div class="bg-body lg:bg-white rounded-lg flex flex-col gap-1">
                <a href="#" class="text-dark-font flex gap-3 px-4 items-center py-3 lg:py-2 text-sm sm:text-base lg:text-xl lg:font-bold
                 tracking-wide hover:bg-young-blue bg-white rounded-lg">
                  <div class="bg-body w-7 h-7 lg:w-10 lg:h-10 rounded-lg flex justify-center items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-7 h-7" viewBox="0 0 300 302" fill="none">
                      <path d="M33.3333 301.526H266.667C285.05 301.526 300 286.5 300 268.023V33.5029C300 15.026 285.05 0 266.667 0H33.3333C14.95 0 0 15.026 0 33.5029V134.028H116.633V67.0058L216.633 150.763L116.633 234.52V167.531H0V268.023C0 286.5 14.95 301.526 33.3333 301.526Z" fill="#02C2F2" />
                    </svg>
                  </div>
                  Informasi PPDB 2023-2024
                </a>
                <a href="#" class="text-dark-font bg-white flex gap-3 px-4 items-center py-3 lg:py-2 text-sm sm:text-base lg:text-xl lg:font-bold tracking-wide hover:bg-young-blue rounded-lg">
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
            <div id="dropdown-contact" class="hidden lg:absolute scale-y-0 lg:transition lg:right-0 lg:z-10 lg:w-96 lg:origin-top-right rounded-lg lg:bg-body lg:shadow-lg lg:ring-1 lg:ring-black lg:ring-opacity-5 p-4 lg:group-hover/contact:scale-100 lg:group-hover/contact:block">
              <div class="bg-body p-4 lg:bg-white rounded-lg flex flex-col gap-1">
                <a href="#" class="text-dark-font lg:text-center flex gap-3 px-4 items-center p-[12px_16px] flex-col text-sm lg:text-md hover:bg-young-blue tracking-wide rounded-lg bg-white">
                  Admin 1
                  <svg class="w-5" viewBox="0 0 15 14" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.3721 2.05375C11.0949 0.770063 9.39198 0.0648499 7.57858 0.0648499C3.84453 0.0648499 0.802698 3.10669 0.799449 6.84075C0.799449 8.03668 1.11143 9.20012 1.7029 10.2303L0.744202 13.7434L4.33851 12.8009C5.3297 13.3404 6.44439 13.6264 7.57858 13.6264H7.58183C11.3159 13.6264 14.3577 10.5845 14.361 6.84724C14.3577 5.03709 13.6525 3.33418 12.3721 2.05375ZM7.57858 12.4792C6.56463 12.4792 5.57344 12.2062 4.70899 11.6927L4.50425 11.5692L2.37236 12.1282L2.94108 10.0483L2.80784 9.83384C2.24237 8.93688 1.94664 7.90019 1.94664 6.83749C1.94664 3.73716 4.475 1.20879 7.58183 1.20879C9.0865 1.20879 10.5002 1.79701 11.5661 2.8597C12.6288 3.92565 13.2138 5.33932 13.2138 6.84399C13.2105 9.95408 10.6822 12.4792 7.57858 12.4792ZM10.6692 8.26092C10.5002 8.17643 9.66821 7.76695 9.51222 7.70845C9.35623 7.6532 9.24249 7.62395 9.132 7.79295C9.01825 7.96194 8.69327 8.34542 8.59577 8.45591C8.49828 8.56965 8.39753 8.58265 8.22854 8.49816C8.05955 8.41366 7.51358 8.23492 6.86687 7.65645C6.36315 7.20798 6.02516 6.65225 5.92442 6.48326C5.82692 6.31427 5.91467 6.22328 5.99917 6.13878C6.07391 6.06404 6.16816 5.94054 6.25265 5.84305C6.33715 5.74555 6.3664 5.67406 6.42164 5.56031C6.47689 5.44657 6.45089 5.34907 6.40864 5.26458C6.3664 5.18008 6.02841 4.34488 5.88542 4.00689C5.74893 3.67541 5.60919 3.72091 5.50519 3.71766C5.4077 3.71116 5.29395 3.71116 5.18021 3.71116C5.06647 3.71116 4.88448 3.75341 4.72848 3.9224C4.57249 4.09139 4.13702 4.50087 4.13702 5.33607C4.13702 6.17128 4.74473 6.97399 4.82923 7.08773C4.91372 7.20148 6.02191 8.91089 7.72157 9.64535C8.12455 9.82084 8.43978 9.92483 8.68677 10.0028C9.093 10.1328 9.46023 10.1133 9.75271 10.0711C10.0777 10.0223 10.7537 9.6616 10.8966 9.26512C11.0364 8.86864 11.0364 8.53066 10.9941 8.45916C10.9519 8.38766 10.8382 8.34542 10.6692 8.26092Z" fill="currentColor" />
                  </svg>
                  +62 8999 6122 488 Ikhwan
                </a>
                <a href="#" class="text-dark-font md:text-center flex gap-3 px-4 items-center p-[12px_16px] flex-col text-sm lg:text-md hover:bg-young-blue tracking-wide rounded-lg bg-white">
                  Admin 2
                  <svg class="w-5" viewBox="0 0 15 14" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.3721 2.05375C11.0949 0.770063 9.39198 0.0648499 7.57858 0.0648499C3.84453 0.0648499 0.802698 3.10669 0.799449 6.84075C0.799449 8.03668 1.11143 9.20012 1.7029 10.2303L0.744202 13.7434L4.33851 12.8009C5.3297 13.3404 6.44439 13.6264 7.57858 13.6264H7.58183C11.3159 13.6264 14.3577 10.5845 14.361 6.84724C14.3577 5.03709 13.6525 3.33418 12.3721 2.05375ZM7.57858 12.4792C6.56463 12.4792 5.57344 12.2062 4.70899 11.6927L4.50425 11.5692L2.37236 12.1282L2.94108 10.0483L2.80784 9.83384C2.24237 8.93688 1.94664 7.90019 1.94664 6.83749C1.94664 3.73716 4.475 1.20879 7.58183 1.20879C9.0865 1.20879 10.5002 1.79701 11.5661 2.8597C12.6288 3.92565 13.2138 5.33932 13.2138 6.84399C13.2105 9.95408 10.6822 12.4792 7.57858 12.4792ZM10.6692 8.26092C10.5002 8.17643 9.66821 7.76695 9.51222 7.70845C9.35623 7.6532 9.24249 7.62395 9.132 7.79295C9.01825 7.96194 8.69327 8.34542 8.59577 8.45591C8.49828 8.56965 8.39753 8.58265 8.22854 8.49816C8.05955 8.41366 7.51358 8.23492 6.86687 7.65645C6.36315 7.20798 6.02516 6.65225 5.92442 6.48326C5.82692 6.31427 5.91467 6.22328 5.99917 6.13878C6.07391 6.06404 6.16816 5.94054 6.25265 5.84305C6.33715 5.74555 6.3664 5.67406 6.42164 5.56031C6.47689 5.44657 6.45089 5.34907 6.40864 5.26458C6.3664 5.18008 6.02841 4.34488 5.88542 4.00689C5.74893 3.67541 5.60919 3.72091 5.50519 3.71766C5.4077 3.71116 5.29395 3.71116 5.18021 3.71116C5.06647 3.71116 4.88448 3.75341 4.72848 3.9224C4.57249 4.09139 4.13702 4.50087 4.13702 5.33607C4.13702 6.17128 4.74473 6.97399 4.82923 7.08773C4.91372 7.20148 6.02191 8.91089 7.72157 9.64535C8.12455 9.82084 8.43978 9.92483 8.68677 10.0028C9.093 10.1328 9.46023 10.1133 9.75271 10.0711C10.0777 10.0223 10.7537 9.6616 10.8966 9.26512C11.0364 8.86864 11.0364 8.53066 10.9941 8.45916C10.9519 8.38766 10.8382 8.34542 10.6692 8.26092Z" fill="currentColor" />
                  </svg>
                  +62 8999 6122 488 Akhwat
                </a>
                <a href="#" class="text-dark-font md:text-center flex gap-3 px-4 items-center p-[12px_16px] flex-col text-sm lg:text-md hover:bg-young-blue tracking-wide rounded-lg bg-white">
                  Admin 2
                  <svg class="w-5" viewBox="0 0 15 14" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.3721 2.05375C11.0949 0.770063 9.39198 0.0648499 7.57858 0.0648499C3.84453 0.0648499 0.802698 3.10669 0.799449 6.84075C0.799449 8.03668 1.11143 9.20012 1.7029 10.2303L0.744202 13.7434L4.33851 12.8009C5.3297 13.3404 6.44439 13.6264 7.57858 13.6264H7.58183C11.3159 13.6264 14.3577 10.5845 14.361 6.84724C14.3577 5.03709 13.6525 3.33418 12.3721 2.05375ZM7.57858 12.4792C6.56463 12.4792 5.57344 12.2062 4.70899 11.6927L4.50425 11.5692L2.37236 12.1282L2.94108 10.0483L2.80784 9.83384C2.24237 8.93688 1.94664 7.90019 1.94664 6.83749C1.94664 3.73716 4.475 1.20879 7.58183 1.20879C9.0865 1.20879 10.5002 1.79701 11.5661 2.8597C12.6288 3.92565 13.2138 5.33932 13.2138 6.84399C13.2105 9.95408 10.6822 12.4792 7.57858 12.4792ZM10.6692 8.26092C10.5002 8.17643 9.66821 7.76695 9.51222 7.70845C9.35623 7.6532 9.24249 7.62395 9.132 7.79295C9.01825 7.96194 8.69327 8.34542 8.59577 8.45591C8.49828 8.56965 8.39753 8.58265 8.22854 8.49816C8.05955 8.41366 7.51358 8.23492 6.86687 7.65645C6.36315 7.20798 6.02516 6.65225 5.92442 6.48326C5.82692 6.31427 5.91467 6.22328 5.99917 6.13878C6.07391 6.06404 6.16816 5.94054 6.25265 5.84305C6.33715 5.74555 6.3664 5.67406 6.42164 5.56031C6.47689 5.44657 6.45089 5.34907 6.40864 5.26458C6.3664 5.18008 6.02841 4.34488 5.88542 4.00689C5.74893 3.67541 5.60919 3.72091 5.50519 3.71766C5.4077 3.71116 5.29395 3.71116 5.18021 3.71116C5.06647 3.71116 4.88448 3.75341 4.72848 3.9224C4.57249 4.09139 4.13702 4.50087 4.13702 5.33607C4.13702 6.17128 4.74473 6.97399 4.82923 7.08773C4.91372 7.20148 6.02191 8.91089 7.72157 9.64535C8.12455 9.82084 8.43978 9.92483 8.68677 10.0028C9.093 10.1328 9.46023 10.1133 9.75271 10.0711C10.0777 10.0223 10.7537 9.6616 10.8966 9.26512C11.0364 8.86864 11.0364 8.53066 10.9941 8.45916C10.9519 8.38766 10.8382 8.34542 10.6692 8.26092Z" fill="currentColor" />
                  </svg>
                  +62 8999 6122 488 Akhwat
                </a>
                <a href="#" class="text-dark-font md:text-center flex gap-3 px-4 items-center p-[12px_16px] flex-col text-sm lg:text-md hover:bg-young-blue tracking-wide rounded-lg bg-white">
                  Contact
                  <svg class="w-5" viewBox="0 0 11 12" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.5473 8.86544L8.23051 6.75895C8.0031 6.55206 7.65202 6.56289 7.43772 6.78345L6.07386 8.18607C5.74557 8.12338 5.08558 7.91763 4.40622 7.23998C3.72685 6.56004 3.5211 5.89834 3.46012 5.57233L4.8616 4.2079C5.08274 3.9936 5.09299 3.64309 4.88611 3.41512L2.78018 1.09888C2.57329 0.870339 2.22164 0.848682 1.9874 1.0493L0.75063 2.10996C0.652031 2.20913 0.593327 2.34021 0.585348 2.47985C0.576799 2.62233 0.413796 5.99751 3.03096 8.61581C5.31413 10.8984 8.17408 11.0654 8.96174 11.0654C9.07687 11.0654 9.14754 11.062 9.16635 11.0608C9.30598 11.0529 9.43707 10.9942 9.53567 10.895L10.5958 9.65766C10.7975 9.42341 10.7753 9.07233 10.5473 8.86544Z" fill="currentColor" />
                  </svg>
                  Center +62 8999 6122 488
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