<?php
//Cara mudah dan sederhana mendapatkan mac address
 // Turn on output buffering
ob_start();
 //mendapatkan detail ipconfing menggunakan CMD
system('ipconfig /all');
 // mendapatkan output kedalam variable
$mycom=ob_get_contents();
 // membersihkan output buffer
ob_clean();
$findme = "Physical";
 // mencari perangkat fisik | menemukan posisi text perangkat fisik
 //Search the "Physical" | Find the position of Physical text
$pmac = strpos($mycom, $findme);
 // mendapatkan alamat peragkat fisik
$mac_addr=substr($mycom,($pmac+36),17);
//end mac
echo $mac_addr;
?>