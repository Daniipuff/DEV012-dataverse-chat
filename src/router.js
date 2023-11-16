
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

const renderView = (pathname, props = {}) => {
  // clear the root element
  const root = document.getElementById('root');
  if (root) {
    root.innerHTML = '';
  // find the correct view in ROUTES for the pathname
  if (ROUTES[pathname] && typeof ROUTES[pathname] === 'function') {
    const template = ROUTES[pathname](props); 
      if (template instanceof Node) { 
        root.appendChild(template);
      } else {
        root.appendChild(ROUTES['/error'](props));
      }
    } else {
      root.appendChild(ROUTES['/error'](props));//Si no se encuentra la ruta, renderiza la vista de error
  // in case not found render the error view
  // render the correct view passing the value of props
  // add the view element to the DOM root element
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