<?php
require '../../../functions/functions.php';
$id = $_GET['id'];

$db = new Database();
$query = "UPDATE register_student
            SET rgs_click = rgs_click + 1
          WHERE rgs_id = :id";
$db->query($query);
$db->bind('id', $id);
$db->execute();

$query = "SELECT rgs_id,
                  rgs_name,
                  rgs_profile,
                  rgs_tf_prove,
                  rgs_code,
                  rgs_adress,
                  rgs_whatsapp
          FROM register_student
          WHERE rgs_id = :id";
$db->query($query);
$db->bind('id', $id);
$db->execute();
$santri = $db->single();

$whatsapp = $santri['rgs_whatsapp'];
$code = $santri['rgs_code'];
$lokasi = 'https://api.whatsapp.com/send?phone=' . $santri['rgs_whatsapp'] . '&text=';
$lokasi .= is_null($code) ? 'Supaya%20pendaftaran%20berhasil%20silahkan%20infaq%20pendaftaran%20sebesar%20Rp.200.000%20Program%20(SMATER)/Rp.250.000%20Program%20(SMP%20PLUS)%20BSI%20No.%20Rek%207094658335%20a.n%20Yayasan%20Fadhila%20Aswanda%0a%0aLalu%20lakukan%20konfirmasi%20di%0a%0ahttps://pptqam.ponpes.id/konfirmasi-pendaftaran' : 'Selamat%20Anda%20Telah%20Diterima%20Di%20PONPES%20AM%0aIni%20kode%20unik%20untuk%20login%20di%20website%20kami%0a"' . $code . '"';
header('Location: ' . $lokasi);
