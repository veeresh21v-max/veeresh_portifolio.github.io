// Mobile menu
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

navToggle?.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

// Close menu after clicking a link (mobile)
document.querySelectorAll('#navLinks a').forEach(a => {
  a.addEventListener('click', () => navLinks.classList.remove('open'));
});

// Typed.js effect
new Typed('#typed', {
  strings: [
    'machine learning solutions.',
    'data-driven dashboards.',
    'automation tools with Python.',
    'Django-powered ML apps.'
  ],
  typeSpeed: 45,
  backSpeed: 25,
  backDelay: 1100,
  loop: true
});

// Demo contact button
document.getElementById('fakeSendBtn')?.addEventListener('click', () => {
  alert('Message demo sent. Add EmailJS later to receive real emails.');
});
