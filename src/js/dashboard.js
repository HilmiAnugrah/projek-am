// Selecting the sidebar and buttons
const sidebar = document.querySelector(".sidebar");
const sidebarOpenBtn = document.querySelector("#sidebar-open");
const sidebarCloseBtn = document.querySelector("#sidebar-close");
const sidebarLockBtn = document.querySelector("#lock-icon");
// data santri pptqam
const buttonDataSantriPptqam = document.getElementById("santri-pptqam");
const dropdownDataSantriPptqam = document.getElementById(
  "dropdown-santri-pptqam"
);
// dropdown admin pptqam
const buttonAdminPptqam = document.getElementById("admin-pptqam");
const dropdownAdminPptqam = document.getElementById(
  "dropdown-admin-pptqam"
);
const arrowAdminPptqam = document.getElementById(
  "arrow-admin-pptqam"
);
const arrowDataSantriPptqam = document.getElementById("arrow-santri-pptqam");
// Dropdown profile
const buttonProfile = document.getElementById("profile-santri");
const dropdownProfile = document.getElementById("dropdown-profile");
const arrowProfile = document.getElementById("arrow-profile");
// data user
const dataUser = document.querySelector("div .data-user");
const sidebarProfile = document.querySelector("div .sidebar-profile");
//ambil document data santri
const dashboardContainer = document.getElementById("dashboard-container");
// ajax
const buttonDataCalonSantri = document.getElementById(
  "data-calon-santri-pptqam"
);
const dataSantriAm = document.getElementById("data-santri-am");
// baseurl
const baseUrl = "http://localhost/project-am/projek-am";
// ambil data santri
const buttonViewData = document.getElementById("button-view-data");
const viewData = document.getElementById("view-data");
const replaceView = document.getElementById("replace-view");
// close viewdata
const btnclose = document.getElementById("closeview");


// Function to toggle the lock state of the sidebar
const toggleLock = () => {
  sidebar.classList.toggle("locked");
  // If the sidebar is not locked
  if (!sidebar.classList.contains("locked")) {
    sidebar.classList.add("hoverable");
    sidebarLockBtn.classList.replace("bx-lock-alt", "bx-lock-open-alt");
  } else {
    sidebar.classList.remove("hoverable");
    sidebarLockBtn.classList.replace("bx-lock-open-alt", "bx-lock-alt");
  }
};

// Function to hide the sidebar when the mouse leaves
const hideSidebar = () => {
  if (sidebar.classList.contains("hoverable")) {
    dashboardContainer.classList.replace("dashboard-full", "dashboard-small");
    sidebar.classList.add("close");
    dataUser.classList.toggle("hidden");
    sidebarProfile.classList.add("height");
    if (buttonProfile) {
      dropdownProfile.classList.add("hidden");
      arrowProfile.classList.remove("up-rotate");
    }
    if (buttonDataSantriPptqam) {
      dropdownDataSantriPptqam.classList.add("hidden");
      arrowDataSantriPptqam.classList.remove("up-rotate");
    }
    if (buttonAdminPptqam) {
      dropdownAdminPptqam.classList.add("hidden");
      arrowAdminPptqam.classList.remove("up-rotate");
    }
  }
};

// Function to show the sidebar when the mouse enter
const showSidebar = () => {
  if (sidebar.classList.contains("hoverable")) {
    sidebar.classList.remove("close");
    sidebarProfile.classList.remove("height");
    dashboardContainer.classList.replace("dashboard-small", "dashboard-full");
  }
};

// Function to show and hide the sidebar
const toggleSidebar = () => {
  sidebar.classList.toggle("close");
  dashboardContainer.classList.replace("dashboard-small", "dashboard-full");
  if (buttonProfile) {
    dropdownProfile.classList.add("hidden");
    arrowProfile.classList.remove("up-rotate");
  }
  if (buttonDataSantriPptqam) {
    dropdownDataSantriPptqam.classList.add("hidden");
    arrowDataSantriPptqam.classList.remove("up-rotate");
  }
  if (buttonAdminPptqam) {
    dropdownAdminPptqam.classList.add("hidden");
    arrowAdminPptqam.classList.remove("up-rotate");
  }
};

