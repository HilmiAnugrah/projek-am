<?php
require '../../../functions/functions.php';
$db = new Database();

if (isset($_POST['password'])) {
  $oldPassword = htmlspecialchars($_POST['password']);
}
$password1 = htmlspecialchars($_POST['newPassword']);
$password2 = htmlspecialchars($_POST['newPassword2']);

$query = "SELECT usr_password
          FROM users
          WHERE usr_id = :id";
$db->query($query);
$db->bind('id', $_SESSION['id']);
$db->execute();
$user = $db->single();

if ($password1 != $password2) {
  redirectForm(true, 'Konfirmasi Password baru salah!', 'dashboard#setting');
}

$newPassword = password_hash($_POST['newPassword'], PASSWORD_BCRYPT);

if ($user['usr_password'] == null) {
  $query = "UPDATE users
              SET usr_password = :password
            WHERE usr_id = :id";
  $db->query($query);
  $db->bind('password', $newPassword, PDO::PARAM_STR);
  $db->bind('id', $_SESSION['id']);
  $db->execute();
  if ($db->rowCount() > 0) {
    redirectForm(false, 'Password telah ditambahkan', 'dashboard#setting');
  }
} else {
    $query = "UPDATE users
                SET usr_password = :password
              WHERE usr_id = :id";
    $db->query($query);
    $db->bind('password', $newPassword, PDO::PARAM_STR);
    $db->bind('id', $_SESSION['id']);
    $db->execute();
    if ($db->rowCount() > 0) {
      redirectForm(false, 'Password telah diperbarui', 'dashboard#setting');
  }
  redirectForm(true, 'Password lama salah', 'dashboard#setting');
}
