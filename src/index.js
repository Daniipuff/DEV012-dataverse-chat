// Importaciones
import { Error } from './views/Error.js';
import { Home } from './views/Home.js';
import { setRoutes, setRootElement, onURLChange } from './router.js';
// Definición de rutas
const routes = {
  "/": Home,
  "/home": Home,
  "/error": Error,
};
// Elemento contenedor de las vistas
const y = document.querySelector('#root');
console.log(y);
// Configuración de las rutas y el elemento raíz
setRoutes(routes);
setRootElement(y);
// Evento que se dispara cuando el DOM está completamente cargado
document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM fully loaded and parsed");
  onURLChange(window.location.pathname); // Cambia la URL según la ruta actual
  const homeContent = Home();   // Obtén el contenido de la página de inicio
  // Asegúrate de que el contenido sea un nodo antes de agregarlo al contenedor
  if (homeContent instanceof Node) {}
});
/*
TODO:
1.- Definir rutas en router.
2.- Pasar "root element" a router.
3.- Invocar el router para renderizar la vista correcta.
*/
/*import Home from './views/Home';
// ... import other views
import { setRootEl, setRoutes, onURLChange } from './router.js';
// Define your routes and their associated views
const routes = {
  '/': Home,
  // ...
};
// Assign the routes
setRoutes(routes);
// Set the root element where views will be rendered
window.addEventListener("DOMContentLoaded", () => {
  setRootEl(/* root element */