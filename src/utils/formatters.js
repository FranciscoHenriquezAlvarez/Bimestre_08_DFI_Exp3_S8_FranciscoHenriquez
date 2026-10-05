// Centraliza el formato de precios utilizado en la aplicación.
export const formatearPrecio = (valor) => {
  return valor.toLocaleString('es-CL', {
    style: 'currency',
    currency: 'CLP',
    maximumFractionDigits: 0,
  })
}