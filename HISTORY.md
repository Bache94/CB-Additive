# Projekt Verlauf - CB Additive Portfolio

## Session: 20. Dezember 2025

### Erreichte Meilensteine:
- [x] **Header Navigation:** Links "Meine Drucke" und "Kontakt Aufnahme" zentriert und "Startseite" wiederhergestellt.
- [x] **Hero Section:** Titel auf "Meine Hobby Projekte" geändert und perfekt zentriert.
- [x] **Gallery Features:**
    - Bild-Titel über Beschreibung verschoben.
    - **Zoom-Feature:** Klick auf ein Bild im Modal öffnet es im Vollbildmodus (Overlay).
    - **Daten-Persistenz:** Migration von rein lokalem Speicher zu einer hybriden Lösung. 12 feste Projekte (Axolotl, Alien, etc.) sind nun fest im Code integriert (`src/data/portfolio.js`), damit sie auf allen Geräten (Desktop & Mobile) sichtbar sind.
- [x] **Mobile Optimierung:**
    - `theme-color` für dunkle Browser-Leisten hinzugefügt.
    - Layout auf dynamische Höhe (`100dvh`) angepasst, damit keine Adressleisten Inhalte verdecken.
- [x] **Bugfixes:** "Obstspüler" Dateiname korrigiert (Umlaut-Problem), damit das Bild überall lädt.

### Nächste Schritte:
- Weitere eigene Bilder in `src/data/portfolio.js` eintragen oder über das Admin-Panel (nur lokal) testen.

*Dieser Verlauf wurde gespeichert, um beim nächsten Start direkt weiterarbeiten zu können.*

## Session: 21. Dezember 2025 - iOS App & Polish

### Highlights:
- [x] **Native iOS App:** Projekt mit **Capacitor** eingerichtet und erfolgreich auf iOS gebracht.
- [x] **Rebranding:** App-Name final auf **CBadditive** festgelegt (Konfiguration, Splash Screen, Homescreen).
- [x] **"WOW"-Startanimation (Intro):**
    - Logo vergrößert (30vmin) und statisch (kein Wackeln/Zoomen) für cleanen Look.
    - Cineastischer Text-Reveal für "CBadditive" mit Blur-In, Letter-Spacing und lebendigem Gradient (Cyan/Lila).
    - Timing fixiert auf min. 2.5 Sekunden Anzeigedauer.
- [x] **Bugfixes & UX:**
    - **Mobile Menu:** Weiße Linien (toter Menü-Button) im Header entfernt.
    - **Galerie:** Event-Handling für Zoom/Modal auf Touch-Geräten massiv verbessert (Overlay-Klicks gefixt).
    - **App Icon:** Icon korrekt generiert (1024px single size).

### Status:
Die App ist nun build-bereit für iOS (`npx cap open ios`) und der Code ist sauber auf GitHub gepusht.
