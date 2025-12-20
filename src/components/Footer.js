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
      
      <!-- Social Media -->
      <div class="footer-social" style="margin-top: 2rem; margin-bottom: 2rem;">
        <a href="https://www.instagram.com/cb_additive/" target="_blank" rel="noopener noreferrer" style="display: inline-flex; align-items: center; gap: 8px; color: var(--text-main); text-decoration: none; font-size: 1.1rem; transition: color 0.3s ease;">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-instagram"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            <span>Instagram</span>
        </a>
      </div>
      
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
