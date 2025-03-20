var map = L.map('map').setView([-43.59, 170.14], 13);
        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        }).addTo(map);
        var marker = L.marker([-43.59, 170.14]).addTo(map);
        marker.bindPopup("<b>Mount Cook</b>").openPopup();

