function ProductFilter({
  busqueda,
  setBusqueda,
  categoria,
  setCategoria,
}) {
  return (
    <div className="filtro-productos">
      {/* Filtro de productos mediante texto de búsqueda. */}
      <div className="filtro-busqueda">
        <label
          htmlFor="busqueda"
          className="form-label"
        >
          Buscar producto
        </label>

        <input
          type="search"
          id="busqueda"
          className="form-control"
          placeholder="Ej: Minecraft"
          value={busqueda}
          onChange={(evento) =>
            setBusqueda(evento.target.value)
          }
        />
      </div>

      {/* Filtro de productos según su categoría. */}
      <div className="filtro-categoria">
        <label
          htmlFor="categoria"
          className="form-label"
        >
          Categoría
        </label>

        <select
          id="categoria"
          className="form-select"
          value={categoria}
          onChange={(evento) =>
            setCategoria(evento.target.value)
          }
        >
          <option value="Todas">
            Todas
          </option>

          <option value="Deportes">
            Deportes
          </option>

          <option value="Aventura">
            Aventura
          </option>

          <option value="Lucha">
            Lucha
          </option>
        </select>
      </div>
    </div>
  )
}

export default ProductFilter