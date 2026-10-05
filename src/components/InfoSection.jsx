function InfoSection() {
  return (
    <section
      id="informacion"
      className="seccion-informacion"
      aria-labelledby="titulo-informacion"
    >
      <h2 id="titulo-informacion">
        ¿Por qué comprar en Mortal Store?
      </h2>

      <div className="row g-4">
        <div className="col-12 col-md-4">
          <article className="info-card">
            <h3>Compra segura</h3>

            <p>
              Compra tus videojuegos favoritos de forma
              rápida, simple y segura.
            </p>
          </article>
        </div>

        <div className="col-12 col-md-4">
          <article className="info-card">
            <h3>Ofertas especiales</h3>

            <p>
              Encuentra precios especiales y promociones
              en nuestros productos destacados.
            </p>
          </article>
        </div>

        <div className="col-12 col-md-4">
          <article className="info-card">
            <h3>Atención al cliente</h3>

            <p>
              Si tienes alguna consulta, puedes comunicarte
              con nosotros mediante nuestro formulario.
            </p>
          </article>
        </div>
      </div>
    </section>
  )
}

export default InfoSection