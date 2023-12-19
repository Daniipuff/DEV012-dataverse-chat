let ROUTES = {};
let rootElement = '';
export const setRootElement = (newRootElementValue) => {//Set viene de seter que nos permite setear un valor a nuestras variables
  // assign rootEl
  rootElement = newRootElementValue;
}
export const setRoutes = (newRoutesValue) => {
  // optional Throw errors if routes isn't an object
  // optional Throw errors if routes doesn't define an /error route
  ROUTES = newRoutesValue;
  // assign ROUTES
}
const queryStringToObject = (queryString) => {
  // Si la cadena de consulta está vacía, devuelve un objeto vacío
  if (!queryString) {
    return {};
  }
  // Corta el signo de interrogación "?" al principio de la cadena de consulta, si está presente
  const queryStringWithoutQuestionMark = queryString.startsWith('?')
    ? queryString.slice(1)
    : queryString;
  // Convierte la cadena de consulta en un objeto usando URLSearchParams
  const urlSearchParams = new URLSearchParams(queryStringWithoutQuestionMark);
  // Inicializa un objeto vacío para almacenar los pares clave-valor
  const resultObject = {};
  // Itera sobre cada par clave-valor en URLSearchParams y agrega al objeto resultante
  for (const [key, value] of urlSearchParams.entries()) {
    // Puedes realizar algún procesamiento adicional aquí si es necesario
    // Agrega el par clave-valor al objeto resultante
    resultObject[key] = value;
  }
  // Devuelve el objeto resultante
  return resultObject;
};

// Ejemplo de uso:
const ejemploURL = "https://ejemplo.com/ruta?param1=valor1&param2=valor2";
const queryObject = queryStringToObject(new URL(ejemploURL).search);

console.log(queryObject);

// RENDERVIEW función que se encarga de limpiar el contenido actual
// del elemento raíz, buscar la vista correspondiente a la ruta proporcionada
// en ROUTES, y renderizar esa vista en el DOM. Si la ruta no se encuentra,
// se renderiza la vista de error.
const renderView = (pathname, props = {}) => {
  //Limpiar el elemento raíz (root):
  const root = rootElement;
  pathname = pathname.toLowerCase();
  if (root) {
    root.innerHTML = '';
    //Buscar la vista correcta en ROUTES:
    if (ROUTES[pathname]) {
      //Renderizar la vista correcta:
      const template = ROUTES[pathname](props);
      //Agregar la vista al DOM:
      root.appendChild(template);
    } else {
      //Manejar rutas no encontradas:
      root.appendChild(ROUTES['/error'](props));
    }
  }
};
export const navigateTo = (pathname, props = {}) => {
  //principal funcion actualizar el historial pushState y renderizar la vista
  const URLvisited = window.location.origin + pathname;
  //nos devuelve a la pagina principal dejando registro origin para incluir protocolo y host
  history.pushState({}, "", URLvisited);
  // guarda el historial de lo que va ocurriendo
  renderView(pathname, props);
}
export const onURLChange = () => {
  const pathnameVista = window.location.pathname;//nos da la parte del pathname de la URL actual, que es la parte de la URL despues del nombre de dominio
  // parse the location for the pathname and search params
  // convert the search params to an object
  // render the view with the pathname and object
  renderView(pathnameVista);//renderiza la vista
  /*const routeHandler = ROUTES[pathnameVista] || ROUTES["/error"];//busca a ROUTES una función controladora correspondiente al pathnameVista y si no se encuentra una ruta específica, utiliza una ruta de error
  const content = routeHandler(); //llama a la funcion y almacena el resultado
  renderContent(content);//llama a la funcion y le pasa el valor anterior */
};
window.onpopstate = onURLChange;