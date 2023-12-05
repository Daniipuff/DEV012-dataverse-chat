import data from "../data/dataset.js";
import { header } from "../Componentes/Header.js";
import { footer } from "../Componentes/Footer.js";
import { navigateTo } from ".././router.js";

export const detail = ({ id }) => {
  let detailContenido = document.createElement("div");
  detailContenido.setAttribute("class", "cajaFuerte");

  const params = new URLSearchParams(window.location.search);

  const personaje = data.filter((x) => x.id == id);

  if (personaje.length > 0) {
    const persona = personaje[0];
    detailContenido.innerHTML = `
        <section class="frontis-chat"></section>
        <div id="caja">
            <div id="detalles">
                <img src=${persona.imageUrl} class="profile"></img>
                <h1 class="h1"> Descripción</h1>
                <p class="uno">Soy ${persona.name +' y tengo '}${persona.edad}...</p>
                <p class="uno">Nací en ${persona.facts.placeOfBirth}.</p>
                <p class="uno">${persona.description}</p>
            </div>    
            <div id="text-chat">
                ${persona.name}
                <div id="icono-chat">
                    <img src=${persona.imageUrl}></img>
                </div>
                <div id="chat-magic"></div>
                <input id="prompt" type="text" class="chatinput" placeholder="Escribe tu mensaje...">
                </input>
                <p id="estadoEscribiendo"></p>
                <button id ="generar"class="sendbutton">
                    <img class="senddbbuton" src ="https://cdn4.iconfinder.com/data/icons/core-ui-filled-rounded/32/filled_rounded_send-512.png" height="40" width="40">
                </button>
            </div>
        </div>    
        <button class="backbutton" id="regresarHome">Regresar </button>
    `;

    const entradaMensaje = detailContenido.querySelector('input[class="chatinput"]');
    const estadoEscribiendo = detailContenido.querySelector('#estadoEscribiendo');
    const chatMagic = detailContenido.querySelector('#chat-magic');

    entradaMensaje.addEventListener('input', function () {
        const textoIngresado = entradaMensaje.value.trim();
        estadoEscribiendo.textContent = textoIngresado !== '' ? 'Está escribiendo...' : '';
    });
  }

  // Adjuntamos el "<header>"
  const encabezado = detailContenido.querySelector('.frontis-chat');
  const elHeader = header();
  encabezado.appendChild(elHeader);

  // Adjuntamos el "<footer>"
  const footerComponent = footer();
  detailContenido.appendChild(footerComponent);

  const regresarBoton = detailContenido.querySelector('button[id="regresarHome"]');
  regresarBoton.addEventListener('click', function () {
    navigateTo("/home");
  });

  return detailContenido;
};
