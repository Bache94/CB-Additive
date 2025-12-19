import './Header.css';

export function Header() {
  const element = document.createElement('header');
  element.classList.add('header', 'glass');

  element.innerHTML = `
    <div class="container header-content">
      <nav>
        <ul class="nav-links">
          <li><a href="#hero">Startseite</a></li>
          <li><a href="#gallery">Galerie</a></li>
          <li><a href="#about">Über mich</a></li>
        </ul>
      </nav>
    </div>
  `;
  return element;
}
