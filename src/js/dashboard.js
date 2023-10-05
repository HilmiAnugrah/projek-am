// Selecting the sidebar and buttons
const sidebar = document.querySelector(".sidebar");
const sidebarOpenBtn = document.querySelector("#sidebar-open");
const sidebarCloseBtn = document.querySelector("#sidebar-close");
const sidebarLockBtn = document.querySelector("#lock-icon");
// data santri pptqam
const buttonDataSantriPptqam = document.getElementById("santri-pptqam");
const dropdownDataSantriPptqam = document.getElementById("dropdown-santri-pptqam");
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
const viewData = document.getElementById("view-data");
const replaceView = document.getElementById("replace-view");
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
      if(buttonProfile){
        dropdownProfile.classList.add("hidden");
        arrowProfile.classList.remove("up-rotate");
      }
      if(buttonDataSantriPptqam){
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
  if(buttonProfile){
    dropdownProfile.classList.add("hidden");
    arrowProfile.classList.remove("up-rotate");
  }
  if(buttonDataSantriPptqam){
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
buttonProfile.addEventListener("click",()=>{
  dropdownProfile.classList.toggle("hidden");
  arrowProfile.classList.toggle("up-rotate");
  arrowDataSantriPptqam.classList.remove("up-rotate");
  dropdownDataSantriPptqam.classList.add("hidden");
});
// dropdown data santri
buttonDataSantriPptqam.addEventListener("click",()=>{
  dropdownDataSantriPptqam.classList.toggle("hidden");
  arrowDataSantriPptqam.classList.toggle("up-rotate");
  arrowProfile.classList.remove("up-rotate");
  dropdownProfile.classList.add("hidden");
});

// viewData.addEventListener("click", () => {
//   replaceView.src = "src/img/icons/eyeleft.svg";
// });
let isEyeLeft = true;  // Variable to track the state

viewData.addEventListener("click", () => {
  // Toggle the isEyeLeft variable
  isEyeLeft = !isEyeLeft;

  // Set the src attribute based on the state
  if (isEyeLeft) {
    replaceView.src = "src/img/icons/eyeleft.svg";
  } else {
    // Set the src attribute to a different image when not eyeleft
    replaceView.src = "src/img/icons/eye.svg";
  }
});

