# Taller Mecánico AutoFix - Landing Page

Este proyecto consiste en el desarrollo de una **Landing Page corporativa** para el taller mecánico **AutoFix**, diseñada con un enfoque responsivo, estructuración semántica en HTML5 y diseño modular a través de CSS nativo. 

Desarrollado como parte de la **Evaluación 1** para la asignatura de **Desarrollo Web Frontend** en **INACAP**.

---

## Integrantes del Proyecto
* **Ángel Bozzo** 
* **Jorge Gonzalez**  
---

## Características y Criterios Cumplidos

El proyecto fue construido bajo una pauta de evaluación académica, asegurando los siguientes componentes obligatorios:

1. **Estructura Semántica (HTML5):** Uso correcto de etiquetas principales como `<header>`, `<main>`, `<section>`, `<article>`, y `<footer>`.
2. **Diseño Modular (CSS3):** Estilos ordenados y separados por componentes en la ruta `src/css/` (`global.css`, `menu.css`, `home.css`, `horarios.css`, `contacto.css`).
3. **Secciones Requeridas:**
   * **Hero / Portada:** Con un llamado a la acción claro (CTA).
   * **Sobre Nosotros:** Misión, visión y valores institucionales.
   * **Servicios Mecánicos:** Tarjetas con imágenes locales integradas (`mantenimiento`, `diagnostico`, `frenos`) que incluyen descripciones técnicas y atributos `alt` de accesibilidad.
   * **Sección Tabular:** Tabla de precios estimados base y horarios de atención al cliente.
   * **Equipo Técnico:** Presentación de los profesionales a cargo del taller.
   * **Formulario de Contacto:** Formulario de agendamiento adaptado con etiquetas `<label>` vinculadas por `id` para máxima accesibilidad.
4. **Validación con JavaScript:** Integración del script `form.js` en `src/js/` para controlar que los datos del formulario no se envíen vacíos ni corruptos.
5. **Identidad Corporativa:** Inclusión de favicon personalizado (`favicon-16x16.png`) y logo corporativo integrado en la barra de navegación.

---

## Estructura del Repositorio

El proyecto mantiene un árbol de directorios jerárquico y limpio para facilitar la escalabilidad y revisión del código:

---

## Estructura del Repositorio

El proyecto mantiene un árbol de directorios jerárquico y limpio para facilitar la escalabilidad y revisión del código:

```text
PRUEBA1/
├── src/
│   ├── assets/          # Elementos visuales e identidad corporativa
│   │   ├── favicon-16x16.png
│   │   └── logo.png
│   ├── components/      # Módulos y secciones HTML fragmentadas
│   │   ├── _navbar.html
│   │   ├── contacto.html
│   │   ├── horarios.html
│   │   └── menu.html
│   ├── css/             # Arquitectura modular de hojas de estilo
│   │   ├── contacto.css
│   │   ├── global.css
│   │   ├── home.css
│   │   ├── horarios.css
│   │   └── menu.css
│   └── js/              # Lógica de programación y validaciones
│       └── form.js
├── .gitignore           # Archivo de exclusión para el control de versiones
├── index.html           # Página de acceso principal (Landing Page)
└── README.md            # Documentación técnica del proyecto