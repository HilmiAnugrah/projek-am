const bgNavbar = document.getElementById("nav-wrapper");
let pathname = window.location.pathname;
if (pathname == "/projek-am/" || pathname == "/projek-am/index.php") {
  bgNavbar.classList.add("bg-main");
} else if (
  pathname == "/projek-am/src/pages/biaya/" ||
  pathname == "/projek-am/src/pages/biaya/index.php"
) {
  bgNavbar.classList.add("bg-young-orange");
} else if (
  pathname == "/projek-am/src/pages/gallery/" ||
  pathname == "/projek-am/src/pages/gallery/index.php"
) {
  bgNavbar.classList.add("bg-main-green");
}
