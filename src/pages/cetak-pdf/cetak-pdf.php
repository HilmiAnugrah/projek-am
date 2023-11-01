<?php

use Mpdf\Tag\Table;

require_once '../../vendor/autoload.php';
require "../../backend/functions/functions.php";

$mpdf = new \Mpdf\Mpdf();
$margin_inch_top = 5;
$margin_inch_right = 0;
$margin_inch_bottom =5;
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
//warna untuk heading smp black untuk sma #002060
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
<h3 class="heading3 margin-top">A. ANAK</h3>
<table class="data-anak" cellspacing="0" cellpadding="1"
border="1">
<tr style="background-color:#E4E4E4;">
    <td>Nama Lengkap</td>
    <td width="10px">:</td>
    <td colspan="3">
        Hilmi Anugrah Bela Negara
    </td>
    <td width="50px" style="text-align: center;">
        L / P
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
    <td colspan="3">
        5
    </td>
    <td style="text-align: center;">
        KM
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
$html .='
<h3 class="heading3" style="margin-top:10px;">B. DATA ORANG TUA</h3>
<table cellspacing="0" cellpadding="0px" border="1" class="data-orangtua">
    <tr style="background-color:#E4E4E4;font-weight:bold;">
        <td colspan="2"></td>
        <td width="250px" >AYAH</td>
        <td width="250px">IBU</td>
    </tr>
    <tr>
        <td>Nama Lengkap</td>
        <td width="10px">:</td>
        <td>Hilmi Anugrah Bela Negara</td>
        <td>Diyah Widia lestari</td>
    </tr>
    <tr>
        <td>Tempat Tanggal Lahir</td>
        <td>:</td>
        <td>Bandung, 11 Mei 2003</td>
        <td>Bandung, 6 Maret 1998</td>
    </tr>
    <tr>
        <td>Suku Bangsa</td>
        <td>:</td>
        <td>Sunda</td>
        <td>Sunda</td>
    </tr>
    <tr>
        <td>Alamat Rumah</td>
        <td>:</td>
        <td>Jl. Arcamanik, Sindanglaya, Kec. Cimenyan, Kota Bandung, Jawa Barat</td>
        <td>Jl. Arcamanik, Sindanglaya, Kec. Cimenyan, Kota Bandung, Jawa Barat</td>
    </tr>
    <tr>
        <td>Kode Pos</td>
        <td>:</td>
        <td>40195</td>
        <td>40195</td>
    </tr>
    <tr>
        <td>Email</td>
        <td>:</td>
        <td>hilmianugrah@gmail.com</td>
        <td>widiadless@gmail.com</td>
    </tr>
    <tr>
        <td>WhatsApp</td>
        <td>:</td>
        <td>0895601616644</td>
        <td>0896425461574</td>
    </tr>
    <tr>
        <td>Telepon Rumah</td>
        <td>:</td>
        <td>0223045789</td>
        <td>0225466378</td>
    </tr>
    <tr>
        <td colspan="4" style="background-color:#E4E4E4;font-weight:bold;">Status Pernikahan</td>
    </tr>
    <tr>
        <td>Status Pernikahan</td>
        <td>:</td>
        <td>Nikah</td>
        <td>Nikah</td>
    </tr>
    <tr>
        <td>Menikah Pada Usia</td>
        <td>:</td>
        <td>21 Tahun</td>
        <td>26</td>
    </tr>
    <tr>
        <td>Pernikahan Ke</td>
        <td>:</td>
        <td>1</td>
        <td>1</td>
    </tr>
    <tr>
        <td colspan="4" style="background-color:#E4E4E4; font-weight:bold;">Riwayat Perguruan Tinggi Ayah</td>
    </tr>
    <tr>
        <td>Nama Perguruan Tinggi</td>
        <td>:</td>
        <td>Universitas Pasundan</td>
        <td>Asyifa</td>
    </tr>
    <tr>
        <td>Fakultas</td>
        <td>:</td>
        <td>Teknik</td>
        <td>Tarbiyyah</td>
    </tr>
    <tr>
        <td>Jurusan</td>
        <td>:</td>
        <td>Informatika</td>
        <td>PAI</td>
    </tr>
    <tr>
        <td colspan="4" style="background-color:#E4E4E4; font-weight:bold;">Pekerjaan Ayah</td>
    </tr>
    <tr>
        <td>Pekerjaan/Profesi</td>
        <td>:</td>
        <td>Programmer</td>
        <td>Designer & Conten Creator</td>
    </tr>
    <tr>
        <td>Jabatan</td>
        <td>:</td>
        <td>Fullstack Developer</td>
        <td>Leader</td>
    </tr>
    <tr>
        <td>Rata Rata Gaji</td>
        <td>:</td>
        <td>> 5000.000</td>
        <td>> 5000.000</td>
    </tr>
    <tr>
        <td>Alamat Kantor</td>
        <td>:</td>
        <td>Jl. Arcamanik, Sindanglaya, Kec. Cimenyan, Kota Bandung, Jawa Barat</td>
        <td>Jl. Arcamanik, Sindanglaya, Kec. Cimenyan, Kota Bandung, Jawa Barat</td>
    </tr>
    <tr>
        <td>Telepon Kantor</td>
        <td>:</td>
        <td>02244557547</td>
        <td>02287843248</td>
    </tr>
