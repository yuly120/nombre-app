import Mapa from "./mapa";

function ContHorizo() {
  return (
    <div className="contenedor-horizontal">
      <h3>Más datos</h3>

      <p>
        Ofrecemos páginas web diseñadas para satisfacer las necesidades de nuestros clientes
        y generar confianza.
        Nos enfocamos en la calidad del diseño, la optimización del rendimiento y la adaptabilidad
        en distintos dispositivos.
      </p>

      <p>
        Brindamos asesoría personalizada durante todo el proceso de desarrollo,
        asegurando soluciones eficientes, funcionales y alineadas con los objetivos de cada proyecto.
      </p>

      <Mapa
        lat={20.257268}
        lng={-97.940666}
        nombre="Sucursal Principal"
      />

    </div>
  );
}

export default ContHorizo;
