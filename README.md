  # The Simpsons - Dataverse Chat
  ## Índice
  * [1. Introducción](#1-introducción)
  * [2. Resumen del proyecto](#2-resumen-del-proyecto)
  * [3. Historias de usuario](#-historias-de-usuario)
  * [4. Prototipo de baja y alta fidelidad](#3-prototipo-de-alta-y-baja-fidelidad)
  * [5. Funcionalidades](#4-funcionalidades)
  * [6. Conclusión](#8-conclusión)
  * [7. Desarrolladoras web](#9-desarrolladoras-web)
  ***
  ## 1. Introducción
    ![Introducción](https://github.com/Daniipuff/DEV012-dataverse-chat/blob/main/Recursos%20visuales/historias.jpg)

  En la era digital actual, las aplicaciones web se han convertido en nuestras compañeras cotidianas, desempeñando roles diversos, desde facilitar nuestras tareas diarias hasta brindar entretenimiento interactivo. En este contexto, surge un proyecto fascinante que combina nuestra fascinación por Los Simpsons con la innovación tecnológica: Los Simpsons Dataverse Chat.

  Esta aplicación, concebida y desarrollada por nosotras, el equipo de talentosas desarrolladoras, eleva la experiencia de explorar datos al siguiente nivel al permitir a las usuarias no solo visualizar y analizar información detallada sobre los personajes de Los Simpsons, sino también interactuar con ellos de manera única y entretenida.

  ## 2. Resumen del proyecto
  En este proyecto agregamos inteligencia artificial para que los usuarios puedan chatear con sus personajes favoritos de Los Simpsons, en este proyecto utilizaremos la aplicación desarrollada en Dataverse.
  Nuestra aplicación será realizada con formato de Single Page Application (SPA), manteniendo las funcionalidades de visualizar, filtrar, ordenar y calcular alguna estadística, y ahora adicionando una nueva vista para
  consultar información detallada de cada personaje de Los Simpsons y agregando
  la posibilidad de interactuar con un personaje o todos ellos a través de un sistema de chat impulsado por la
  [API de OpenAI](https://openai.com/product).
  ### Objetivos logrados
  * Desarrollo de una Single Page Application (SPA): Hemos creado una aplicación de página única que proporciona una experiencia de usuario fluida y eficiente, permitiendo a los usuarios explorar de manera intuitiva la información detallada de los personajes de Los Simpsons.
  * Aplicación de Conceptos de Responsividad: La aplicación ha sido diseñada y desarrollada considerando principios de responsividad, asegurando que la interfaz se adapte de manera óptima a una variedad de dispositivos, desde computadoras de escritorio hasta dispositivos móviles.
  * Implementación de un Router para la Navegación: Hemos incorporado un sistema de router que facilita la navegación entre las diversas vistas de la aplicación. Esto garantiza una experiencia de usuario coherente y sin interrupciones al explorar diferentes secciones de la aplicación.
  * Integración Exitosa de una API Externa: Logramos la integración exitosa de la API de OpenAI, permitiendo a los usuarios interactuar de manera única y divertida con los personajes de Los Simpsons a través de un sistema de chat impulsado por inteligencia artificial.
  * Comprensión de la Asincronía en JavaScript: Hemos abordado eficientemente la asincronía en JavaScript, lo que resulta crucial al interactuar con APIs externas y al proporcionar una experiencia de usuario receptiva.
  * Creación de una Suite de Pruebas Unitarias: Hemos desarrollado una suite de pruebas unitarias que nos permite evaluar de manera efectiva el código asíncrono, asegurando la estabilidad y confiabilidad de la aplicación en todas las situaciones.

  ## 3. Historias de usuario
  Las Historias de Usuario son el resultado del proceso de investigación de los usuarias, un paso importante antes de comenzar con el código.
  ![Historias de usuario](https://github.com/Daniipuff/DEV012-dataverse-chat/blob/main/Recursos%20visuales/historias.jpg)

  ## 4. Prototipo de alta y baja fidelidad
  Al momento de comenzar con el código es importante haber hecho e iterado bocetos simples (sketches) usando papel y lápiz. Estos son llamados prototipos de baja fidelidad, de esta forma se comienza la arquitectura del proyecto.
  ![Prototipo de baja fidelidad: Desktop](https://github.com/Daniipuff/DEV012-dataverse-chat/blob/main/Recursos%20visuales/bf1.jpg)
  ![Prototipo de baja fidelidad: Movil](https://github.com/Daniipuff/DEV012-dataverse-chat/blob/main/Recursos%20visuales/bj2.jpg)

  Lo siguiente fue diseñar nuestra Interfaz de Usuarios (UI - User Interface). Esta oportunidad  utilizamos Figma para diseñar el prototipo de alta fidelidad, osea como nos gustaría que se viera el diseño final siguiendo los fundamentos de visual design.

  ![Prototipo de alta fidelidad: Desktop](https://github.com/Daniipuff/DEV012-dataverse-chat/blob/main/Recursos%20visuales/af1.jpg)
  ![Prototipo de alta fidelidad: Desktop](https://github.com/Daniipuff/DEV012-dataverse-chat/blob/main/Recursos%20visuales/af2.jpg)
  ![Prototipo de alta fidelidad: Movil](https://github.com/Daniipuff/DEV012-dataverse-chat/blob/main/Recursos%20visuales/af3.jpg)

  ## 5. Funcionalidades
  Los Simpsons Dataverse Chat, desarrollado por nosotras, es una Single Page Application (SPA) que permitirá a las usuarias visualizar la información, filtrarla, ordenarla y calcular estadísticas, siguiendo el modelo establecido en Dataverse. Además, les brinda la posibilidad de acceder a una página detallada para cada personaje, facilitando la interacción individual con cada uno de ellos.

  A continuación, detallamos las funcionalidades clave del proyecto:

      • La aplicación, diseñada por nosotras, es responsive, adaptándose de manera óptima a diferentes dispositivos para proporcionar una experiencia de usuario fluida.

      • Implementamos la aplicación como una SPA con múltiples vistas, permitiendo una navegación intuitiva y eficiente entre las secciones de la aplicación.

      • Los usuarios podrán visualizar, filtrar, ordenar y realizar cálculos estadísticos sobre la información detallada de los personajes de Los Simpsons, manteniendo las funcionalidades presentes en Dataverse.

      • Al hacer clic en una tarjeta de personaje, la aplicación redirigirá a una vista específica con su propia URL. Esta página detallada mostrará información exhaustiva sobre ese personaje en particular, brindando una experiencia más inmersiva.

      • Para potenciar la interactividad, la aplicación permitirá a las usuarias ingresar su API Key. Esto posibilitará la interacción con la API de Open AI, lo que permitirá a las usuarias chatear tanto de manera grupal como individual con los personajes de Los Simpsons, añadiendo un componente lúdico y entretenido a la experiencia.

## 7. Conclusión
  En resumen, Los Simpsons Dataverse Chat es un proyecto que fusiona la exploración de datos con la interacción a través de la inteligencia artificial. Hemos logrado nuestros objetivos al permitir a los usuarios visualizar, filtrar, ordenar y realizar cálculos estadísticos sobre la información de los personajes de Los Simpsons. La implementación de una Single Page Application (SPA) garantiza una experiencia de usuario fluida y receptiva.

  Nosotras, como desarrolladoras, hemos puesto especial atención en el diseño visual, desde los prototipos de baja fidelidad hasta los de alta fidelidad, cuidando meticulosamente cada detalle. Las historias de usuario han sido cruciales para comprender las necesidades de nuestras usuarias, y hemos aplicado nuestras habilidades técnicas en áreas como la gestión de la asincronía en JavaScript y la implementación de pruebas unitarias para el código asíncrono.

  La introducción de la capacidad de interactuar con los personajes mediante un sistema de chat basado en la API de OpenAI añade un componente único y atractivo a la experiencia. En conjunto, Los Simpsons Dataverse Chat representa una combinación exitosa de tecnología, creatividad y atención a las necesidades del usuario. Estamos emocionadas de presentar esta aplicación que ofrece una experiencia completa y entretenida para los amantes de Los Simpsons y las entusiastas de la exploración de datos.
## 8. Desarrolladoras web

| [<img src="https://avatars.githubusercontent.com/u/133843650?s=96&v=4" width=115><br><sub>Daniela Bustamante</sub>](https://github.com/Daniipuff) |  [<img src="https://avatars.githubusercontent.com/u/143117858?v=4" width=115><br><sub>Paulina Cabrera</sub>](https://github.com/Paulinakbrr) |
| :---: | :---: |