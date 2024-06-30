<?php
$url = 'https://profile.pptqam.ponpes.id/wp-json/wp/v2/posts?per_page=2';
$response = file_get_contents($url);
$data = json_decode($response, true);
var_dump($data);
// Melakukan looping untuk setiap entri dalam array data
foreach ($data as $post) {
    // Mengambil properti 'yoast_head_json'
    $yoastHeadJson = $post['yoast_head_json'];

    // Memeriksa apakah 'yoast_head_json' memiliki properti 'og_image'
    if (isset($yoastHeadJson['og_image'])) {
        // Mengambil URL gambar dari 'og_image'
        $ogImageUrl = $yoastHeadJson['og_image'][0]['url'];
        
        // Mengambil title dari 'yoast_head_json'
        $title = $yoastHeadJson['title'];

        // Mengambil description dari 'yoast_head_json'
        $description = $yoastHeadJson['description'];
        
        // Menampilkan URL gambar, title, dan description
        echo "URL gambar: $ogImageUrl <br>";
        echo "Title: $title <br>";
        echo "Description: $description <br><br>";
    } else {
        // Jika tidak ada properti 'og_image', Anda bisa menangani ini di sini
        // Tetapi pastikan untuk menginisialisasi atau mendefinisikan variabel terlebih dahulu
        $title = $yoastHeadJson['title'] ?? '';
        $description = $yoastHeadJson['description'] ?? '';
        echo "Title: $title <br>";
        echo "Description: $description <br><br>";
    }                         
}

?>
