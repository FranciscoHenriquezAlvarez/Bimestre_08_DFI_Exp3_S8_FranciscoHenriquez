import { useEffect, useState } from 'react'

import Header from './components/Header'
import Navbar from './components/Navbar'
import HeroCarousel from './components/HeroCarousel'
import ProductCard from './components/ProductCard'
import ProductFilter from './components/ProductFilter'
import Cart from './components/Cart'
import InfoSection from './components/InfoSection'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'

import { calcularTotalProductos } from './utils/cartUtils'

import './App.css'

function App() {
  // Estado del catálogo cargado dinámicamente.
  const [productos, setProductos] = useState([])

  // Estados que representan el proceso de carga del catálogo.
  const [cargando, setCargando] = useState(true)
  const [error, setError] = useState(null)

  // Recupera el carrito guardado en el navegador.
  const [carrito, setCarrito] = useState(() => {
    const carritoGuardado = localStorage.getItem(
      'carritoMortalStore'
    )

    if (carritoGuardado) {
      return JSON.parse(carritoGuardado)
    }

    return []
  })

  // Estados utilizados para filtrar el catálogo.
  const [busqueda, setBusqueda] = useState('')
  const [categoria, setCategoria] = useState('Todas')

  // Carga los productos desde el archivo JSON.
  useEffect(() => {
    const cargarProductos = async () => {
      try {
        setCargando(true)
        setError(null)

        const respuesta = await fetch(
          `${import.meta.env.BASE_URL}data/productos.json`
        )

        if (!respuesta.ok) {
          throw new Error(
            'No fue posible cargar los productos.'
          )
        }

        const datos = await respuesta.json()

        setProductos(datos)
      } catch (errorCarga) {
        console.error(
          'Error al cargar los productos:',
          errorCarga
        )

        setError(
          'No fue posible cargar los productos. Intenta nuevamente.'
        )
      } finally {
        setCargando(false)
      }
    }

    cargarProductos()
  }, [])

  // Guarda automáticamente el carrito cada vez que cambia.
  useEffect(() => {
    localStorage.setItem(
      'carritoMortalStore',
      JSON.stringify(carrito)
    )
  }, [carrito])

  // Agrega un producto al carrito.
  // Si ya existe, aumenta su cantidad.
  const agregarAlCarrito = (producto) => {
    setCarrito((carritoActual) => {
      const productoExiste = carritoActual.find(
        (item) => item.id === producto.id
      )

      if (productoExiste) {
        return carritoActual.map((item) =>
          item.id === producto.id
            ? {
                ...item,
                cantidad: item.cantidad + 1,
              }
            : item
        )
      }

      return [
        ...carritoActual,
        {
          ...producto,
          cantidad: 1,
        },
      ]
    })
  }

  // Aumenta en una unidad la cantidad de un producto.
  const aumentarCantidad = (id) => {
    setCarrito((carritoActual) =>
      carritoActual.map((item) =>
        item.id === id
          ? {
              ...item,
              cantidad: item.cantidad + 1,
            }
          : item
      )
    )
  }

  // Disminuye en una unidad la cantidad de un producto.
  // Si la cantidad llega a cero, elimina el producto.
  const disminuirCantidad = (id) => {
    setCarrito((carritoActual) =>
      carritoActual
        .map((item) =>
          item.id === id
            ? {
                ...item,
                cantidad: item.cantidad - 1,
              }
            : item
        )
        .filter((item) => item.cantidad > 0)
    )
  }

  // Elimina completamente un producto del carrito.
  const eliminarProducto = (id) => {
    setCarrito((carritoActual) =>
      carritoActual.filter((item) => item.id !== id)
    )
  }

  // Calcula la cantidad total de unidades utilizando
  // la función reutilizable definida en cartUtils.
  const totalProductos = calcularTotalProductos(carrito)

  // Filtra los productos según el texto ingresado
  // y la categoría seleccionada.
  const productosFiltrados = productos.filter(
    (producto) => {
      const coincideBusqueda = producto.nombre
        .toLowerCase()
        .includes(busqueda.toLowerCase())

      const coincideCategoria =
        categoria === 'Todas' ||
        producto.categoria === categoria

      return coincideBusqueda && coincideCategoria
    }
  )

  return (
    <>
      <Header />

      <Navbar
        totalProductos={totalProductos}
        setCategoria={setCategoria}
      />

      <HeroCarousel />

      <main className="contenedor contenido-principal">
        <section
          id="catalogo"
          className="seccion-productos"
          aria-labelledby="titulo-productos"
        >
          <h2 id="titulo-productos">
            Productos destacados
          </h2>

          <ProductFilter
            busqueda={busqueda}
            setBusqueda={setBusqueda}
            categoria={categoria}
            setCategoria={setCategoria}
          />

          {cargando ? (
            <div
              className="alert alert-info text-center"
              role="status"
            >
              Cargando productos...
            </div>
          ) : error ? (
            <div
              className="alert alert-danger text-center"
              role="alert"
            >
              {error}
            </div>
          ) : productosFiltrados.length > 0 ? (
            <div className="row g-4">
              {productosFiltrados.map((producto) => {
                const productoEnCarrito = carrito.find(
                  (item) => item.id === producto.id
                )

                return (
                  <div
                    className="col-12 col-sm-6 col-lg-4"
                    key={producto.id}
                  >
                    <ProductCard
                      producto={producto}
                      agregarAlCarrito={agregarAlCarrito}
                      estaEnCarrito={Boolean(
                        productoEnCarrito
                      )}
                      cantidadEnCarrito={
                        productoEnCarrito?.cantidad ?? 0
                      }
                    />
                  </div>
                )
              })}
            </div>
          ) : (
            <div
              className="alert alert-warning mensaje-sin-productos"
              role="alert"
            >
              No se encontraron productos con los filtros
              seleccionados.
            </div>
          )}
        </section>

        <section
          id="carrito"
          className="seccion-carrito"
        >
          <Cart
            carrito={carrito}
            aumentarCantidad={aumentarCantidad}
            disminuirCantidad={disminuirCantidad}
            eliminarProducto={eliminarProducto}
          />
        </section>

        <InfoSection />

        <ContactForm />
      </main>

      <Footer />
    </>
  )
}

export default App