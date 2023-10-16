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
const buttonDataCalonSantri = document.getElementById("data-calon-santri-pptqam");
const dataSantriAm = document.getElementById("data-santri-am");
// baseurl
const baseUrl = "http://localhost/project-am/projek-am";
// ambil data santri
const buttonViewData = document.getElementById("button-view");
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
  arrowDataSantriPptqam.classList.remove("up-rotate");
  dropdownDataSantriPptqam.classList.add("hidden");
});
// dropdown data santri
buttonDataSantriPptqam.addEventListener("click", () => {
  dropdownDataSantriPptqam.classList.toggle("hidden");
  arrowDataSantriPptqam.classList.toggle("up-rotate");
  arrowProfile.classList.remove("up-rotate");
  dropdownProfile.classList.add("hidden");
});


// ajax actions
dataSantriAm.addEventListener("click", (event) => {
  event.preventDefault();
  const url = "src/backend/partials/ajax/load/data-santri.php";
  const nameUrl = "hayde";
  loadAndStoreContent(url,nameUrl);
});

// Event listener untuk tombol "Data Calon Santri"
buttonDataCalonSantri.addEventListener("click", (event) => {
  event.preventDefault();
  const url = "src/backend/partials/ajax/load/data-calon-santri.php";
  const nameUrl = "hilmi";
  loadAndStoreContent(url,nameUrl);
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
        const state = {content: xhr.responseText, url: url};
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
      if (nameUrl === "hayde") {
        url = "src/backend/partials/ajax/load/data-santri.php";
      } else if (nameUrl === "hilmi") {
        url = "src/backend/partials/ajax/load/data-calon-santri.php";
      }
      // Memuat dan menyimpan konten
      loadAndStoreContent(url, nameUrl);
    }
  }
});


window.addEventListener("popstate", (event) => {
  if (event.state && event.state.content && event.state.url) {
  }
});

// akhiran ajax 
function closedata() {
  viewData.style.transform = "translateY(-100%)";
  viewData.style.transition = "transform 0.2s ease-in-out";
}
function showData() {
  viewData.style.transform = "translateY(0%)";
  viewData.style.transition = "transform 0.2s ease-in-out";
}


// button view
function closeData() {
  viewData.style.transform = "translateY(-100%)";
  viewData.style.transition = "transform 0.2s ease-in-out";
}
function showData() {
  viewData.style.transform = "translateY(0%)";
  viewData.style.transition = "transform 0.2s ease-in-out";
}

let isEyeLeft = true;
function closeAndToggleEyeView() {
const replaceView = document.getElementById("replace-view");
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
    replaceView.src = isEyeLeft ? `${baseUrl}/src/img/icons/eye.svg`
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

// data calon santri
let confirmedClicked = false;
function checked() {
  const replaceView = document.getElementById("replace-view");
  if (confirmedClicked) {
    return;  // Jangan lakukan apa pun jika tombol sudah diklik sebelumnya
  }

  const confirmed = confirm("Yakin?");
  
  if (confirmed) {
    const replaceView = document.getElementById("replace-view");
    const baseUrl = "http://localhost/project-am/projek-am";  // Ganti dengan base URL Anda
    
    if (replaceView) {
      let isEyeLeft = true;
      isEyeLeft = !isEyeLeft;
      replaceView.src = isEyeLeft
        ? `${baseUrl}/src/img/icons/approve.svg`
        : `${baseUrl}/src/img/icons/approved.svg`;
    }
    confirmedClicked = true;  // Setel status klik ke true setelah dikonfirmasi
  } else {
    alert("hayde");
  }
}
