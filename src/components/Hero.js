import './Hero.css';

export function Hero() {
  const element = document.createElement('section');
  element.id = 'hero';
  element.classList.add('hero');

  element.innerHTML = `
    <div class="container hero-content">
      <div class="hero-title-row">
        <img src="/logo.png" alt="CB Additive" class="hero-logo reveal-text">
        <h1 class="hero-title reveal-text">Mein Hobby <br><span class="gradient-text">Projekte</span></h1>
      </div>
      <p class="hero-subtitle reveal-text delay-200">Ich bringe digitale Entwürfe mit meinem 3D-Drucker in die physische Realität.</p>
      <div class="hero-actions reveal-text delay-300">
        <a href="#gallery" class="btn btn-primary">Meine Drucke</a>
        <a href="#contact" class="btn btn-secondary">Kontakt aufnehmen</a>
      </div>
    </div>
    <div class="hero-bg"></div> 
  `;
  return element;
}
