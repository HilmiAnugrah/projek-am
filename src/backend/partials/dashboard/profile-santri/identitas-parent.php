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

$prt_id = $_POST['id'];
$std_id = $_POST['std_id'];
$roles = $_POST['roles'];
$relation = $_POST['relation'];
$full_name = $_POST['full_name'];
$birth_place = $_POST['birth_place'];
$birthdate = $_POST['birthdate'];
$home_address = $_POST['home_address'];
$postal_code = $_POST['postal_code'];
$email = $_POST['email'];
$no_hp = $_POST['no_hp'];
$home_no_telp = $_POST['home_no_telp'];
$married_status = $_POST['married_status'];
$married_at_age = $_POST['married_at_age'];
$married_number = $_POST['married_number'];
$smp = $_POST['smp'];
$sma = $_POST['sma'];
$job = $_POST['job'];
$job_position = $_POST['job_position'];
$office_address = $_POST['office_address'];
$office_no_telp = $_POST['office_no_telp'];
$wages = $_POST['wages'];
$tribes = isset($_POST['tribes']) ? ucwords($_POST['tribes']) : null;
$university = isset($_POST['university']) ? ucwords($_POST['university']) : null;
$faculty = isset($_POST['faculty']) ? ucwords($_POST['faculty']) : null;
$major = isset($_POST['major']) ? ucwords($_POST['major']) : null;

if (substr($no_hp, 0, 1) === '0') {
  $no_hp = '62' . substr($no_hp, 1); 
}
if (is_null($full_name)) {
  redirectForm(true, 'Nama Harus Diisi', 'dashboard');
}
if (is_null($home_address)) {
  redirectForm(true, 'Alamat Rumah Harus Diisi', 'dashboard');
}
if (is_null($no_hp)) {
  redirectForm(true, 'Whatsapp Harus Diisi', 'dashboard');
}
if ($roles != 4) {
  if (is_null($postal_code)) {
    redirectForm(true, 'Kode Pos Harus Diisi', 'dashboard');
  }
  if (is_null($email)) {
    redirectForm(true, 'Email Harus Diisi', 'dashboard');
  }
  if (is_null($married_status)) {
    redirectForm(true, 'Status Pernikahan Harus Diisi', 'dashboard');
  }
  if (is_null($wages)) {
    redirectForm(true, 'Gaji Harus Diisi', 'dashboard');
  }
}
if ($roles == 3 || $roles == 4) {
  if (is_null($relation)) {
    redirectForm(true, 'Hubungan Harus Diisi', 'dashboard');
  }
}


if (is_null($prt_id)) {
  $query = "INSERT INTO parents (prt_full_name,
                                  prt_birth_place,
                                  prt_birthdate,
                                  prt_tribes,
                                  prt_home_no_telp,
                                  prt_email,
                                  prt_no_hp,
                                  prt_smp,
                                  prt_sma,
                                  prt_university,
                                  prt_faculty,
                                  prt_major,
                                  prt_job,
                                  prt_job_position,
                                  prt_office_address,
                                  prt_office_no_telp,
                                  prt_home_address,
                                  prt_postal_code,
                                  prt_married_at_age,
                                  prt_married_number,
                                  prt_relationship,
                                  prw_id,
                                  mrs_id,
                                  std_id,
                                  prr_id)
                  VALUES (:full_name,
                          :birth_place,
                          :birthdate,
                          :tribes,
                          :home_no_telp,
                          :email,
                          :no_hp,
                          :smp,
                          :sma,
                          :university,
                          :faculty,
                          :major,
                          :job,
                          :job_position,
                          :office_address,
                          :office_no_telp,
                          :home_address,
                          :postal_code,
                          :married_at_age,
                          :married_number,
                          :relation,
                          :wage_id,
                          :married_id,
                          :student_id,
                          :roles_id)";
  $db->query($query);
  $db->bind('student_id', $std_id);
  $db->bind('roles_id', $roles);
} else {
  $query = "UPDATE parents
                SET prt_full_name = :full_name,
                    prt_birth_place = :birth_place,
                    prt_birthdate = :birthdate,
                    prt_tribes = :tribes,
                    prt_home_no_telp = :home_no_telp,
                    prt_email = :email,
                    prt_no_hp = :no_hp,
                    prt_smp = :smp,
                    prt_sma = :sma,
                    prt_university = :university,
                    prt_faculty = :faculty,
                    prt_major = :major,
                    prt_job = :job,
                    prt_job_position = :job_position,
                    prt_office_address = :office_address,
                    prt_office_no_telp = :office_no_telp,
                    prt_home_address = :home_address,
                    prt_postal_code = :postal_code,
                    prt_married_at_age = :married_at_age,
                    prt_married_number = :married_number,
                    prt_relationship = :relation,
                    prw_id = :wage_id,
                    mrs_id = :married_id
                WHERE prt_id = :id";
  $db->query($query);
  $db->bind('id', $prt_id);
}

$db->bind('full_name', $full_name);
$db->bind('birth_place', $birth_place);
$db->bind('birthdate', $birthdate);
$db->bind('tribes', $tribes);
$db->bind('home_no_telp', $home_no_telp);
$db->bind('email', $email);
$db->bind('no_hp', $no_hp);
$db->bind('smp', $smp);
$db->bind('sma', $sma);
$db->bind('university', $university);
$db->bind('faculty', $faculty);
$db->bind('major', $major);
$db->bind('job', $job);
$db->bind('job_position', $job_position);
$db->bind('office_address', $office_address);
$db->bind('office_no_telp', $office_no_telp);
$db->bind('home_address', $home_address);
$db->bind('postal_code', $postal_code);
$db->bind('married_at_age', $married_at_age);
$db->bind('married_number', $married_number);
$db->bind('relation', $relation);
$db->bind('wage_id', $wages);
$db->bind('married_id', $married_status);
$db->execute();

if ($db->rowCount() > 0) {
  // Periksa jika roles_id sama dengan 1
  if ($roles == 1) {
      // Redirect ke halaman khusus menggunakan anchor #identitas-ibu
      redirectForm(false, 'Data Berhasil Diimputkan Silahkan isi Data Ibu', 'dashboard#identitas-ibu');
  } elseif ($roles == 2) {
      // Redirect ke halaman khusus menggunakan anchor #identitas-wali
      redirectForm(false, 'Data Berhasil Diimputkan Silahkan isi Data Keluarga Lainnya', 'dashboard#identitas-wali');
  } elseif ($roles == 3) {
      // Redirect ke halaman khusus menggunakan anchor #keluarga-lainnya
      redirectForm(false, 'Data Berhasil Diimput silahkan klik untuk cetak data', 'dashboard#keluarga-lainnya');
  } elseif ($roles == 4) {
      // Redirect ke halaman khusus menggunakan anchor #keluarga-lainnya
      redirectForm(false, 'Data Berhasil Diimput silahkan Klik menu di pojok sebelah kiri kemudian klik profile santri kemudian cetak data', 'dashboard#keluarga-lainnya');
  } else {
      // Redirect ke halaman dashboard biasa
      redirectForm(false, 'Data Berhasil Diimput', 'dashboard');
  }
} else {
  // Redirect dengan pesan kegagalan
  redirectForm(true, 'Data Gagal Diimputkan', 'dashboard');
}
die;