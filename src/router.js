
let ROUTES = {};
let rootElement = '';

export const setRootElement = (newRootElementValue) => {
  // assign rootEl
  newRootElement = newRootElementValue;
}

export const setRoutes = (newRoutesValue) => {
  // optional Throw errors if routes isn't an object
    // optional Throw errors if routes doesn't define an /error route
  if(typeof newRoutesValue === "object"){
    if(newRoutesValue["/error"]){
      ROUTES = newRoutesValue;
    }
  }
  // assign ROUTES
}

const queryStringToObject = (queryString) => {
    //Partes de URL 
  // convert query string to URLSearchParams
  // convert URLSearchParams to an object
  // return the object
}

const renderView = (pathname, props={}) => {
  // clear the root element
  const root = rootElement;
  root.innerHTML = '';
  // find the correct view in ROUTES for the pathname
  if(ROUTES[pathname]){//Si router contiene pathname nuestra la vista 
    const template = ROUTES[pathname]();//esta es la vista 
    root.appenchild(template);
  }else{
    root.appenchild(ROUTES['/error']());
  }
  // in case not found render the error view
  // render the correct view passing the value of props
  // add the view element to the DOM root element
} 

export const navigateTo = (pathname, props={}) => {//principal funcion actualizar el historial pushState y renderizar la vista
  // update window history with pushState
  const URLvisited = window.location.hostname + pathname; //nos devuelve a la pagina principal dejando registro
  history.pushState({},"",URLvisited);// guarda el historial de lo que va ocurriendo 

  // render the view with the pathname and props
  renderView(pathname, props);
}

export const onURLChange = (pathname) => {
  // parse the location for the pathname and search params
  // convert the search params to an object
  // render the view with the pathname and object
  renderView(pathname);
}
