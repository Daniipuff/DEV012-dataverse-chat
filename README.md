# The Simpsons - Dataverse Chat

## Índice

* [1. Introducción](#1-introducción)
* [2. Resumen del proyecto](#2-resumen-del-proyecto)
* [3. Historias de usuario](#-historias-de-usuario)
* [4. Prototipo de baja y alta fidelidad](#3-prototipo-de-alta-y-baja-fidelidad)
* [5. Funcionalidades](#4-funcionalidades)
* [6. Consideraciones técnicas](#5-consideraciones-técnicas)
* [7. Objetivos de aprendizaje](#7-objetivos-de-aprendizaje)
* [8. Conclusión](#8-conclusión)


***

## 1. Introducción

Las aplicaciones web son parte de nuestro día a día, desde las redes sociales hasta las herramientas de trabajo, las usamos todo el tiempo. Y en estos momentos se a abierto la puerta a algo asombroso: la interacción con inteligencia artificial.

## 2. Resumen del proyecto

En este proyecto agregamos inteligencia artificial para que los usuarios puedan chatear con sus personajes favoritos de Los Simpsons, en este proyecto utilizaremos la aplicación desarrollada en Dataverse.
Nuestra aplicación será realizada con formato de Single Page Application (SPA), manteniendo las funcionalidades de visualizar, filtrar, ordenar y calcular alguna estadística, y ahora adicionando una nueva vista para
consultar información detallada de cada personaje de Los Simpsons y agregando
la posibilidad de interactuar con un personaje o todos ellos a través de un sistema de chat impulsado por la
[API de OpenAI](https://openai.com/product).

### Objetivos 

* Desarrollar una [Single Page Application (SPA)](https://es.wikipedia.org/wiki/Single-page_application)
* Aplicar los conceptos de responsividad en el desarrollo de las vistas
* Implementar un router para la navegación entre las diferentes
  vistas de la aplicación
* Integrar una API externa
* Entender la asincronía en JavaScript
* Crear una suite de pruebas unitarias que permitan testear código asíncrono

## 3. Historias de usuario

Las Historias de Usuario son el resultado del proceso de investigación de los usuarias, un paso importante antes de comenzar con el código.

![Historias de usuario](https://github-production-user-asset-6210df.s3.amazonaws.com/123121338/271433237-2bd1477b-15ef-49d4-9fcb-226b3263c46a.png)


## 4. Prototipo de alta y baja fidelidad

 Al momento de comenzar con el código es importante haber hecho e iterado bocetos simples (sketches) usando papel y lápiz. Estos son llamados prototipos de baja fidelidad, de esta forma se comienza la arquitectura del proyecto.

 ![Prototipo de baja fidelidad: Desktop](https://github-production-user-asset-6210df.s3.amazonaws.com/123121338/271433237-2bd1477b-15ef-49d4-9fcb-226b3263c46a.png)
![Prototipo de baja fidelidad: Movil](https://github-production-user-asset-6210df.s3.amazonaws.com/123121338/271433237-2bd1477b-15ef-49d4-9fcb-226b3263c46a.png)

Lo siguiente fue diseñar nuestra Interfaz de Usuarios (UI - User Interface). Esta oportunidad  utilizamos Figma para diseñar el prototipo de alta fidelidad, osea como nos gustaría que se viera el diseño final siguiendo los fundamentos de visual design.

![Prototipo de alta fidelidad: Desktop](https://github-production-user-asset-6210df.s3.amazonaws.com/123121338/271433237-2bd1477b-15ef-49d4-9fcb-226b3263c46a.png)
![Prototipo de alta fidelidad: Desktop](https://github-production-user-asset-6210df.s3.amazonaws.com/123121338/271433237-2bd1477b-15ef-49d4-9fcb-226b3263c46a.png)
![Prototipo de alta fidelidad: Movil](https://github-production-user-asset-6210df.s3.amazonaws.com/123121338/271433237-2bd1477b-15ef-49d4-9fcb-226b3263c46a.png)


## 5. Funcionalidades

Los Simpsons Dataverse Chat es una Single Page Application (SPA) que permitira al usuario **visualizar la información, filtrarla, ordenarla y calcular alguna estadística**, tal como se hizo en Dataverse. Además, permite  acceder a una página que muestre el detalle de cada personaje para interactuar con cada uno de ellos.

A continuación, detallamos las funcionalidades del proyecto:

* La aplicación es _responsive_
* La aplicación es una SPA con múltiples vistas
* La aplicación permite visualizar,
  filtrar, ordenar y calcular estadística de la data.
* Al hacer clic en una tarjeta de personaje, la aplicación redirigirse a una vista **con su propia URL**   que muestra la información detallada sobre ese personaje en particular.
* La aplicación debe permitir al usuario ingresar su API Key para
  interactuar con la API de Open AI permitiendo al usuario
  interactuar con los personajes través de chat grupal e individual.
  
## 6. Consideraciones técnicas

 La lógica de este proyecto está realizado sólo con vanilla JavaScript, HTML y CSS.

 Boilerplate:

### `src/components`

Esta carpeta contendrá archivos JavaScript que representan componentes reutilizables de la aplicación. Estos componentes pueden son elementos de la interfaz de usuario que se utilizan en varias partes de la aplicación. 

### `src/data`

En esta carpeta están los datos del proyecto.

### `src/lib`

En esta carpeta, se encuentran módulos que contienen funcionalidades no relacionadas
al DOM. Aquí se encuentra el archivo
`dataFunctions.js` que contiene las funciones que de filtros,
orden y cálculos agregados. También archivos con
las funciones que interactúan con la API de inteligencia artificial y utilidades destinadas
a almacenar datos en el local storage.

### `src/views`

Esta carpeta contiene archivos de las diferentes páginas y vistas de la aplicación.

### `src/index.html`

En este archivo HTML se encuentra la estructura básica y un elemento DOM `<div id='root'></div>` donde son renderizadas las diferentes vistas de la aplicación.

### `src/index.js`

Es el punto de partida para la Single Page Application SPA. 

### `src/router.js`

En este archivo se maneja el enrutamiento de la aplicación.

### `src/style.css`

CSS donde se agregan los estilos de la aplicación.

### `src/test`

Esta carpeta contiene los tests de las funciones y componentes. 

## 7. Objetivos de aprendizaje

Además de las funcionalidades que definimos en la sección de
[Funcionalidades](#4-funcionalidades), tu proyecto debe cumplir con los
siguientes requisitos:

### Definición del producto

Documenta brevemente tu trabajo en el archivo `README.md` de tu repositorio,
contándonos cómo fue tu proceso de diseño y cómo crees que el producto resuelve
el problema (o problemas) que tiene tu usuaria.

### Historias de usuaria

Una vez que entiendas las necesidades de tus usuarias, escribe las [Historias
de Usuaria](https://es.wikipedia.org/wiki/Historias_de_usuario) que representen
todo lo que la usuaria necesita hacer/ver. Las **Historias de Usuaria** deben
ser el resultado de tu proceso de investigación o _research_ de tus usuarias.

Asegúrate de incluir la definición de terminado (_definition of done_) y los
Criterios de Aceptación para cada una.

Usa tus historias de usuaria para planificar tus sprints dividiendo
cada historia en tareas.

En la medida de lo posible, termina una Historia de Usuaria antes de pasar
a la siguiente (cumpliendo con la Definición de Terminado y los Criterios
de Aceptación).

### Diseño de la Interfaz de Usuaria

#### Prototipo de baja fidelidad

Durante tu trabajo deberás haber hecho e iterado bocetos (_sketches_) de tu
solución usando papel y lápiz. Te recomendamos tomar fotos de todas las
iteraciones que hagas, que las subas a tu repositorio y las menciones en tu
`README.md`.

Recuerda pedir feedback de tu prototipo a tus compañeras y/o coaches.

#### Prototipo de alta fidelidad

Lo siguiente es diseñar tu Interfaz de Usuaria (UI por sus siglas en inglés -
_User Interface_). Para eso debes aprender a utilizar alguna herramienta de
diseño visual. Nosotros te recomendamos [Figma](https://www.figma.com/) que es
una herramienta que funciona en el navegador y, además, puedes crear una cuenta
gratis. Sin embargo, eres libre de utilizar otros editores gráficos como
Illustrator, Photoshop, etc.

El diseño debe representar el _ideal_ de tu solución. Digamos que es lo que
desearías implementar si tuvieras tiempo ilimitado para trabajar. Además, tu
diseño debe seguir los fundamentos de _visual design_.

Recuerda pedir feedback de tu prototipo a tus compañeras y/o coaches.

### Testeos de usabilidad

Durante el reto deberás hacer _tests_ de usabilidad con distintos usuarias,
y con base en los resultados, deberás iterar tus diseños. Cuéntanos
qué problemas de usabilidad detectaste a través de los _tests_ y cómo los
mejoraste en tu propuesta final.

### Implementación de la Interfaz de Usuaria (HTML/CSS/JS)

Luego de diseñar tu interfaz de usuaria deberás trabajar en su implementación.
**No** es necesario que construyas la interfaz exactamente como la diseñaste.
Tu tiempo de hacking es escaso, así que deberás priorizar.

Revisa [las funcionalidades](#4-funcionalidades) que el proyecto pide del interfaz.

### Pruebas unitarias

El _boilerplate_ de este proyecto no incluye Pruebas Unitarias (_tests_), así es
que  tendrás que escribirlas tú para las funciones encargadas de  _procesar_,
_filtrar_ y _ordenar_ la data, así como _calcular_ estadísticas.
Te recomendamos usar
el framework [Jest](https://jestjs.io/) para ejecutar las pruebas unitarias.
Consultar su documentación.

Tus _pruebas unitarias_ deben dar una cobertura del 70% de _statements_
(_sentencias_), _functions_ (_funciones_), _lines_ (_líneas_), y _branches_
(_ramas_) del archivo `src/dataFunctions.js` que contenga tus funciones y
está detallado en la sección de [Consideraciones técnicas](#5-consideraciones-técnicas).

## 8. Conclusión