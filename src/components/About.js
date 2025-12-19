export function About() {
  const element = document.createElement('section');
  element.id = 'about';
  element.style.padding = 'var(--space-xl) 0';

  element.innerHTML = `
    <div class="container">
      <div class="glass" style="padding: var(--space-lg); border-radius: var(--radius-lg); text-align: center;">
        <h2 style="font-size: 2.5rem; margin-bottom: var(--space-md);" class="reveal-text">Über <span class="gradient-text">Mich</span></h2>
        <p class="about-text" style="max-width: 600px; margin: 0 auto; line-height: 1.6;">
        Ich bin ein leidenschaftlicher Hobby-Maker, der Spaß daran hat, Dinge selbst zu erschaffen. Vom ersten Layer bis zum fertigen Druck stecke ich viel Liebe zum Detail in jedes meiner Projekte.
      </p>
      <p style="max-width: 600px; margin: var(--space-sm) auto 0; font-size: 0.9rem; color: var(--text-muted); font-style: italic;">
        Da ich dieses Projekt als leidenschaftliches Hobby betreibe, bitte ich um Verständnis, dass die Lieferzeiten je nach Komplexität des Drucks variieren können. Qualität steht für mich an erster Stelle!
      </p>
        
        <div class="reveal-text delay-200" style="display: flex; justify-content: center; gap: var(--space-lg); flex-wrap: wrap;">
          <div class="stat">
            <h3 style="font-size: 3rem; color: var(--primary); line-height: 1;">1</h3>
            <p style="font-size: 0.9rem; text-transform: uppercase; letter-spacing: 1px;">Jahr</p>
          </div>
          <div class="stat">
            <h3 style="font-size: 3rem; color: var(--secondary); line-height: 1;">100+</h3>
            <p style="font-size: 0.9rem; text-transform: uppercase; letter-spacing: 1px;">Drucke</p>
          </div>
          <div class="stat">
            <h3 style="font-size: 3rem; color: #fff; line-height: 1;">100%</h3>
            <p style="font-size: 0.9rem; text-transform: uppercase; letter-spacing: 1px;">Hobby</p>
          </div>
        </div>
      </div>
    </div>
  `;
  return element;
}
