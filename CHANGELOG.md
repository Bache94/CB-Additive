# Changelog

Alle Änderungen am Projekt "CB Additive Portfolio".

## [Unreleased] - 2025-12-20

### Hinzugefügt
- **Speicher-Upgrade:** Migration von LocalStorage zu IndexedDB für Bilder-Uploads, um das Speicherlimit zu aufzuheben.
- **Performance:** Automatische Bildkomprimierung beim Upload (max. 600px) für optimierte Ladezeiten.
- **Navigation:** "Zurück zur Startseite"-Button in der "Alle Projekte"-Ansicht ergänzt.

### Geändert
- **Design & Layout:**
  - Logo vom Header in die Hero-Sektion verschoben.
  - Umfassende Mobile- & Tablet-Optimierung aller Komponenten.
  - Globale Anpassung dunkler Textfarben auf Weiß für besseren Kontrast.
- **Galerie-Logik:**
  - "Alle Projekte ansehen" Button-Logik korrigiert (sichtbar ab 6 Bildern).
  - "Was ich für dich drucken kann"-Box wird in der Vollansicht nun ausgeblendet.
- **Admin:** Sichtbarkeit der Upload-Buttons auf eingeloggte Administratoren beschränkt.

## [Unreleased] - 2025-12-19

### Hinzugefügt
- **Rechtliche Seiten:** Impressum und Datenschutzerklärung als eigenständige Komponenten implementiert.
- **Routing:** Hash-basiertes Routing (`#impressum`, `#datenschutz`) in `main.js` für schnelle Navigation ohne Page-Reload.
- **Admin-Feature (Hidden):** Versteckter Login-Button im Footer ("M"), der das Admin-Panel öffnet.
- **Galerie-Info:** Neue Info-Box "Was ich für dich drucken kann" mit Details zu Materialien, Größe (300mm) und Farbauswahl.
- **Animationen:** "Atmende" Texteffekte (`breathing-text`) und Glassmorphism-Design für Rechts-Seiten.
- **Sicherheit:** GitHub Repository Initialisierung.
- **Galerie-Admin:** Upload-Funktion für eigene Bilder (Drag & Drop / File Input) und Lösch-Funktion integriert.
- **Persistent:** Bilder werden lokal gespeichert (LocalStorage).
- **Layout:** "Was ich für dich drucken kann" unter die Galerie verschoben.

### Geändert
- **Footer:**
  - Copyright-Text aktualisiert.
  - Links führen nun zu den internen Rechts-Seiten statt `#`.
  - Smart-Logic: Auf Rechts-Seiten werden Logo und "Schreib mir"-Button ausgeblendet.
- **Inhalt:**
  - "Über Mich": Hinweis auf Hobby-Tätigkeit und Qualitätspriorität hinzugefügt.
  - "Galerie": Hinweis "Keine Serienfertigung" (Rot/Alert-Box) ergänzt.
  - Kontakt-Text professionalisiert.
- **Design:** Impressum und Datenschutz visuell stark aufgewertet (Icons, Alerts, Animationen).

### Entfernt
- **AGB:** Seite und Link entfernt, da für ein reines Hobby-Projekt nicht zwingend erforderlich (Hinweis auf individuelle Absprache genügt).
- **Platzhalter:** Alte "Lorem Ipsum"-Texte durch finale Inhalte ersetzt.
