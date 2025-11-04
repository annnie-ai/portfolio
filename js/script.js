// ===== PERSISTENT THEME TOGGLE WITH ICONS =====
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// Load saved theme
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'light') {
  body.classList.add('light-mode');
} 

// Toggle + Save + Animate Icons
themeToggle.addEventListener('click', () => {
  body.classList.toggle('light-mode');
  const isLight = body.classList.contains('light-mode');
  
  localStorage.setItem('theme', isLight ? 'light' : 'dark');
});

// TYPEWRITER
if (document.querySelector('.typewriter')) {
  const txt = "BSc Chemistry Student × Web Developer";
  let i = 0;
  setInterval(() => {
    if (i < txt.length) {
      document.querySelector('.typewriter').textContent += txt[i++];
    } else {
      i = 0;
      document.querySelector('.typewriter').textContent = '';
    }
  }, 100);
}

// SHOW MORE
document.getElementById('show-more')?.addEventListener('click', () => {
  document.querySelectorAll('.extra').forEach(el => {
    el.style.display = el.style.display === 'block' ? 'none' : 'block';
  });
});

// CONTACT FORM
document.getElementById('contact-form')?.addEventListener('submit', function(e) {
  e.preventDefault();
  const btn = this.querySelector('.btn-submit');
  const glow = btn.querySelector('.btn-glow');
  glow.style.width = '300px';
  glow.style.height = '300px';
  setTimeout(() => {
    alert('Message sent with quantum encryption!');
    this.reset();
    glow.style.width = '0';
    glow.style.height = '0';
  }, 600);
});