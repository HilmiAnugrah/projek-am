<?php

use Mpdf\Tag\Table;

require_once '../../vendor/autoload.php';
require "../../backend/functions/functions.php";

$mpdf = new \Mpdf\Mpdf();
$margin_inch_top = 10;
$margin_inch_right = 0;
$margin_inch_bottom = 10;
$margin_inch_left = 0;
$mpdf->SetMargins($margin_inch_top, $margin_inch_right, $margin_inch_bottom, $margin_inch_left);

$html = '<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Data Santri</title>
    <link rel="stylesheet" href="../../css/cetak-pdf.css">
    <link rel="icon" href="../../img/logo.svg" />
</head>
<body>
<table class="hayde">
  <tr>
    <td class="text-right">
      <img src="' . baseUrl("src/img/logo.png") . '" alt="" class="logo">
    </td>
    <td class="text-center height">
      <p class="heading">YAYASAN FADHILAH ASWANDA</p>
      <p class="heading1 green line-height">PONDOK PESANTREN TAHFIDZUL QUR\'AN</p>
      <p class="heading1 dark-font comicsans">"AL-\'ASHR AL-MADANI"</p>
      <p class="alamat">Jl. Arcamanik Raya Bihbul No.48 Sindanglaya, Kecamatan Cimenyan, 
      Kabupaten Bandung, Jawa Barat, Telp. 022-63754325
      </p>
      </td>
      </tr>
      </table>
      <div class="pt-5">
      <hr class="double-line-1">
      <hr class="double-line-2">
      </div>

';

$html .= '
    <h2 class="heading2 dark-font">FORMULIR SMA SANTRI TAKHOSSUS
    <br>PONDOK PESANTREN TAHFIDZUL QUR\'AN AL-\'ASHR AL-MADANI</h2>
';

// Tambahkan struktur tabel HTML
$html .= '<table class="table-data">
<tbody>
    <tr>
    <td colspan="4" class="text-bold heading3">Data</td>
    <tr>
    <td width="300px">No. Peserta Test</td>
    <td width="10px">:</td>
    <td>SMA.PA.I-2024/2025.01</td>
    <td class="text-right" rowspan="5" width="80px" style="overflow:hidden;">
    <img src="' . baseUrl("src/img/uploaded/person/santri.jpg") . '" alt="" width="80px">
  </td>
    </tr>
    <tr>
        <td>Nama Lengkap Anak (Calon Siswa/Santri)</td>
        <td>:</td>
        <td>Hilmi Anugrah Bela Negara</td>
    </tr>
    <tr>
        <td>Tanggal lahir</td>
        <td>:</td>
        <td>Bandung, 11 Mei 2003</td>
    </tr>
</tbody>
</table>';
$html .= '
<p class="paragraf">Formulir diisi dengan lengkap dan <span class="underline text-bold">dikembalikan</span> ke sekretariat Pondok Pesantren Tahfidzul Qur\'an Al-\'Ashr Al-Madani <span class="underline text-bold">Pada saat Pelaksanaan Test</span>.</P>
<h2 class="heading2">FORMULIR ISIAN DATA ANAK DAN ORANG TUA</h2>
';
$html .= '
    <h3>A. ANAK</h3>
    <table class="data-anak" cellspacing="0" cellpadding="1"
>
    <tr>
        <td>Nama Lengkap</td>
        <td width="10px">:</td>
        <td colspan="4" >
            <div style="display: flex; justify-content: space-between;">
                <span>Hilmi anugrah Bela Negara</span>

                <!-- P/L ini gak biarin aja nanti di coret manual -->
                <span style="border-left: 1px solid black; padding:0px 10px;">P/L</span>
            </div>
        </td>
    </tr>
    <tr>
        <td>Nama Panggilan</td>
        <td>:</td>
        <td colspan="4">Hilmi Anugrah</td>
    </tr>
    <tr>
        <td>Jenis Kelamin</td>
        <td>:</td>
        <td colspan="4">Laki laki</td>
    </tr>
    <tr>
        <td>Golongan Darah</td>
        <td>:</td>
        <td colspan="4" >AB</td>
    </tr>
    <tr>
        <td>Tempat Tanggal Lahir</td>
        <td>:</td>
        <td colspan="4">Bandung, 11 Mei 4004</td>
    </tr>
    <tr>
        <td>Alamat Rumah</td>
        <td>:</td>
        <td colspan="4">Jl. Arcamanik, Sindanglaya, Kec. Cimenyan, Kota Bandung, Jawa Barat</td>
    </tr>
    <tr>
        <td>Kode Pos</td>
        <td>:</td>
        <td colspan="4">40195</td>
    </tr>
    <tr>
        <td>Telp Rumah</td>
        <td>:</td>
        <td colspan="4">-</td>
    </tr>
    <tr>
        <td>Kecamatan</td>
        <td>:</td>
        <td colspan="4">Bandung</td>
    </tr>
    <tr>
        <td>Kelurahan</td>
        <td>:</td>
        <td colspan="4">Passanggrahan</td>
    </tr>
    <tr>
        <td>Bahasa Sehari-hari</td>
        <td>:</td>
        <td colspan="4">Bahasa Sunda</td>
    </tr>
    <tr>
        <td>Jarak Tempuh dari Rumah ke Pesantren</td>
        <td>:</td>
        <td colspan="4"><div style="display: flex; justify-content: space-between;">
            <span>5</span>
            <span style="border-left: 1px solid black; padding:0px 10px;  ">KM</span>
        </div>
    </td>
    </tr>
    <tr>
        <td>Anak ke</td>
        <td>:</td>
        <td colspan="4" width="200px"><div style="display: flex; justify-content: start;">
            <span style="padding-right: 10px;">2</span>
            <span style="padding:0px 10px; ">dari</span>
            <span style="padding:0px 10px; ">4</span>
            <span style="padding:0px 10px; ">bersaudara</span>
        </div></td>
    </tr>
</table>
';

// Tambahkan konten tabel yang lain

$html .= '</body>
</html>';

$mpdf->WriteHTML($html);
$mpdf->Output();