</table>
';
$html .= '
<h3 class="heading3" style="margin-top:10px;">C. DATA WALI SANTRI</h3>
<table cellspacing="0" cellpadding="0px" border="1" class="data-orangtua">
  
    <tr style="background-color:#E4E4E4;">
        <td>Nama Lengkap</td>
        <td width="10px">:</td>
        <td>Hilmi Anugrah Bela Negara</td>
    </tr>
    <tr>
        <td>Tempat Tanggal Lahir</td>
        <td>:</td>
        <td>Bandung, 11 Mei 2003</td>
    </tr>
    <tr>
        <td>Suku Bangsa</td>
        <td>:</td>
        <td>Sunda</td>
    </tr>
    <tr>
        <td>Hubungan Wali Dengan Anak</td>
        <td>:</td>
        <td>Paman</td>
    </tr>
    <tr>
        <td>Alamat Rumah</td>
        <td>:</td>
        <td>Jl. Arcamanik, Sindanglaya, Kec. Cimenyan, Kota Bandung, Jawa Barat</td>
    </tr>
    <tr>
        <td>Kode Pos</td>
        <td>:</td>
        <td>40195</td>
    </tr>
    <tr>
        <td>Email</td>
        <td>:</td>
        <td>hilmianugrah@gmail.com</td>
    </tr>
    <tr>
        <td>WhatsApp</td>
        <td>:</td>
        <td>0895601616644</td>
    </tr>
    <tr>
        <td>Telepon Rumah</td>
        <td>:</td>
        <td>0223045789</td>
    </tr>
    <tr>
        <td colspan="4" style="background-color:#E4E4E4; font-weight:bold;">Status Pernikahan</td>
    </tr>
    <tr>
        <td>Status Pernikahan</td>
        <td>:</td>
        <td>Nikah</td>
    </tr>
    <tr>
        <td>Menikah Pada Usia</td>
        <td>:</td>
        <td>21 Tahun</td>
    </tr>
    <tr>
        <td>Pernikahan Ke</td>
        <td>:</td>
        <td>1</td>
    </tr>
    <tr>
        <td colspan="4" style="background-color:#E4E4E4; font-weight:bold;">Riwayat Perguruan Tinggi Wali Santri</td>
    </tr>
    <tr>
        <td>Nama Perguruan Tinggi</td>
        <td>:</td>
        <td>Universitas Pasundan</td>
    </tr>
    <tr>
        <td>Fakultas</td>
        <td>:</td>
        <td>Teknik</td>
    </tr>
    <tr>
        <td>Jurusan</td>
        <td>:</td>
        <td>Informatika</td>
    </tr>
    <tr>
        <td colspan="4" style="background-color:#E4E4E4; font-weight:bold;">Pekerjaan Wali Santri</td>
    </tr>
    <tr>
        <td>Pekerjaan/Profesi</td>
        <td>:</td>
        <td>Programmer</td>
    </tr>
    <tr>
        <td>Jabatan</td>
        <td>:</td>
        <td>Fullstack Developer</td>
    </tr>
    <tr>
        <td>Rata Rata Gaji</td>
        <td>:</td>
        <td>> 5000.000</td>
    </tr>
    <tr>
        <td>Alamat Kantor</td>
        <td>:</td>
        <td>Jl. Arcamanik, Sindanglaya, Kec. Cimenyan, Kota Bandung, Jawa Barat</td>
    </tr>
    <tr>
        <td>Telepon Kantor</td>
        <td>:</td>
        <td>02244557547</td>
    </tr>
