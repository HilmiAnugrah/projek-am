<?php

require '../../../functions/functions.php';

$db = new Database();
$id = $_GET['id'];

$query = "UPDATE gelombang
            SET glb_status = 'stopped',
                glb_stop = now()
            WHERE glb_id = :id";
$db->query($query);
$db->bind('id', $id);
$db->execute();

redirectForm(false, 'Gelombang Telah Di Stop', 'dashboard#create-gelombang');
