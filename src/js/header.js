const bgNavbar = document.getElementById("nav-wrapper");
let pathname = window.location.pathname;
if ((pathname == "/project-am/projek-am/") || (pathname == "/project-am/projek-am/index.php")){
    bgNavbar.classList.add("bg-main");
}else if((pathname == "/project-am/projek-am/src/pages/") || (pathname == "/project-am/projek-am/src/pages/index.php")){
    bgNavbar.classList.add("bg-young-orange");
}
