export function Footer(isLegalPage = false) {
  const element = document.createElement('footer');
  element.id = 'contact';
  element.style.cssText = `
    padding: var(--space-lg) 0;
    background: #000;
    border-top: 1px solid rgba(255,255,255,0.05);
    text-align: center;
    color: var(--text-muted);
  `;

  // Content for Main Page vs Legal Page
  const mainContent = `
      <h3 style="font-size: 1.5rem; color: #fff; margin-bottom: var(--space-sm);">CB <span style="color: var(--primary);">Additive</span></h3>
      
      <div style="max-width: 600px; margin: 0 auto var(--space-md);">
        <p style="margin-bottom: var(--space-xs); font-weight: bold; color: var(--text-main);">Du hast ein spezielles Modell im Kopf oder benötigst ein Ersatzteil?</p>
        <p style="font-size: 0.95rem; color: var(--text-muted);">Schick mir einfach eine Nachricht mit einer kurzen Beschreibung (und falls vorhanden, einem Link zur Datei oder dem Modell). Ich melde mich zeitnah bei dir, um die Details und die Machbarkeit zu besprechen.</p>
      </div>

      <a href="mailto:cbadditive@outlook.de" class="btn btn-secondary" style="margin-bottom: var(--space-lg); display: inline-block;">Schreib mir</a>
  `;

  element.innerHTML = `
    <div class="container">
      ${!isLegalPage ? mainContent : ''}
      
      <!-- Hidden Admin Trigger -->
      <button id="admin-trigger" style="opacity: 0; cursor: default; border: none; background: none; width: 50px; height: 30px; display: block; margin: 0 auto;">M</button>
      
      <div style="margin-top: var(--space-md); border-top: 1px solid rgba(255,255,255,0.05); padding-top: var(--space-sm);">
        <div style="display: flex; justify-content: center; gap: var(--space-md); flex-wrap: wrap; font-size: 0.8rem; color: var(--text-muted); margin-bottom: var(--space-sm);">
            <a href="#impressum" style="text-decoration: none; color: inherit;">Impressum</a>
            <a href="#datenschutz" style="text-decoration: none; color: inherit;">Datenschutzerklärung</a>
        </div>
        <div style="font-size: 0.8rem; opacity: 0.5;">
            &copy; 2025 CB Additive <br> 
            <span style="font-size: 0.75rem;">Privates, hobbymäßiges Projekt · Kein Online-Shop</span>
        </div>
      </div>
    </div>
  `;
  return element;
}
