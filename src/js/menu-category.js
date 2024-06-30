// menu category
function closeMenu() {
  menuPopup.style.transform = "scale(0%)";
  showPopup.style.transform = "translateY(300%)";
  menuPopup.style.transition = "transform 0.3s ease-in-out";
}
// Ambil reference untuk elemen button
const btnCategory = document.getElementById("menu-category");
const closes = document.querySelector("button.close");
const buttonCategory = document.getElementById("menu-kategori");
// Ambil reference untuk elemen menu-popup
const menuPopup = document.querySelector("div.menu-popup");
const showPopup = document.getElementById("wrapper-menu-popup");

// Tambahkan event listener untuk button ketika diklik

buttonCategory.addEventListener("click", () => {
  menuPopup.style.transform = "translateY(0)";
  showPopup.style.transform = "translateY(0)";
  showPopup.classList.add("block");
  showPopup.classList.remove("hidden");
});

closes.addEventListener("click", () => {
  menuPopup.style.transform = "scale(0%)";
  showPopup.style.transform = "translateY(300%)";
  menuPopup.style.transition = "transform 0.3s ease-in-out";
});

showPopup.addEventListener("click", (event) => {
  if (event.target === showPopup) {
    closeMenu();
  }
});
if(btnCategory){
  btnCategory.addEventListener("click", () => {
    menuPopup.style.transform = "translateY(0)";
    showPopup.style.transform = "translateY(0)";
    showPopup.classList.add("block");
    showPopup.classList.remove("hidden");
  });
}
