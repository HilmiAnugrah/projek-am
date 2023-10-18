<?php
$servername = "localhost"; // Ganti dengan nama server database Anda
$username = "root"; // Ganti dengan nama pengguna database Anda
$password = ""; // Ganti dengan kata sandi database Anda
$dbname = "santri"; // Ganti dengan nama database Anda

// Buat koneksi
$conn = mysqli_connect($servername, $username, $password, $dbname);

// Periksa koneksi
if (!$conn) {
    die("Koneksi gagal: " . mysqli_connect_error());
}

echo "Koneksi berhasil";

// Tutup koneksi
mysqli_close($conn);

function hapus($id)
{
    global $conn;
    mysqli_query($conn, "DELETE FROM user WHERE id = $id");
    return mysqli_affected_rows($conn);
}

