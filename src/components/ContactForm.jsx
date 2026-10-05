import { useState } from 'react'

function ContactForm() {
  const [formulario, setFormulario] = useState({
    nombre: '',
    correo: '',
    mensaje: '',
  })

  const [mensajeEnviado, setMensajeEnviado] = useState(false)

  // Actualiza los datos del formulario mientras el usuario escribe.
  const manejarCambio = (evento) => {
    const { name, value } = evento.target

    setFormulario((datosActuales) => ({
      ...datosActuales,
      [name]: value,
    }))

    // Si el usuario vuelve a escribir, ocultamos
    // el mensaje de envío anterior.
    setMensajeEnviado(false)
  }

  // Simula el envío del formulario.
  const manejarEnvio = (evento) => {
    evento.preventDefault()

    setMensajeEnviado(true)

    setFormulario({
      nombre: '',
      correo: '',
      mensaje: '',
    })
  }

  return (
    <section
      id="contacto"
      className="seccion-contacto"
      aria-labelledby="titulo-contacto"
    >
      <div className="contacto-contenido">
        <div className="contacto-informacion">
          <h2 id="titulo-contacto">
            Contacto
          </h2>

          <p>
            ¿Tienes alguna consulta?
          </p>

          <p>
            Completa el formulario y estaremos felices
            de ayudarte.
          </p>

          <p>
            <strong>Correo:</strong>
            {' '}
            contacto@mortalstore.cl
          </p>
        </div>

        <form
          className="formulario-contacto"
          onSubmit={manejarEnvio}
        >
          <div className="mb-3">
            <label
              htmlFor="nombre"
              className="form-label"
            >
              Nombre
            </label>

            <input
              type="text"
              id="nombre"
              name="nombre"
              className="form-control"
              value={formulario.nombre}
              onChange={manejarCambio}
              placeholder="Ingresa tu nombre"
              required
            />
          </div>

          <div className="mb-3">
            <label
              htmlFor="correo"
              className="form-label"
            >
              Correo electrónico
            </label>

            <input
              type="email"
              id="correo"
              name="correo"
              className="form-control"
              value={formulario.correo}
              onChange={manejarCambio}
              placeholder="nombre@correo.cl"
              required
            />
          </div>

          <div className="mb-3">
            <label
              htmlFor="mensaje"
              className="form-label"
            >
              Mensaje
            </label>

            <textarea
              id="mensaje"
              name="mensaje"
              className="form-control"
              rows="5"
              value={formulario.mensaje}
              onChange={manejarCambio}
              placeholder="Escribe tu consulta"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="btn btn-danger"
          >
            Enviar mensaje
          </button>

          {mensajeEnviado && (
            <div
              className="alert alert-success mt-3 mb-0"
              role="alert"
            >
              Mensaje enviado correctamente.
            </div>
          )}
        </form>
      </div>
    </section>
  )
}

export default ContactForm