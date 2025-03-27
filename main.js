/*
Skript für die Neuseelandreise
*/

let lng = 170.14;
let zoom = 13;
let lat = -43.59;

// Karte initialisieren
let map = L.map('map').setView([lat, lng], zoom);

// Hintergrund definieren
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

 // Marker zeichnen
let marker = L.marker([lat, lng]).addTo(map);

 // Popup definieren und öffnen
 marker.bindPopup(`
    <h2>Mount Cook</h2>
    <ul>
        <li>Geog. Breite ${lat.toFixed(5)}°</li>
        <li>Geog. Länge ${lng.toFixed(5)}°</li>
    </ul>
`).openPopup();

