<?php

require_once '../../vendor/autoload.php';

$mpdf = new \Mpdf\Mpdf();
$mpdf->WriteHTML('<!DOCTYPE html>
<html>
<head>
<style>
.double-underline {
  text-decoration: underline double;
}
</style>
</head>
<body>
<p>This is a <u class="double-underline">double underline</u> text.</p>
</body>
</html>
');
$mpdf->Output();