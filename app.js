const menuToggle = document.querySelector('.menu-toggle');
const siteNav = document.querySelector('.site-nav');

menuToggle?.addEventListener('click', () => {
  const open = siteNav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(open));
});

const closeMenu = ({ restoreFocus = false } = {}) => {
  siteNav?.classList.remove('open');
  menuToggle?.setAttribute('aria-expanded', 'false');
  if (restoreFocus) menuToggle?.focus();
};

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && siteNav?.classList.contains('open')) {
    closeMenu({ restoreFocus: true });
  }
});

siteNav?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    closeMenu();
  });
});
