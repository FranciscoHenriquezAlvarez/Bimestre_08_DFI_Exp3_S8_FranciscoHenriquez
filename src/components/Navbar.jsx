function Navbar({
  totalProductos,
  setCategoria,
}) {
  // Cambia la categoría seleccionada desde el menú de navegación.
  const seleccionarCategoria = (categoria) => {
    setCategoria(categoria)
  }

  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark bg-dark"
      aria-label="Navegación principal"
    >
      <div className="container">
        <a className="navbar-brand fw-bold" href="#inicio">
          Mortal Store
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#menuPrincipal"
          aria-controls="menuPrincipal"
          aria-expanded="false"
          aria-label="Mostrar u ocultar navegación"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse"
          id="menuPrincipal"
        >
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="#inicio">
                Inicio
              </a>
            </li>

            <li className="nav-item">
              <a
                className="nav-link"
                href="#catalogo"
                onClick={() => seleccionarCategoria('Todas')}
              >
                Productos
              </a>
            </li>

            <li className="nav-item">
              <a
                className="nav-link"
                href="#catalogo"
                onClick={() => seleccionarCategoria('Lucha')}
              >
                Lucha
              </a>
            </li>

            <li className="nav-item">
              <a
                className="nav-link"
                href="#catalogo"
                onClick={() => seleccionarCategoria('Deportes')}
              >
                Deportes
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#carrito">
                Carrito{' '}
                <span className="badge text-bg-danger">
                  {totalProductos}
                </span>
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#contacto">
                Contacto
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar