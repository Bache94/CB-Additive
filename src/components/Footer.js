export function Footer(isLegalPage = false) {
  const element = document.createElement('footer');
  element.id = 'contact';
  element.className = 'footer';

  // Content for Main Page vs Legal Page
  const mainContent = `
      <h3 class="footer-brand">CB <span>Additive</span></h3>
      
      <div class="footer-cta">
        <p class="cta-title">Du hast ein spezielles Modell im Kopf oder benötigst ein Ersatzteil?</p>
        <p class="cta-text">Schick mir einfach eine Nachricht mit einer kurzen Beschreibung (und falls vorhanden, einem Link zur Datei oder dem Modell). Ich melde mich zeitnah bei dir, um die Details und die Machbarkeit zu besprechen.</p>
      </div>

      <a href="mailto:cbadditive@outlook.de" class="btn btn-secondary footer-btn">Schreib mir</a>
  `;

  element.innerHTML = `
    <div class="container">
      ${!isLegalPage ? mainContent : ''}
      
      <!-- Hidden Admin Trigger -->
      <button id="admin-trigger" class="admin-trigger">M</button>
      
      <div class="footer-bottom">
        <div class="footer-links">
            <a href="#impressum">Impressum</a>
            <a href="#datenschutz">Datenschutzerklärung</a>
        </div>
        <div class="footer-copy">
            &copy; 2025 CB Additive 
            <span class="footer-note">Privates, hobbymäßiges Projekt · Kein Online-Shop</span>
            <span class="footer-credit">Made by Bache</span>
        </div>
      </div>
    </div>
  `;
  return element;
}