// If the window width is less than 800px, close the sidebar and remove hoverability and lock
if (window.innerWidth < 800) {
  sidebar.classList.add("close");
  sidebar.classList.remove("locked");
  sidebar.classList.remove("hoverable");
}

// Adding event listeners to buttons and sidebar for the corresponding actions
sidebarLockBtn.addEventListener("click", toggleLock);
sidebar.addEventListener("mouseleave", hideSidebar);
sidebar.addEventListener("mouseenter", showSidebar);
sidebarOpenBtn.addEventListener("click", toggleSidebar);
sidebarCloseBtn.addEventListener("click", toggleSidebar);

// dropdown profile
buttonProfile.addEventListener("click", () => {
  dropdownProfile.classList.toggle("hidden");
  arrowProfile.classList.toggle("up-rotate");
  if(arrowDataSantriPptqam){
  arrowDataSantriPptqam.classList.remove("up-rotate");};
  if(dropdownDataSantriPptqam){
  dropdownDataSantriPptqam.classList.add("hidden");};
  if(arrowAdminPptqam){
  arrowAdminPptqam.classList.remove("up-rotate");};
  if(dropdownAdminPptqam){
  dropdownAdminPptqam.classList.add("hidden");};
});
// dropdown data santri
buttonAdminPptqam.addEventListener("click", ()=>{
  dropdownAdminPptqam.classList.toggle("hidden");
  arrowAdminPptqam.classList.toggle("up-rotate");
  if(arrowDataSantriPptqam){
  arrowDataSantriPptqam.classList.remove("up-rotate");};
  if(dropdownDataSantriPptqam){
  dropdownDataSantriPptqam.classList.add("hidden");};
  if(arrowProfile){
  arrowProfile.classList.remove("up-rotate");};
  if(dropdownProfile){
  dropdownProfile.classList.add("hidden");};
});

if(buttonDataSantriPptqam){
buttonDataSantriPptqam.addEventListener("click", () => {
  dropdownDataSantriPptqam.classList.toggle("hidden");
  arrowDataSantriPptqam.classList.toggle("up-rotate");
  arrowProfile.classList.remove("up-rotate");
  dropdownProfile.classList.add("hidden");
  arrowAdminPptqam.classList.remove("up-rotate");
  dropdownAdminPptqam.classList.add("hidden");
});};

// ajax actions
if(dataSantriAm){
dataSantriAm.addEventListener("click", (event) => {
  event.preventDefault();
  const url = "src/backend/partials/ajax/load/data-santri.php";
  const nameUrl = "data-santri";
  loadAndStoreContent(url, nameUrl);
});};

// Event listener untuk tombol "Data Calon Santri"
if(buttonDataCalonSantri){
buttonDataCalonSantri.addEventListener("click", (event) => {
  event.preventDefault();
  const url = "src/backend/partials/ajax/load/data-calon-santri.php";
  const nameUrl = "data-calon-santri";
  loadAndStoreContent(url, nameUrl);
});};

// identitas santri 
const identitasSantri = document.getElementById("identitas-santri");

identitasSantri.addEventListener("click", (event)=>{
  event.preventDefault();
  const url = "src/backend/partials/ajax/load/identitas-santri.php";
  const nameUrl = "identitas-santri";
  loadAndStoreContent(url, nameUrl);
});
// button identitas ayah
const identitasAyah = document.getElementById('identitas-ayah');
identitasAyah.addEventListener("click", ()=> {
  const url = "src/backend/partials/ajax/load/identitas-ayah.php";
  const nameUrl = "identitas-ayah";
  loadAndStoreContent(url, nameUrl);
});
// button identitas Ibu
const identitasIbu = document.getElementById("identitas-ibu");
identitasIbu.addEventListener("click", ()=> {
  const url = "src/backend/partials/ajax/load/identitas-ibu.php";
  const nameUrl = "identitas-ibu";
  loadAndStoreContent(url, nameUrl);
});

