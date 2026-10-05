# Mortal Store

Mortal Store es una aplicación web de eCommerce de videojuegos desarrollada con React y Vite como parte de la actividad evaluada de la Semana 8 de la asignatura Desarrollo Frontend I (PFY2201).

Esta versión continúa el proyecto desarrollado durante las semanas anteriores e incorpora la gestión de estados con `useState`, efectos secundarios con `useEffect`, carga dinámica de productos mediante `fetch`, renderizado condicional y mejoras en la organización y reutilización del código.

## Funcionalidades

La aplicación incluye las siguientes funcionalidades:

- Carga dinámica del catálogo de videojuegos desde un archivo JSON local.
- Visualización de nombre, imagen y descripción de cada producto.
- Visualización de precio normal y precio de oferta.
- Carrusel de promociones destacadas.
- Búsqueda de productos por nombre.
- Filtro de productos por categoría.
- Navegación directa por categorías desde el menú.
- Mensaje condicional cuando una búsqueda no encuentra productos.
- Estado visual durante la carga del catálogo.
- Mensaje de error cuando no es posible cargar los productos.
- Agregar productos al carrito de compras.
- Aumentar la cantidad de un producto en el carrito.
- Disminuir la cantidad de un producto.
- Eliminación automática del producto cuando su cantidad llega a cero.
- Eliminación completa de un producto mediante un botón dedicado.
- Confirmación antes de eliminar completamente un producto del carrito.
- Cálculo del subtotal de cada producto.
- Cálculo de la cantidad total de productos.
- Cálculo del precio total del carrito.
- Contador dinámico de productos en la barra de navegación.
- Mensaje condicional cuando el carrito está vacío.
- Indicador visual cuando un producto se encuentra en el carrito.
- Cambio condicional del texto y estilo del botón según el estado del producto.
- Persistencia del carrito utilizando `localStorage`.
- Formulario de contacto interactivo.
- Mensaje de confirmación mediante renderizado condicional.
- Diseño responsive para escritorio, tablet y dispositivos móviles.

## Tecnologías utilizadas

- React
- Vite
- JavaScript
- JSX
- HTML5
- CSS3
- Bootstrap 5
- Fetch API
- JSON
- Local Storage
- ESLint
- Git
- GitHub
- GitHub Pages

## Conceptos de React implementados

### Componentes funcionales

La interfaz se encuentra dividida en componentes funcionales independientes para mantener una estructura modular, clara y reutilizable.

Los principales componentes del proyecto son:

- `Header`
- `Navbar`
- `HeroCarousel`
- `ProductFilter`
- `ProductCard`
- `Cart`
- `InfoSection`
- `ContactForm`
- `Footer`

### Props

Se utilizan propiedades (`props`) para comunicar información y funciones entre los componentes siguiendo el flujo de datos de React.

Por ejemplo, cada producto y las funciones necesarias para interactuar con el carrito son enviados desde `App` hacia `ProductCard`.

El componente `Cart` recibe el estado del carrito y las funciones para aumentar, disminuir y eliminar productos.

El componente `Navbar` recibe la cantidad total de productos para actualizar dinámicamente el contador del carrito.

### useState

El Hook `useState` se utiliza para gestionar información dinámica de la aplicación.

Entre los estados administrados se encuentran:

- Lista de productos del catálogo.
- Productos seleccionados en el carrito.
- Cantidades de productos.
- Texto ingresado en el buscador.
- Categoría seleccionada.
- Estado de carga del catálogo.
- Estado de error durante la carga de productos.
- Datos ingresados en el formulario de contacto.
- Estado del mensaje de confirmación del formulario.

El catálogo se inicializa como un arreglo vacío y posteriormente se actualiza con los datos obtenidos dinámicamente desde el archivo JSON.

### useEffect

El proyecto utiliza `useEffect` para manejar distintos efectos secundarios.

#### Carga dinámica de productos

Al iniciar la aplicación, `useEffect` ejecuta una función asíncrona que utiliza `fetch` para solicitar el archivo:

```text
public/data/productos.json
```

Los datos obtenidos son transformados desde JSON y utilizados para actualizar el estado del catálogo mediante `setProductos`.

Durante este proceso también se administran estados de carga y error para entregar información clara al usuario.

#### Persistencia del carrito

Otro `useEffect` guarda automáticamente el contenido del carrito en `localStorage` cada vez que este cambia.

De esta manera, los productos y sus cantidades permanecen disponibles después de recargar la página.

### Carga dinámica de datos

Los productos no se importan directamente desde el código JavaScript.

