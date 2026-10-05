import { formatearPrecio } from '../utils/formatters'
import {
  calcularSubtotal,
  calcularTotalCarrito,
  calcularTotalProductos,
} from '../utils/cartUtils'

function Cart({
  carrito,
  aumentarCantidad,
  disminuirCantidad,
  eliminarProducto,
}) {
  // Calcula los totales mediante funciones reutilizables.
  const totalProductos = calcularTotalProductos(carrito)
  const totalPrecio = calcularTotalCarrito(carrito)

  // Solicita confirmación antes de eliminar
  // completamente un producto del carrito.
  const confirmarEliminacion = (producto) => {
    const confirmar = window.confirm(
      `¿Deseas eliminar "${producto.nombre}" del carrito?`
    )

    if (confirmar) {
      eliminarProducto(producto.id)
    }
  }

  return (
    <div className="carrito-contenido">
      <h2>Carrito de compras</h2>

      {carrito.length === 0 ? (
        <div
          className="alert alert-secondary text-center"
          role="alert"
        >
          Tu carrito está vacío.
        </div>
      ) : (
        <>
          <div className="row g-4">
            {carrito.map((producto) => (
              <div
                className="col-12"
                key={producto.id}
              >
                <div className="card cart-item">
                  <div className="row g-0 align-items-center">
                    <div className="col-md-3">
                      <img
                        src={producto.imagen}
                        className="img-fluid rounded-start cart-image"
                        alt={producto.nombre}
                      />
                    </div>

                    <div className="col-md-9">
                      <div className="card-body">
                        <h3 className="card-title h5">
                          {producto.nombre}
                        </h3>

                        <p className="card-text mb-2">
                          Precio:{' '}
                          {formatearPrecio(
                            producto.precioOferta
                          )}
                        </p>

                        <div className="d-flex flex-wrap align-items-center gap-3 mb-3">
                          <button
                            type="button"
                            className="btn btn-outline-secondary"
                            onClick={() =>
                              disminuirCantidad(producto.id)
                            }
                            aria-label={`Disminuir cantidad de ${producto.nombre}`}
                          >
                            −
                          </button>

                          <span className="fw-bold">
                            {producto.cantidad}
                          </span>

                          <button
                            type="button"
                            className="btn btn-outline-secondary"
                            onClick={() =>
                              aumentarCantidad(producto.id)
                            }
                            aria-label={`Aumentar cantidad de ${producto.nombre}`}
                          >
                            +
                          </button>

                          <button
                            type="button"
                            className="btn btn-outline-danger"
                            onClick={() =>
                              confirmarEliminacion(producto)
                            }
                          >
                            Eliminar
                          </button>
                        </div>

                        <p className="card-text mb-0">
                          <strong>
                            Subtotal:{' '}
                            {formatearPrecio(
                              calcularSubtotal(producto)
                            )}
                          </strong>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="cart-summary mt-4 p-4">
            <h3 className="h4">
              Resumen del carrito
            </h3>

            <p className="mb-2">
              <strong>Total de productos:</strong>{' '}
              {totalProductos}
            </p>

            <p className="fs-5 mb-0">
              <strong>Total:</strong>{' '}
              {formatearPrecio(totalPrecio)}
            </p>
          </div>
        </>
      )}
    </div>
  )
}

export default Cart