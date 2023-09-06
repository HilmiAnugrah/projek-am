// Dapatkan elemen pertanyaan
const question1 = document.getElementById("question1");
const question2 = document.getElementById("question2");
const question3 = document.getElementById("question3");
const question4 = document.getElementById("question4");

// Dapatkan elemen sub-pertanyaan
const subQuestion1 = document.getElementById("sub-question1");
const subQuestion2 = document.getElementById("sub-question2");
const subQuestion3 = document.getElementById("sub-question3");
const subQuestion4 = document.getElementById("sub-question4");

// get svg dropdown 
const svgQuestion1 = document.querySelector("#question1 svg");
const svgQuestion2 = document.querySelector("#question2 svg");
const svgQuestion3 = document.querySelector("#question3 svg");
const svgQuestion4 = document.querySelector("#question4 svg");

// Buat fungsi untuk mengganti visibilitas sub-pertanyaan
function toggleSubQuestion(subQuestion, svgElement) {
    subQuestion.classList.toggle("hidden");
    svgElement.classList.toggle("rotate-180"); // Tambahkan atau hapus kelas rotate-180
}
function addclasshidden(addHidden) {
    addHidden.classList.add("hidden");
}

// Tambahkan event listener untuk setiap pertanyaan
question1.addEventListener("click", () => {
    toggleSubQuestion(subQuestion1, svgQuestion1);
    addclasshidden(subQuestion2);
    addclasshidden(subQuestion3);
    addclasshidden(subQuestion4);
});

question2.addEventListener("click", () => {
    toggleSubQuestion(subQuestion2, svgQuestion2);
    addclasshidden(subQuestion1);
    addclasshidden(subQuestion3);
    addclasshidden(subQuestion4);
});

question3.addEventListener("click", () => {
    toggleSubQuestion(subQuestion3, svgQuestion3);
    addclasshidden(subQuestion1);
    addclasshidden(subQuestion2);
    addclasshidden(subQuestion4);
});

question4.addEventListener("click", () => {
    toggleSubQuestion(subQuestion4, svgQuestion4);
    addclasshidden(subQuestion1);
    addclasshidden(subQuestion2);
    addclasshidden(subQuestion3);
});
