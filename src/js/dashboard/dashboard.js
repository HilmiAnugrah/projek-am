const sidebar = document.querySelector(".sidebar");
const sidebarOpenBtn = document.querySelector("#sidebar-open");
const sidebarCloseBtn = document.querySelector("#sidebar-close");
const sidebarLockBtn = document.querySelector("#lock-icon");
const overviewSection = document.querySelector(".overview-section");
const dashboardSection = document.querySelector(".dashboard-section");
const allProjectSection = document.querySelector(".all-project-section");
const newProjectSection = document.querySelector(".new-project-section");
const memberSection = document.querySelector(".user-member-section");
const settingSection = document.querySelector(".setting");

// Mengambil ID button
const overviewLink = document.querySelector("#overview-link");
const allProjectsLink = document.querySelector("#all-projects-link");
const newProjectsLink = document.querySelector("#new-project-link");
const memberLink = document.querySelector("#member-link");
const settingLink = document.querySelector("#setting-link");

// Function untuk mengubah keadaan kunci (lock) sidebar
const toggleLock = () => {
  sidebar.classList.toggle("locked");

  // Jika sidebar tidak terkunci
  if (!sidebar.classList.contains("locked")) {
    sidebar.classList.add("hoverable");
    sidebarLockBtn.classList.replace("bx-lock-alt", "bx-lock-open-alt");
  } else {
    sidebar.classList.remove("hoverable");
    sidebarLockBtn.classList.replace("bx-lock-open-alt", "bx-lock-alt");
  }
};

// Function untuk menyembunyikan sidebar saat mouse meninggalkan area sidebar
const hideSidebar = () => {
  if (sidebar.classList.contains("hoverable")) {
    sidebar.classList.add("close");
    overviewSection.classList.remove("ml-300");
    dashboardSection.classList.remove("ml-300");
    allProjectSection.classList.remove("ml-300");
    newProjectSection.classList.remove("ml-300");
    memberSection.classList.remove("ml-300");
    settingSection.classList.remove("ml-300");
    settingSection.classList.add("ml-100");
    memberSection.classList.add("ml-100");
    newProjectSection.classList.add("ml-100");
    overviewSection.classList.add("ml-100");
    dashboardSection.classList.add("ml-100");
    allProjectSection.classList.add("ml-100");
  }
};

// Function untuk menampilkan sidebar saat mouse masuk ke area sidebar
const showSidebar = () => {
  if (sidebar.classList.contains("hoverable")) {
    sidebar.classList.remove("close");
    if (!sidebar.classList.contains("locked")) {
      overviewSection.classList.add("ml-300");
      dashboardSection.classList.add("ml-300");
      allProjectSection.classList.add("ml-300");
      newProjectSection.classList.add("ml-300");
      memberSection.classList.add("ml-300");
      settingSection.classList.add("ml-300");
      settingSection.classList.remove("ml-100");
      memberSection.classList.remove("ml-100");
      newProjectSection.classList.remove("ml-100");
      allProjectSection.classList.remove("ml-100");
      dashboardSection.classList.remove("ml-100");
      overviewSection.classList.remove("ml-100");
    }
  }
};

// Function untuk menampilkan atau menyembunyikan sidebar
const toggleSidebar = () => {
  sidebar.classList.toggle("close");
  if (!sidebar.classList.contains("close")) {
    if (!sidebar.classList.contains("locked")) {
      overviewSection.classList.add("ml-300");
      dashboardSection.classList.add("ml-300");
      allProjectSection.classList.add("ml-300");
      newProjectSection.classList.add("ml-300");
      memberSection.classList.add("ml-300");
      settingSection.classList.add("ml-300");
    }
  } else {
    overviewSection.classList.remove("ml-300");
    dashboardSection.classList.remove("ml-300");
    allProjectSection.classList.remove("ml-300");
    newProjectSection.classList.remove("ml-300");
    memberSection.classList.remove("ml-300");
    settingSection.classList.remove("ml-300");
  }
};

// Jika lebar jendela kurang dari 800px, tutup sidebar dan hapus hoverability dan lock
if (window.innerWidth < 800) {
  sidebar.classList.add("close");
  sidebar.classList.remove("locked");
  sidebar.classList.remove("hoverable");
}

