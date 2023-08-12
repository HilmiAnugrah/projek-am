const about = document.getElementById("about");
const dropdownAbout = document.getElementById("dropdown-about");
const svgAbout = document.querySelector("#about svg");
const ppdb = document.getElementById("ppdb");
const dropdownPpdb = document.getElementById("dropdown-ppdb");
const svgPpdb = document.querySelector("#ppdb svg");
const contact = document.getElementById("contact");
const dropdownContact = document.getElementById("dropdown-contact");
const svgContact = document.querySelector("#contact svg");

  about.addEventListener("click", () => {
    dropdownAbout.classList.toggle("hidden");
    svgAbout.classList.toggle("rotate_dropdown");
    svgPpdb.classList.remove("rotate_dropdown");
    svgContact.classList.remove("rotate_dropdown");
    if(ppdb || contact){
      dropdownPpdb.classList.add("hidden");
      dropdownContact.classList.add("hidden");
    }
    
    setTimeout(() => {
      dropdownAbout.classList.toggle("scale-0");
      dropdownAbout.classList.toggle("scale-100");
    }, 100);
  });

  ppdb.addEventListener("click", () => {
    dropdownPpdb.classList.toggle("hidden");
    svgPpdb.classList.toggle("rotate_dropdown");
    svgContact.classList.remove("rotate_dropdown");
    svgAbout.classList.remove("rotate_dropdown");
    if(about || contact){
      dropdownAbout.classList.add("hidden");
      dropdownContact.classList.add("hidden");
    }
    setTimeout(() => {
      dropdownPpdb.classList.toggle("scale-0");
      dropdownPpdb.classList.toggle("scale-100");
    }, 100);
  });

  contact.addEventListener("click", () => {
    dropdownContact.classList.toggle("hidden");
    svgContact.classList.toggle("rotate_dropdown");
    svgPpdb.classList.remove("rotate_dropdown");
    svgAbout.classList.remove("rotate_dropdown");
    if(about || contact){
      dropdownAbout.classList.add("hidden");
      dropdownPpdb.classList.add("hidden");
    }
    
    setTimeout(() => {
      dropdownContact.classList.toggle("scale-y-0");
      dropdownContact.classList.toggle("scale-y-100");
    }, 100);
  });


