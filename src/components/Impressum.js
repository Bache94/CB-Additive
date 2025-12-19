export function Impressum() {
    const element = document.createElement('div');
    element.className = 'container';
    element.style.padding = '120px 20px 60px 20px';
    element.style.color = 'var(--text-main)';
    element.innerHTML = `
    <h1>Impressum</h1>
    <p>Angaben gemäß § 5 TMG</p>
    <br>
    <p>[Vorname] [Nachname]</p>
    <p>[Straße] [Hausnummer]</p>
    <p>[PLZ] [Ort]</p>
    <br>
    <h2>Kontakt</h2>
    <p>E-Mail: cbadditive@outlook.de</p>
    <br>
    <p style="color: var(--text-muted); font-size: 0.9rem;">(Bitte ergänze hier deine vollständigen Daten)</p>
    <br>
    <a href="/" class="btn btn-secondary" style="margin-top: 20px;">Zurück zur Startseite</a>
  `;
    return element;
}
