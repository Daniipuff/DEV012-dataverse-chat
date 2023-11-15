import { Error } from './views/Error.js';
import { Home } from './views/Home.js';
import { setRoutes, setRootElement, onURLChange } from './router.js';

const routes = {
  "/": Home,
  "/error": Error,

};

const viewContainer = document.getElementById('root');

setRoutes(routes);
setRootElement(viewContainer);

document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM fully loaded and parsed");
  onURLChange(window.location.pathname);
  const homeContent = Home();//nos da el contenido de home
  if (homeContent instanceof Node) {
    viewContainer.appendChild(homeContent);
  }
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