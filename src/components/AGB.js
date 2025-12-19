export function AGB() {
    const element = document.createElement('div');
    element.className = 'container';
    element.style.padding = '120px 20px 60px 20px';
    element.style.color = 'var(--text-main)';
    element.innerHTML = `
    <h1>Widerrufsbelehrung & AGB</h1>
    <br>
    <h2>Allgemeine Geschäftsbedingungen</h2>
    <p>§ 1 Geltungsbereich...</p>
    <br>
    <h2>Widerrufsbelehrung</h2>
    <p>Verbraucher haben ein vierzehntägiges Widerrufsrecht.</p>
    <br>
    <p style="color: var(--text-muted); font-size: 0.9rem;">(Bitte ergänze hier deine AGB und Widerrufsbelehrung)</p>
    <br>
    <a href="/" class="btn btn-secondary" style="margin-top: 20px;">Zurück zur Startseite</a>
  `;
    return element;
}
