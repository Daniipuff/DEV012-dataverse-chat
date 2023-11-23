
let ROUTES = {};
let rootElement = '';

export const setRootElement = (newRootElementValue) => {//Set viene de seter que nos permite setear un valor a nuestras variables
  // assign rootEl
  rootElement = newRootElementValue;
}

export const setRoutes = (newRoutesValue) => {
  // optional Throw errors if routes isn't an object
    // optional Throw errors if routes doesn't define an /error route
  if(typeof newRoutesValue === "object" && newRoutesValue["/error"]){
    if(newRoutesValue["/error"]){
      ROUTES = newRoutesValue;
    }
  }
  // assign ROUTES
}

const queryStringToObject = (queryString) => {//Esta funcion es opcional
    //Partes de URL 
  // convert query string to URLSearchParams
  // convert URLSearchParams to an object
  // return the object
}

// RENDERVIEW función que se encarga de limpiar el contenido actual 
// del elemento raíz, buscar la vista correspondiente a la ruta proporcionada
// en ROUTES, y renderizar esa vista en el DOM. Si la ruta no se encuentra, 
// se renderiza la vista de error.

const renderView = (pathname, props = {}) => {
  //Limpiar el elemento raíz (root):
  const root = document.getElementById('root');
  if (root) {
    root.innerHTML = '';
  //Buscar la vista correcta en ROUTES:
  if (ROUTES[pathname] && typeof ROUTES[pathname] === 'function') {
  //Renderizar la vista correcta:
    const template = ROUTES[pathname](props); 
  //Agregar la vista al DOM:
      if (template instanceof Node) { 
        root.appendChild(template);
      } else {
  //Manejar rutas no encontradas:
        root.appendChild(ROUTES['/error'](props));
      }
    } else {
      root.appendChild(ROUTES['/error'](props));

   }
  }
};


export const navigateTo = (pathname, props={}) => {//principal funcion actualizar el historial pushState y renderizar la vista
  // update window history with pushState
  const URLvisited = window.location.origin + pathname;//nos devuelve a la pagina principal dejando registro origin para incluir protocolo y host
  history.pushState({},"",URLvisited);// guarda el historial de lo que va ocurriendo 

  // render the view with the pathname and props
  renderView(pathname, props);
}

export const onURLChange = () => {
  const pathnameVista = window.location.pathname;
  // parse the location for the pathname and search params
  // convert the search params to an object
  // render the view with the pathname and object
  renderView(pathnameVista);
};
document.addEventListener("DOMContentLoaded", onURLChange);
window.addEventListener("popstate", onURLChange);