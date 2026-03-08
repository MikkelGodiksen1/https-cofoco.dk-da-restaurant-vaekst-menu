// Force video autoplay
const video = document.getElementById('heroVideo');
if (video) {
  video.play().catch(() => {
    document.addEventListener('click', () => video.play(), { once: true });
    document.addEventListener('touchstart', () => video.play(), { once: true });
    document.addEventListener('scroll', () => video.play(), { once: true });
  });
}

// Menu tab switching
document.querySelectorAll('.menu-tab').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.menu-tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.menu-content').forEach(c => c.classList.remove('active'));

    tab.classList.add('active');
    document.getElementById(tab.dataset.tab).classList.add('active');
  });
});

// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
  navToggle.classList.toggle('active');
});

// Close mobile nav on link click
navLinks.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    navToggle.classList.remove('active');
  });
});

// Mobile dropdown toggle
document.querySelectorAll('.nav-dropdown > .dropdown-trigger').forEach(trigger => {
  trigger.addEventListener('click', (e) => {
    if (window.innerWidth <= 768) {
      e.preventDefault();
      trigger.parentElement.classList.toggle('open');
    }
  });
});

// Navbar scroll effect
let lastScroll = 0;
window.addEventListener('scroll', () => {
  const navbar = document.getElementById('navbar');
  const scrolled = window.scrollY > 80;
  navbar.classList.toggle('scrolled', scrolled);
});
