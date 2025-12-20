# Changelog

Alle Änderungen am Projekt "CB Additive Portfolio".

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
