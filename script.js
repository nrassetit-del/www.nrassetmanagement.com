document.getElementById('year').textContent = new Date().getFullYear();

// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const mobileDrawer = document.getElementById('mobileDrawer');

navToggle.addEventListener('click', () => {
  const isOpen = mobileDrawer.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
});

mobileDrawer.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    mobileDrawer.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

// Scroll progress rail
const progressFill = document.getElementById('progressFill');
function updateProgress() {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
  progressFill.style.width = pct + '%';
}
window.addEventListener('scroll', updateProgress, { passive: true });
updateProgress();
