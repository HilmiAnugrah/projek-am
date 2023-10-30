window.onload = () => {
  const canvas = document.getElementById("statistik-daftar");
  const ctx = canvas.getContext("2d");
  const statDaftar = new Chart(canvas, {
    type: "pie",
    data: {
      labels: ["Total santri masuk", "Jumlah santri mendaftar"],
      datasets: [
        {
          data: [500, 100],
          backgroundColor: ["#77B341", "#F48120"],
        },
      ],
    },
  });
};
