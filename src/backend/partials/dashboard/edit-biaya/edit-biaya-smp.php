<?php
require '../../../functions/functions.php';
$db = new Database();

$biayaDaftar = htmlspecialchars($_POST['biaya_daftar']);
$biayaMasuk = htmlspecialchars($_POST['biaya_masuk']);
$biayaYear = htmlspecialchars($_POST['biaya_year']);
$biayaMonth = htmlspecialchars($_POST['biaya_month']);
$biayaSpa = htmlspecialchars($_POST['biaya_seragam_pa']);
$biayaSpi = htmlspecialchars($_POST['biaya_seragam_pi']);
$biayaBuku = htmlspecialchars($_POST['biaya_buku']);
// biaya smp
if(isset($_POST['biaya_daftar'])){
    $query = "UPDATE program_biaya
              SET pgb_biaya = :biayaDaftar
              WHERE pgb_id = 1";
    $db->query($query);
    $db->bind('biayaDaftar', $biayaDaftar);
    $db->execute();
    if ($db->rowCount() > 0) {
        redirectForm(false, 'Data SMP Berhasil Diubah', 'dashboard#edit-biaya');
    } else {
        redirectForm(true, 'Data Gagal Diubah', 'dashboard#edit-biaya');
    }
}
if(isset($_POST['biaya_masuk'])){

    $query = "UPDATE program_biaya
              SET pgb_biaya = :biayaMasuk
              WHERE pgb_id = 2";
    $db->query($query);
    $db->bind('biayaMasuk', $biayaMasuk);
    $db->execute();
}
if(isset($_POST['biaya_year'])){
    $query = "UPDATE program_biaya
              SET pgb_biaya = :biayaYear
              WHERE pgb_id = 3";
    $db->query($query);
    $db->bind('biayaYear', $biayaYear);
    $db->execute();
    if ($db->rowCount() > 0) {
        redirectForm(false, 'Data SMP Berhasil Diubah', 'dashboard#edit-biaya');
    } else {
        redirectForm(true, 'Data Gagal Diubah', 'dashboard#edit-biaya');
    }
}
if(isset($_POST['biaya_month'])){
    $query = "UPDATE program_biaya
              SET pgb_biaya = :biayaMonth
              WHERE pgb_id = 4";
    $db->query($query);
    $db->bind('biayaMonth', $biayaMonth);
    $db->execute();
    if ($db->rowCount() > 0) {
        redirectForm(false, 'Data SMP Berhasil Diubah', 'dashboard#edit-biaya');
    } else {
        redirectForm(true, 'Data Gagal Diubah', 'dashboard#edit-biaya');
    }
} 
if(isset($_POST['biaya_seragam_pa'])){
    $query = "UPDATE program_biaya
              SET pgb_biaya = :biayaSpa
              WHERE pgb_id = 5";
    $db->query($query);
    $db->bind('biayaSpa', $biayaSpa);
    $db->execute();
    if ($db->rowCount() > 0) {
        redirectForm(false, 'Data SMP Berhasil Diubah', 'dashboard#edit-biaya');
    } else {
        redirectForm(true, 'Data Gagal Diubah', 'dashboard#edit-biaya');
    }
}
if(isset($_POST['biaya_seragam_pi'])){
    $query = "UPDATE program_biaya
              SET pgb_biaya = :biayaSpi
              WHERE pgb_id = 6";
    $db->query($query);
    $db->bind('biayaSpi', $biayaSpi);
    $db->execute();
    if ($db->rowCount() > 0) {
        redirectForm(false, 'Data SMP Berhasil Diubah', 'dashboard#edit-biaya');
    } else {
        redirectForm(true, 'Data Gagal Diubah', 'dashboard#edit-biaya');
    }
}
if(isset($_POST['biaya_buku'])){
    $query = "UPDATE program_biaya
              SET pgb_biaya = :biayaBuku
              WHERE pgb_id = 11";
    $db->query($query);
    $db->bind('biayaBuku', $biayaBuku);
    $db->execute();
    if ($db->rowCount() > 0) {
        redirectForm(false, 'Data SMP Berhasil Diubah', 'dashboard#edit-biaya');
    } else {
        redirectForm(true, 'Data Gagal Diubah', 'dashboard#edit-biaya');
    }
}

    

  
