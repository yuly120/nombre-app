import miImagen from './assets/logotipo.png';
import miImagen1 from './assets/face.jpg';
import miImagen2 from './assets/igs.jpg';
import miImagen3 from './assets/linke.jpg';
import miImagen4 from './assets/tui.jpg';
import miImagen5 from './assets/watsp.jpg';
import miImagen6 from './assets/youtu.jpg';
import PropTypes from 'prop-types';

function Encabezado({ cambiarVista }) {
  return ( 
    <header className="encabezado">
      <Logotipo />
      <Menu cambiarVista={cambiarVista} />
      <Redes />
    </header>
  );
}

function Logotipo() {
  return (
    <div className="logo">
      <img src={miImagen} alt="Logotipo" />
    </div>
  );
}

function Menu({ cambiarVista }) {
  return (
    <nav className="menu">
      <ul>
        <li onClick={() => cambiarVista("inicio")}>Inicio</li>
        <li onClick={() => cambiarVista("AcercaDe")}>Acerca de</li>
        <li onClick={() => cambiarVista("Productos")}>Productos</li>
        <li onClick={() => cambiarVista("Galeria")}>Galería</li>
        <li onClick={() => cambiarVista("Contacto")}>Contacto</li>
      </ul>
    </nav>
  );
}

function Redes() {
  return (
    <div className="redes">
      <img src={miImagen1} alt="Facebook" />
      <img src={miImagen2} alt="Instagram" />
      <img src={miImagen3} alt="LinkedIn" />
      <img src={miImagen5} alt="WhatsApp" />
      <img src={miImagen6} alt="YouTube" />
      <img src={miImagen4} alt="Twitter" />
    </div>
  );
}

Menu.propTypes = {
  cambiarVista: PropTypes.func.isRequired
};

Encabezado.propTypes = {
  cambiarVista: PropTypes.func.isRequired
};

export default Encabezado;