El catálogo se obtiene dinámicamente mediante `fetch` desde un archivo JSON local ubicado en:

```text
public/data/productos.json
```

Esta implementación permite simular la obtención de información desde una fuente externa y actualizar el estado de la aplicación una vez recibidos los datos.

### Eventos

La aplicación utiliza distintos eventos para permitir la interacción del usuario:

- `onClick` para agregar productos al carrito.
- `onClick` para aumentar y disminuir cantidades.
- `onClick` para eliminar completamente un producto.
- `onChange` para actualizar la búsqueda, categoría seleccionada y campos del formulario.
- `onSubmit` para procesar el formulario de contacto.

### Renderizado condicional

Se utiliza renderizado condicional para adaptar la interfaz al estado actual de la aplicación.

Algunos ejemplos implementados son:

- Mostrar `Cargando productos...` mientras se obtiene el catálogo.
- Mostrar un mensaje de error cuando no es posible cargar los productos.
- Mostrar un mensaje cuando los filtros no encuentran productos.
- Mostrar un mensaje cuando el carrito está vacío.
- Mostrar el contenido del carrito cuando existen productos agregados.
- Mostrar `En el carrito` junto con la cantidad de unidades cuando un producto ya fue agregado.
- Cambiar el texto del botón entre `Agregar al carrito` y `Agregar otra unidad`.
- Cambiar el estilo del botón según el estado del producto.
- Mostrar un mensaje de confirmación después de enviar el formulario de contacto.

### Persistencia de datos

El carrito se almacena utilizando `localStorage`.

Cuando la aplicación se inicia, recupera el carrito previamente almacenado. Posteriormente, `useEffect` actualiza el almacenamiento cada vez que cambia el estado del carrito.

Esto permite conservar los productos y cantidades incluso después de actualizar la página.

## Reutilización y organización del código

Para mejorar la claridad del proyecto y evitar duplicación de lógica, se incorporaron funciones reutilizables dentro de la carpeta `utils`.

### Formato de precios

El archivo:

```text
src/utils/formatters.js
```

centraliza el formato monetario utilizado por los distintos componentes de la aplicación.

### Cálculos del carrito

El archivo:

```text
src/utils/cartUtils.js
```

contiene funciones reutilizables para:

- Calcular la cantidad total de productos.
- Calcular el subtotal de cada producto.
- Calcular el precio total del carrito.

Esta separación evita repetir cálculos dentro de los componentes y facilita el mantenimiento del código.

## Mejoras implementadas en Semana 8

A partir del proyecto desarrollado previamente, durante la Semana 8 se incorporaron y optimizaron las siguientes funcionalidades:

- Gestión del catálogo mediante `useState`.
- Carga dinámica de productos utilizando `useEffect` y `fetch`.
- Archivo JSON utilizado como fuente de datos del catálogo.
- Estados de carga y error para la obtención de productos.
- Renderizado condicional asociado a la carga del catálogo.
- Renderizado condicional según la presencia de productos en el carrito.
- Cambio de texto y estilo del botón según el estado del producto.
- Eliminación completa de productos desde el carrito.
- Confirmación antes de eliminar completamente un producto.
- Centralización del formato de precios.
- Separación de los cálculos del carrito en funciones reutilizables.
- Mantención de la persistencia del carrito mediante `localStorage`.

## Estructura principal del proyecto

```text
Francisco_PFY2201_React_Semana8/
│
├── public/
│   ├── capturas/
│   ├── data/
│   │   └── productos.json
│   ├── img/
│   │   ├── fc26.jpg
│   │   ├── minecraft.jpg
│   │   └── mortal-kombat.jpg
│   ├── favicon.svg
│   └── icons.svg
│
├── src/
│   ├── components/
│   │   ├── Cart.jsx
│   │   ├── ContactForm.jsx
│   │   ├── Footer.jsx
│   │   ├── Header.jsx
│   │   ├── HeroCarousel.jsx
│   │   ├── InfoSection.jsx
│   │   ├── Navbar.jsx
│   │   ├── ProductCard.jsx
│   │   └── ProductFilter.jsx
│   │
│   ├── utils/
│   │   ├── cartUtils.js
│   │   └── formatters.js
│   │
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
│
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md
```

## Instalación

Para ejecutar el proyecto localmente es necesario tener Node.js y npm instalados.

### 1. Clonar el repositorio

```bash
git clone URL_DEL_REPOSITORIO
```

### 2. Ingresar a la carpeta del proyecto

```bash
cd Francisco_PFY2201_React_Semana8
```

### 3. Instalar las dependencias

```bash
npm install
```

## Ejecución en desarrollo

