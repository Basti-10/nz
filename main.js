/*
Skript für die Neuseelandreise
*/

let stop = {
    title: "Mount Cook",
    nr: 26,
    user: "Basti-10",
    zoom: 13,
    lat: -43.59,
    lng: 170.14,
};

// Karte initialisieren
let map = L.map('map').setView([stop.lat, stop.lng], stop.zoom);

// Hintergrund definieren
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

 // Marker zeichnen
let marker = L.marker([stop.lat, stop.lng]).addTo(map);

 // Popup definieren und öffnen
 marker.bindPopup(`
    <h2>${stop.title}</h2>
    <ul>
        <li>Geog. Breite ${stop.lat.toFixed(5)}°</li>
        <li>Geog. Länge ${stop.lng.toFixed(5)}°</li>
    </ul>
`).openPopup();