</table>

';

$html.='
<h3 class="heading3" style="margin-top:10px;">D. Keluarga Lainnya</h3>
<table cellspacing="0" cellpadding="0px" border="1" class="data-orangtua">
    <tr style="background-color:#E4E4E4;">
        <td>Nama</td>
        <td width="10px">:</td>
        <td>Hilmi Anugrah Bela Negara</td>
    </tr>
    <tr>
        <td>Hubungan</td>
        <td>:</td>
        <td>Paman</td>
    </tr>
    <tr>
        <td>Alamat</td>
        <td>:</td>
        <td>Jl. Arcamanik, Sindanglaya, Kec. Cimenyan, Kota Bandung, Jawa Barat</td>
    </tr>
    <tr>
        <td>WhatsApp</td>
        <td>:</td>
        <td>089662536253</td>
    </tr>
    <tr>
        <td>Telepon Rumah</td>
        <td>:</td>
        <td>02283747634</td>
    </tr>
</table>
';
$mpdf->WriteHTML($html);
$mpdf->AddPage();
$kesehatan .= '
<h3 class="heading3" style="margin-top:5px;">E. Riwayat Kesehatan</h3>
<table cellspacing="0" cellpadding="0px" border="1" class="data-orangtua">
    <tr>
        <td>Berat Badan</td>
        <td>:</td>
        <td>60</td>
        <td width="50px">KG</td>
    </tr>
    <tr>
        <td>Tinggi Badan</td>
        <td>:</td>
        <td>170</td>
        <td width="50px">CM</td>
    </tr>
    <tr>
        <td colspan="4" style="background-color: #E4E4E4; font-weight:bold;">Keluhan Fisik</td>
    </tr>
    <tr>
        <td>Keluhan Mata</td>
        <td>:</td>
        <td colspan="4">hayde hayde</td>
    </tr>
    <tr>
        <td>Keluhan Telinga</td>
        <td>:</td>
        <td colspan="4">089662536253</td>
    </tr>
 
    <tr>
        <td colspan="4" style="background-color: #E4E4E4; font-weight:bold;">keluhan Lain Yang Sering disampaikan anak</td>
    </tr>
    <tr>
        <td colspan="4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia reprehenderit laudantium alias, tenetur beatae sapiente commodi. Ratione, quod facilis veritatis, voluptatum ab consequuntur dolorum cumque facere ipsa, minima repellat maxime?</td>
    </tr>
    <tr>
        <td colspan="4" style="background-color: #E4E4E4; font-weight:bold;">Riwayat Terapi</td>
    </tr>
    <tr>
        <td colspan="4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia reprehenderit laudantium alias, tenetur beatae sapiente commodi. Ratione, quod facilis veritatis, voluptatum ab consequuntur dolorum cumque facere ipsa, minima repellat maxime?</td>
    </tr>
    <tr>
        <td colspan="4" style="background-color: #E4E4E4; font-weight:bold;">Pernah dirawat di rumah sakit? jika ya, jelaskan </td>
    </tr>
    <tr>
        <td colspan="4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia reprehenderit laudantium alias, tenetur beatae sapiente commodi. Ratione, quod facilis veritatis, voluptatum ab consequuntur dolorum cumque facere ipsa, minima repellat maxime?</td>
    </tr>
    <tr>
        <td colspan="4" style="background-color: #E4E4E4; font-weight:bold;">Hal penting yang menurut orang tua perlu diketahui pihak Pesantren / SMP Plus mengenai perkembangan anak </td>
    </tr>
    <tr>
        <td colspan="4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia reprehenderit laudantium alias, tenetur beatae sapiente commodi. Ratione, quod facilis veritatis, voluptatum ab consequuntur dolorum cumque facere ipsa, minima repellat maxime?</td>
    </tr>
</table>
';
$html .= '</body>
</html>';

$mpdf->WriteHTML($kesehatan);
$mpdf->Output();
