<?php

function baseUrl($url = null)
{
  $baseUrl = "http://localhost/project-am/projek-am";
  if ($url != null) {
    return $baseUrl . "/" . $url;
  }
  return $baseUrl;
}

function checkUri($url, $path)
{
  // color
  $bgMain = "bg-main";
  $bgYoungOrange = "bg-young-orange";
  $bgMainGreen = "bg-main-green";
  $bgMainPurple = "bg-main-purple";

  // logic
  if (
    ($url == "https://hilmi.pptqam.ponpes.id/") ||
    ($path == "/projek-am/") ||
    ($path == "/projek-am/index.php")
  ) {
    return $bgMain;
  } elseif (
    ($path == "/projek-am/src/pages/biaya/") ||
    ($path == "/projek-am/src/pages/biaya/biaya.php")
  ) {
    return $bgYoungOrange;
  } elseif (
    ($path == "/projek-am/src/pages/image-gallery/") ||
    ($path == "/projek-am/src/pages/image-gallery/image-gallery.php")
  ) {
    return $bgMainGreen;
  } elseif (
    ($path == "/projek-am/src/pages/daftar/") ||
    ($path == "/projek-am/src/pages/daftar/daftar.php")
  ) {
    return $bgMainPurple;
  }

  // Default value if none of the conditions are met
  return $bgMain;
}
