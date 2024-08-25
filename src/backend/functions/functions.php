<?php

use LDAP\Result;

require_once "config.php";
require_once "CRUD/Upload.php";
require_once "CRUD/Database.php";
function baseUrl($url = null)
{
    $baseUrl = "https://pptqam.ponpes.id";
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
        ($url == "https://pptqam.ponpes.id/") ||
        ($path == "/") ||
        ($path == "/index.php")
    ) {
        return $bgMain;
    } elseif (
        ($path == "/biaya") ||
        ($path == "/src/pages/biaya/") ||
        ($path == "/src/pages/biaya/biaya.php")
    ) {
        return $bgYoungOrange;
    } elseif (
        ($path == "/gallery") ||
        ($path == "/src/pages/image-gallery/") ||
        ($path == "/src/pages/image-gallery/image-gallery.php")
    ) {
        return $bgMainGreen;
    } elseif (
        ($path == "/daftar") ||
        ($path == "/src/pages/daftar/") ||
        ($path == "/src/pages/daftar/daftar.php")
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
        ($path == "/") ||
        ($path == "/public/")
    ) {
        header("Location : public/index.php");
    }
}

function daftar($data)
{
    $db = new Database();
    $name = $data['nama'];
    $email = $data['email'];
    $emailQuery = "SELECT rgs_id
                    FROM register_student
                    WHERE rgs_email = :email";
    $db->query($emailQuery);
    $db->bind('email', $email);
    $db->execute();
    if ($db->rowCount() > 0) {
        return [
            'error' => true,
            'massage' => '<script>
            const swalWithBootstrapButtons = Swal.mixin({
                customClass: {
                    confirmButton: "bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 m-1 font-bold border-none focus:outline-none",
                    cancelButton: "bg-main-green text-white px-6 py-2 rounded-lg hover:bg-second-green m-1 font-bold border-none focus:outline-none",
                },
                buttonsStyling: false
            });
        
            swalWithBootstrapButtons.fire({
                title: "Email Sudah Terdaftar",
                text: "Silahkan klik login jika sudah mendaftar, jika belum mendaftar klik daftar",
                icon: "warning",
                showCancelButton: true,
                confirmButtonText: "Login!",
                cancelButtonText: "Daftar",
                reverseButtons: true
            }).then((result) => {
                if (result.isConfirmed) {
                    // Redirect ke halaman login jika tombol "Login" diklik
                    window.location.href = "login";
                } else if (result.dismiss === Swal.DismissReason.cancel) {
                    // Redirect ke halaman daftar jika tombol "Daftar" diklik
                    window.location.href = "daftar";
                }
            });
        </script>
        '
        ];
        exit;
    }

    $alamat = htmlspecialchars($data['alamat']);
    $program = htmlspecialchars($data['program']);
    $asal_sekolah = htmlspecialchars($data['asal-sekolah']);
    $whatsapp = htmlspecialchars($data['whatsapp']);
    $whatsapp = str_replace(" ", "", $whatsapp);
    $ekstrakurikuler = htmlspecialchars($data['ekstrakurikuler']);
    $question = htmlspecialchars($data['question']);
    $gender = htmlspecialchars($data['gender']);
    $gelombang = htmlspecialchars($data['gelombang']);
    $img = new Upload("person", "img-profile");
    $img_profile = $img->upload();
    if (substr($whatsapp, 0, 1) === '0') {
        // Mengganti "0" di awal nomor WhatsApp dengan "62"
        $whatsapp = '62' . substr($whatsapp, 1);
    }
    if ($img_profile == false) {
        return [
            'error' => true,
            'massage' => '<script>
            Swal.fire({
                position: "center",
                title: "Image Error",
                text: "Image harus ber format PNG, JPG atau JPEG MAX Upload 10MB",
                icon: "error",
                showCancelButton: false, 
                showConfirmButton: true, 
              }).then((result) => {
                if (result.isConfirmed) {
                  window.location.href = "daftar";
                }
              });
        </script>'
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
                        :code,
                        :alamat,
                        :whatsapp,
                        :asal_sekolah,
                        :question,
                        now(),
                        0,
                        :program,
                        :extracurricular,
                        :gender,
                        :gelombang,
                        DEFAULT)";

    $db->query($query);

    $db->bind('img', $img_profile);
    $db->bind('name', $name);
    $db->bind('email', $email);
    $db->bind('code', null);
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
    $id = htmlspecialchars($data['id']);
    // Dapatkan nama gambar lama dari database
    $query = 'SELECT rgs_tf_prove FROM register_student WHERE rgs_id = :id';
    $db->query($query);
    $db->bind('id', $id);
    $db->execute();
    $result = $db->single();
    $oldImage = $result['rgs_tf_prove'];
    $oldImagePath = '../../img/uploaded/bukti-tf/' . $oldImage;
    if (file_exists($oldImagePath)) {
        if (is_file($oldImagePath)) {
            // Jika itu adalah file, gunakan unlink
            if (unlink($oldImagePath)) {
            } else {
            }
        }
    } else {
        $pesan='<script>
        Swal.fire({
            position: "center",
            title: "Berhasil",
            text: "Selamat Anda Sudah Berhasil ",
            icon: "success",
            showCancelButton: false, 
            showConfirmButton: true, 
          }).then((result) => {
            if (result.isConfirmed) {
              window.location.href = "daftar";
            }
          });
    </script>';
    }
    // Lanjutkan dengan mengunggah gambar yang baru
    $img = new Upload("bukti-tf", "img");
    $tfImg = $img->upload();

    if ($tfImg == false) {
        return 0;
    }

    $code = uniqid();

    $query = 'UPDATE register_student
                SET rgs_tf_prove = :img,
                    rgs_code = :code,
                    rgs_click = 0
                WHERE rgs_id = :id';
    $db->query($query);
    $db->bind('img', $tfImg);
    $db->bind('code', $code);
    $db->bind('id', $id);
    $db->execute();

    return $db->rowCount();
}


function loginAccount($data)
{
    $db = new Database();
    $email = htmlspecialchars($data['email']);
    $password = htmlspecialchars($data['password']);

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

// Memeriksa apakah password tidak null dan cocok
if (!is_null($acc['usr_password']) && password_verify($password, $acc['usr_password'])) {
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

function loginAccountCode($data)
{
    $db = new Database();
    $code = htmlspecialchars($data['code']);

    $query = "SELECT usr_id, usr_email, usr_password, rls_name
                FROM users
                NATURAL JOIN roles
                WHERE usr_code = :code";
    $db->query($query);
    $db->bind('code', $code);
    $db->execute();
    if ($db->rowCount() == 0) {
        return [
            'error' => true,
            'pesan' => 'Code Salah'
        ];
        exit;
    };
    $acc = $db->single();
    $_SESSION['login'] = true;
    $_SESSION['id'] = $acc['usr_id'];
    $_SESSION['roles'] = $acc['rls_name'];
    header('Location: ' . baseUrl('dashboard#setting'));
}

function adminEditStudent($data)
{
    $db = new Database();
    $id = htmlspecialchars($data['id']);
    $full_name = htmlspecialchars($data['full_name']);
    $email = htmlspecialchars($data['email']);
    $gender = htmlspecialchars($data['gender']);
    $program = htmlspecialchars($data['program']);
    $ekstrakurikuler = htmlspecialchars($data['ekstrakurikuler']);
    $gelombang = htmlspecialchars($data['gelombang']);

    $query = "UPDATE students
                SET std_full_name = :full_name,
                    std_email = :email,
                    std_updated_at = now(),
                    gnr_id = :gender,
                    prg_id = :program,
                    atv_id = :ekstrakurikuler,
                    glb_id = :gelombang
                    WHERE std_id = :id";
    $db->query($query);
    $db->bind('full_name', $full_name);
    $db->bind('email', $email);
    $db->bind('gender', $gender);
    $db->bind('program', $program);
    $db->bind('ekstrakurikuler', $ekstrakurikuler);
    $db->bind('gelombang', $gelombang);
    $db->bind('id', $id);
    $db->execute();
    if ($db->rowCount() > 0) {
        return [
            'error' => false,
            'pesan' => 'Data berhasil diubah'
        ];
        exit;
    } else {
        return [
            'error' => true,
            'pesan' => 'Data gagal diubah'
        ];
        exit;
    }
}

function redirectForm($error, $pesan, $url = null)
{
    echo '<script>
                document.addEventListener("DOMContentLoaded", function() {
                    const form = document.createElement("form");
                    form.method = "post";
                    form.action = "' . baseUrl($url) . '";
                    
                    const inputError = document.createElement("input");
                    inputError.type = "hidden";
                    inputError.name = "error";
                    inputError.value = "' . $error . '";
                    form.appendChild(inputError);
                    
                    const inputPesan = document.createElement("input");
                    inputPesan.type = "hidden";
                    inputPesan.name = "pesan";
                    inputPesan.value = "' . $pesan . '";
                    form.appendChild(inputPesan);
                    
                    document.body.appendChild(form);
                    form.submit();
                });
            </script>';
    exit;
}

function dd($data)
{
    echo '<pre>';
    var_dump($data);
    echo '</pre>';
    die;
}
