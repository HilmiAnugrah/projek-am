const bgNavbar = document.getElementById("nav-wrapper");
let pathname = window.location.pathname;
if ((pathname == "/project-am/projek-am/") || (pathname == "/project-am/projek-am/index.php")) {
  bgNavbar.classList.add("bg-main");
} else if ((pathname == "/project-am/projek-am/src/pages/biaya/") || (pathname == "/project-am/projek-am/src/pages/biaya/biaya.php")) {
  bgNavbar.classList.add("bg-young-orange");
} else if (
  (pathname == "/project-am/projek-am/src/pages/image-gallery/") || (pathname == "/project-am/projek-am/src/pages/image-gallery/image-gallery.php")
) {
  bgNavbar.classList.add("bg-main-green");
}
