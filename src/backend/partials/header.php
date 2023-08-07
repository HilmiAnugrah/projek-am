<header>
      <div
        id="nav-wrapper"
        class="bg-main px-7 transition-all duration-300 text-white md:justify-between w-full flex z-50 items-center shadow-lg absolute top-0 left-0"
      >
        <div class="my-[14px]">
          <a href="/" class="flex items-center">
            <img src="./src/img/Logo.png" alt="logo" width="50px" />
            <span class="ml-3">Al'Ashr Al Madani</span>
          </a>
        </div>
        <button
          id="hamburger-menu"
          name="hamburger-menu"
          class="block absolute right-4 z-10 md:hidden"
          type="button"
        >
          <div class="flex flex-col">
            <span class="hamburger-line"></span>
            <span class="hamburger-line !w-[10px] self-end"></span>
            <span class="hamburger-line"></span>
          </div>
        </button>
        <nav
          id="nav-menu"
          class="hidden text-black bg-white max-sm:w-full max-sm:h-[100vh] absolute top-20 left-0 md:block md:text-white md:static md:bg-transparent"
        >
          <ul class="px-6 md:flex md:items-center">
            <li class="max-sm:mt-8 font-bold md:mr-8">
              <a href="#" class="block">Home</a>
            </li>
            <li class="md:mr-8 max-sm:mt-8 font-bold">
              <a href="#" class="block">About</a>
            </li>
            <li class="max-sm:mt-8 md:mr-8 font-bold">
              <a href="#" class="block">PPDB</a>
            </li>
            <li class="max-sm:mt-8 font-bold">
              <a href="#" class="block">Contact</a>
            </li>
            <li>
              <a
                href="#"
                class="bg-main block mt-52 py-5 text-center rounded-full text-white md:hidden"
                >Login</a
              >
            </li>
          </ul>
        </nav>
        <a
          href="#"
          class="bg-main md:block max-sm:mt-52 py-14 md:py-2 text-center max-sm:leading-[56px] rounded-full text-white md:border md:border-white md:px-10 hidden"
          >Login</a
        >
      </div>
    </header>