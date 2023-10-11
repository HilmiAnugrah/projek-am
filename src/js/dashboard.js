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
// view data
let isEyeLeft = true;
const buttonViewData = document.getElementById("button-view-data");
const viewData = document.getElementById("view-data");
const replaceView = document.getElementById("replace-view");
// close viewdata
const btnclose = document.getElementById("closeview");
// baseUrl
const baseUrl = "http://localhost/project-am/projek-am";


// ajax
const dataSantriAm = document.getElementById("data-santri-am");

function closedata() {
  viewData.style.transform = "translateY(-100%)";
  viewData.style.transition = "transform 0.2s ease-in-out";
}
function showData() {
    viewData.style.transform = "translateY(0%)";
    viewData.style.transition = "transform 0.2s ease-in-out";
}
function viewAllData(){
  const baseUrl = "http://localhost/project-am/projek-am";
    buttonViewData.addEventListener("click", () => {
        // Ubah variabel isEyeLeft
        isEyeLeft = !isEyeLeft;
        // Toggle tampilan
        showData();
        // Toggle sumber gambar
        replaceView.src = isEyeLeft
          ? `${baseUrl}/src/img/icons/eye.svg`
          : `${baseUrl}/src/img/icons/eyeleft.svg`;
      });
  btnclose.addEventListener("click", () => {
    isEyeLeft = !isEyeLeft;
    closedata(); 
    replaceView.src = isEyeLeft
    ? `${baseUrl}/src/img/icons/eye.svg`
    : `${baseUrl}/src/img/icons/eyeleft.svg`;
  });
viewData.addEventListener("click", (event) => {
    if (event.target === viewData) {
      closedata();
    isEyeLeft = !isEyeLeft;
      replaceView.src = isEyeLeft
    ? `${baseUrl}/src/img/icons/eye.svg`
    : `${baseUrl}/src/img/icons/eyeleft.svg`;
    }
  });
}
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
dataSantriAm.addEventListener("click", ()=>{
  const url = "src/backend/partials/ajax/load/data-santri.php";
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
      dashboardContainer.innerHTML = xhr.responseText;
    }
  };
  xhr.open('GET', url, true);
  xhr.send();
});