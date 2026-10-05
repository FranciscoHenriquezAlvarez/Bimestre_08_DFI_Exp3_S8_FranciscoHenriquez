// Calcula la cantidad total de unidades agregadas al carrito.
export const calcularTotalProductos = (carrito) => {
  return carrito.reduce(
    (total, producto) => total + producto.cantidad,
    0
  )
}

// Calcula el subtotal correspondiente a un producto.
export const calcularSubtotal = (producto) => {
  return producto.precioOferta * producto.cantidad
}

// Calcula el valor total del carrito.
export const calcularTotalCarrito = (carrito) => {
  return carrito.reduce(
    (total, producto) =>
      total + calcularSubtotal(producto),
    0
  )
}