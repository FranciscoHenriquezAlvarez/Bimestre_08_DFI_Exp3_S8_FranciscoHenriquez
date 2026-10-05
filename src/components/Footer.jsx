function Footer() {
  return (
    <footer className="bg-dark text-light mt-5 py-4">
      <div className="container text-center">
        <h5 className="fw-bold mb-2">Mortal Store</h5>

        <p className="mb-2">
          Tu tienda de videojuegos.
        </p>

        <nav aria-label="Navegación del pie de página">
          <a className="text-light me-3" href="#inicio">
            Inicio
          </a>

          <a className="text-light me-3" href="#catalogo">
            Productos
          </a>

          <a className="text-light me-3" href="#carrito">
            Carrito
          </a>

          <a className="text-light" href="#contacto">
            Contacto
          </a>
        </nav>

        <hr />

        <p className="mb-0 small">
          © 2026 Mortal Store - Todos los derechos reservados.
        </p>
      </div>
    </footer>
  )
}

export default Footer