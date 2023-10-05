const about = document.getElementById("about");
const dropdownAbout = document.getElementById("dropdown-about");
const svgAbout = document.querySelector("#about svg");
const ppdb = document.getElementById("ppdb");
const dropdownPpdb = document.getElementById("dropdown-ppdb");
const svgPpdb = document.querySelector("#ppdb svg");
const contact = document.getElementById("contact");
const dropdownContact = document.getElementById("dropdown-contact");
const svgContact = document.querySelector("#contact svg");

function toggleSubMenu(subDropdown, svgElement) {
  subDropdown.classList.toggle("hidden");
  svgElement.classList.toggle("rotate_dropdown"); // Tambahkan atau hapus kelas rotate-180
}
function hiddenMenu(addHidden, svgQuestions) {
  addHidden.classList.add("hidden");
  svgQuestions.classList.remove("rotate_dropdown");
}
if (window.innerWidth <= 1024) {
  about.addEventListener("click", () => {
    toggleSubMenu(dropdownAbout, svgAbout);
    hiddenMenu(dropdownPpdb, svgPpdb);
    hiddenMenu(dropdownContact, svgContact);
  });

  ppdb.addEventListener("click", () => {
    toggleSubMenu(dropdownPpdb, svgPpdb);
    hiddenMenu(dropdownAbout, svgAbout);
    hiddenMenu(dropdownContact, svgContact);
  });

  contact.addEventListener("click", () => {
    toggleSubMenu(dropdownContact, svgContact);
    hiddenMenu(dropdownAbout, svgAbout);
    hiddenMenu(dropdownPpdb, svgPpdb);
  });

}



