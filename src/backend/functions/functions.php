<?php


function base_url($url = null)
{
  $base_url = "http://localhost/project-am/projek-am";
  if ($url != null) {
    return $base_url . "/" . $url;
  } else {
    return $base_url;
  }
}

function checkURI($url, $path){
  
  // color
  $bgMain = "bg-main";
  $bgYoungOrange = "bg-young-orange";
  $bgMainGreen = "bg-main-green";
  // logic
if(($path == "/project-am/projek-am/") || ($path == "/project-am/projek-am/index.php")) {
  return $bgMain;
} else if (($path == "/project-am/projek-am/src/pages/biaya/") || ($path == "/project-am/projek-am/src/pages/biaya/biaya.php")) {
  return $bgYoungOrange;
} else if (
  ($path == "/project-am/projek-am/src/pages/image-gallery/") || ($path == "/project-am/projek-am/src/pages/image-gallery/image-gallery.php")
) {
  return $bgMainGreen;
}

}


?> 