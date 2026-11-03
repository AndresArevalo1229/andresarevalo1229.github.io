# Andrés Arevalo · Portafolio

Portafolio profesional de un Desarrollador Full Stack Junior con enfoque en React Frontend y Node.js Backend. HTML, CSS y JavaScript nativo, publicado en [GitHub Pages](https://andresarevalo1229.github.io/).

## Contenido

- Experiencia profesional, habilidades y contacto.
- Dos casos individuales: gestión de frutas y verduras (contribución frontend laboral) y TravelQuote (proyecto personal de escritorio).
- Seis CV PDF de una página: Full Stack, React Frontend y Node.js Backend, en español e inglés.

Las capturas usan datos ficticios y conservan su procedencia: interfaz local con API simulada y aplicación Mac Catalyst de demostración. No son capturas de producción ni métricas de negocio. El sitio no incluye código de los productos presentados.

## Estructura

- `index.html`: presentación, experiencia, CV y contacto.
- `proyectos/`: catálogo y páginas estáticas de casos.
- `styles.css` y `app.js`: diseño adaptable, menú, filtros y copia de correo.
- `assets/projects/frutas/` y `assets/projects/travelquote/`: imágenes seleccionadas.
- `assets/cv/`: PDF finales, sin conversiones ni modificaciones de contenido.
- `404.html` y `sitemap.xml`: navegación y descubrimiento.

No se requieren paquetes ni compilación de la aplicación. GitHub Pages publica desde `main` y la raíz. `_config.yml` excluye del sitio los documentos/demos heredados y mockups antiguos no utilizados; los archivos heredados restantes del repositorio no forman parte del catálogo ni del sitio desplegado. La documentación interna y los respaldos se conservan fuera del repositorio.

## Revisión local

Para revisar únicamente los archivos del sitio, servir una copia de la selección publicada con la biblioteca estándar de Python, enlazada a `127.0.0.1`. El servidor simple no aplica las exclusiones Jekyll si se sirve directamente toda la raíz del repositorio.

El contenido y la navegación principal funcionan sin JavaScript. Las imágenes enlazan a su tamaño original; los CV tienen enlaces de lectura y descarga, sin enlaces editables de Canva.
