
export const Error = () => {
const error = document.createElement('div');
error.setAttribute('id', 'error404');
error.innerHTML = `

 <h1 class="doh"> D’OH! </h1>
 <p class="p">Página no encontrada.</p>
  <div class="donut">
  <img src= "https://raw.githubusercontent.com/Paulinakbrr/DEV012-dataverse-chat/main/Recursos%20visuales/donut.png">
  </div>

`
return error

     
  };
