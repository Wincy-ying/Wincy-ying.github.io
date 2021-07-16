

var mymap = L.map('mapid').setView([39.90567054204355, 116.39770679954374], 13);
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
       attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
       maxZoom: 18,
       id: 'mapbox/streets-v11',
       tileSize: 512,
       zoomOffset: -1
   }).addTo(mymap);

L.marker([39.90567054204355, 116.39770679954374]).addTo(mymap)
 .bindPopup("<a href='https://baike.baidu.com/item/%E5%A4%A9%E5%AE%89%E9%97%A8%E5%B9%BF%E5%9C%BA/117799?fr=aladdin'>天安门广场（点击查看详情）</a>").openPopup();

 L.marker([39.900788, 116.397537]).addTo(mymap)
  .bindPopup("BEERS89").openPopup();

mymap.on('click', onMapClick);
