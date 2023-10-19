<?php

require_once "config.php";

function baseUrl($url = null)
{
    $baseUrl = "http://localhost/projek-am";
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
        ($path == "/projek-am/biaya") ||
        ($path == "/projek-am/src/pages/biaya/") ||
        ($path == "/projek-am/src/pages/biaya/biaya.php")
    ) {
        return $bgYoungOrange;
    } elseif (
        ($path == "/projek-am/gallery") ||
        ($path == "/projek-am/src/pages/image-gallery/") ||
        ($path == "/projek-am/src/pages/image-gallery/image-gallery.php")
    ) {
        return $bgMainGreen;
    } elseif (
        ($path == "/projek-am/daftar") ||
        ($path == "/projek-am/src/pages/daftar/") ||
        ($path == "/projek-am/src/pages/daftar/daftar.php")
    ) {
        return $bgMainPurple;
    }

    // Default value if none of the conditions are met
    return $bgMain;
}

function pathUrl($url, $path)
{
    if (
        ($url == "https://hilmi.pptqam.ponpes.id/") ||
        ($path == "/projek-am/") ||
        ($path == "/projek-am/public/")
    ) {
        header("Location : public/index.php");
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

function daftar($data)
{
    $db = conn();
    $name = $data['nama'];
    $email = $data['email'];
    $alamat = $data['alamat'];
    $program = $data['program'];
    $asal_sekolah = $data['asal-sekolah'];
    $whatsapp = $data['whatsapp'];
    $ekstrakurikuler = $data['ekstrakurikuler'];
    $question = $data['question'];
    $img_profile = $data['img-profile'];

    $query = "INSERT INTO
                register_student
                    VALUES(null,
                        '$img',
                        DEFAULT,
                        '$name',
                        '$email',
                        '$alamat',
                        '$whatsapp',
                        '$asal_sekolah',
                        '$question',
                        now(),
                        '$program',
                        '$ekstrakurikuler',
                        DEFAULT)";

    mysqli_query($db, $query) or die(mysqli_error($db));
}

function dd($data)
{
    echo '<pre>';
    var_dump($data);
    echo '</pre>';
    die;
}
