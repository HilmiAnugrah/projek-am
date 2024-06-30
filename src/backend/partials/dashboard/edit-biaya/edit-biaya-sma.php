<?php 
require '../../../functions/functions.php';
$db = new Database();

$biayaDaftar = htmlspecialchars($_POST['biaya_daftar']);
$biayaMasuk = htmlspecialchars($_POST['biaya_masuk']);
$biayaYear = htmlspecialchars($_POST['biaya_year']);
$biayaMonth = htmlspecialchars($_POST['biaya_month']);
if(isset($_POST['prg_id'])==2){
    $biayaDaftar = htmlspecialchars($_POST['biaya_daftar']);
    $biayaMasuk = htmlspecialchars($_POST['biaya_masuk']);
    $biayaYear = htmlspecialchars($_POST['biaya_year']);
    $biayaMonth = htmlspecialchars($_POST['biaya_month']);
        // biaya sma
        $query = "UPDATE program_biaya
        SET pgb_biaya = :biayaDaftar
        WHERE pgb_id = 7";
        $db->query($query);
        $db->bind('biayaDaftar', $biayaDaftar);
        $db->execute();
        $query = "UPDATE program_biaya
        SET pgb_biaya = :biayaMasuk
        WHERE pgb_id = 8";
        $db->query($query);
        $db->bind('biayaMasuk', $biayaMasuk);
        $db->execute();
        $query = "UPDATE program_biaya
        SET pgb_biaya = :biayaYear
        WHERE pgb_id = 9";
        $db->query($query);
        $db->bind('biayaYear', $biayaYear);
        $db->execute();
        $query = "UPDATE program_biaya
        SET pgb_biaya = :biayaMonth
        WHERE pgb_id = 10";
        $db->query($query);
        $db->bind('biayaMonth', $biayaMonth);
        $db->execute();
        
    }
    
    if ($db->rowCount() > 0) {
        redirectForm(false, 'Data Berhasil Diubah', 'dashboard#edit-biaya');
    } else {
        redirectForm(true, 'Data Gagal Diubah', 'dashboard#edit-biaya');
    }