// button Riwayat Kesehatan
const riwayatKesehatan = document.getElementById("riwayat-kesehatan");
riwayatKesehatan.addEventListener("click",()=>{
  const url = "src/backend/partials/ajax/load/riwayat-kesehatan.php";
  const nameUrl = "riwayat-kesehatan";
  loadAndStoreContent(url, nameUrl);
});
// identitas wali
const identitasWali = document.getElementById("identitas-wali");
identitasWali.addEventListener("click",()=>{
  const url = "src/backend/partials/ajax/load/identitas-wali.php";
  const nameUrl = "identitas-wali";
  loadAndStoreContent(url, nameUrl);
});
// dokumen pendukung
const dokumentPendukung = document.getElementById("dokumen-pendukung");
dokumentPendukung.addEventListener("click",()=>{
  const url = "src/backend/partials/ajax/load/dokumen-pendukung.php";
  const nameUrl = "dokumen-pendukung";
  loadAndStoreContent(url, nameUrl);
});
// settings
const settings = document.getElementById("setting");
settings.addEventListener("click",()=>{
  const url = "src/backend/partials/ajax/load/setting.php";
  const nameUrl = "setting";
  loadAndStoreContent(url, nameUrl);
});
// create gelombang
const createGel = document.getElementById("create-gel");
createGel.addEventListener("click",()=>{
  const url = "src/backend/partials/ajax/load/create-gel.php";
  const nameUrl = "create-gelombang";
  loadAndStoreContent(url, nameUrl);
});
// Edit Biaya
const editBiaya = document.getElementById("edit-biaya");
editBiaya.addEventListener("click",()=>{
  const url = "src/backend/partials/ajax/load/edit-biaya.php";
  const nameUrl = "edit-biaya";
  loadAndStoreContent(url, nameUrl);
});
// broadcast WA
const broadcstWa = document.getElementById("broadcast-wa");
broadcstWa.addEventListener("click",()=>{
  const url = "src/backend/partials/ajax/load/broadcast-wa.php";
  const nameUrl = "broadcast-wa";
  loadAndStoreContent(url, nameUrl);
});

function loadAndStoreContent(url, nameUrl) {
  // Periksa apakah konten sudah ada di localStorage
  const storedContent = localStorage.getItem("dashboardContent");
  if (storedContent) {
    dashboardContainer.innerHTML = storedContent;
  }

  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        // Perbarui kontainer dashboard dengan konten baru
        dashboardContainer.innerHTML = xhr.responseText;

        // Simpan konten yang dimuat ke local storage
        localStorage.setItem("dashboardContent", xhr.responseText);

        // Menambahkan entri ke dalam riwayat peramban
        const state = { content: xhr.responseText, url: url };
        history.pushState(state, "", `dashboard#${nameUrl}`);
      } else {
        console.error("Gagal memuat konten.");
      }
    }
  };
  xhr.open("GET", url, true);
  xhr.send();
}

document.addEventListener("DOMContentLoaded", () => {
  const savedContent = localStorage.getItem("dashboardContent");
  if (savedContent) {
    dashboardContainer.innerHTML = savedContent;

    // Mendapatkan data penanda dari URL
    const hash = window.location.hash;
    if (hash) {
      // Mengambil nama URL dari hash
      const nameUrl = hash.substring(1);
      // Mendapatkan URL yang sesuai dengan nama URL dari hash
      let url;
      if (nameUrl === "data-santri") {
        url = "src/backend/partials/ajax/load/data-santri.php";
      } else if (nameUrl === "data-calon-santri") {
        url = "src/backend/partials/ajax/load/data-calon-santri.php";
      } else if (nameUrl === "identitas-santri"){
        url = "src/backend/partials/ajax/load/identitas-santri.php";
      } else if (nameUrl === "identitas-ayah"){
        url = "src/backend/partials/ajax/load/identitas-ayah.php";
      } else if (nameUrl === "identitas-ibu"){
        url = "src/backend/partials/ajax/load/identitas-ibu.php";
      } else if (nameUrl === "riwayat-kesehatan"){
        url = "src/backend/partials/ajax/load/riwayat-kesehatan.php";
      } else if (nameUrl === "identitas-wali"){
        url = "src/backend/partials/ajax/load/identitas-wali.php";
      } else if (nameUrl === "dokumen-pendukung"){
        url = "src/backend/partials/ajax/load/dokumen-pendukung.php";
      } else if (nameUrl === "setting"){
        url = "src/backend/partials/ajax/load/setting.php";
      } else if (nameUrl === "create-gelombang"){
        url = "src/backend/partials/ajax/load/create-gel.php";
      } else if (nameUrl === "edit-biaya"){
        url = "src/backend/partials/ajax/load/edit-biaya.php";
      } else if (nameUrl === "broadcast-wa"){
        url = "src/backend/partials/ajax/load/broadcast-wa.php";
      }
      // Memuat dan menyimpan konten
      loadAndStoreContent(url, nameUrl);
    }
  }
});

