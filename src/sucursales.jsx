import Mapa from "./mapa";

const sucursales = [
  {
    ciudad: "Monterrey", nombre: "Sucursal Monterrey",lat: 25.6866,lng: -100.3161,
    descripcion: "Nuestra oficina principal en el norte del país."
  },
  {
    ciudad: "Ciudad de México",nombre: "Sucursal CDMX",lat: 19.4326,lng: -99.1332,
    descripcion: "Atención a clientes y soporte técnico especializado."
  },
  {
    ciudad: "Puebla",nombre: "Sucursal Puebla", lat: 19.0414,lng: -98.2063,
    descripcion: "Centro de desarrollo y diseño web."
  },
  {
    ciudad: "Mi casita",nombre: "En mi rancho ",lat: 20.257268,lng: -97.940666,
    descripcion: "Unicamente para ir a mimir :3"
  }
];

function Sucursales() {
  return (
    <section className="cards-full2">
      {sucursales.map((sucursal, index) => (
        <CardSucursal
          key={index}
          ciudad={sucursal.ciudad}
          nombre={sucursal.nombre}
          descripcion={sucursal.descripcion}
          lat={sucursal.lat}
          lng={sucursal.lng}
        />
      ))}
    </section>
  );
}


function CardSucursal({ ciudad, nombre, descripcion, lat, lng }) {
  return (
    <div className="card">
      <h3>{ciudad}</h3>

      <div className="mapa-card">
        <Mapa nombre={nombre} lat={lat} lng={lng} />
      </div>

      <p>{descripcion}</p>
    </div>
  );
}

export default Sucursales;
