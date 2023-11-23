
export const Error = () => {
const error = document.createElement('div');
error.setAttribute('id', 'error404');
error.innerHTML = `
 <div class="texto">
 <h1 class="doh"> D’OH! </h1>
 <p class="p">Página no encontrada.</p>
 </div>
  <div class="donut">
  <img src= "https://raw.githubusercontent.com/Daniipuff/DEV012-dataverse-chat/main/Recursos%20visuales/404.png">
  </div>

`
return error

     
  };
