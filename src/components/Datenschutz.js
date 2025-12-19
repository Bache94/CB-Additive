export function Datenschutz() {
  const element = document.createElement('div');
  element.className = 'container';
  element.style.padding = '120px 20px 60px 20px';
  element.style.color = 'var(--text-main)';

  element.innerHTML = `
    <div class="legal-card">
        <h1 class="gradient-text legal-section" style="text-align: center; margin-bottom: var(--space-lg);">Datenschutzerklärung</h1>
        
        <div class="legal-section">
            <h2 style="color: var(--primary); border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 10px; margin-top: var(--space-lg);">1. Datenschutz auf einen Blick</h2>
            <h3 style="color: var(--text-muted); font-size: 1rem; margin-top: var(--space-md);">Allgemeine Hinweise</h3>
            <p>Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.</p>
            
            <h3 style="color: var(--text-muted); font-size: 1rem; margin-top: var(--space-md);">Datenerfassung auf dieser Website</h3>
            <p>Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Abschnitt „Hinweis zur verantwortlichen Stelle“ in dieser Datenschutzerklärung entnehmen.</p>
        </div>

        <div class="legal-section">
            <h2 style="color: var(--primary); border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 10px; margin-top: var(--space-lg);">2. Hosting</h2>
            <p>Diese Website wird extern gehostet.</p>
            
            <div style="background: rgba(255,255,255,0.03); padding: 15px; border-radius: 8px; margin: 15px 0;">
                <strong>Hosting-Anbieter:</strong><br>
                Vercel Inc.<br>
                440 N Barranca Ave #4133<br>
                Covina, CA 91723<br>
                USA
            </div>

            <p>Beim Besuch der Website erfasst Vercel automatisch sogenannte Server-Logfiles. Diese beinhalten z. B.:</p>
            <ul style="list-style: none; padding-left: 0; color: var(--text-muted);">
                <li>🔹 IP-Adresse</li>
                <li>🔹 Datum und Uhrzeit des Zugriffs</li>
                <li>🔹 Browsertyp und Betriebssystem</li>
                <li>🔹 Referrer-URL</li>
            </ul>
            <p style="font-size: 0.9rem; margin-top: 10px;">Die Verarbeitung erfolgt zur Sicherstellung eines störungsfreien Betriebs der Website und zur Verbesserung des Angebots. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO.</p>
            <p style="font-size: 0.9rem;">Vercel verwendet EU-Standardvertragsklauseln zur Gewährleistung eines angemessenen Datenschutzniveaus.</p>
        </div>

        <div class="legal-section">
            <h2 style="color: var(--primary); border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 10px; margin-top: var(--space-lg);">3. Allgemeine Hinweise und Pflichtinformationen</h2>
            
            <div class="alert-box">
                <strong style="color: #ff4d4d;">Verantwortliche Stelle:</strong><br>
                Christopher Bachmann<br>
                Hermannstr. 24<br>
                08064 Zwickau<br>
                Deutschland<br><br>
                E-Mail: cbadditive@outlook.de
            </div>
            <p>Verantwortliche Stelle ist die natürliche oder juristische Person, die allein oder gemeinsam mit anderen über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten entscheidet.</p>
        </div>

        <div class="legal-section">
            <h2 style="color: var(--primary); border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 10px; margin-top: var(--space-lg);">4. Kontakt per E-Mail</h2>
            <p>Wenn Sie uns per E-Mail kontaktieren, werden Ihre Angaben inklusive der übermittelten personenbezogenen Daten gespeichert, um Ihre Anfrage zu bearbeiten.</p>
            <p>Diese Daten werden nicht ohne Ihre Einwilligung weitergegeben. Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO (zur Durchführung vorvertraglicher Maßnahmen) oder Art. 6 Abs. 1 lit. f DSGVO.</p>
        </div>

        <div class="legal-section">
            <h2 style="color: var(--primary); border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 10px; margin-top: var(--space-lg);">5. Ihre Rechte</h2>
            <p>Sie haben jederzeit das Recht auf:</p>
            <ul style="color: var(--text-muted);">
                <li>Auskunft über Ihre gespeicherten personenbezogenen Daten</li>
                <li>Berichtigung oder Löschung</li>
                <li>Einschränkung der Verarbeitung</li>
                <li>Widerspruch gegen die Verarbeitung</li>
                <li>Datenübertragbarkeit</li>
            </ul>
            <p>Hierzu sowie zu weiteren Fragen zum Datenschutz können Sie sich jederzeit an die oben genannte verantwortliche Stelle wenden.</p>
        </div>

        <div class="legal-section">
            <h2 style="color: var(--primary); border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 10px; margin-top: var(--space-lg);">6. Beschwerderecht</h2>
            <p>Im Falle datenschutzrechtlicher Verstöße steht Ihnen ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.</p>
            <p>Zuständig ist:<br>
            <strong>Der Sächsische Datenschutz- und Transparenzbeauftragte</strong><br>
            <a href="https://www.saechsdsb.de" target="_blank" style="color: var(--primary); text-decoration: underline;">https://www.saechsdsb.de</a></p>
        </div>

        <div class="legal-section" style="text-align: center; margin-top: var(--space-xl);">
            <a href="/" class="btn btn-secondary">Zurück zur Startseite</a>
        </div>
    </div>
  `;
  return element;
}
