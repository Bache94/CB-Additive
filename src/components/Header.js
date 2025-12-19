import './Header.css';

export function Header() {
  const element = document.createElement('header');
  element.classList.add('header', 'glass');

  element.innerHTML = `
    <div class="container header-content">
      <nav>
        <button class="menu-toggle" aria-label="Menu">
            <span></span>
            <span></span>
            <span></span>
        </button>
        <ul class="nav-links">
          <li><a href="#hero">Startseite</a></li>
          <li><a href="#gallery">Galerie</a></li>
          <li><a href="#about">Über mich</a></li>
        </ul>
      </nav>
    </div>
  `;

  // Menu Toggle Logic
  const toggleBtn = element.querySelector('.menu-toggle');
  const navLinks = element.querySelector('.nav-links');
  const links = element.querySelectorAll('.nav-links a');

  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      toggleBtn.classList.toggle('active');
      navLinks.classList.toggle('active');
    });
  }

  // Close menu when a link is clicked
  links.forEach(link => {
    link.addEventListener('click', () => {
      if (toggleBtn) toggleBtn.classList.remove('active');
      if (navLinks) navLinks.classList.remove('active');
    });
  });

  return element;
}
