/*
Skript für die Neuseelandreise
*/

// Karte initialisieren
let map = L.map('map').setView([-43.59, 170.14], 13);

        // Hintergrund definieren
        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        }).addTo(map);

        // Marker zeichnen
        let marker = L.marker([-43.59, 170.14]).addTo(map);

        // Popup definieren und öffnen
        marker.bindPopup("<b>Mount Cook</b>").openPopup();

