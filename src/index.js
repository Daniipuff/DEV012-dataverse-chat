import {Home} from './views/Home.js'; 
import { setRoutes, newRootElementValue,onURLChange } from './router.js';//necesitamos exportar el componente para interactuar con la rutas

const routes = {//Se definen lo que esta en el router 
    "/": Home,
    "/home": Home,
    "/error": 'some', 
  
}

const viewContainer = document.getElementById('root');
setRoutes(routes);//toma la ruta y llevarla a router.js y lo define como un objeto 
newRootElementValue(viewContainer);

document.addEventListener("DOMContentLoaded", (event) => {
  console.log("DOM fully loaded and parsed");
  onURLChange(event.target.location.pathname);
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