function loadExtracurricular(limit) {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("extracurricular-container").innerHTML = this.responseText;
    }
  };
  xhttp.open("GET", "./src/backend/ajax/get_extracurricular.php?limit=" + limit, true);
  xhttp.send();
}