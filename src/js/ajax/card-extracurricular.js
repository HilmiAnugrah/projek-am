function loadExtracurricular(limit) {
  const limits = limit + 1;
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("extracurricular-container").innerHTML = this.responseText;
    }
  };
  if (window.innerWidth < 800){
    xhttp.open("GET", "./src/backend/ajax/get_extracurricular.php?limit=" + limit, true);
  }else{
    xhttp.open("GET", "./src/backend/ajax/get_extracurricular.php?limit=" + limits, true);
  }
  xhttp.send();
}