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
                  prg_id,
                  rgs_known_from,
                  glb_id
          FROM register_student
          WHERE rgs_id = :id";
$db->query($query);
$db->bind('id', $id);
$db->execute();
$santri = $db->single();


// $queryCode = "SELECT usr_code FROM users WHERE std_id = :id";$db->query($queryCode);
// $db->bind('id', $id);
// $db->execute();
// $codeSantri = $db->single();
// $codeS = $codeSantri['usr_code'];
// var_dump($codeSantri);die;

$code = $santri['rgs_code'];
$whatsapp = $santri['rgs_whatsapp'];
$name = $santri['rgs_name'];
$prgId = $santri['prg_id'];
$rgs_known_from = $santri['rgs_known_from'];
$gel = $santri['glb_id'];
if ($prgId === 1) {
  $program = 'SMP';
} else if ($prgId === 2) {
  $program = "SMA";
}

if($santri['glb_id'] == 1){
  $link = 'https://chat.whatsapp.com/LdibUg5Iq6wIWLFqX4BuBL';
  $tgl_test = '';
}elseif($santri['glb_id'] == 2){
  $link = 'https://chat.whatsapp.com/ID7FaKYDBTkCaHvnUWMN9p';
  $tgl_test = '25 Februari 2024';
}elseif($santri['glb_id'] == 3){
  $link = 'https://chat.whatsapp.com/HGgxNIQPHg9CQVSPTQtcHH';
  $tgl_test = '05 Mei 2024';
}elseif($santri['glb_id'] === 4){
  $link = 'https://chat.whatsapp.com/FrTbVgo3l3U5G1gPwr0ivo';
  $tgl_test = 'Jadwal Menyusul';
}



if (is_null($code)) {
  $text = "Terima kasih telah mengunjungi website kami, dan melakukan pendaftaran.\nAgar pendaftaran *berhasil* silahkan infaq pendaftaran sebesar *Rp.250.000* BSI No. Rek *7094658335* a.n Yayasan Fadhila Aswanda Lalu lakukan konfirmasi di\nhttps://pptqam.ponpes.id/konfirmasi-pendaftaran";

} else {
  $text = "
Terimakasih, data pendaftaran calon santri gelombang ".$gel." sudah *diterima*. Selanjutnya silahkan Bapak/ibu melengkapi data putra/putri nya dengan masuk kembali ke *Dashboard Pesantren* menggunakan *kode* (terlampir) 
-
*kode :* ".$code."
*Halaman Login :* https://pptqam.ponpes.id/login
*Tes Seleksi Gelombang ".$gel." :* ".$tgl_test."
-
Untuk selalu mengetahui/mendapatkan informasi terupdate mengenai *PPDB 2024/2025 Gelombang ".$gel."*, dihimbau Bapak/Ibu untuk bergabung di group WhatsApp
*Link Masuk Group Calon Santri Gelombang ".$gel." :* ".$link."
-
*Nama :* ". $name ."
*Program :* " . $program ."
*Gelombang :* ".$gel."
*Tau Dari Mana Pesantren :* ".$rgs_known_from."
-
jika ada pertanyaan silahkan hubungi admin :
*admin 1 :* 628996122488
*admin 2 :* 62895708114777
*admin 3 :* 6289526762602
";
}

$lokasi = 'https://api.whatsapp.com/send?phone=' . $whatsapp . '&text=' . urlencode($text);
header('Location: ' . $lokasi);
