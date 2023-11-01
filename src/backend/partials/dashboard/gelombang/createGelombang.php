<?php
require '../../../functions/functions.php';
if (!isset($_POST['periode'])) {
  header('Location: ' . baseUrl('dashboard#create-gelombang'));
  exit;
}
$db = new Database();
$query = "SELECT glb_name
                FROM gelombang
                WHERE glb_id
                IN (SELECT MAX(glb_id)
                    FROM gelombang
                    WHERE prd_id = :id)";
$db->query($query);
$db->bind('id', $_POST['periode']);
$db->execute();
$lastGel = $db->single();
$gelName = 1;
if ($lastGel != false) {
  $gelName += $lastGel['glb_name'];
}

$query = "UPDATE gelombang
            SET glb_status = :status,
                glb_stop = now()
            WHERE glb_status = 'active'";
$db->query($query);
$db->bind('status', 'stopped');
$db->execute();

$query = "INSERT INTO gelombang
            VALUES(null,
                  :name,
                  :status,
                  now(),
                  null,
                  :id)";
$db->query($query);
$db->bind('name', $gelName);
$db->bind('status', 'active');
$db->bind('id', $_POST['periode']);
$db->execute();

redirectForm(false, 'Gelombang Terbuat', 'dashboard');
