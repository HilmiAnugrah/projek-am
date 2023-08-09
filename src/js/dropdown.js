<<<<<<< HEAD
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
=======
// const about = document.getElementById("about");
// const dropdownAbout = document.getElementById("dropdown-about");
// const ppdb = document.getElementById("ppdb");
// const dropdownPpdb = document.getElementById("dropdown-ppdb");
// const contact = document.getElementById("contact");
// const dropdownContact = document.getElementById("dropdown-contact");

// if (window.innerWidth < 1024) {
//   about.addEventListener("click", () => {
//     dropdownAbout.classList.toggle("hidden");
//     setTimeout(() => {
//       dropdownAbout.classList.toggle("scale-0");
//       dropdownAbout.classList.toggle("scale-100");
//     }, 100);
//   });
>>>>>>> ad86acdc3972cfc4e0a6661abf5853971709b2f6

//   ppdb.addEventListener("click", () => {
//     dropdownPpdb.classList.toggle("hidden");
//     setTimeout(() => {
//       dropdownPpdb.classList.toggle("scale-0");
//       dropdownPpdb.classList.toggle("scale-100");
//     }, 100);
//   });

<<<<<<< HEAD
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
=======
//   contact.addEventListener("click", () => {
//     dropdownContact.classList.toggle("hidden");
//     setTimeout(() => {
//       dropdownContact.classList.toggle("scale-y-0");
//       dropdownContact.classList.toggle("scale-y-100");
//     }, 100);
//   });
// }
>>>>>>> ad86acdc3972cfc4e0a6661abf5853971709b2f6
