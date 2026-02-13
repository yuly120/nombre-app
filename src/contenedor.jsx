import miImagen7 from './assets/cardss.png';
import PropTypes from 'prop-types';

function ContenedorCards({ vista }) {
  const vistas = {
    inicio: <Inicio />,
    AcercaDe: <AcercaDe />,
    Productos: <Productos />,
    Galeria: <Galeria />,
    Contacto: <Contacto />
  };

  return (
    <div className="contenedor-principal">
      {vistas[vista] || <Inicio />}
    </div>
  );
}

function Inicio() {
  return (
    <section className="cards-full">
      <Targeta nombre="card 1 " descripcion="Un niño normal el más común e inicial" />
      <Targeta nombre="card 2" descripcion="Un niño normal un poco menos común" />
      <Targeta nombre="card 3" descripcion="Un niño normal casi imposible de ver" />
      <Targeta nombre="card 4" descripcion="Dicen que quien lo ve nunca existió" />
    </section>
  );
}

function AcercaDe() {
  return (
    <section className="seccion">
      <h2>Acerca de nosotros</h2>
      <p>
        Nos dedicamos a la creación de soluciones digitales innovadoras,
        enfocadas en el desarrollo web eficiente y personalizado.
        Nuestro objetivo es ofrecer plataformas funcionales,
        atractivas y alineadas con los requerimientos de cada proyecto.
      </p>
      <p>
        Implementamos tecnologías actuales que permiten 
        construir sitios y aplicaciones con alto desempeño, 
        estabilidad y una experiencia de navegación intuitiva.
      </p>
      <ul>
        <li>Desarrollo y diseño de sitios web</li>
        <li>Creación de aplicaciones web interactivas</li>
        <li>Mejora y optimización de plataformas digitales</li>
        <li>Asistencia y mantenimiento técnico</li>
      </ul>
    </section>
  );
}

function Productos() {
  return (
    <section className="seccion">
      <h2>Nuestros productos</h2>

      <div className="productos">
        <div className="producto">
          <h3>Páginas corporativas</h3>
          <p>
            Sitios profesionales diseñados para fortalecer la presencia digital 
            de empresas y emprendedores, con diseño moderno y navegación intuitiva.
          </p>
        </div>

        <div className="producto">
          <h3>Plataformas de comercio electrónico</h3>
          <p>
            Soluciones completas para la venta en línea, integrando catálogos, 
            gestión de productos y sistemas de contacto eficientes.
          </p>
        </div>

        <div className="producto">
          <h3>Sistemas web personalizados</h3>
          <p>
            Desarrollo de aplicaciones a medida que optimizan procesos, 
            automatizan tareas y se adaptan a los objetivos específicos de cada cliente.
          </p>
        </div>
      </div>
    </section>
  );
}


function Galeria() {
  return (
    <section className="seccion">
      <h2>Nuestra galería</h2>
      <p>Presentamos una selección de proyectos desarrollados, en los cuales 
        se refleja nuestro compromiso con la calidad, el diseño moderno y 
        la funcionalidad en cada solución digital.</p>

      <div className="galeria">
        <div className="galeria-item proyecto1"></div>
        <div className="galeria-item proyecto2"></div>
        <div className="galeria-item proyecto3"></div>
        <div className="galeria-item proyecto4"></div>
      </div>
    </section>
  );
}
function Contacto() {
  return (
    <section className="seccion">
      <h2>Contacto</h2>
      <p>
        Para mayor información sobre nuestros servicios, cotizaciones o soporte técnico,
        puedes comunicarte con nosotros a través de las siguientes áreas:
      </p>

      <table className="tabla-contacto">
        <thead>
          <tr>
            <th>Área</th>
            <th>Responsable</th>
            <th>Correo electrónico</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Soporte Técnico</td>
            <td>Roberto Mendoza Santiago</td>
            <td>soporte@pagina.com</td>
          </tr>
          <tr>
            <td>Ventas y Cotizaciones</td>
            <td>Jesus Martinez Cruz</td>
            <td>ventas@pagina.com</td>
          </tr>
          <tr>
            <td>Administración</td>
            <td>Anahi Lopez Herrera</td>
            <td>admin@pagina.com</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}


function Targeta({ nombre, descripcion }) {
  return (
    <div className="card">
      <img src={miImagen7} alt="card" />
      <h3>{nombre}</h3>
      <p>{descripcion}</p>
      <a href="#">Leer más</a>
    </div>
  );
}

Targeta.propTypes = {
  nombre: PropTypes.string.isRequired,
  descripcion: PropTypes.string.isRequired
};

ContenedorCards.propTypes = {
  vista: PropTypes.string.isRequired
};

export default ContenedorCards;
