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
                  rgs_whatsapp,
                  prg_id
          FROM register_student
          WHERE rgs_id = :id";
$db->query($query);
$db->bind('id', $id);
$db->execute();
$santri = $db->single();
$whatsapp = $santri['rgs_whatsapp'];
$code = $santri['rgs_code'];
$name = $santri['rgs_name'];
$prgId = $santri['prg_id'];
if($prgId === 1){
  $program = 'SMP';

}else if($prgId === 2){
  $program ="SMA";
}
if (is_null($code)) {
  $text = "Supaya pendaftaran *berhasil* silahkan infaq pendaftaran sebesar:\nRp.200.000 Program (SMATER)\nRp.250.000 Program (SMP PLUS)\nBSI No. Rek *7094658335* a.n Yayasan Fadhila Aswanda\nLalu lakukan konfirmasi di\nhttps://pptqam.ponpes.id/konfirmasi-pendaftaran";
} else {
  $text = "Terimakasih data pendaftaran calon santri sudah diterima selanjutnya silahkan login ke *Dashboard Pesantren* menggunakan kode dibawah 
  -
  Nama: *".$name."*
  Program : *".$program."*
  kode: *".$code."*
  Halaman Login : https://pptqam.ponpes.id/login
  -
  jika ada pertanyaan silahkan hubungi admin :
  admin 1 : 628996122488
  admin 2 : 62895708114777
  admin 3 : 6289526762602";
}

$lokasi = 'https://api.whatsapp.com/send?phone=' . $whatsapp . '&text=' . urlencode($text);
header('Location: ' . $lokasi);

