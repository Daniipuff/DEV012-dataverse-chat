import data from "../data/dataset.js";
import { header } from "../Componentes/Header.js";
import { footer } from "../Componentes/Footer.js";
import { navigateTo } from "../router.js";
import { apiKeyChat } from "../lib/API.js";

function updateText() {}

export const detail = ({ id }) => {
  const detailContenido = document.createElement("div");
  detailContenido.setAttribute("class", "cajaFuerte");

  const personaje = data.filter((x) => x.id === id);

  if (personaje.length > 0) {
    const persona = personaje[0];
    detailContenido.innerHTML = `
        <section class="frontis-chat"></section>
        <div id="caja">
            <div id="detalles">
                <h1 class="h1"> Descripción</h1>
                <p class="uno">Soy ${persona.name + ' y tengo '}${persona.edad}...</p>
                <p class="uno">Nací en ${persona.facts.placeOfBirth}.</p>
                <p class="uno">${persona.description}</p>
            </div>    
            <div id="text-chat">
                <p id="estadoEscribiendo"></p>
                <div id="entrada-mostrada">
                    
                </div>
                ${persona.name}
                <p id="escribiendoMensaje" style="display: none;">Esta escribiendo...</p>
                <img src="${persona.imageUrl}" id="icono-chat"></img>
                <div id="chat-magic"></div>
                <input id="inputTextoChat" type="text" onkeyup="updateText(this.value)" class="chatinput" placeholder="Escribe tu mensaje...">
                </input>
                <button id="generar" class="sendbutton">
                    <img class="senddbbuton" src="https://cdn4.iconfinder.com/data/icons/core-ui-filled-rounded/32/filled_rounded_send-512.png" height="40" width="40">
                </button>
            </div>
        </div>    
        <button class="backbutton" id="regresarHome">Regresar </button>
    `;

    const entradaMensaje = detailContenido.querySelector('input[class="chatinput"]');
    const chatMagic = detailContenido.querySelector('#chat-magic');
    const generarBoton = detailContenido.querySelector('#generar');
    const escribiendoMensaje = detailContenido.querySelector('#escribiendoMensaje');

    generarBoton.addEventListener('click', function () {
      const textoIngresado = entradaMensaje.value.trim();

      if (textoIngresado !== '') {
        const p = document.createElement('p');
        p.classList.add('chatUser');
        p.textContent = textoIngresado;
        chatMagic.appendChild(p);

        // Mostrar "Esta escribiendo..." después de hacer clic en el botón
        escribiendoMensaje.style.display = 'block';

        apiKeyChat(textoIngresado, persona)
          .then((data) => {
            // Remover el mensaje de "Esta escribiendo..." cuando se recibe la respuesta
            escribiendoMensaje.style.display = 'none';

            const r = document.createElement('p');
            r.classList.add('chatRespuesta');
            r.textContent = data.choices[0].message.content;
            chatMagic.appendChild(r);

            entradaMensaje.value = "";
          })
          .catch((error) => {
            // Manejar errores y mostrar mensaje de error
            console.error('Error al obtener respuesta:', error);

            const errorMensaje = document.createElement('p');
            errorMensaje.classList.add('chatRespuesta2');
            errorMensaje.textContent = 'Ups...!!! Lo siento, hubo un problema al procesar tu solicitud. Por favor, inténtalo de nuevo más tarde ó contacta a tu proveedor';
            chatMagic.appendChild(errorMensaje);

            // Remover el mensaje de "Esta escribiendo..." en caso de error
            escribiendoMensaje.style.display = 'none';
          });
      }
    });

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

    window.updateText = updateText;
    return detailContenido;
  }
};
