<?php
// Google reCAPTCHA API keys settings 
$secretKey     = '6LeyygIoAAAAADSazXK5tVi1ja8BoAZJBFX7AIL2';

// Email settings 
$recipientEmail = 'hilmi@gmail.com';

// Assign default values  
$postData = $valErr = $statusMsg = $api_error = '';
$status = 'error';

// If the form is submitted 
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
        $valErr .= 'Please enter your name.<br/>';
    }
    if (empty($email) || filter_var($email, FILTER_VALIDATE_EMAIL) === false) {
        $valErr .= 'Please enter a valid email.<br/>';
    }
    if (empty($alamat)) {
        $valErr .= 'Please enter your address.<br/>';
    }
    if (empty($program)) {
        $valErr .= 'Please select a program.<br/>';
    }
    if (empty($asal_sekolah)) {
        $valErr .= 'Please enter your school.<br/>';
    }
    if (empty($whatsapp)) {
        $valErr .= 'Please enter your WhatsApp number.<br/>';
    }
    if (empty($ekstrakurikuler)) {
        $valErr .= 'Please select an extracurricular activity.<br/>';
    }
    if (empty($question)) {
        $valErr .= 'Please select where you heard about us from.<br/>';
    }


    // Check whether submitted input data is valid 
    if (empty($valErr)) {
        // Validate reCAPTCHA response 
        if (!empty($_POST['g-recaptcha-response'])) {

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
                // Send email notification to the site admin 
                $to = $recipientEmail;
                $subject = 'New Contact Request Submitted';
                $htmlContent = " 
                    <h4>Contact request details</h4> 
                    <p><b>Name: </b>" . $name . "</p> 
                    <p><b>Email: </b>" . $email . "</p> 
                    <p><b>alamat: </b>" . $alamat . "</p> 
                    <p><b>program: </b>" . $program . "</p> 
                    <p><b>asal sekolah: </b>" . $asal_sekolah . "</p> 
                    <p><b>whatsapp: </b>" . $whatsapp . "</p> 
                    <p><b>asal ekstrakurikuler: </b>" . $ekstrakurikuler . "</p> 
                ";

                $status = 'success';
                $statusMsg = 'Thank you! Your contact request has been submitted successfully.';
                $postData = '';
                $data = daftar($_POST);
                if ($data['error'] == true) {
                    $statusMsg = $data['massage'];
                } else {
                    header('Location: ' . baseUrl('konfirmasi-pendaftaran'));
                }
            } else {
                $statusMsg = !empty($api_error) ? $api_error : 'The reCAPTCHA verification failed, please try again.';
            }
        } else {
            $statusMsg = 'Something went wrong, please try again.';
        }
    } else {
        $valErr = !empty($valErr) ? '<br/>' . trim($valErr, '<br/>') : '';
        $statusMsg = 'Please fill all the mandatory fields:' . $valErr;
    }
}
