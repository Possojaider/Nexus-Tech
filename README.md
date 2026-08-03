# NexusTech

> Landing page informativa de tecnología desarrollada con HTML y CSS puros.

## 🧩 Visión general

NexusTech es una página de presentación pensada para contenido tecnológico: artículos, guías, reseñas y secciones de comunidad. El proyecto prioriza claridad, modernidad y una experiencia responsive impecable, sin depender de JavaScript.

## ✨ Qué hace

- Muestra una hero section con llamadas a la acción claras.
- Presenta cards de artículos con contenido adicional y enlaces a páginas secundarias.
- Ofrece navegación consistente entre la home y las páginas internas.
- Funciona en móviles, tablets y escritorio con un diseño fluido.

## 🛠 Tecnologías

- HTML5 semántico
- CSS3 moderno
- CSS Grid para el diseño del layout
- Flexbox para alineaciones internas
- Media queries para la adaptabilidad responsive

## 📁 Estructura del proyecto

```text
index.html
pages/
  ├─ categorias.html
  ├─ comunidad.html
  ├─ contacto.html
  ├─ eventos.html
  └─ resenas.html
  └─ landing.html

assets/
  ├─ css/
  │   ├─ components.css
  │   ├─ layout.css
  │   └─ responsive.css
  └─ img/
```

- `index.html` contiene la página principal y la lógica visual del proyecto.
- `pages/` aloja las secciones secundarias del sitio.
- `assets/css/` separa el estilo por layout, componentes y responsive.
- `assets/img/` guarda las imágenes e ilustraciones del proyecto.

## 🚀 Cómo ejecutar

1. Abre la carpeta del proyecto en tu editor.
2. Inicia un servidor local o abre `index.html` directamente.

### Servidor local recomendado

```bash
python3 -m http.server 8000
```

Abre luego `http://localhost:8000`.

## ✅ Características clave

- Diseño responsive sin JavaScript.
- Cards independientes en un grid con comportamiento visual consistente.
- Navegación accesible y todo el contenido organizado de forma clara.
- Estilo limpio y profesional listo para una presentación de proyecto.

## 🔧 Buenas prácticas

- Mantener la separación entre layout, componentes y responsive en CSS.
- Conservar clases CSS coherentes para facilitar futuras revisiones.
- Evitar JavaScript cuando el comportamiento puede lograrse con HTML/CSS.

## 📌 Nota

Este proyecto está diseñado como una demostración estable de una página web moderna basada en HTML y CSS, ideal para portfolios, presentaciones de producto o landing pages de contenido tecnológico.