window.addEventListener("popstate", (event) => {
  if (event.state && event.state.content && event.state.url) {
    // Muat ulang konten berdasarkan event.state.content dan event.state.url
    const nameUrl = event.state.url.substring(event.state.url.lastIndexOf('/') + 1);
    loadAndStoreContent(event.state.url, nameUrl);
  }
});


// akhiran ajax
function closeData() {
  viewData.style.transform = "translateY(-100%)";
  viewData.style.transition = "transform 0.2s ease-in-out";
}
function showData() {
  viewData.style.transform = "translateY(0%)";
  viewData.style.transition = "transform 0.2s ease-in-out";
}

let isEyeLeft = true;
function closeAndToggleEyeView(index) {
  const replaceView = document.getElementById(`replace-view${index}`);
  const btnclose = document.getElementById("closeview");
  showData();
  // Periksa apakah replaceView ditemukan sebelum mengatur properti src
  if (replaceView) {
    let isEyeLeft = true;
    isEyeLeft = !isEyeLeft;
    replaceView.src = isEyeLeft
      ? `${baseUrl}/src/img/icons/eye.svg`
      : `${baseUrl}/src/img/icons/eyeleft.svg`;
  }
  btnclose.addEventListener("click", () => {
    isEyeLeft = isEyeLeft;
    closeData();
    replaceView.src = isEyeLeft
      ? `${baseUrl}/src/img/icons/eye.svg`
      : `${baseUrl}/src/img/icons/eyeleft.svg`;
  });
  viewData.addEventListener("click", (event) => {
    if (event.target === viewData) {
      closeData();
      isEyeLeft = isEyeLeft;
      replaceView.src = isEyeLeft
        ? `${baseUrl}/src/img/icons/eye.svg`
        : `${baseUrl}/src/img/icons/eyeleft.svg`;
    }
  });
}

const viewImage = document.getElementById("view-image");
function closeDataImage() {
  viewImage.style.transform = "translateY(-100%)";
  viewImage.style.transition = "transform 0.2s ease-in-out";
}
function showDataImage() {
  viewImage.style.transform = "translateY(0%)";
  viewImage.style.transition = "transform 0.2s ease-in-out";
}
// view image transfer

function showImage() {
const viewImage = document.getElementById("view-image");
const btnclose = document.getElementById("close-view-image");
  showDataImage();
  // Periksa apakah replaceView ditemukan sebelum mengatur properti src
  btnclose.addEventListener("click", () => {
    closeDataImage();
  });

  viewImage.addEventListener("click", (event) => {
    if (event.target === viewImage) {
      closeDataImage();
    }
  });
}

function inputBiayaSmpSma(tombol){
  const btnBiayaSmp = document.getElementById("btn-edit-biaya-smp");
  const btnBiayaSma = document.getElementById("btn-edit-biaya-sma");
  const formBiayaSmp = document.getElementById("input-biaya-smp");
  const formBiayaSma = document.getElementById("input-biaya-sma");


btnBiayaSmp.addEventListener("click", ()=>{
    formBiayaSmp.classList.remove("");
});
}

