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
if(buttonProfile){
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
});}
// dropdown data santri
if(buttonAdminPptqam){
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
});};

if(buttonDataSantriPptqam){
buttonDataSantriPptqam.addEventListener("click", () => {
  dropdownDataSantriPptqam.classList.toggle("hidden");
  arrowDataSantriPptqam.classList.toggle("up-rotate");
  if(arrowProfile){
  arrowProfile.classList.remove("up-rotate");
  }
  if(dropdownProfile){
    dropdownProfile.classList.add("hidden");
  }
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
  if (window.innerWidth < 800) {
    sidebar.classList.add("close");
    sidebar.classList.remove("locked");
    sidebar.classList.remove("hoverable");
  }
});};

// Event listener untuk tombol "Data Calon Santri"
if(buttonDataCalonSantri){
buttonDataCalonSantri.addEventListener("click", (event) => {
  event.preventDefault();
  const url = "src/backend/partials/ajax/load/data-calon-santri.php";
  const nameUrl = "data-calon-santri";
  loadAndStoreContent(url, nameUrl);
  if (window.innerWidth < 800) {
    sidebar.classList.add("close");
    sidebar.classList.remove("locked");
    sidebar.classList.remove("hoverable");
  }
});};

// identitas santri 
const identitasSantri = document.getElementById("identitas-santri");

if(identitasSantri){
identitasSantri.addEventListener("click", (event)=>{
  event.preventDefault();
  const url = "src/backend/partials/ajax/load/identitas-santri.php";
  const nameUrl = "identitas-santri";
  loadAndStoreContent(url, nameUrl);
  if (window.innerWidth < 800) {
    sidebar.classList.add("close");
    sidebar.classList.remove("locked");
    sidebar.classList.remove("hoverable");
  }
});}
// button identitas ayah
const identitasAyah = document.getElementById('identitas-ayah');

if(identitasAyah){
identitasAyah.addEventListener("click", ()=> {
  const url = "src/backend/partials/ajax/load/identitas-ayah.php";
  const nameUrl = "identitas-ayah";
  loadAndStoreContent(url, nameUrl);
  if (window.innerWidth < 800) {
    sidebar.classList.add("close");
    sidebar.classList.remove("locked");
    sidebar.classList.remove("hoverable");
  }
});}
// button identitas Ibu
const identitasIbu = document.getElementById("identitas-ibu");

if(identitasIbu){
identitasIbu.addEventListener("click", ()=> {
  const url = "src/backend/partials/ajax/load/identitas-ibu.php";
  const nameUrl = "identitas-ibu";
  loadAndStoreContent(url, nameUrl);
  if (window.innerWidth < 800) {
    sidebar.classList.add("close");
    sidebar.classList.remove("locked");
    sidebar.classList.remove("hoverable");
  }
});}

// button Riwayat Kesehatan
const riwayatKesehatan = document.getElementById("riwayat-kesehatan");

if(riwayatKesehatan){
riwayatKesehatan.addEventListener("click",()=>{
  const url = "src/backend/partials/ajax/load/riwayat-kesehatan.php";
  const nameUrl = "riwayat-kesehatan";
  loadAndStoreContent(url, nameUrl);
  if (window.innerWidth < 800) {
    sidebar.classList.add("close");
    sidebar.classList.remove("locked");
    sidebar.classList.remove("hoverable");
  }
});}
// identitas wali
const identitasWali = document.getElementById("identitas-wali");

if(identitasWali){
identitasWali.addEventListener("click",()=>{
  const url = "src/backend/partials/ajax/load/identitas-wali.php";
  const nameUrl = "identitas-wali";
  loadAndStoreContent(url, nameUrl);
  if (window.innerWidth < 800) {
    sidebar.classList.add("close");
    sidebar.classList.remove("locked");
    sidebar.classList.remove("hoverable");
  }
});}
// dokumen pendukung
const dokumentPendukung = document.getElementById("dokumen-pendukung");


