import './style.css';
import { SplashScreen } from '@capacitor/splash-screen';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Gallery } from './components/Gallery';
import { About } from './components/About';
import { Footer } from './components/Footer';
import './components/Footer.css';
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
            app.appendChild(Footer(true));
        });
    } else if (hash === '#datenschutz') {
        import('./components/Datenschutz').then(module => {
            app.appendChild(module.Datenschutz());
            app.appendChild(Footer(true));
        });
    } else if (hash === '#projects') {
        // Full Gallery View
        // Header already added globally
        app.appendChild(Gallery(true)); // showAll = true
        app.appendChild(Footer(true));
        // Text animation for new header
        setTimeout(() => {
            document.querySelectorAll('h2').forEach(el => new TextDecode(el));
        }, 100);
    } else {
        // Landing Page (Default)
        // Header already added globally
        app.appendChild(Hero());
        app.appendChild(Gallery(false)); // showAll = false
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

// Hide splash screen and loading animation
// Hide splash screen and loading animation
window.addEventListener('load', async () => {
    // 1. Hide native splash screen immediately so our HTML animation takes over
    await SplashScreen.hide();

    // 2. Wait for animation to finish (approx 2.5s)
    setTimeout(() => {
        const loader = document.getElementById('loading-screen');
        if (loader) {
            loader.style.opacity = '0';
            setTimeout(() => {
                loader.remove();
            }, 500);
        }
    }, 2500); // 2.5s duration for WOW effect
});

