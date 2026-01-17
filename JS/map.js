//MAPA EN HOMEPAGE

console.log('main.js ejecutándose');

mapboxgl.accessToken = 'pk.eyJ1IjoibWlrZWFyZWxscyIsImEiOiJjbWthNHlxMTcwcTZ3M2hxNzVhNjdqdnhoIn0.Ssc9xLaCoBEAJ-9liowMAg';

const map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v12',
  center: [-102.2916, 21.8853],
  zoom: 11
});

map.on('error', (e) => {
  console.error('Mapbox error:', e.error);
});

map.on('load', () => {
  console.log('Mapa cargó correctamente');
});


// Geocoder (buscador)
  // 🔍 Barra de búsqueda
const geocoder = new MapboxGeocoder({
  accessToken: mapboxgl.accessToken,
  mapboxgl: mapboxgl,
  marker: false, // no poner marcador automático
  placeholder: 'Buscar dirección o zona'
});

  
