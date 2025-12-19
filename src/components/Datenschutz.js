export function Datenschutz() {
    const element = document.createElement('div');
    element.className = 'container';
    element.style.padding = '120px 20px 60px 20px';
    element.style.color = 'var(--text-main)';
    element.innerHTML = `
    <h1>Datenschutzerklärung</h1>
    <br>
    <h2>1. Datenschutz auf einen Blick</h2>
    <p>Allgemeine Hinweise...</p>
    <br>
    <h2>2. Hosting</h2>
    <p>Wir hosten die Inhalte unserer Website bei...</p>
    <br>
    <h2>3. Allgemeine Hinweise und Pflichtinformationen</h2>
    <p>Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:</p>
    <p>[Dein Name]</p>
    <p>[Deine Adresse]</p>
    <br>
    <p style="color: var(--text-muted); font-size: 0.9rem;">(Bitte ergänze hier den vollständigen Datenschutztext)</p>
    <br>
    <a href="/" class="btn btn-secondary" style="margin-top: 20px;">Zurück zur Startseite</a>
  `;
    return element;
}
