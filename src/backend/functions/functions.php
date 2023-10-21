<?php

require_once "config.php";
require_once "CRUD/Upload.php";

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

class Database
{
    private $host = DB_HOST,
        $user = DB_USER,
        $pass = DB_PASS,
        $db_name = DB_NAME;

    private $dbh, // database handler
        $stmt;

    public function __construct()
    {
        // data source name
        $dsn = 'mysql:host=' . $this->host . ';dbname=' . $this->db_name;

        $option = [
            PDO::ATTR_PERSISTENT => true,
            PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION
        ];

        try {
            $this->dbh = new PDO($dsn, $this->user, $this->pass, $option);
        } catch (PDOException $e) {
            die($e->getMessage());
        }
    }

    public function query($query)
    {
        $this->stmt = $this->dbh->prepare($query);
    }

    public function bind($param, $value, $type = null)
    {
        if (is_null($type)) {
            switch (true) {
                case is_int($value):
                    $type = PDO::PARAM_INT;
                    break;
                case is_bool($value):
                    $type = PDO::PARAM_BOOL;
                    break;
                case is_null($value):
                    $type = PDO::PARAM_NULL;
                    break;
                default:
                    $type = PDO::PARAM_STR;
            }
        }

        $this->stmt->bindValue($param, $value, $type);
    }

    public function execute()
    {
        $this->stmt->execute();
    }

    public function resultSet()
    {
        $this->execute();
        return $this->stmt->fetchAll(PDO::FETCH_ASSOC);
    }

    public function single()
    {
        $this->execute();
        return $this->stmt->fetch(PDO::FETCH_ASSOC);
    }

    public function rowCount()
    {
        return $this->stmt->rowCount();
    }
}

function daftar($data)
{
    $db = new Database();
    $name = $data['nama'];
    $email = $data['email'];
    $alamat = $data['alamat'];
    $program = $data['program'];
    $asal_sekolah = $data['asal-sekolah'];
    $whatsapp = $data['whatsapp'];
    $ekstrakurikuler = $data['ekstrakurikuler'];
    $question = $data['question'];
    $img = new Upload("person", "img-profile");
    $img_profile = $img->upload();

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
    $db->execute();

    return $db->rowCount();
}

function dd($data)
{
    echo '<pre>';
    var_dump($data);
    echo '</pre>';
    die;
}
