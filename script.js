// =============================================
//  VEERESH KAMBHALAMATAM — Portfolio Script
// =============================================

// Custom cursor
const cursor = document.getElementById('cursor');
document.addEventListener('mousemove', e => {
  cursor.style.left = e.clientX + 'px';
  cursor.style.top = e.clientY + 'px';
});
document.addEventListener('mousedown', () => {
  cursor.style.width = '18px';
  cursor.style.height = '18px';
  cursor.style.opacity = '0.7';
});
document.addEventListener('mouseup', () => {
  cursor.style.width = '10px';
  cursor.style.height = '10px';
  cursor.style.opacity = '1';
});

// Navbar scroll effect
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 40);
});

// Mobile menu toggle
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
navToggle?.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});
document.querySelectorAll('#navLinks a').forEach(a => {
  a.addEventListener('click', () => navLinks.classList.remove('open'));
});

// Typed.js — data-focused strings
new Typed('#typed', {
  strings: [
    'Python Developer',
    'Data Analyst',
    'SQL Enthusiast',
    'Power BI Builder',
    'ML Practitioner'
  ],
  typeSpeed: 50,
  backSpeed: 28,
  backDelay: 1200,
  loop: true
});

// Scroll-reveal for sections
const reveals = document.querySelectorAll('.section, .project-card, .cert-card, .skill-group, .edu-card, .exp-card');
reveals.forEach(el => el.classList.add('reveal'));

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.classList.add('visible');
      }, 80);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

reveals.forEach(el => observer.observe(el));

// Demo contact button
document.getElementById('fakeSendBtn')?.addEventListener('click', () => {
  const btn = document.getElementById('fakeSendBtn');
  btn.innerHTML = '<i class="fa-solid fa-check"></i> Message Sent!';
  btn.style.background = '#22c55e';
  setTimeout(() => {
    btn.innerHTML = '<i class="fa-solid fa-paper-plane"></i> Send Message';
    btn.style.background = '';
  }, 3000);
});
