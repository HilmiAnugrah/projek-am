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
$height = $_POST['height'];
$weight = $_POST['weight'];
$eyes = $_POST['eyes'];
$ears = $_POST['ears'];
$physical = $_POST['physical'];
$therapy = $_POST['therapy'];
$hospital = $_POST['hospital'];
$important_massage = $_POST['important_massage'];
$bloodType = strtoupper($_POST['sth_blood_type']);
$query = "UPDATE students
            SET std_updated_at = now()
          WHERE std_id = :id";
$db->query($query);
$db->bind('id', $id);
$db->execute();

$query = "UPDATE student_health
            SET sth_height = :height,
                sth_weight = :weight,
                sth_physical_complaint = :physical,
                sth_eyes_complaint = :eyes,
                sth_ears_complaint = :ears,
                sth_therapy_history = :therapy,
                sth_hospitalized = :hospital,
                sth_important_massage = :important_massage,
                sth_blood_type = :gol_darah
            WHERE std_id = :id";
$db->query($query);
$db->bind('height', $height);
$db->bind('weight', $weight);
$db->bind('physical', $physical);
$db->bind('eyes', $eyes);
$db->bind('ears', $ears);
$db->bind('therapy', $therapy);
$db->bind('hospital', $hospital);
$db->bind('important_massage', $important_massage);
$db->bind('id', $id);
$db->bind('gol_darah', $bloodType);
$db->execute();
if ($db->rowCount() > 0) {
  redirectForm(false, 'Data Berhasil Diubah', 'dashboard');
} else {
  redirectForm(true, 'Data Gagal Diubah', 'dashboard');
}
