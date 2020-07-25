
const mymap = L.map('issMap');
// .setView([1, 1], 3)
const issIcon = L.icon({
    iconUrl: 'nasa_2.png',
    iconSize: [250, 62],
    iconAnchor: [25, 16],
});

const marker = L.marker([0, 0],{icon: issIcon}).addTo(mymap);

/* const attribution =
 '&copy; <a href=\"https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';

 const tileUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
 const tiles = L.tileLayer(tileUrl, {attribution});
 tiles.addTo(mymap); */

 L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: '© <a href="https://www.mapbox.com/about/maps/">Mapbox</a> © <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> <strong><a href="https://www.mapbox.com/map-feedback/" target="_blank">Improve this map</a></strong>',
    tileSize: 512,
    maxZoom: 18,
    zoomOffset: -1,
    id: 'mapbox/satellite-streets-v11',
    zoomOffset: -1,
    accessToken: API_KEY 
}).addTo(mymap);



const api_url = "https://api.wheretheiss.at/v1/satellites/25544"
async function getISS() {
    const response = await fetch(api_url);
    const data = await response.json();
    console.log(data);
    const { latitude, longitude } = data;

    marker.setLatLng([latitude, longitude]);
    document.getElementById("lat").textContent = latitude;
    document.getElementById("lon").textContent = longitude;

    mymap.setView([data['latitude'], data['longitude']],3, { animation:true})
    console.log(L.LatLng(data['latitude'], data['longitude']))
}

getISS();