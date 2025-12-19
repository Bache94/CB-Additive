export function Impressum() {
  const element = document.createElement('div');
  element.className = 'container';
  element.style.padding = '120px 20px 60px 20px';
  element.style.color = 'var(--text-main)';

  element.innerHTML = `
    <div class="legal-card">
        <h1 class="gradient-text legal-section" style="text-align: center; margin-bottom: var(--space-lg);">Impressum</h1>
        
        <div class="legal-section" style="margin-bottom: var(--space-lg);">
            <h2 style="color: var(--primary); font-size: 1.2rem; margin-bottom: var(--space-sm);">Angaben gemäß § 5 TMG</h2>
            <p style="font-size: 1.1rem; line-height: 1.6;">
                Christopher Bachmann<br>
                Hermannstr. 24<br>
                08064 Zwickau<br>
                Deutschland
            </p>
        </div>

        <div class="legal-section" style="margin-bottom: var(--space-lg);">
            <h2 style="color: var(--primary); font-size: 1.2rem; margin-bottom: var(--space-sm);">Kontakt</h2>
            <p style="font-size: 1.1rem;">E-Mail: <a href="mailto:cbadditive@outlook.de" style="color: #fff; text-decoration: underline;">cbadditive@outlook.de</a></p>
        </div>

        <div class="alert-box legal-section">
            <strong style="color: #ff4d4d; display: block; margin-bottom: 5px; text-transform: uppercase; letter-spacing: 1px;">Wichtiger Hinweis</strong>
            <p style="margin: 0; color: #ffcccc;">
                Diese Website ist ein <strong>privates, hobbymäßiges Projekt</strong>.<br>
                Ein Verkauf erfolgt ausschließlich auf individuelle Anfrage und nicht im Rahmen eines dauerhaft betriebenen Online-Shops.
            </p>
        </div>

        <div class="legal-section" style="text-align: center; margin-top: var(--space-xl);">
            <a href="/" class="btn btn-secondary">Zurück zur Startseite</a>
        </div>
    </div>
  `;
  return element;
}
