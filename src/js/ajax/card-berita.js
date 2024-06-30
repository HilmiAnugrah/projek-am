function loadBerita(limit) {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("container-berita").innerHTML = this.responseText;
    }else{
      console.log('gagal dikirim')
    }
  };
  xhttp.open("GET", "./src/backend/ajax/get_berita.php?limit=" + limit, true);
  xhttp.send();
}