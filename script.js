// Year stamp
document.getElementById('year').textContent = new Date().getFullYear();

// Reveal sections on scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

document.querySelectorAll('.section').forEach((s) => observer.observe(s));

// Smooth nav highlight on scroll
const navLinks = document.querySelectorAll('.nav-links a');
const sections = document.querySelectorAll('.section, .hero');
window.addEventListener('scroll', () => {
  const scrollY = window.scrollY + 100;
  sections.forEach((sec) => {
    const top = sec.offsetTop;
    const height = sec.offsetHeight;
    const id = sec.getAttribute('id');
    if (scrollY >= top && scrollY < top + height) {
      navLinks.forEach((l) => l.style.color = '');
      const active = document.querySelector(`.nav-links a[href="#${id}"]`);
      if (active) active.style.color = '#fff';
    }
  });
});
