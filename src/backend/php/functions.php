<?php

require "config.php";

function checkURI($url, $path)
{
  // color
  $bgMain = "bg-main";
  $bgYoungOrange = "bg-young-orange";
  $bgMainGreen = "bg-main-green";
  // logic
  if (($path == '/projek-am/') || ($path == "/projek-am/index.php")) {
    return $bgMain;
  } else if (($path == "/projek-am/src/pages/biaya/") || ($path == "/projek-am/src/pages/biaya/biaya.php")) {
    return $bgYoungOrange;
  } else if (
    ($path == "/projek-am/src/pages/image-gallery/") || ($path == "/projek-am/src/pages/image-gallery/image-gallery.php")
  ) {
    return $bgMainGreen;
  }
}

function base_url($url = null)
{
  $base_url = "http://localhost/projek-am";
  if ($url != null) {
    return $base_url . "/" . $url;
  } else {
    return $base_url;
  }
}

function conn()
{
  $hostname = "localhost";
  $username = "root";
  $password = "";
  $database = "ponpes_am";

  $db = mysqli_connect($hostname, $username, $password, $database) or die(mysqli_error($db));
  return $db;
}

function query($data)
{
  $db = conn();
  $result = mysqli_query($db, $data) or die(mysqli_error($db));

  $rows = [];
  while ($row = mysqli_fetch_assoc($result)) {
    $rows[] = $row;
  }

  return $rows;
}

function dd($data)
{
  echo '<pre>';
  var_dump($data);
  echo '</pre>';
  die;
}
