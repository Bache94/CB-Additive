import './style.css';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Gallery } from './components/Gallery';
import { About } from './components/About';
import { Footer } from './components/Footer';
import { MouseGlow } from './components/MouseGlow';
import { TextDecode, TextStagger } from './components/TextAnimations';

const app = document.querySelector('#app');

/* Initialize Mouse Glow - Global Effect */
MouseGlow();

// Router Logic
const router = () => {
    const hash = window.location.hash;

    // Clear App (but keep MouseGlow canvas which is on body)
    app.innerHTML = '';

    // Always append Header
    app.appendChild(Header());

    if (hash === '#impressum') {
        import('./components/Impressum').then(module => {
            app.appendChild(module.Impressum());
            app.appendChild(Footer());
        });
    } else if (hash === '#datenschutz') {
        import('./components/Datenschutz').then(module => {
            app.appendChild(module.Datenschutz());
            app.appendChild(Footer());
        });
    } else if (hash === '#agb') {
        import('./components/AGB').then(module => {
            app.appendChild(module.AGB());
            app.appendChild(Footer());
        });
    } else {
        // Landing Page (Default)
        app.appendChild(Hero());
        app.appendChild(Gallery());
        app.appendChild(About());
        app.appendChild(Footer());

        // Re-run animations for landing page
        setTimeout(() => {
            document.querySelectorAll('h1, h2').forEach(el => new TextDecode(el));
            document.querySelectorAll('p, .nav-links a').forEach(el => new TextStagger(el));
        }, 100);
    }
};

// Initial Render
router();

// Listen for hash changes
window.addEventListener('hashchange', router);

