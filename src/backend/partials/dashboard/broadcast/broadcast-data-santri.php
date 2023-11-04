<?php
require '../../../functions/functions.php';

$db = new Database();

$id = $_POST['id'];
$content = htmlspecialchars($_POST['content']);
$query = "UPDATE wa_broadcast
            SET wbd_content = :content
          WHERE wbd_id = :id";
$db->query($query);
$db->bind('content', $content);
$db->bind('id', $id);
$db->execute();

redirectForm(false, 'Broadcast telah di update', 'dashboard');
