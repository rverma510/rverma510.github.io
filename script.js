// Footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Fade sections in as they scroll into view
const items = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    }
  }, { threshold: 0.12 });
  items.forEach((el) => observer.observe(el));
} else {
  items.forEach((el) => el.classList.add('visible'));
}
