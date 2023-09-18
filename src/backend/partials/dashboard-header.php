<nav class="sidebar locked">
  <div class="logo_items flex">
    <a href="<?= baseUrl(); ?>" class="flex">
      <span class="nav_image"> <img src="<?= baseUrl('src/img/logo.svg'); ?>" alt="logo_img" /></span>
      <span class="logo_name">PONPES AM</span>
    </a>
    <i class="bx bx-lock-alt" id="lock-icon" title="Unlock Sidebar"></i>
    <i class="bx bx-x" id="sidebar-close"></i>
  </div>


  <div class="menu_container">
    <div class="menu_items">
      <ul class="menu_item">
        <div class="menu_title flex">
          <span class="title">Dashboard</span>
          <span class="line"></span>
        </div>
        <li class="item">
          <a href="#" class="link flex" id="data-santri-link">
            <i class='bx bx-user-circle'></i>
            <span>Data Santri</span>
          </a>
        </li>

        <li class="item">
          <a href="#" class="link flex" id="edit-profile-link">
            <i class='bx bx-user'></i>
            <span>Edit Profile</span>
          </a>
        </li>

        <li class="item">
          <a href="#" class="link flex" id="pengumuman-link">
            <i class='bx bx-bell'></i>
            <span>Pengumuman</span>
          </a>
        </li>

        <li class="item">
          <a href="logout.php" class="link flex" id="logout-link">
            <i class='bx bx-caret-left-square'></i>
            <span>Logout</span>
          </a>
        </li>
      </ul>

    </div>

    <div class="sidebar-profile flex">
      <span class="nav_image">
        <img src="img/user.svg" alt="logo_img" />
      </span>
      <div class="data-user">
        <span class="name"><?= isset($username) ? $username : '[username]'; ?></span>
        <span class="user-email"> <?= isset($emailUser) ? $emailUser : '[email user]'; ?></span>
      </div>
    </div>
  </div>
</nav>

<!-- Navbar -->
<nav class="navbar flex">
  <i class="bx bx-menu" id="sidebar-open"></i>
  <input type="text" placeholder="Search..." class="search_box" autocomplete="off" autofocus id="keyword" />
  <span class="nav_image">
    <img src="images/profile.jpg" alt="logo_img" />
  </span>
</nav>