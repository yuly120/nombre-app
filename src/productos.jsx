import miImagenn1 from './assets/venta.png';
import miImagenn2 from './assets/venta2.png';
import miImagenn3 from './assets/venta3.png';



function Productos() {
  return (
    <section className="seccion">
      <h2>Nuestros productos</h2>

      <div className="productos">
        <div className="producto">
           <img src={miImagenn1} alt="venta" />
          <h3>Página informativa</h3>
          <p>Sitio web profesional para presentar tu negocio o proyecto.</p>
          <span className="precio">$1,500 MXN</span>
          <button>Comprar</button>
        </div>

        <div className="producto">
          <img src={miImagenn2} alt="venta2" />
          <h3>Tienda en línea</h3>
          <p>Vende productos con catálogo, contacto y pagos.</p>
          <span className="precio">$3,500 MXN</span>
          <button>Comprar</button>
        </div>

        <div className="producto">
          <img src={miImagenn3} alt="venta3" />
          <h3>Aplicación web</h3>
          <p>Soluciones web personalizadas y escalables.</p>
          <span className="precio">$6,000 MXN</span>
          <button>Cotizar</button>
        </div>
      </div>
    </section>
  );
}

export default Productos;
