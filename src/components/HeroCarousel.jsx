function HeroCarousel() {
  return (
    <section
      className="seccion-carrusel"
      aria-label="Promociones destacadas"
    >
      <div
        id="carruselPrincipal"
        className="carousel slide"
        data-bs-ride="carousel"
        data-bs-interval="3000"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carruselPrincipal"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Mostrar promoción de Mortal Kombat"
          ></button>

          <button
            type="button"
            data-bs-target="#carruselPrincipal"
            data-bs-slide-to="1"
            aria-label="Mostrar promoción de Minecraft"
          ></button>

          <button
            type="button"
            data-bs-target="#carruselPrincipal"
            data-bs-slide-to="2"
            aria-label="Mostrar promoción de EA Sports FC 26"
          ></button>
        </div>

        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="img/mortal-kombat.jpg"
              className="d-block w-100"
              alt="Promoción de Mortal Kombat"
            />
          </div>

          <div className="carousel-item">
            <img
              src="img/minecraft.jpg"
              className="d-block w-100"
              alt="Promoción de Minecraft"
            />
          </div>

          <div className="carousel-item">
            <img
              src="img/fc26.jpg"
              className="d-block w-100"
              alt="Promoción de EA Sports FC 26"
            />
          </div>
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carruselPrincipal"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>

          <span className="visually-hidden">
            Anterior
          </span>
        </button>

        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carruselPrincipal"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>

          <span className="visually-hidden">
            Siguiente
          </span>
        </button>
      </div>
    </section>
  )
}

export default HeroCarousel