const image = document.querySelector("#hero img");

let position = 0;
let direction = 1;

function moveImage() {
  position += direction; // Perbarui posisi

  image.style.transform = `translateX(${position}px)`;

  if (position > 100 || position < -100) {
    direction *= -1; // Balik arah
  }

  requestAnimationFrame(moveImage);
}

moveImage();
const themeToggle = document.getElementById("theme-toggle");
const body = document.body;

themeToggle.addEventListener("click", () => {
  body.classList.toggle("pink");

  //menyimpan preferensi theme di local storage (opsional)
  localStorage.setItem("theme", body.classList.contains("pink") ? "pink" : "light");
});

// Memuat tema terakhir yang dipilih (jika ada)
const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
  body.classList.add(savedTheme);
}
