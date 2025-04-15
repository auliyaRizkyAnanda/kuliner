document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

function toggleMenu() {
    const navbarMenu = document.getElementById("navbarMenu");
    navbarMenu.classList.toggle("active");
}

window.addEventListener('scroll', function() {
    let heroHeight = document.getElementById('hero').offsetHeight; // Mendapatkan tinggi header
    let currentScroll = window.pageYOffset; // Mendapatkan posisi scroll vertikal saat ini
    const navbar = document.querySelector('.navbar');

    if (currentScroll > heroHeight) { // Jika discroll melewati tinggi header
        navbar.classList.add('scrolled'); // Tambahkan class "scrolled"
    } else {
        navbar.classList.remove('scrolled'); // Hapus class "scrolled"
    }
});

// section geser menuva
const menuGrid = document.getElementById('menuGrid');
const prevMenuBtn = document.getElementById('prevMenuBtn');
const nextMenuBtn = document.getElementById('nextMenuBtn');

if(menuGrid && prevMenuBtn && nextMenuBtn){
let currentPosition = 0;
const itemWidth = menuGrid.querySelector('.menu-item').offsetWidth + 20; // Lebar item + margin
const totalItems = menuGrid.children.length;

nextMenuBtn.addEventListener('click', () => {
    currentPosition = Math.min(currentPosition + itemWidth, (totalItems - 1) * itemWidth); // Batasi ke item terakhir
    menuGrid.style.transform = `translateX(-${currentPosition}px)`;
});

prevMenuBtn.addEventListener('click', () => {
    currentPosition = Math.max(currentPosition - itemWidth, 0); // Batasi ke item pertama
    menuGrid.style.transform = `translateX(-${currentPosition}px)`;
});
}

// Fungsi untuk menampilkan modal
function tampilkanModal() {
    document.getElementById("myModal").style.display = "block";
  }
  
  // Fungsi untuk menutup modal
  function tutupModal() {
    document.getElementById("myModal").style.display = "none";
  }
  
  // Menutup modal jika di klik di luar modal
  window.onclick = function(event) {
    if (event.target == document.getElementById("myModal")) {
      tutupModal();
    }
  }
  

// JavaScript untuk rating bintang
const ratingBintang = document.querySelectorAll('.rating i');
const nilaiRating = document.getElementById('nilaiRating');

ratingBintang.forEach(bintang => {
  bintang.addEventListener('click', () => {
    const rating = parseInt(bintang.dataset.rating);
    nilaiRating.value = rating;

    ratingBintang.forEach(b => {
      if (parseInt(b.dataset.rating) <= rating) {
        b.classList.add('terpilih');
      } else {
        b.classList.remove('terpilih');
      }
    });
  });
});

// Menangani submit form (DIPERBAIKI)
const formPertanyaan = document.getElementById('formPertanyaan');
formPertanyaan.addEventListener('submit', function(event) {
  event.preventDefault();

  const nama = document.getElementById('nama').value;
  const email = document.getElementById('email').value;
  const pesan = document.getElementById('pesan').value;
  const rating = document.getElementById('nilaiRating').value;
  const emailError = document.getElementById('emailError'); // Ambil elemen pesan error email

  let valid = true; // Flag untuk menandai apakah form valid

  if (!nama) {
    alert("Nama wajib diisi.");
    valid = false;
  }
  if (!email) {
    alert("Email wajib diisi.");
    valid = false;
  }
  if (!pesan) {
    alert("Pesan wajib diisi.");
    valid = false;
  }
  if (rating == 0) {
    ratingError.textContent = "Bintang belum diisi.";
    valid = false;
  }

  if (!valid) {
    return; // Hentikan submit jika ada field yang tidak valid
  }

  console.log("Nama:", nama);
  console.log("Email:", email);
  console.log("Pesan:", pesan);
  console.log("Rating:", rating);

  Swal.fire({
    title: 'Terima Kasih!',
    text: 'Kami berterimakasih atas waktu dan masukan yang telah anda berikan kepada kami. Masukkan anda sangat berharga untuk peningkatan layanan kami.',
    icon: 'success',
    confirmButtonText: 'OK'
  });

  formPertanyaan.reset();
  ratingBintang.forEach(b => b.classList.remove('terpilih'));
  document.getElementById('nilaiRating').value = 0;
});

// Fungsi untuk memotong teks
function truncateText(text, maxLength) {
    if (text.length > maxLength) {
        return text.substring(0, maxLength) + "...";
   } else {
        return text;
    }
  }
  window.onload = function() {
  const elements = document.querySelectorAll('.truncate-js, .blog-meta2');
  elements.forEach(element => {
    const text = element.textContent;
    const maxLength = 100;
    element.textContent = truncateText(text, maxLength);
  });
  }

  const bintangElements = document.querySelectorAll('.bintang');

bintangElements.forEach(element => {
    const rating = parseInt(element.dataset.rating);
    for (let i = 1; i <= 5; i++) {
        const star = document.createElement('i');
        star.classList.add('fas', 'fa-star');
        if (i > rating) {
            star.classList.add('kosong'); // Tambahkan class 'kosong' jika bintang tidak terpilih
        }
        element.appendChild(star);
    }
});