<?php

require "config.php";

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
