<?php

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
    ($path == "/project-am/projek-am/src/pages/biaya/") ||
    ($path == "/project-am/projek-am/src/pages/biaya/biaya.php")
  ) {
    return $bgYoungOrange;
  } elseif (
    ($path == "/project-am/projek-am/src/pages/image-gallery/") ||
    ($path == "/project-am/projek-am/src/pages/image-gallery/image-gallery.php")
  ) {
    return $bgMainGreen;
  } elseif (
    ($path == "/project-am/projek-am/src/pages/daftar/") ||
    ($path == "/project-am/projek-am/src/pages/daftar/daftar.php")
  ) {
    return $bgMainPurple;
  }

  // Default value if none of the conditions are met
  return $bgMain;
}


// hcaptcha

// hCAPTCHA API key configuration 
$secretKey = '232a413b-396d-4bae-81aa-00eb89539049';

// If the form is submitted 
$statusMsg = '';
if (isset($_POST['kirim'])) {

  // Validate form fields 
  if (!empty($_POST['name']) && !empty($_POST['email'])) {

    // Validate hCAPTCHA checkbox 
    if (!empty($_POST['h-captcha-response'])) {
      // Verify API URL 
      $verifyURL = 'https://hcaptcha.com/siteverify';

      // Retrieve token from post data with key 'h-captcha-response' 
      $token = $_POST['h-captcha-response'];

      // Build payload with secret key and token 
      $data = array(
        'secret' => $secretKey,
        'response' => $token,
        'remoteip' => $_SERVER['REMOTE_ADDR']
      );

      // Initialize cURL request 
      // Make POST request with data payload to hCaptcha API endpoint 
      $curlConfig = array(
        CURLOPT_URL => $verifyURL,
        CURLOPT_POST => true,
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_POSTFIELDS => $data
      );
      $ch = curl_init();
      curl_setopt_array($ch, $curlConfig);
      $response = curl_exec($ch);
      curl_close($ch);

      // Parse JSON from response. Check for success or error codes 
      $responseData = json_decode($response);

      // If reCAPTCHA response is valid 
      if ($responseData->success) {
        // Posted form data 
        $name = !empty($_POST['name']) ? $_POST['name'] : '';
        $email = !empty($_POST['email']) ? $_POST['email'] : '';
        $alamat = !empty($_POST['alamat']) ? $_POST['alamat'] : '';
        // Code to process the form data goes here... 
        $statusMsg = 'Your contact request has submitted successfully.';
      } else {
        $statusMsg = 'Robot verification failed, please try again.';
      }
    } else {
      $statusMsg = 'Please check on the CAPTCHA box.';
    }
  } else {
    $statusMsg = 'Please fill all the mandatory fields.';
  }
}
