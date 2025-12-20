import './Gallery.css';

// Initial Load from LocalStorage
let items = JSON.parse(localStorage.getItem('gallery_items')) || [];

export function Gallery(showAll = false) {
  const element = document.createElement('section');
  element.id = 'gallery';
  element.classList.add('gallery');

  // Check Admin Status (Session Storage for simple persist during refresh)
  let isAdmin = sessionStorage.getItem('isAdmin') === 'true';

  const renderCards = () => {
    if (items.length === 0) {
      return '<p style="text-align: center; color: var(--text-muted); padding: 2rem;">Noch keine Bilder vorhanden.</p>';
    }

    // Filter Logic: Show top 6 unless showAll is true
    let displayItems = items;
    if (!showAll && items.length > 6) {
      displayItems = items.slice(0, 6);
    }

    // Mapping with Contain for formatting
    return displayItems.map((item, index) => {
      // Correct index for delete button needs to be original index if we are slicing
      // But easier is to FIND the item in original array or use ID. 
      // For simplicity with slice(0,6), index 0-5 matches. 
      // But wait, if I delete item 5 on page 1, is it item 5 in real array? Yes.
      // What if I delete? We used helper before. 
      // Let's use `items.indexOf(item)` to be safe if we were filtering strangely, but slice is safe 0-index aligned.
      const realIndex = items.indexOf(item);

      return `
      <div class="gallery-card" data-index="${realIndex}">
        <div class="card-image" style="background-image: url('${item.image}'); background-size: contain; background-repeat: no-repeat; background-color: rgba(0,0,0,0.3); background-position: center;"></div>
        <div class="card-overlay">
          <p class="card-description" style="margin-bottom: 0.5rem; font-size: 0.9rem;">${item.description}</p>
          <h3 class="card-title">${item.title}</h3>
          ${isAdmin ? `<button class="delete-btn" data-index="${realIndex}" style="position: absolute; top: 10px; right: 10px; background: red; color: white; border: none; border-radius: 50%; width: 25px; height: 25px; cursor: pointer;">&times;</button>` : ''}
        </div>
      </div>
    `}).join('');
  };

  const titleText = showAll ? 'Alle <span class="gradient-text">Projekte</span>' : 'Neueste <span class="gradient-text">Drucke</span>';
  const subtitleText = showAll ? 'Mein gesamtes Portfolio auf einen Blick.' : 'Ein Schaufenster für Präzision und Kreativität.';

  element.innerHTML = `
    <div class="container">
      <div class="gallery-header">
        <h2 class="gallery-title reveal-text">${titleText}</h2>
        <p class="gallery-subtitle reveal-text delay-100">${subtitleText}</p>
      </div>

      <div class="gallery-grid">
        ${renderCards()}
      </div>

      ${!showAll && items.length > 6 ? `
        <div style="text-align: center; margin-top: var(--space-md); margin-bottom: var(--space-md);">
            <a href="#projects" class="btn btn-primary">Alle Projekte ansehen</a>
        </div>
      ` : ''}

      <!-- Services Info Section (Moved Below) -->
      <div class="glass" style="padding: var(--space-md); margin-top: var(--space-lg); margin-bottom: var(--space-lg); border-radius: var(--radius-md); max-width: 800px; margin-left: auto; margin-right: auto;">
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

  // --- Element Selectors ---
  const grid = element.querySelector('.gallery-grid');
  const modal = element.querySelector('#gallery-modal');
  const closeBtn = element.querySelector('.modal-close');
  const modalTitle = element.querySelector('.modal-title');
  const modalCategory = element.querySelector('.modal-category');
  const modalContent = element.querySelector('.modal-content');
  const modalImage = element.querySelector('.modal-image');

  // --- Admin Modal HTML ---
  const uploadModalHTML = `
    <div class="modal" id="admin-modal">
      <div class="modal-content glass" style="text-align: left; max-width: 400px;">
        <button class="modal-close admin-close">&times;</button>
        <h3 style="margin-bottom: var(--space-sm);">Admin Bereich</h3>
        
        <div id="login-form">
           <input type="password" id="admin-password" placeholder="Passwort" style="width: 100%; padding: 0.5rem; margin-bottom: 0.5rem; background: rgba(0,0,0,0.5); border: 1px solid #333; color: white; border-radius: 4px;">
           <button id="login-submit" class="btn btn-primary" style="width: 100%;">Login</button>
        </div>

        <div id="admin-dashboard" style="display: none;">
           <p style="color: var(--primary); margin-bottom: 1rem;">Eingeloggt als Admin</p>
           
           <h4 style="margin-bottom: 0.5rem;">Bild hochladen:</h4>
           <input type="text" id="new-title" placeholder="Titel" style="width: 100%; padding: 0.5rem; margin-bottom: 0.5rem; background: rgba(0,0,0,0.5); border: 1px solid #333; color: white; border-radius: 4px;">
           <textarea id="new-description" placeholder="Beschreibung (statt Kategorie)" style="width: 100%; padding: 0.5rem; margin-bottom: 0.5rem; background: rgba(0,0,0,0.5); border: 1px solid #333; color: white; border-radius: 4px; resize: vertical; min-height: 60px;"></textarea>
           
           <label style="display: block; margin-bottom: 0.5rem; font-size: 0.9rem; color: #aaa;">Bild auswählen:</label>
           <input type="file" id="new-image-file" accept="image/*" style="width: 100%; margin-bottom: 1rem; color: white;">

           <button id="add-item-btn" class="btn btn-primary" style="width: 100%;">Hochladen & Speichern</button>
           <button id="logout-btn" class="btn btn-secondary" style="width: 100%; margin-top: 10px; background: rgba(255, 255, 255, 0.1);">Logout</button>
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
  const logoutBtn = element.querySelector('#logout-btn');

  // --- Logic ---

  // Refresh Grid Helper
  const refreshGrid = () => {
    // Re-render whole component content or just grid?
    // Changing HTML completely is safer for button logic state
    // But we are inside function. 
    // Simplified: Just re-run renderCards and put in grid.
    // BUT we need to update the "See All" button too if count changes.
    // For now, grid update is enough for delete visual.
    grid.innerHTML = renderCards();
  };

  // Close logic
  const closeModal = () => modal.classList.remove('active');
  closeBtn.addEventListener('click', closeModal);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  // Open Image Modal & Delete Logic
  grid.addEventListener('click', (e) => {
    // Delete Handle
    if (e.target.classList.contains('delete-btn')) {
      e.stopPropagation(); // prevent modal open
      const index = e.target.getAttribute('data-index');
      if (confirm('Bist du sicher, dass du dieses Bild löschen möchtest?')) {
        items.splice(index, 1);
        localStorage.setItem('gallery_items', JSON.stringify(items));
        // Refresh entire page/route slightly complex here, 
        // simple grid refresh for now:
        refreshGrid();
        // If we drop below 6 items, the button "Alle Projekte" might need hiding if we are on landing.
        // But doing a full re-render of component is better.
        // Reloading page is simplest for user context.
        // window.location.reload(); 
        // Let's stick to refreshGrid, it's smoother.
      }
      return;
    }

    // Modal Open Handle
    const card = e.target.closest('.gallery-card');
    if (card) {
      const index = card.getAttribute('data-index');
      const item = items[index];

      modalTitle.textContent = item.title;
      modalCategory.textContent = item.description;

      // Reset Modal Image Style/Content
      modalImage.style.backgroundImage = `url('${item.image}')`;
      modalImage.style.backgroundSize = 'contain';
      modalImage.style.backgroundRepeat = 'no-repeat';
      modalImage.style.backgroundPosition = 'center';
      modalImage.style.height = '400px'; // Ensure height
      modalImage.innerHTML = ''; // Clear any internal divs

      modal.classList.add('active');
    }
  });

  // --- Admin Feature ---

  // Trigger from Footer
  setTimeout(() => {
    const adminLoginBtn = document.getElementById('admin-trigger');
    if (adminLoginBtn) {
      adminLoginBtn.addEventListener('click', () => {
        adminModal.classList.add('active');
        if (isAdmin) {
          loginForm.style.display = 'none';
          adminDashboard.style.display = 'block';
        } else {
          loginForm.style.display = 'block';
          adminDashboard.style.display = 'none';
          element.querySelector('#admin-password').value = '';
        }
      });
      adminLoginBtn.style.cursor = 'pointer';
    }
  }, 500);

  adminCloseBtn.addEventListener('click', () => adminModal.classList.remove('active'));

  // Login
  const ADMIN_HASH = 'd577579f151b7f5d1adc46766926cc160637e1dd5399fd69a9e2dbcdc958a3ab';
  async function sha256(message) {
    const msgBuffer = new TextEncoder().encode(message);
    const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer);
    return Array.from(new Uint8Array(hashBuffer)).map(b => b.toString(16).padStart(2, '0')).join('');
  }

  loginSubmit.addEventListener('click', async () => {
    const password = element.querySelector('#admin-password').value;
    const inputHash = await sha256(password);

    if (inputHash === ADMIN_HASH) {
      isAdmin = true;
      sessionStorage.setItem('isAdmin', 'true');
      loginForm.style.display = 'none';
      adminDashboard.style.display = 'block';
      refreshGrid(); // Update grid to show delete buttons
      alert('Login erfolgreich!');
    } else {
      alert('Falsches Passwort!');
    }
  });

  // Logout
  logoutBtn.addEventListener('click', () => {
    isAdmin = false;
    sessionStorage.removeItem('isAdmin');
    adminModal.classList.remove('active');
    refreshGrid(); // Remove delete buttons
    alert('Ausgeloggt.');
  });

  // Add Item Logic (with File Reader)
  addItemBtn.addEventListener('click', () => {
    const titleIn = element.querySelector('#new-title');
    const descIn = element.querySelector('#new-description');
    const fileIn = element.querySelector('#new-image-file');

    if (titleIn.value && descIn.value && fileIn.files[0]) {
      const file = fileIn.files[0];
      const reader = new FileReader();

      reader.onload = function (e) {
        const base64Image = e.target.result;

        const newItem = {
          title: titleIn.value,
          description: descIn.value,
          image: base64Image
        };

        items.unshift(newItem); // Add to beginning
        localStorage.setItem('gallery_items', JSON.stringify(items));
        // Refresh page to update everything properly
        window.location.reload();
      };

      reader.readAsDataURL(file);
    } else {
      alert('Bitte alle Felder ausfüllen und ein Bild wählen.');
    }
  });

  return element;
}