// Menambahkan event listener ke button dan sidebar untuk aksi yang sesuai
sidebarLockBtn.addEventListener("click", toggleLock);
sidebar.addEventListener("mouseleave", hideSidebar);
sidebar.addEventListener("mouseenter", showSidebar);
sidebarOpenBtn.addEventListener("click", toggleSidebar);
sidebarCloseBtn.addEventListener("click", toggleSidebar);

// Menambahkan event listener ke link overview untuk menampilkan bagian overview
overviewLink.addEventListener("click", function () {
  overviewSection.style.display = "block";
  overviewSection.classList.add("ml-300");
  dashboardSection.classList.add("none");
  memberSection.style.display = "none";
  allProjectSection.style.display = "none";
  newProjectSection.style.display = "none";
  settingSection.style.display = "none";

  if (window.innerWidth <= 768) {
    sidebar.classList.add("close");
    settingSection.classList.add("container-mobile");
    memberSection.classList.add("container-mobile");
    newProjectSection.classList.add("container-mobile");
    overviewSection.classList.add("container-mobile");
    dashboardSection.classList.add("container-mobile");
    allProjectSection.classList.add("container-mobile");
  }
});

allProjectsLink.addEventListener("click", function () {
  allProjectSection.style.display = "block";
  allProjectSection.classList.add("ml-300");
  overviewSection.style.display = "none";
  dashboardSection.classList.add("none");
  newProjectSection.style.display = "none";
  memberSection.style.display = "none";
  settingSection.style.display = "none";

  if (window.innerWidth <= 768) {
    sidebar.classList.add("close");
    settingSection.classList.add("container-mobile");
    memberSection.classList.add("container-mobile");
    newProjectSection.classList.add("container-mobile");
    overviewSection.classList.add("container-mobile");
    dashboardSection.classList.add("container-mobile");
    allProjectSection.classList.add("container-mobile");
  }
});
newProjectsLink.addEventListener("click", function () {
  newProjectSection.style.display = "block";
  newProjectSection.classList.add("ml-300");
  overviewSection.style.display = "none";
  dashboardSection.classList.add("none");
  allProjectSection.style.display = "none";
  memberSection.style.display = "none";
  settingSection.style.display = "none";

  if (window.innerWidth <= 768) {
    sidebar.classList.add("close");
    settingSection.classList.add("container-mobile");
    memberSection.classList.add("container-mobile");
    newProjectSection.classList.add("container-mobile");
    overviewSection.classList.add("container-mobile");
    dashboardSection.classList.add("container-mobile");
    allProjectSection.classList.add("container-mobile");
  }
});
memberLink.addEventListener("click", function () {
  memberSection.style.display = "block";
  memberSection.classList.add("ml-300");
  overviewSection.style.display = "none";
  dashboardSection.classList.add("none");
  allProjectSection.style.display = "none";
  newProjectSection.style.display = "none";
  settingSection.style.display = "none";

  if (window.innerWidth <= 768) {
    sidebar.classList.add("close");
    settingSection.classList.add("container-mobile");
    memberSection.classList.add("container-mobile");
    newProjectSection.classList.add("container-mobile");
    overviewSection.classList.add("container-mobile");
    dashboardSection.classList.add("container-mobile");
    allProjectSection.classList.add("container-mobile");
  }
});
settingLink.addEventListener("click", function () {
  settingSection.style.display = "block";
  settingSection.classList.add("ml-300");
  overviewSection.style.display = "none";
  dashboardSection.classList.add("none");
  allProjectSection.style.display = "none";
  newProjectSection.style.display = "none";
  memberSection.style.display = "none";

  if (window.innerWidth <= 768) {
    sidebar.classList.add("close");
    settingSection.classList.add("container-mobile");
    memberSection.classList.add("container-mobile");
    newProjectSection.classList.add("container-mobile");
    overviewSection.classList.add("container-mobile");
    dashboardSection.classList.add("container-mobile");
    allProjectSection.classList.add("container-mobile");
  }
});

dashboardSection.classList.add("mlx-300");
