// Ambil elemen-elemen yang dibutuhkan
var keyword = document.getElementById("keyword");
var container = document.getElementById("container");

// Tambahkan event ketika keyword ditulis
keyword.addEventListener("keyup", function () {
  // Buat object AJAX
  var xhr = new XMLHttpRequest();

  // Tambahkan event ketika AJAX selesai dilakukan
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      container.innerHTML = xhr.responseText;
    }
  };

  // Eksekusi AJAX
  xhr.open("GET", "ajax/user.php?keyword=" + keyword.value, true);
  xhr.send();
});
