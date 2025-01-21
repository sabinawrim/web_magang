// const body = document.querySelector("body");
// const toggle = document.querySelector("#toggle");
// const sunIcon = document.querySelector(".toggle .bxs-sun");
// const moonIcon = document.querySelector(".toggle .bx-moon");

// toggle.addEventListener("change", () => {
//   body.classList.toggle("dark");
//   sunIcon.className = sunIcon.className == "bx bxs-sun" ? "bx bx-sun" : "bx bxs-sun";
//   moonIcon.className = moonIcon.className == "bx bxs-sun" ? "bx bx-sun" : "bx bxs-sun";
// });

// const body = document.querySelector("body");
// const toggle = document.querySelector("#toggle");
// const sunIcon = document.querySelector(".toggle .bxs-sun");
// const moonIcon = document.querySelector(".toggle .bx-moon");

// // Event listener untuk toggle switch
// toggle.addEventListener("change", () => {
//   // Mengubah mode dark/normal
//   body.classList.toggle("dark");

//   // Menampilkan/menghilangkan ikon sesuai mode
//   if (body.classList.contains("dark")) {
//     sunIcon.style.display = "none";
//     moonIcon.style.display = "inline";
//   } else {
//     sunIcon.style.display = "inline";
//     moonIcon.style.display = "none";
//   }
// });

// const body = document.querySelector("body");
// const toggle = document.querySelector("#toggle");
// const sunIcon = document.querySelector(".toggle .bxs-sun");
// const moonIcon = document.querySelector(".toggle .bx-moon");

// toggle.addEventListener("change", () => {
//   // Mengubah mode gelap/terang
//   body.classList.toggle("dark");

//   // Perubahan status ikon
//   if (body.classList.contains("dark")) {
//     sunIcon.classList.remove("active");
//     moonIcon.classList.add("active");
//   } else {
//     sunIcon.classList.add("active");
//     moonIcon.classList.remove("active");
//   }
// });

// const body = document.querySelector("body");
// const toggle = document.querySelector("#toggle");
// const sunIcon = document.querySelector(".toggle .bxs-sun");
// const moonIcon = document.querySelector(".toggle .bx-moon");

// // Tambahkan event listener ke input toggle
// toggle.addEventListener("change", () => {
//   // Mode gelap/terang
//   if (toggle.checked) {
//     body.classList.add("dark"); // Tambahkan mode gelap
//     sunIcon.classList.remove("active"); // Nonaktifkan ikon matahari
//     moonIcon.classList.add("active"); // Aktifkan ikon bulan
//   } else {
//     body.classList.remove("dark"); // Kembali ke mode terang
//     sunIcon.classList.add("active"); // Aktifkan ikon matahari
//     moonIcon.classList.remove("active"); // Nonaktifkan ikon bulan
//   }
// });

const body = document.querySelector("body");
const toggle = document.querySelector("#toggle");
const sunIcon = document.getElementById("sunIcon");
const moonIcon = document.getElementById("moonIcon");

// Initial states
sunIcon.style.color = "#ffc107"; // Matahari warna kuning (default terang)
moonIcon.style.color = "#6c757d"; // Bulan warna abu-abu

// Toggle functionality
toggle.addEventListener("change", () => {
  body.classList.toggle("dark");

  // Update icon colors
  if (body.classList.contains("dark")) {
    sunIcon.style.color = "#6c757d"; // Matahari warna abu-abu
    moonIcon.style.color = "#ffc107"; // Bulan warna kuning
  } else {
    sunIcon.style.color = "#ffc107"; // Matahari warna kuning
    moonIcon.style.color = "#6c757d"; // Bulan warna abu-abu
  }
});
