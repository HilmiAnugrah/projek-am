<?php
// Google reCAPTCHA API keys settings 
$secretKey     = '6LffqggpAAAAAFwQan_f66pzlbG0o25yRrXCAUTq';

// Assign default values  
$postData = $valErr = $statusMsg = $api_error = '';
$status = 'error';

if (isset($_POST['daftar'])) {
  if (isset($_POST['submit_frm'])) {
    // Retrieve value from the form input fields 
    $name = trim($_POST['nama']);
    $email = trim($_POST['email']);
    $alamat = trim($_POST['alamat']);
    $program = isset($_POST['program']) ? $_POST['program'] : '';
    $asal_sekolah = trim($_POST['asal-sekolah']);
    $whatsapp = trim($_POST['whatsapp']);
    $ekstrakurikuler = isset($_POST['ekstrakurikuler']) ? $_POST['ekstrakurikuler'] : '';
    $question = isset($_POST['question']) ? $_POST['question'] : '';
    $img_profile = isset($_POST['img-profile']);

    // Validate input fields 
    if (empty($name)) {
      $valErr .= '<script>
        Swal.fire({
            position: "center",
            title: "Nama Harus diIsi!",
            text: "silahkan inputkan nama anda",
            icon: "warning",
            showCancelButton: false, 
            showConfirmButton: true, 
          }).then((result) => {
            if (result.isConfirmed) {
              window.location.href = "daftar";
            }
          });
    </script>';
      exit;
    }
    if (empty($email) || filter_var($email, FILTER_VALIDATE_EMAIL) === false) {
      $valErr .= '<script>
        Swal.fire({
            position: "center",
            title: "Email harus Valid!",
            text: "silahkan inputkan email yang valid contoh example@gmail.com",
            icon: "warning",
            showCancelButton: false, 
            showConfirmButton: true, 
          }).then((result) => {
            if (result.isConfirmed) {
              window.location.href = "daftar";
            }
          });
    </script>';
      exit;
    }
    if (empty($alamat)) {
      $valErr .= '<script>
        Swal.fire({
            position: "center",
            title: "Alamat Harus diIsi",
            text: "silahkan isi alamat lengkap anda",
            icon: "warning",
            showCancelButton: false, 
            showConfirmButton: true, 
          }).then((result) => {
            if (result.isConfirmed) {
              window.location.href = "daftar";
            }
          });
    </script>';
      exit;
    }
    if (empty($program)) {
      $valErr .= '<script>
        Swal.fire({
            position: "center",
            title: "Belum Memilih Program",
            text: "silahkan pilih program pendidikan SMP / SMA",
            icon: "warning",
            showCancelButton: false, 
            showConfirmButton: true, 
          }).then((result) => {
            if (result.isConfirmed) {
              window.location.href = "daftar";
            }
          });
    </script>';
      exit;
    }
    if (empty($asal_sekolah)) {
      $valErr .= '<script>
        Swal.fire({
            position: "center",
            title: "Asal Sekolah Harus diIsi",
            text: "silahkan Masukan asal sekolah anda",
            icon: "warning",
            showCancelButton: false, 
            showConfirmButton: true, 
          }).then((result) => {
            if (result.isConfirmed) {
              window.location.href = "daftar";
            }
          });
    </script>';
      exit;
    }
    if (empty($whatsapp)) {
      $valErr .= '<script>
        Swal.fire({
            position: "center",
            title: "No WhatsApp Wajib diIsi",
            text: "silahkan isi Nomor WathsApp aktif kamu!!",
            icon: "warning",
            showCancelButton: false, 
            showConfirmButton: true, 
          }).then((result) => {
            if (result.isConfirmed) {
              window.location.href = "daftar";
            }
          });
    </script>';
      exit;
    }
    if (empty($ekstrakurikuler)) {
      $valErr .= '<script>
        Swal.fire({
            position: "center",
            title: "Kamu Belum Milih Ekstrakurikuler",
            text: "Pilih ekstrakurikuler sesui yang anda minati",
            icon: "warning",
            showCancelButton: false, 
            showConfirmButton: true, 
          }).then((result) => {
            if (result.isConfirmed) {
              window.location.href = "daftar";
            }
          });
    </script>';
      exit;
    }
    if (empty($question)) {
      $valErr .= '<script>
        Swal.fire({
            position: "center",
            title: "Tau dari mana Pesantren",
            text: "Pertanyaan ini wajib diISi!",
            icon: "warning",
            showCancelButton: false, 
            showConfirmButton: true, 
          }).then((result) => {
            if (result.isConfirmed) {
              window.location.href = "daftar";
            }
          });
    </script>';
      exit;
    }


    // Check whether submitted input data is valid 
    if (empty($valErr)) {
      // Validate reCAPTCHA response 
      if (isset($_POST['g-recaptcha-response'])) {

        // Google reCAPTCHA verification API Request 
        $api_url = 'https://www.google.com/recaptcha/api/siteverify';
        $resq_data = array(
          'secret' => $secretKey,
          'response' => $_POST['g-recaptcha-response'],
          'remoteip' => $_SERVER['REMOTE_ADDR']
        );

        $curlConfig = array(
          CURLOPT_URL => $api_url,
          CURLOPT_POST => true,
          CURLOPT_RETURNTRANSFER => true,
          CURLOPT_POSTFIELDS => $resq_data,
          CURLOPT_SSL_VERIFYPEER => false
        );

        $ch = curl_init();
        curl_setopt_array($ch, $curlConfig);
        $response = curl_exec($ch);
        if (curl_errno($ch)) {
          $api_error = curl_error($ch);
        }
        curl_close($ch);

        // Decode JSON data of API response in array 
        $responseData = json_decode($response);
        // If the reCAPTCHA API response is valid 
        if (!empty($responseData) && $responseData->success) {
          $status = 'success';
          $statusMsg = '<script>
                Swal.fire({
                    position: "center",
                    title: "Pendaftaran Berhasil",
                    text: "Data berhasil dikirim! Klik OK untuk melanjutkan.",
                    icon: "success",
                    showCancelButton: false, 
                    showConfirmButton: true, 
                  }).then((result) => {
                    if (result.isConfirmed) {
                      window.location.href = "konfirmasi-pendaftaran";
                    }
                  });
            </script>
                ';
          $postData = '';
          $data = daftar($_POST);
          if (isset($data) && $data['error'] == true && isset($api_error)) {
            $statusMsg = $data['massage'];
          }
        } else {
          if (!empty($api_error)) { // Jika ada kesalahan
            $statusMsg = $api_error; // Gunakan pesan kesalahan dari $api_error
          } else { // Jika tidak ada kesalahan
            $statusMsg = '<script>
                    Swal.fire({
                        position: "center",
                        title: "Recaptcha",
                        text: "Recaptcha Belum di Centang, silahkan isi ulang dan centang recaptcha",
                        icon: "error",
                        showCancelButton: false, 
                        showConfirmButton: true, 
                      }).then((result) => {
                        if (result.isConfirmed) {
                          window.location.href = "daftar";
                        }
                      });
                </script>';
          }
        }
      } else {
        $statusMsg = '<script>
            Swal.fire({
                position: "center",
                title: "Error",
                text: "Terjadi Kesalahan Silahkan Coba Lagi",
                icon: "warning",
                showCancelButton: false, 
                showConfirmButton: true, 
              }).then((result) => {
                if (result.isConfirmed) {
                  window.location.href = "daftar";
                }
              });
        </script>';
      }
    } else {
      $valErr = !empty($valErr) ? $valErr : '';
      $statusMsg = $valErr;
    }
  }
}
