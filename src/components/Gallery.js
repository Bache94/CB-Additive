import './Gallery.css';

const items = [];

export function Gallery() {
  const element = document.createElement('section');
  element.id = 'gallery';
  element.classList.add('gallery');

  const cards = items.map(item => `
    <div class="gallery-card">
      <div class="card-image"></div>
      <div class="card-overlay">
        <span class="card-category">${item.category}</span>
        <h3 class="card-title">${item.title}</h3>
      </div>
    </div>
  `).join('');

  element.innerHTML = `
    <div class="container">
      <div class="gallery-header">
        <h2 class="gallery-title reveal-text">Neueste <span class="gradient-text">Drucke</span></h2>
        <p class="gallery-subtitle reveal-text delay-100">Ein Schaufenster für Präzision und Kreativität.</p>
      </div>

      <!-- Services Info Section -->
      <div class="glass" style="padding: var(--space-md); margin-bottom: var(--space-lg); border-radius: var(--radius-md); max-width: 800px; margin-left: auto; margin-right: auto;">
        <h3 style="margin-bottom: var(--space-sm); color: var(--primary);">Was ich für dich drucken kann</h3>
        <p style="margin-bottom: var(--space-sm); color: var(--text-muted);">Ob technisches Bauteil, individuelle Deko oder ein besonderes Geschenk – ich unterstütze dich gerne bei deinem Projekt.</p>
        
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: var(--space-sm); text-align: left;">
            <div>
                <strong style="color: var(--text-main);">Materialien:</strong>
                <p style="font-size: 0.9rem; color: var(--text-muted);">Bevorzugt PLA (Robust & Umweltfreundlich)</p>
            </div>
            <div>
                 <strong style="color: var(--text-main);">Max. Druckgröße:</strong>
                 <p style="font-size: 0.9rem; color: var(--text-muted);">300 x 300 x 300 mm</p>
            </div>
             <div>
                 <strong style="color: var(--text-main);">Farbauswahl:</strong>
                 <p style="font-size: 0.9rem; color: var(--text-muted);">Eine breite Palette an Standardfarben ist immer vorrätig.</p>
            </div>
        </div>

        <div style="margin-top: var(--space-md); padding-top: var(--space-md); border-top: 1px solid rgba(255,255,255,0.1); text-align: left;">
            <strong style="color: var(--primary); display: block; margin-bottom: var(--space-xs);">Wie geht es weiter?</strong>
            <p style="font-size: 0.9rem; color: var(--text-muted); margin-bottom: var(--space-sm);">
                Nach dem Absenden deiner Anfrage prüfe ich die Datei auf Machbarkeit und berechne die voraussichtliche Druckzeit sowie den Materialverbrauch. Du erhältst von mir zeitnah eine unverbindliche Rückmeldung und eine Einschätzung der Kosten.
            </p>
            
            <div style="background: rgba(255, 107, 107, 0.1); border-left: 3px solid #ff6b6b; padding: 10px; border-radius: 4px;">
                <p style="font-size: 0.85rem; color: #ffadad; margin: 0;">
                    <strong>Hinweis:</strong> Als Hobby-Maker biete ich keine Serienfertigung an, sondern konzentriere mich auf individuelle Einzelstücke und Prototypen.
                </p>
            </div>
        </div>
      </div>

      <div class="gallery-grid">
        ${cards}
      </div>
    </div>
    
    <!-- Lightbox Modal -->
    <div class="modal" id="gallery-modal">
      <div class="modal-content glass">
        <button class="modal-close">&times;</button>
        <div class="modal-image"></div>
        <h3 class="modal-title"></h3>
        <p class="modal-category" style="color: var(--primary); text-transform: uppercase; font-size: 0.8rem;"></p>
      </div>
    </div>
  `;

  // Modal Logic
  const modal = element.querySelector('#gallery-modal');
  const closeBtn = element.querySelector('.modal-close');
  const modalTitle = element.querySelector('.modal-title');
  const modalCategory = element.querySelector('.modal-category');
  const modalContent = element.querySelector('.modal-content');

  // Admin State (Module Scope Simulation)
  let isAdmin = false;

  // Render Admin Controls in Modal
  const renderModalAdminControls = () => {
    const existingControls = modalContent.querySelector('.admin-controls');
    if (existingControls) existingControls.remove();

    if (isAdmin) {
      const controls = document.createElement('div');
      controls.className = 'admin-controls';
      controls.style.marginTop = '1rem';
      controls.style.paddingTop = '1rem';
      controls.style.borderTop = '1px solid rgba(255,255,255,0.1)';
      controls.innerHTML = `
        <button id="add-project-image" class="btn btn-secondary" style="font-size: 0.8rem; padding: 0.5rem 1rem;">+ Bild hinzufügen</button>
        <div id="image-upload-area" style="display: none; margin-top: 10px;">
            <p style="font-size: 0.8rem; color: #aaa; margin-bottom: 5px;">Simulierter Upload:</p>
            <div style="width: 100px; height: 100px; background: #333; border: 1px dashed #666; display: flex; align-items: center; justify-content: center; cursor: pointer;" id="sim-upload-box">
                <span>Klick mich</span>
            </div>
        </div>
      `;
      modalContent.appendChild(controls);

      // Upload Logic
      const addBtn = controls.querySelector('#add-project-image');
      const uploadArea = controls.querySelector('#image-upload-area');
      const simUploadBox = controls.querySelector('#sim-upload-box');

      addBtn.addEventListener('click', () => {
        uploadArea.style.display = 'block';
      });

      simUploadBox.addEventListener('click', () => {
        // Simulierte Bild-Hinzufügung
        const newImg = document.createElement('div');
        newImg.className = 'modal-image';
        newImg.style.marginTop = '10px';
        newImg.style.background = `linear-gradient(${Math.random() * 360}deg, #BD00FF, #00F2FF)`; // Zufalls-Gradient als "neues Bild"

        // Füge es vor den Controls ein
        modalContent.insertBefore(newImg, controls);
        uploadArea.style.display = 'none';
        alert('Neues Bild zum Projekt hinzugefügt! (Temporär)');
      });
    }
  };

  // Close logic
  const closeModal = () => modal.classList.remove('active');
  closeBtn.addEventListener('click', closeModal);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  // Open logic
  const grid = element.querySelector('.gallery-grid');
  grid.addEventListener('click', (e) => {
    const card = e.target.closest('.gallery-card');
    if (card) {
      const title = card.querySelector('.card-title').textContent;
      const category = card.querySelector('.card-category').textContent;
      modalTitle.textContent = title;
      modalCategory.textContent = category;

      // Clean up previous extra images (for demo purposes we reset)
      const extraImages = modalContent.querySelectorAll('.modal-image:not(:first-of-type)');
      extraImages.forEach(img => img.remove());

      renderModalAdminControls();
      modal.classList.add('active');
    }
  });

  // Admin Login Modal (Reusable)
  const uploadModalHTML = `
    <div class="modal" id="admin-modal">
      <div class="modal-content glass" style="text-align: left;">
        <button class="modal-close admin-close">&times;</button>
        <h3 style="margin-bottom: var(--space-sm);">Admin Bereich</h3>
        
        <div id="login-form">
           <input type="password" id="admin-password" placeholder="Passwort" style="width: 100%; padding: 0.5rem; margin-bottom: 0.5rem; background: rgba(0,0,0,0.5); border: 1px solid #333; color: white; border-radius: 4px;">
           <button id="login-submit" class="btn btn-primary" style="width: 100%;">Login</button>
        </div>

        <div id="admin-dashboard" style="display: none;">
           <p style="color: var(--primary); margin-bottom: 1rem;">Eingeloggt als Admin</p>
           <h4 style="margin-bottom: 0.5rem;">Neues Projekt anlegen:</h4>
           <input type="text" id="new-title" placeholder="Titel" style="width: 100%; padding: 0.5rem; margin-bottom: 0.5rem; background: rgba(0,0,0,0.5); border: 1px solid #333; color: white; border-radius: 4px;">
           <input type="text" id="new-category" placeholder="Kategorie" style="width: 100%; padding: 0.5rem; margin-bottom: 0.5rem; background: rgba(0,0,0,0.5); border: 1px solid #333; color: white; border-radius: 4px;">
           <button id="add-item-btn" class="btn btn-primary" style="width: 100%;">Hinzufügen</button>
           <p style="font-size: 0.8rem; color: #aaa; margin-top: 20px;">Hinweis: Du kannst nun auch in der Galerie-Ansicht Bilder zu existierenden Projekten hinzufügen.</p>
        </div>
      </div>
    </div>
  `;
  element.insertAdjacentHTML('beforeend', uploadModalHTML);

  const adminModal = element.querySelector('#admin-modal');
  const adminCloseBtn = element.querySelector('.admin-close');
  const loginForm = element.querySelector('#login-form');
  const adminDashboard = element.querySelector('#admin-dashboard');
  const loginSubmit = element.querySelector('#login-submit');
  const addItemBtn = element.querySelector('#add-item-btn');

  // --- Admin Feature (Global Login) ---
  // Wait for Footer to be mounted
  setTimeout(() => {
    const adminLoginBtn = document.getElementById('admin-trigger');
    if (adminLoginBtn) {
      adminLoginBtn.addEventListener('click', () => {
        adminModal.classList.add('active');
        // Immer Login Form zeigen, außer schon eingeloggt
        if (isAdmin) {
          loginForm.style.display = 'none';
          adminDashboard.style.display = 'block';
        } else {
          loginForm.style.display = 'block';
          adminDashboard.style.display = 'none';
          element.querySelector('#admin-password').value = ''; // Reset Password field
        }
      });

      // Make it cursor pointer
      adminLoginBtn.style.cursor = 'pointer';
    }
  }, 500);

  // Close Admin Modal
  adminCloseBtn.addEventListener('click', () => {
    adminModal.classList.remove('active');
  });

  // Login Logic (Secure Hash)
  // Hash für 'Bachii1994!'
  const ADMIN_HASH = 'd577579f151b7f5d1adc46766926cc160637e1dd5399fd69a9e2dbcdc958a3ab';

  async function sha256(message) {
    const msgBuffer = new TextEncoder().encode(message);
    const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
  }

  loginSubmit.addEventListener('click', async () => {
    const password = element.querySelector('#admin-password').value;
    const inputHash = await sha256(password);

    if (inputHash === ADMIN_HASH) {
      isAdmin = true;
      loginForm.style.display = 'none';
      adminDashboard.style.display = 'block';
      alert('Login erfolgreich! Admin-Funktionen freigeschaltet.');
    } else {
      alert('Falsches Passwort!');
    }
  });

  // Add Item Logic
  addItemBtn.addEventListener('click', () => {
    const title = element.querySelector('#new-title').value;
    const category = element.querySelector('#new-category').value;

    if (title && category) {
      const newCard = document.createElement('div');
      newCard.className = 'gallery-card';
      newCard.innerHTML = `
        <div class="card-image"></div>
        <div class="card-overlay">
          <span class="card-category">${category}</span>
          <h3 class="card-title">${title}</h3>
        </div>
      `;
      grid.insertBefore(newCard, grid.firstChild);

      element.querySelector('#new-title').value = '';
      element.querySelector('#new-category').value = '';
      adminModal.classList.remove('active');
    }
  });

  return element;
}
