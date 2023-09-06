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

if (window.innerWidth <= 1024) {
  about.addEventListener("click", () => {
    toggleSubMenu(dropdownAbout, svgAbout);
    setTimeout(() => {
      dropdownAbout.classList.toggle("scale-0");
      dropdownAbout.classList.toggle("scale-100");
    }, 100);
  });

  ppdb.addEventListener("click", () => {
    toggleSubMenu(dropdownPpdb, svgPpdb);
    setTimeout(() => {
      dropdownPpdb.classList.toggle("scale-0");
      dropdownPpdb.classList.toggle("scale-100");
    }, 100);
  });

  contact.addEventListener("click", () => {
    toggleSubMenu(dropdownContact, svgContact);
    setTimeout(() => {
      dropdownContact.classList.toggle("scale-y-0");
      dropdownContact.classList.toggle("scale-y-100");
    }, 100);
  });

}



