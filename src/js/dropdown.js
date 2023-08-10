const about = document.getElementById("about");
const dropdownAbout = document.getElementById("dropdown-about");
const svgAbout = document.querySelector("#about svg");
const ppdb = document.getElementById("ppdb");
const dropdownPpdb = document.getElementById("dropdown-ppdb");
const svgPpdb = document.querySelector("#ppdb svg");
const contact = document.getElementById("contact");
const dropdownContact = document.getElementById("dropdown-contact");
const svgContact = document.querySelector("#contact svg");

if (window.innerWidth < 1024) {
  about.addEventListener("click", () => {
    dropdownAbout.classList.toggle("hidden");
    svgAbout.classList.toggle("rotate-180");
    setTimeout(() => {
      dropdownAbout.classList.toggle("scale-0");
      dropdownAbout.classList.toggle("scale-100");
    }, 100);
  });

  ppdb.addEventListener("click", () => {
    dropdownPpdb.classList.toggle("hidden");
    svgPpdb.classList.toggle("rotate-180");
    setTimeout(() => {
      dropdownPpdb.classList.toggle("scale-0");
      dropdownPpdb.classList.toggle("scale-100");
    }, 100);
  });

  contact.addEventListener("click", () => {
    dropdownContact.classList.toggle("hidden");
    svgContact.classList.toggle("rotate-180");
    setTimeout(() => {
      dropdownContact.classList.toggle("scale-y-0");
      dropdownContact.classList.toggle("scale-y-100");
    }, 100);
  });
}
