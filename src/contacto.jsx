function Contacto() {
  return (
    <section className="seccion">
      <h2>Contacto</h2>
      <p>
        Para mayor información sobre nuestros servicios, cotizaciones o soporte técnico,
        puedes comunicarte con nosotros a través de las siguientes áreas:
      </p>
      
      <form className="formulario-contacto">
        <div className="campo">
          <label>Nombre</label>
          <input type="text" placeholder="Tu nombre" />
        </div>

        <div className="campo">
          <label>Email</label>
          <input type="email" placeholder="tu@email.com" />
        </div>

        <div className="campo">
          <label>Asunto</label>
          <input type="text" placeholder="Motivo del mensaje" />
        </div>

        <button type="submit">Enviar</button>
      </form>
        <h2>Nuestros contactos</h2>
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
