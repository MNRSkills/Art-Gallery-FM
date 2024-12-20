let map = L.map('map').setView([41.490578, -71.310196], 14);
let LeafIcon = L.Icon.extend({
    options: {
        shadowUrl: 'leaf-shadow.png',
        // iconSize:     [38, 95],
        // shadowSize:   [50, 64],
        iconAnchor:   [22, 94],
        shadowAnchor: [4, 62],
        popupAnchor:  [-3, -76]
    }
});
let artGalleryMarker = new LeafIcon({ iconUrl: './assets/icon-pointer.png' });

L.marker([41.490578, -71.310196], {icon: artGalleryMarker}).addTo(map).bindPopup("I am a pointer.");
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

function ourLocation() {
    console.log("THIS IS OURLOCATION")
}