// settings
const settings = document.getElementById("setting");
settings.addEventListener("click",()=>{
  const url = "src/backend/partials/ajax/load/setting.php";
  const nameUrl = "setting";
  loadAndStoreContent(url, nameUrl);
  if (window.innerWidth < 800) {
    sidebar.classList.add("close");
    sidebar.classList.remove("locked");
    sidebar.classList.remove("hoverable");
  }
});
// create gelombang
const createGel = document.getElementById("create-gel");
if(createGel){
createGel.addEventListener("click",()=>{
  const url = "src/backend/partials/ajax/load/create-gel.php";
  const nameUrl = "create-gelombang";
  loadAndStoreContent(url, nameUrl);
  if (window.innerWidth < 800) {
    sidebar.classList.add("close");
    sidebar.classList.remove("locked");
    sidebar.classList.remove("hoverable");
  }
});}
// Edit Biaya
const editBiaya = document.getElementById("edit-biaya");
if(editBiaya){
editBiaya.addEventListener("click",()=>{
  const url = "src/backend/partials/ajax/load/edit-biaya.php";
  const nameUrl = "edit-biaya";
  loadAndStoreContent(url, nameUrl);
  if (window.innerWidth < 800) {
    sidebar.classList.add("close");
    sidebar.classList.remove("locked");
    sidebar.classList.remove("hoverable");
  }
});}
// broadcast WA
const broadcstWa = document.getElementById("broadcast-wa");
if(broadcstWa){
broadcstWa.addEventListener("click",()=>{
  const url = "src/backend/partials/ajax/load/broadcast-wa.php";
  const nameUrl = "broadcast-wa";
  loadAndStoreContent(url, nameUrl);
  if (window.innerWidth < 800) {
    sidebar.classList.add("close");
    sidebar.classList.remove("locked");
    sidebar.classList.remove("hoverable");
  }
});}
// KEluaraga lainnya  
const keluargaLainnya = document.getElementById("keluarga-lainnya");
if(keluargaLainnya){
keluargaLainnya.addEventListener("click",()=>{
  const url = "src/backend/partials/ajax/load/keluarga-lainnya.php";
  const nameUrl = "keluarga-lainnya";
  loadAndStoreContent(url, nameUrl);
  if (window.innerWidth < 800) {
    sidebar.classList.add("close");
    sidebar.classList.remove("locked");
    sidebar.classList.remove("hoverable");
  }
});}
const overviewL = document.getElementById("overview-link");
if(overviewL){
overviewL.addEventListener("click",()=>{
  const url = "src/backend/partials/ajax/load/overview.php";
  const nameUrl = "overview";
  loadAndStoreContent(url, nameUrl);
  if (window.innerWidth < 800) {
    sidebar.classList.add("close");
    sidebar.classList.remove("locked");
    sidebar.classList.remove("hoverable");
  }
});}


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
      } else if (nameUrl === "setting"){
        url = "src/backend/partials/ajax/load/setting.php";
      } else if (nameUrl === "create-gelombang"){
        url = "src/backend/partials/ajax/load/create-gel.php";
      } else if (nameUrl === "edit-biaya"){
        url = "src/backend/partials/ajax/load/edit-biaya.php";
      } else if (nameUrl === "broadcast-wa"){
        url = "src/backend/partials/ajax/load/broadcast-wa.php";
      } else if (nameUrl === "keluarga-lainnya"){
        url = "src/backend/partials/ajax/load/keluarga-lainnya.php";
      } else if (nameUrl === "overview"){
        url = "src/backend/partials/ajax/load/overview-link.php";
      } else if (nameUrl === "edit-data-santri"){
        url = "http://localhost/project-am/projek-am/dashboard#edit-biaya-smp";
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
function closeAndToggleEyeView(index, santri, ibu, ayah, wali, others) {
  showData();

  
  // Dan seterusnya untuk atribut-atribut lainnya
  const replaceView = document.getElementById(`replace-view${index}`);
  const btnclose = document.getElementById("closeview");
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
// data santri, ayah
  if (Array.isArray(ayah) && ayah.length > 0) {
    const ayahSantri = ayah.find((ayahObj) => ayahObj.std_id === santri.std_id);
    if (ayahSantri) {
      document.getElementById("nama-ayah-placeholder").textContent = ayahSantri.prt_full_name;
      document.getElementById("tgl-ayah-placeholder").textContent = ayahSantri.prt_birth_place + ", " + ayahSantri.indonesian_month;
      document.getElementById("suku-ayah-placeholder").textContent = ayahSantri.prt_tribes;
      document.getElementById("alamat-ayah-placeholder").textContent = ayahSantri.prt_home_address;
      document.getElementById("kode-pos-ayah-placeholder").textContent = ayahSantri.prt_postal_code;
      document.getElementById("email-ayah-placeholder").textContent = ayahSantri.prt_email;
      document.getElementById("whatsapp-ayah-placeholder").textContent = ayahSantri.prt_no_hp;
      document.getElementById("telp-ayah-placeholder").textContent = ayahSantri.prt_home_no_telp;
      document.getElementById("status-nikah-ayah-placeholder").textContent = ayahSantri.mrs_name;
      document.getElementById("ayah-menikah-pada-placeholder").textContent = ayahSantri.prt_married_at_age;
      document.getElementById("pernikahan-ayah-ke-placeholder").textContent = ayahSantri.prt_married_number;
      document.getElementById("universitas-ayah-placeholder").textContent = ayahSantri.prt_university;
      document.getElementById("fakultas-ayah-placeholder").textContent = ayahSantri.prt_faculty;
      document.getElementById("jurusan-ayah-placeholder").textContent = ayahSantri.prt_major;
      document.getElementById("pekerjaan-ayah-placeholder").textContent = ayahSantri.prt_job;
      document.getElementById("posisi-ayah-placeholder").textContent = ayahSantri.prt_job_position;
      document.getElementById("gaji-ayah-placeholder").textContent = ayahSantri.prw_name;
      document.getElementById("alamat-kantor-ayah-placeholder").textContent = ayahSantri.prt_office_address;
      document.getElementById("telp-kantor-ayah-placeholder").textContent = ayahSantri.prt_office_no_telp;
    } else {
      document.getElementById("alamat-ayah-placeholder").textContent = "";

    }
  } else {
    console.log("Data ayah tidak valid.");
  }

  // data ibu
  if (Array.isArray(ibu) && ibu.length > 0) {
    const ibuSantri = ibu.find((ibuObj) => ibuObj.std_id === santri.std_id);
    if (ibuSantri) {
      document.getElementById("nama-ibu-placeholder").textContent = ibuSantri.prt_full_name;
      document.getElementById("tgl-ibu-placeholder").textContent = ibuSantri.prt_birth_place + ", " + ibuSantri.indonesian_month;
      document.getElementById("suku-ibu-placeholder").textContent = ibuSantri.prt_tribes;
      document.getElementById("alamat-ibu-placeholder").textContent = ibuSantri.prt_home_address;
      document.getElementById("kode-pos-ibu-placeholder").textContent = ibuSantri.prt_postal_code;
      document.getElementById("email-ibu-placeholder").textContent = ibuSantri.prt_email;
      document.getElementById("whatsapp-ibu-placeholder").textContent = ibuSantri.prt_no_hp;
      document.getElementById("telp-ibu-placeholder").textContent = ibuSantri.prt_home_no_telp;
      document.getElementById("status-nikah-ibu-placeholder").textContent = ibuSantri.mrs_name;
      document.getElementById("ibu-menikah-pada-placeholder").textContent = ibuSantri.prt_married_at_age;
      document.getElementById("pernikahan-ibu-ke-placeholder").textContent = ibuSantri.prt_married_number;
      document.getElementById("universitas-ibu-placeholder").textContent = ibuSantri.prt_university;
      document.getElementById("fakultas-ibu-placeholder").textContent = ibuSantri.prt_faculty;
      document.getElementById("jurusan-ibu-placeholder").textContent = ibuSantri.prt_major;
      document.getElementById("pekerjaan-ibu-placeholder").textContent = ibuSantri.prt_job;
      document.getElementById("posisi-ibu-placeholder").textContent = ibuSantri.prt_job_position;
      document.getElementById("gaji-ibu-placeholder").textContent = ibuSantri.prw_name;
      document.getElementById("alamat-kantor-ibu-placeholder").textContent = ibuSantri.prt_office_address;
      document.getElementById("telp-kantor-ibu-placeholder").textContent = ibuSantri.prt_office_no_telp;
    } else {
      document.getElementById("nama-ibu-placeholder").textContent = "";
    }
  } else {
    console.log("Data ibu tidak valid.");
  }
  if (Array.isArray(wali) && wali.length > 0) {
    const waliSantri = wali.find((waliObj) => waliObj.std_id === santri.std_id);
    if (waliSantri) {
      document.getElementById("nama-wali-placeholder").textContent = waliSantri.prt_full_name;
      document.getElementById("tgl-wali-placeholder").textContent = waliSantri.prt_birth_place + ", " + waliSantri.indonesian_month;
      document.getElementById("suku-wali-placeholder").textContent = waliSantri.prt_tribes;
      document.getElementById("hubungan-wali-placeholder").textContent = waliSantri.prt_relationship;
      document.getElementById("alamat-wali-placeholder").textContent = waliSantri.prt_home_address;
      document.getElementById("kode-pos-wali-placeholder").textContent = waliSantri.prt_postal_code;
      document.getElementById("email-wali-placeholder").textContent = waliSantri.prt_email;
      document.getElementById("whatsapp-wali-placeholder").textContent = waliSantri.prt_no_hp;
      document.getElementById("telp-wali-placeholder").textContent = waliSantri.prt_home_no_telp;
      document.getElementById("status-nikah-wali-placeholder").textContent = waliSantri.mrs_name;
      document.getElementById("wali-menikah-pada-placeholder").textContent = waliSantri.prt_married_at_age;
      document.getElementById("pernikahan-wali-ke-placeholder").textContent = waliSantri.prt_married_number;
      document.getElementById("universitas-wali-placeholder").textContent = waliSantri.prt_university;
      document.getElementById("fakultas-wali-placeholder").textContent = waliSantri.prt_faculty;
      document.getElementById("jurusan-wali-placeholder").textContent = waliSantri.prt_major;
      document.getElementById("pekerjaan-wali-placeholder").textContent = waliSantri.prt_job;
      document.getElementById("posisi-wali-placeholder").textContent = waliSantri.prt_job_position;
      document.getElementById("gaji-wali-placeholder").textContent = waliSantri.prw_name;
      document.getElementById("alamat-kantor-wali-placeholder").textContent = waliSantri.prt_office_address;
      document.getElementById("telp-kantor-wali-placeholder").textContent = waliSantri.prt_office_no_telp;
    } else {
      document.getElementById("nama-wali-placeholder").textContent = "";
    }
  } else {
    console.log("Data wali tidak valid.");
  }

  if (Array.isArray(others) && others.length > 0) {
    const othersSantri = others.find((othersObj) => othersObj.std_id === santri.std_id);
    if (othersSantri) {
      document.getElementById("nama-others-placeholder").textContent = othersSantri.prt_full_name;
      document.getElementById("hubungan-others-placeholder").textContent = othersSantri.prt_relationship;
      document.getElementById("alamat-others-placeholder").textContent = othersSantri.prt_home_address;
      document.getElementById("whatsapp-others-placeholder").textContent = othersSantri.prt_no_hp;
      document.getElementById("telp-others-placeholder").textContent = othersSantri.prt_home_no_telp;
    } else {
      document.getElementById("nama-others-placeholder").textContent = "";
    }
  } else {
    console.log("Data others tidak valid.");
  }
// data santri 
if (santri['gnr_id'] === 1) {
  var genders = "PA";
  console.log(genders);
} else if (santri['gnr_id'] === 2) {
  var genders = "PI";
  console.log(genders);
}

if (santri['prg_id'] === 1) {
  var program = "SMP";
  console.log(program);
} else if (santri['prg_id'] === 2) {
  var program = "SMA";
  console.log(program);
}

// periode
  const periode = santri.prd_name + "/" + ((parseInt(santri['prd_name']) + 1).toString());
  // document.getElementById("program-placeholder").textContent = "program :" + program + genders;
  document.getElementById("nomor-test-placeholder").textContent = program + "." + genders + "." + santri.glb_name + "-" + periode + "." + santri.std_id ;
  document.getElementById("nama-santri-placeholder").textContent = santri.std_full_name;
  document.getElementById("tgl-santri-placeholder").textContent = santri.std_birth_place + ", " + santri.indonesian_month;
  document.getElementById("nama-lengkap-placeholder").textContent = santri.std_full_name;
  document.getElementById("nama-panggilan-placeholder").textContent = santri.std_nickname;
  document.getElementById("jenis-kelamin-placeholder").textContent = santri.gnr_name;
  document.getElementById("golongan-darah-placeholder").textContent = santri.sth_blood_type;
  document.getElementById("tgl-placeholder").textContent = santri.std_birth_place + ", " + santri.indonesian_month;
  document.getElementById("alamat-santri-placeholder").textContent = santri.str_address;
  document.getElementById("kode-pos-placeholder").textContent = santri.str_postal_code;
  document.getElementById("telepon-rumah-placeholder").textContent = santri.str_postal_code;
  document.getElementById("kecamatan-placeholder").textContent = santri.str_sub_district;
  document.getElementById("kelurahan-placeholder").textContent = santri.str_urban_village;
  document.getElementById("bahasa-sehari-placeholder").textContent = santri.std_language_home;
  document.getElementById("jarak-rumah-placeholder").textContent = santri.str_distance_ponpes_am;
  document.getElementById("anak-ke-placeholder").textContent = santri.std_child_of;
  document.getElementById("anak-dari-placeholder").textContent = santri.std_number_sibling;
  document.getElementById("berat-badan-placeholder").textContent = santri.sth_weight;
  document.getElementById("tinggi-badan-placeholder").textContent = santri.sth_height;
  document.getElementById("keluhan-mata-placeholder").textContent = santri.sth_eyes_complaint;
  document.getElementById("keluhan-telinga-placeholder").textContent = santri.sth_ears_complaint;
  document.getElementById("keluhan-anak-placeholder").textContent = santri.sth_physical_complaint;
  document.getElementById("riwayat-terapi-placeholder").textContent = santri.sth_therapy_history;
  document.getElementById("riwayat-rumah-sakit-placeholder").textContent = santri.sth_hospitalized;
  document.getElementById("hal-penting-placeholder").textContent = santri.sth_important_massage;
  const imageProfile = document.getElementById("image-profile");
  imageProfile.src = baseUrl + '/src/img/uploaded/person/' + santri.std_img;
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
function showImage(data) {
const viewImage = document.getElementById("view-image");
const btnclose = document.getElementById("close-view-image");
const buktiImg = document.getElementById("bukti-img");

buktiImg.src = data;
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

function pageCalonSantri(data) {
  checkInputsCalonSantri(data);
}

function checkInputsCalonSantri(data) {
  let input4 = 1;
  if (data) {
    input4 = data;
  }
  fetch(
  `${baseUrl}/src/backend/partials/ajax/load/data-calon-santri.php?page=` + input4
  )
    .then((response) => response.text())
    .then((response) => (dashboardContainer.innerHTML = response));
};

function pageSantri(data) {
  checkInputsSantri(data);
}

function checkInputsSantri(data) {
  let input4 = 1;
  if (data) {
    input4 = data;
  }
  fetch(
  `${baseUrl}/src/backend/partials/ajax/load/data-santri.php?page=` + input4
  )
    .then((response) => response.text())
    .then((response) => (dashboardContainer.innerHTML = response));
};


function showConfirmation(){
  Swal.fire({
    title: 'Buat Gelombang Baru?',
    text: 'Anda yakin ingin membuat gelombang baru?',
    icon: 'question',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Ya',
    cancelButtonText: 'Tidak'
}).then((result) => {
    if (result.isConfirmed) {
        Swal.fire('Berhasil!', 'Gelombang baru telah dibuat.', 'success');

        // Tambahkan redireksi di sini
        window.location.href = baseUrl + '/dashboard#create-gelombang';
    }
});
}


function getCs() {
  const keywordCs = document.getElementById('keyword-cs');
  const containerCs = document.getElementById('container-table-cs');
  let originalContent = null; // Variabel untuk menyimpan konten asli
  console.log(originalContent);
    // Memuat konten asli saat halaman dimuat
    window.addEventListener('load', () => {
      originalContent = containerDs.innerHTML;
    });
  
  keywordCs.addEventListener('keyup', () => {
    // buat object ajax
    const xhr = new XMLHttpRequest();
    // cek kesiapan ajax
    xhr.onreadystatechange = function () {
      if (xhr.readyState == 4 && xhr.status == 200) {
        containerCs.innerHTML = xhr.responseText; // Perbaiki resphonseText menjadi responseText
      }
    };
    if (keywordCs.value.length < 1) {
      const url = "src/backend/partials/ajax/load/data-calon-santri.php";
          const nameUrl = "data-calon-santri";
          loadAndStoreContent(url, nameUrl);
      return;
    }
    // eksekusi 
    xhr.open('GET', baseUrl + '/src/backend/partials/ajax/load/dataCs.php?keyword=' + keywordCs.value, true);
    xhr.send(); // Tambahkan titik koma di sini
  });
}


function getDs() {
  const keywordDs = document.getElementById('keyword-ds');
  const containerDs = document.getElementById('container-table-ds');
  let originalContent = null; // Variabel untuk menyimpan konten asli
console.log(originalContent);
  // Memuat konten asli saat halaman dimuat
  window.addEventListener('load', () => {
    originalContent = containerDs.innerHTML;
  });

  keywordDs.addEventListener('keyup', () => {
    // Jika panjang input kurang dari 1, memuat ulang konten asli
    if (keywordDs.value.length < 1) {
          const url = "src/backend/partials/ajax/load/data-santri.php";
          const nameUrl = "data-santri";
          loadAndStoreContent(url, nameUrl);
      return;
    }

    // buat object ajax
    const xhr = new XMLHttpRequest();
    // cek kesiapan ajax
    xhr.onreadystatechange = function () {
      if (xhr.readyState == 4 && xhr.status == 200) {
        containerDs.innerHTML = xhr.responseText; 
      }
    };

    // eksekusi 
    xhr.open('GET', baseUrl + '/src/backend/partials/ajax/load/dataDs.php?keyword=' + keywordDs.value, true);
    xhr.send(); // Tambahkan titik koma di sini
  });
}

function handleSelectChange() {
  const containerDs = document.getElementById('container-table-ds');
  const selectElement = document.getElementById('gelombang-filter');
  const selectedValue = parseInt(selectElement.value);
  console.log(typeof selectedValue);
  console.log(selectedValue);
   // buat object ajax
   const xhr = new XMLHttpRequest();
   // cek kesiapan ajax
   xhr.onreadystatechange = function () {
     if (xhr.readyState == 4 && xhr.status == 200) {
       containerDs.innerHTML = xhr.responseText; 
     }
   };

   // eksekusi 
   xhr.open('GET', baseUrl + '/src/backend/partials/ajax/load/dataDs.php?gel=' + selectedValue, true);
   xhr.send(); // Tambahkan titik koma di sini
  // Lakukan apa pun yang Anda inginkan dengan nilai yang dipilih di sini
}
