
window.onresize = () => {
  location.reload();
};

if (window.matchMedia("(min-width: 1024px)") && window.innerWidth <= 1024) {
  const about = document.getElementById("about");
  about.addEventListener("click", () => {
    const dropdownAbout = document.getElementById("dropdown-about");
    dropdownAbout.classList.toggle("hidden");
    setTimeout(() => {
      dropdownAbout.classList.toggle("scale-0");
      dropdownAbout.classList.toggle("scale-100");
    }, 100);
  });

  const dropdownPpdb = document.getElementById("dropdown-ppdb");
  const ppdb = document.getElementById("ppdb");
  ppdb.addEventListener("click", () => {
    dropdownPpdb.classList.toggle("hidden");
    setTimeout(() => {
      dropdownPpdb.classList.toggle("scale-0");
      dropdownPpdb.classList.toggle("scale-100");
    }, 100);
  });

  const contact = document.getElementById("contact");
  contact.addEventListener("click", () => {
    const dropdownContact = document.getElementById("dropdown-contact");
    dropdownContact.classList.toggle("hidden");
    setTimeout(() => {
      dropdownContact.classList.toggle("scale-y-0");
      dropdownContact.classList.toggle("scale-y-100");
    }, 100);
  });
}