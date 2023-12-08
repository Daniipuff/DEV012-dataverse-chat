import { navigateTo } from "../router.js"; 
export const Error = () => {
  const error = document.createElement('div');
  error.setAttribute('id', 'error404');
  error.innerHTML = `
   <div class="texto">
   <h1 class="doh"> D’OH! </h1>
   <p class="p">Página no encontrada. Error 404.</p>
   <button class="volverInicio"> Regresar a Inicio</button>
  

   </div>
    <div class="donut">
    <img class="manito"src= "https://raw.githubusercontent.com/Daniipuff/DEV012-dataverse-chat/main/Recursos%20visuales/404.png">
    </div>
  
  `
  const parrafoInicio = error.querySelector('button[class="volverInicio"]');
  parrafoInicio.addEventListener('click', function () {
    navigateTo("/home");
  });

  return error

    };