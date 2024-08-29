// ========================= PROMPT NAME =======================================
function replaceName() {
  let name = prompt("Please enter you name", "");
  document.getElementById("username").innerHTML = name;
}
replaceName();

// ========================= BANNER AUTO SLIDE =======================================

var slideIndex = 1;
showSlides(slideIndex);

// Fungsi untuk menggeser ke slide berikutnya atau sebelumnya
function nextImage(n) {
  showSlides((slideIndex += n));
}

// Fungsi utama untuk menampilkan slide
function showSlides(n) {
  var i;
  var imgList = document.getElementsByClassName("banner-slide");

  // Jika melebihi jumlah slide, kembali ke slide pertama
  if (n > imgList.length) {
    slideIndex = 1;
  }

  // Jika kurang dari slide pertama, kembali ke slide terakhir
  if (n < 1) {
    slideIndex = imgList.length;
  }

  // Sembunyikan semua slide
  for (i = 0; i < imgList.length; i++) {
    imgList[i].style.display = "none";
  }

  // Tampilkan slide yang sesuai
  imgList[slideIndex - 1].style.display = "block";
}

// Menambahkan auto-slide setiap 3 detik
setInterval(function () {
  nextImage(1);
}, 3000);

// ========================= VALIDATION AND FORM VALUE =======================================
document
  .getElementById("message-form")
  .addEventListener("submit", function (event) {
    event.preventDefault(); //mencegah reload halaman

    // Form values
    const fullName = document.getElementById("full-name").value.trim();
    const birthDate = document.getElementById("birth-of-date").value;
    const gender = document.querySelector('input[name="gender"]:checked');
    const message = document.getElementById("message").value.trim();

    // Validation
    if (!fullName || !birthDate || !gender || !message) {
      alert("Please fill out all Fields");
      return;
    }

    // Display current time
    const currentTime = new Date().toString();

    document.getElementById("display-time").textContent = currentTime;

    // Show Value
    document.getElementById("display-full-name").textContent = fullName;
    document.getElementById("display-birth-of-date").textContent = birthDate;
    document.getElementById("display-gender").textContent = gender.value;
    document.getElementById("display-message-text").textContent = message;
  });
