
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');

// Menu navigasi untuk perangkat mobile
if (menuToggle && navMenu) {
  menuToggle.addEventListener('click', () => {
    const isOpen = navMenu.classList.toggle('open');

    menuToggle.setAttribute('aria-expanded', String(isOpen));
    menuToggle.setAttribute(
      'aria-label',
      isOpen ? 'Tutup menu' : 'Buka menu'
    );
    menuToggle.textContent = isOpen ? '✕' : '☰';
  });

  // Tutup menu setelah tautan diklik
  navMenu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('open');
      menuToggle.setAttribute('aria-expanded', 'false');
      menuToggle.setAttribute('aria-label', 'Buka menu');
      menuToggle.textContent = '☰';
    });
  });

  // Kembalikan menu ke kondisi normal saat layar membesar
  window.addEventListener('resize', () => {
    if (window.innerWidth > 600) {
      navMenu.classList.remove('open');
      menuToggle.setAttribute('aria-expanded', 'false');
      menuToggle.setAttribute('aria-label', 'Buka menu');
      menuToggle.textContent = '☰';
    }
  });
}

// Tahun copyright otomatis
const yearElement = document.querySelector('#year');

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}
function pilihAroma(nama) {
    alert(
        "TEDUH HARA\n\n" +
        "Kamu memilih aroma: " + nama +
        "\nTerima kasih telah memilih koleksi kami!"
    );
}