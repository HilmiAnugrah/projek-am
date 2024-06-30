<?php
require '../../../functions/functions.php';
$id = $_GET['id'];

$db = new Database();
$query = "DELETE
          FROM register_student
          WHERE rgs_id = :id";
$db->query($query);
$db->bind('id', $id);
$db->execute();
$santri = $db->single();

redirectForm(false, 'Berhasil Di Hapus', 'dashboard#data-calon-santri');