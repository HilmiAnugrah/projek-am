<?php

require_once "config.php";
require_once "CRUD/Upload.php";
require_once "CRUD/Database.php";

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
        ($path == "/project-am/projek-am/") ||
        ($path == "/project-am/projek-am/index.php")
    ) {
        return $bgMain;
    } elseif (
        ($path == "/project-am/projek-am/biaya") ||
        ($path == "/project-am/projek-am/src/pages/biaya/") ||
        ($path == "/project-am/projek-am/src/pages/biaya/biaya.php")
    ) {
        return $bgYoungOrange;
    } elseif (
        ($path == "/project-am/projek-am/gallery") ||
        ($path == "/project-am/projek-am/src/pages/image-gallery/") ||
        ($path == "/project-am/projek-am/src/pages/image-gallery/image-gallery.php")
    ) {
        return $bgMainGreen;
    } elseif (
        ($path == "/project-am/projek-am/daftar") ||
        ($path == "/project-am/projek-am/src/pages/daftar/") ||
        ($path == "/project-am/projek-am/src/pages/daftar/daftar.php")
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
        ($path == "/project-am/projek-am/") ||
        ($path == "/project-am/projek-am/public/")
    ) {
        header("Location : public/index.php");
    }
}

function daftar($data)
{
    $db = new Database();
    $name = $data['nama'];
    $email = $data['email'];

    // cek email
    $emailQuery = "SELECT rgs_id
                    FROM register_student
                    WHERE rgs_email = :email";
    $db->query($emailQuery);
    $db->bind('email', $email);
    $db->execute();
    if ($db->rowCount() > 0) {
        return [
            'error' => true,
            'massage' => 'Email Already Taken'
        ];
        exit;
    }

    $alamat = $data['alamat'];
    $program = $data['program'];
    $asal_sekolah = $data['asal-sekolah'];
    $whatsapp = $data['whatsapp'];
    $ekstrakurikuler = $data['ekstrakurikuler'];
    $question = $data['question'];
    $gender = $data['gender'];
    $gelombang = $data['gelombang'];
    $img = new Upload("person", "img-profile");
    $img_profile = $img->upload();
    if ($img_profile == false) {
        return [
            'error' => true,
            'massage' => 'Img Error'
        ];
        exit;
    }

    $query = "INSERT INTO
                register_student
                    VALUES(null,
                        :img,
                        DEFAULT,
                        :name,
                        :email,
                        :alamat,
                        :whatsapp,
                        :asal_sekolah,
                        :question,
                        now(),
                        :program,
                        :extracurricular,
                        :gender,
                        :gelombang,
                        DEFAULT)";

    $db->query($query);

    $db->bind('img', $img_profile);
    $db->bind('name', $name);
    $db->bind('email', $email);
    $db->bind('alamat', $alamat);
    $db->bind('whatsapp', $whatsapp);
    $db->bind('asal_sekolah', $asal_sekolah);
    $db->bind('question', $question);
    $db->bind('program', $program);
    $db->bind('extracurricular', $ekstrakurikuler);
    $db->bind('gender', $gender);
    $db->bind('gelombang', $gelombang);
    $db->execute();

    if ($db->rowCount() == 0) {
        return [
            'error' => true,
            'massage' => 'Failed to Input data'
        ];
        exit;
    }
}

function konfirmasiPendaftaran($data)
{
    $db = new Database();
    $id = $data['id'];
    $img = new Upload("bukti-tf", "img");

    $tfImg = $img->upload();
    if ($tfImg == false) {
        return 0;
    }

    $code = uniqid();

    $query = 'UPDATE register_student
                SET rgs_tf_prove = :img,
                    rgs_code = :code
                WHERE rgs_id = :id';
    $db->query($query);
    $db->bind('img', $tfImg);
    $db->bind('code', $code);
    $db->bind('id', $id);
    $db->execute();

    return $db->rowCount();
}

function loginAccount()
{
    $db = new Database();
    $email = $_POST['email'];
    $password = $_POST['password'];

    $query = "SELECT usr_id, usr_email, usr_password, rls_name
                FROM users
                NATURAL JOIN roles
                WHERE usr_email = :email";
    $db->query($query);
    $db->bind('email', $email);
    $db->execute();
    if ($db->rowCount() == 0) {
        return [
            'error' => true,
            'pesan' => 'Email Salah'
        ];
        exit;
    };
    $acc = $db->single();
    if ($acc['usr_password'] == $password) {
        $_SESSION['login'] = true;
        $_SESSION['id'] = $acc['usr_id'];
        $_SESSION['roles'] = $acc['rls_name'];
        header('Location: ' . baseUrl('dashboard'));
    } else {
        return [
            'error' => true,
            'pesan' => 'Password Salah'
        ];
        exit;
    }
}

function dd($data)
{
    echo '<pre>';
    var_dump($data);
    echo '</pre>';
    die;
}
