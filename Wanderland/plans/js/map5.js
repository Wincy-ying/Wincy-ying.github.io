

var mymap = L.map('mapid').setView([39.916702, 116.400582], 13);
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
       attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
       maxZoom: 11,
       id: 'mapbox/streets-v11',
       tileSize: 512,
       zoomOffset: -1
   }).addTo(mymap);

L.marker([39.931001, 116.411699]).addTo(mymap)
 .bindPopup("北大红楼").openPopup();

 L.marker([39.916702, 116.400582]).addTo(mymap)
 .bindPopup("来今雨轩").openPopup();

 L.marker([39.88066, 116.388442]).addTo(mymap)
 .bindPopup("陶然亭公园").openPopup();

 L.marker([39.923652, 116.410434]).addTo(mymap)
 .bindPopup("陈独秀故居").openPopup();

mymap.on('click', onMapClick);
