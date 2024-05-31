// Ambil form absensi
var absensiForm = document.getElementById("absensiForm");

// Tambahkan event listener untuk submit form
absensiForm.addEventListener("submit", function (event) {
  // Hentikan pengiriman form
  event.preventDefault();

  // Tampilkan popup
  var absenPopup = document.getElementById("absenPopup");
  absenPopup.style.display = "block";
});

// Ambil elemen untuk menutup popup
var closePopup = document.querySelector(".close");

// Tambahkan event listener untuk menutup popup
closePopup.addEventListener("click", function () {
  var absenPopup = document.getElementById("absenPopup");
  absenPopup.style.display = "none";
});

// Jika pengguna mengklik di luar popup, tutup popup
window.addEventListener("click", function (event) {
  var absenPopup = document.getElementById("absenPopup");
  if (event.target == absenPopup) {
    absenPopup.style.display = "none";
  }
});
