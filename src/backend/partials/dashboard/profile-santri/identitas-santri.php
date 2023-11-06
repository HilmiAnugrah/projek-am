<?php
require '../../../functions/functions.php';
$db = new Database();

foreach ($_POST as $key => $value) {
  if (empty($value)) {
    $_POST[$key] = null;
  } else {
    $_POST[$key] = htmlspecialchars($_POST[$key]);
  }
}

$id = $_POST['id'];
$full_name = $_POST['full_name'];
$nickname = ucwords($_POST['nickname']);
$birth_place = ucwords($_POST['birth_place']);
$birthdate = $_POST['birthdate'];
$whatsapp = str_replace(" ", "", $_POST['whatsapp']);
$language = $_POST['language'];
$child_of = $_POST['child_of'];
$number_sibling = $_POST['number_sibling'];
$school_from = $_POST['school_from'];
$std_telp = $_POST['std_home_no_telp'];
$address = $_POST['address'];
$postal_code = $_POST['postal_code'];
$urban_village = ucwords($_POST['urban_village']);
$sub_district = ucwords($_POST['sub_district']);
$distance = $_POST['distance'];
$img = $_POST['oldImg'];
if (isset($_FILES['newImg']) && !empty($_FILES['newImg']['tmp_name'])) {
  $upload = new Upload('person', 'newImg', '../../');
  $img = $upload->upload();
}
if (substr($whatsapp, 0, 1) === '0') {
  $whatsapp = '62' . substr($whatsapp, 1); 
}

$query = "UPDATE students
            SET std_full_name = :full_name,
                std_nickname = :nickname,
                std_birth_place = :birth_place,
                std_birthdate = :birthdate,
                std_whatsapp = :whatsapp,
                std_language_home = :language,
                std_child_of = :child,
                std_number_sibling = :sibling,
                std_school_from = :school,
                std_img = :img,
                std_home_no_telp = :std_telp,
                std_updated_at = now()
            WHERE std_id = :id";
$db->query($query);
$db->bind('full_name', $full_name, PDO::PARAM_STR);
$db->bind('nickname', $nickname);
$db->bind('birth_place', $birth_place);
$db->bind('birthdate', $birthdate);
$db->bind('whatsapp', $whatsapp);
$db->bind('language', $language);
$db->bind('child', $child_of);
$db->bind('sibling', $number_sibling);
$db->bind('school', $school_from);
$db->bind('img', $img);
$db->bind('std_telp',$std_telp);
$db->bind('id', $id);
$db->execute();

$query = "UPDATE student_residence
            SET str_address = :address,
                str_postal_code = :postal_code,
                str_urban_village = :urban_village,
                str_sub_district = :sub_district,
                str_distance_ponpes_am = :distance
            WHERE std_id = :id";
$db->query($query);
$db->bind('address', $address);
$db->bind('postal_code', $postal_code);
$db->bind('urban_village', $urban_village);
$db->bind('sub_district', $sub_district);
$db->bind('distance', $distance);
$db->bind('id', $id);
$db->execute();

// echo getcwd();
redirectForm(false, "Data Telah Di Update", 'dashboard');