Para iniciar el servidor de desarrollo:

```bash
npm run dev
```

Vite mostrará en la terminal la dirección local correspondiente a la aplicación.

Debido a la configuración utilizada para GitHub Pages, durante el desarrollo la aplicación se encuentra disponible bajo la ruta base del proyecto.

## Verificación del código

Para comprobar el proyecto mediante ESLint:

```bash
npm run lint
```

El proyecto fue verificado correctamente sin errores de ESLint.

## Compilación de producción

Para generar la versión optimizada de producción:

```bash
npm run build
```

Este comando genera automáticamente la carpeta `dist`.

El proyecto fue compilado correctamente con Vite antes de su publicación.

## Despliegue

El proyecto utiliza el paquete `gh-pages` para publicar la versión de producción.

El despliegue se realiza mediante:

```bash
npm run deploy
```

Este proceso ejecuta previamente la compilación de producción y publica el contenido de la carpeta `dist` en la rama `gh-pages`.

## Capturas de funcionamiento

Las capturas de esta sección evidenciarán las funcionalidades solicitadas para la actividad de Semana 8.

### Carga dinámica del catálogo

La aplicación obtiene los productos dinámicamente desde el archivo JSON utilizando `fetch` y `useEffect`, actualizando posteriormente el estado del catálogo.

![Carga dinámica del catálogo de Mortal Store](public/capturas/01-carga-dinamica.png)

### Carrito de compras

El carrito permite agregar productos, modificar cantidades, eliminar productos y calcular automáticamente subtotales y totales.

![Carrito de compras de Mortal Store](public/capturas/02-carrito.png)

### Renderizado condicional

La interfaz cambia según el estado de la aplicación. Cuando un producto ya se encuentra agregado, se muestra un indicador con su cantidad y cambia el texto y estilo del botón correspondiente.

![Renderizado condicional en Mortal Store](public/capturas/03-renderizado-condicional.png)

### Carrito vacío

Cuando no existen productos agregados, la aplicación muestra un mensaje informativo mediante renderizado condicional.

![Mensaje de carrito vacío](public/capturas/04-carrito-vacio.png)

### Búsqueda sin resultados

Cuando no existen productos que coincidan con la búsqueda o categoría seleccionada, se muestra un mensaje mediante renderizado condicional.

![Mensaje de búsqueda sin resultados](public/capturas/05-sin-resultados.png)

### Diseño responsive

La interfaz se adapta a distintos tamaños de pantalla utilizando Bootstrap y estilos personalizados.

![Vista responsive de Mortal Store](public/capturas/06-responsive.png)

## Pruebas realizadas

Antes de finalizar el proyecto se comprobaron las siguientes funcionalidades:

- Carga dinámica de productos desde el archivo JSON.
- Actualización del estado del catálogo después de cargar los datos.
- Manejo del estado de error durante una carga fallida.
- Restauración correcta del catálogo después de recuperar la fuente de datos.
- Funcionamiento automático y manual del carrusel.
- Navegación entre las distintas secciones.
- Búsqueda de productos por nombre.
- Filtro de productos por categoría.
- Navegación directa a categorías desde el menú.
- Agregar productos al carrito.
- Aumentar cantidades.
- Disminuir cantidades.
- Eliminación automática de un producto al llegar a cantidad cero.
- Eliminación completa mediante el botón `Eliminar`.
- Confirmación antes de eliminar completamente un producto.
- Cálculo de subtotales.
- Cálculo de cantidad total de productos.
- Cálculo del precio total del carrito.
- Actualización del contador del carrito.
- Cambio condicional del estado visual de los productos agregados.
- Persistencia del carrito después de recargar la página.
- Mensaje de carrito vacío.
- Mensaje cuando una búsqueda no encuentra resultados.
- Envío del formulario de contacto.
- Mensaje de confirmación del formulario.
- Visualización responsive.
- Revisión de la consola del navegador.
- Verificación mediante ESLint.
- Compilación de producción mediante Vite.

## Sitio publicado

La aplicación será publicada mediante GitHub Pages.

**URL:** pendiente de publicación.

## Repositorio

El código fuente será almacenado en un repositorio público de GitHub correspondiente exclusivamente a la entrega de Semana 8.

**GitHub:** pendiente de publicación.

## Estado del proyecto

Proyecto funcional y responsive desarrollado con React y Vite.

La aplicación implementa gestión de estados con `useState`, efectos secundarios mediante `useEffect`, carga dinámica de datos con `fetch`, renderizado condicional, componentes reutilizables, persistencia mediante `localStorage` y una estructura modular orientada a buenas prácticas de desarrollo.