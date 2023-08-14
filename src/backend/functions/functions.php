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

?> 