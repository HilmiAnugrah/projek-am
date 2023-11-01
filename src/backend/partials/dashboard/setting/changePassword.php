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
  $error = true;
  $pesan = 'Konfirmasi Password baru salah!';
  echo '<script>
          document.addEventListener("DOMContentLoaded", function() {
            const form = document.createElement("form");
            form.method = "post";
            form.action = "' . baseUrl('dashboard') . '";
            
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
    $error = false;
    $pesan = 'Password telah ditambahkan';
    echo '<script>
          document.addEventListener("DOMContentLoaded", function() {
            const form = document.createElement("form");
            form.method = "post";
            form.action = "' . baseUrl('dashboard') . '";
            
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
} else {
  if (password_verify($oldPassword, $user['usr_password'])) {
    $query = "UPDATE users
              SET usr_password = :password
              WHERE usr_id = :id";
    $db->query($query);
    $db->bind('password', $newPassword, PDO::PARAM_STR);
    $db->bind('id', $_SESSION['id']);
    $db->execute();
    if ($db->rowCount() > 0) {
      $error = false;
      $pesan = 'Password telah diperbarui';
      echo '<script>
                document.addEventListener("DOMContentLoaded", function() {
                  const form = document.createElement("form");
                  form.method = "post";
                  form.action = "' . baseUrl('dashboard') . '";
                  
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
  }
  $error = true;
  $pesan = 'Password lama salah';
  echo '<script>
                document.addEventListener("DOMContentLoaded", function() {
                  const form = document.createElement("form");
                  form.method = "post";
                  form.action = "' . baseUrl('dashboard') . '";
                  
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
