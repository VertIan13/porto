document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const htmlElement = document.documentElement; // Ambil elemen <html>

    // Fungsi untuk mengaktifkan/menonaktifkan Dark Mode
    function toggleTheme() {
        const currentTheme = htmlElement.getAttribute('data-theme');
        if (currentTheme === 'dark') {
            htmlElement.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light'); // Simpan pilihan pengguna
        } else {
            htmlElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark'); // Simpan pilihan pengguna
        }
    }

    // Cek preferensi yang tersimpan saat halaman dimuat
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) {
        htmlElement.setAttribute('data-theme', storedTheme);
    }

    // Tambahkan event listener pada tombol
    themeToggle.addEventListener('click', toggleTheme);
});

// Anda juga bisa menambahkan kode untuk Text Typing Animation di sini
// (Contoh: menggunakan library Typed.js atau JavaScript murni)

// toggle.js

// Pastikan kode ini berjalan setelah Typed.js dimuat
document.addEventListener('DOMContentLoaded', function () {
    var typed = new Typed('#typed-text', {
        // Teks yang akan dianimasikan (bisa lebih dari satu)
        strings: [
            'Journalist Student', 
            'Frontend Developer', 
            'Landscape Photoghrapher', 
            'Film Maker'
        ], 
        // Kecepatan mengetik (dalam ms)
        typeSpeed: 70, 
        // Kecepatan menghapus teks (dalam ms)
        backSpeed: 50, 
        // Jeda sebelum mulai mengetik lagi (dalam ms)
        backDelay: 1500, 
        // Mengulang animasi secara tak terbatas
        loop: true 
    });
});



// script.js (Gabungkan dengan kode theme toggle dan typed.js yang sudah ada)

document.addEventListener('DOMContentLoaded', () => {
    // ... (kode theme toggle & typed.js) ...

    // FUNGSI INI MENGISI DIAGRAM LINGKARAN (Professional Skills)
    const skillCircles = document.querySelectorAll('.circle-skill');
    
    skillCircles.forEach(circle => {
        const percent = circle.getAttribute('data-percent');
        const color = 'var(--accent-color)'; 
        
        const deg = (percent / 100) * 360; 

        const outerCircle = circle.querySelector('.outer-circle');
        // Menggunakan properti CSS inline untuk mengisi gradient
        outerCircle.style.background = `conic-gradient(${color} ${deg}deg, #333 ${deg}deg)`;
        
        // Opsional: Animasi pengisian
        outerCircle.style.transition = 'background 1.5s ease-out';
    });
});

        if (!storedTheme) {
            htmlElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
            icon.className = 'fa-solid fa-moon'; // Ikon bulan untuk menunjukkan bisa diubah ke Light
        } else {
            htmlElement.setAttribute('data-theme', storedTheme);
            updateIcon(storedTheme);
        }
    

    // Fungsi Pembantu: Mengubah ikon berdasarkan mode saat ini
    function updateIcon(currentTheme) {
        if (currentTheme === 'dark') {
            // Mode Gelap aktif, tampilkan ikon Bulan (untuk beralih ke Light)
            icon.className = 'fa-solid fa-moon';
        } else {
            // Mode Terang aktif, tampilkan ikon Matahari (untuk beralih ke Dark)
            icon.className = 'fa-solid fa-sun';
        }
    }
    
    // 2. Logika Toggle saat tombol diklik
    themeToggle.addEventListener('click'), () => {document.addEventListener('DOMContentLoaded')}, () => {
    // ... (Kode Typed.js dan Circle Skills yang sudah ada) ...

    const themeToggle = document.getElementById('theme-toggle');
    const htmlElement = document.documentElement; // Elemen <html>
    const icon = themeToggle.querySelector('i');
    }

    