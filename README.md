# Peor es Nada - Aplicación Móvil Comunitaria 

![Ionic](https://img.shields.io/badge/Ionic-3880FF?style=for-the-badge&logo=ionic&logoColor=white)
![Angular](https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white)
![Capacitor](https://img.shields.io/badge/Capacitor-119EFF?style=for-the-badge&logo=capacitor&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)

**Peor es Nada** es una aplicación móvil híbrida moderna y responsiva diseñada para funcionar como un tablón de anuncios comunitario. Permite a los usuarios crear, gestionar y compartir publicaciones que incluyen títulos, descripciones detalladas y fotografías capturadas directamente con el hardware del dispositivo.

Este proyecto fue desarrollado para demostrar un alto nivel de competencia en el desarrollo front-end moderno, centrándose específicamente en una arquitectura altamente modular, integración de hardware nativo y persistencia de datos robusta tanto en entornos móviles como web.

## Características Principales

- **Integración Nativa de Cámara:** Utiliza de forma transparente el hardware de la cámara del dispositivo mediante `@capacitor/camera` para capturar y renderizar imágenes en formato Base64 directamente dentro de la aplicación.
- **Persistencia de Datos Local:** Implementa almacenamiento persistente de forma robusta utilizando `Capacitor Preferences`, asegurando que los datos del usuario se mantengan intactos entre sesiones en entornos móviles y PWA.
- **Arquitectura de Componentes Avanzada:** Construida utilizando el enfoque moderno de **Standalone Components** de Angular. La interfaz de usuario está estrictamente desacoplada en componentes altamente reutilizables y de responsabilidad única, aprovechando los decoradores `@Input` y `@Output` para flujos de datos deterministas.
- **Formularios Reactivos y Validación:** Emplea `ReactiveFormsModule` de Angular para gestionar estados complejos y validar las entradas del usuario, proporcionando una experiencia de usuario (UX) impecable y manejo de errores en tiempo real.
- **Experiencia de Usuario (UX) Optimizada:** Incluye gestos móviles nativos como Pull-to-Refresh (`IonRefresher`), notificaciones visuales inmediatas mediante `ToastController` y ventanas modales nativas para confirmación de acciones destructivas (`AlertController`).

## Arquitectura y Mejores Prácticas

Esta aplicación se adhiere a estrictos principios de ingeniería de software:

- **Separation of Concerns (Separación de Responsabilidades):** Los modelos de datos, los servicios y los componentes de UI están estrictamente segregados. Por ejemplo, la lógica de persistencia de datos está completamente encapsulada dentro de un servicio dedicado `PublicacionService`.
- **Patrón Smart/Dumb Components:** La aplicación separa los contenedores conscientes del estado (componentes "Smart" como las páginas) de los componentes puramente presentacionales (componentes "Dumb" como `PublicacionCardComponent`), mejorando drásticamente la mantenibilidad y la capacidad de realizar pruebas.
- **Código Limpio y JSDoc:** El código fuente está completamente documentado utilizando estándares profesionales JSDoc, manteniendo una nomenclatura clara y autodescriptiva junto con una indentación consistente.

## Tecnologías Utilizadas

- **Framework:** Ionic Framework (v7/8) + Angular
- **Lenguaje:** TypeScript
- **Puente Nativo:** Capacitor
- **Estilos:** SCSS + Clases de utilidad de Ionic
- **APIs Clave:** Capacitor Camera, Capacitor Preferences, Ionic PWA Elements


