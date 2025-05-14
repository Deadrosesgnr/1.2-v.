const map = L.map('map').setView([-33.618391, -70.587236], 16);


L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '© OpenStreetMap',
}).addTo(map);


const centralMarker = L.marker([-33.618419086073025, -70.58730507618398]).addTo(map);
centralMarker.bindPopup('Cuerpo de bomberos').openPopup();

// Coordenadas de la ruta (simulación)
const ruta = [
[-33.61835076730067, -70.58732028030764],
[-33.61813427415817, -70.58735783229729],
[-33.61819922215832, -70.58763513929733],
[-33.61815351801499, -70.58784023093243],
[-33.61836776999698, -70.58922318279681],
[-33.61853574449881, -70.59044618089216],
[-33.61707743520883, -70.59057812098273],
[-33.61574895375627, -70.59069806610698],
[-33.61438049656271, -70.59080601671941],
[-33.614420451825, -70.59279710579105],
[-33.61462023176764, -70.59469224061516],
[-33.61485996239863, -70.5966953241992],
[-33.61504974867382, -70.59813466569645],
[-33.61536938777348, -70.59892630352049],
[-33.61556916431864, -70.6002457001392],
[-33.61571899439127, -70.60150512394952],
[-33.615599130353814, -70.60257263555991],
[-33.61586882988271, -70.6049475521793],
[-33.61607858953178, -70.6069506393871],
[-33.61642342774528, -70.60959578011793],
[-33.616851514248026,-70.61317906090581],
[-33.61856383899863, -70.612967390311],
[-33.62006209578592, -70.6128313176334],
[-33.62123298379488, -70.61268012435119],
[-33.6215841430577, -70.61488813800746],
[-33.62210363640564, -70.6178089301385]
];

// Marcador móvil simulando el carro de bomberos
const bomberoMarker = L.marker(ruta[0]).addTo(map);
bomberoMarker.bindPopup('Carro de Bomberos').openPopup();

window.onload = () => {
  alert("🚨 Aviso de emergencia: Accidente en Sargento Menadier con Nueve de Agosto reportado. El carro de bomberos ha sido despachado.");
 //Alerta
  
  let index = 0;

  setInterval(() => {
   index = (index + 1) % ruta.length;
    const newPos = ruta[index];
    bomberoMarker.setLatLng(newPos);
   map.panTo(newPos);
    }, 3000);
};// Movimiento cada 3 segundos
