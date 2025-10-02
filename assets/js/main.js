
document.addEventListener('DOMContentLoaded', () => {
  const burger = document.getElementById('burger');
  const menu = document.getElementById('navmenu');
  if (burger && menu) {
    burger.addEventListener('click', () => {
      const isOpen = menu.classList.toggle('show');
      burger.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
  }
});
