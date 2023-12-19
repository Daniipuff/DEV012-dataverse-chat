import { footer } from "../Componentes/Footer.js";
import { header } from "../Componentes/Header.js";
import { navigateTo } from "../router.js";
import data from "../data/dataset.js";
import { apiKeyChatGrupal } from '../lib/API.js';

export const chat = ({ id }) => {
  const divRoot = document.querySelector('#root');

  const chatContenido = document.createElement('div');
  chatContenido.setAttribute('id', 'chatContenido');

  const chatHeader = document.createElement('div');
  chatHeader.classList.add('chat-header');
  const personajes = data.filter((x) => x.id === id);

  chatHeader.innerHTML = `
    <h1>Chat en línea</h1>
    <p id="estadoEscribiendo2" style="display: none;">Esta escribiendo...</p>
  `;
  chatContenido.appendChild(chatHeader);

  const chatMessages = document.createElement('div');
  chatMessages.classList.add('chat-messages');
  chatContenido.appendChild(chatMessages);

  const chatInput = document.createElement('input');
  chatInput.setAttribute('type', 'text');
  chatInput.setAttribute('placeholder', 'Escribe tu mensaje...');
  chatInput.classList.add('chat-input');
  chatContenido.appendChild(chatInput);

  const sendButton = document.createElement('button');
  sendButton.textContent = 'Enviar';
  sendButton.classList.add('send-button');
  sendButton.setAttribute('type', 'button');
  chatContenido.appendChild(sendButton);

  const elHeader = header();
  divRoot.appendChild(elHeader);

  const back1Button = document.createElement('button');
  back1Button.textContent = 'Regresar';
  back1Button.setAttribute('id', 'regresarInicio');
  back1Button.classList.add('back-button');
  chatContenido.appendChild(back1Button);

  const regresarBoton1 = chatContenido.querySelector('#regresarInicio');
  regresarBoton1.addEventListener('click', () => {
    navigateTo("/home");
  });

  const footerComponent = footer();
  divRoot.appendChild(footerComponent);

  const entradaMensajeG = chatContenido.querySelector('.chat-input');
  const cajaMensajes = chatContenido.querySelector('.chat-messages');
  const enviarChat = chatContenido.querySelector('.send-button');
  const escribiendoMensaje = chatContenido.querySelector('#estadoEscribiendo2');
  const historialMensajes = [];

  enviarChat.addEventListener('click', () => {
    escribiendoMensaje.style.display = 'block';

    const textoIngresadoG = ' ' + entradaMensajeG.value.trim();

    if (textoIngresadoG !== '') {
      const p2 = document.createElement('p');
      p2.classList.add('chatUser2');
      p2.textContent = textoIngresadoG;
      cajaMensajes.appendChild(p2);

      const lineBreak = document.createElement('br');
      cajaMensajes.appendChild(lineBreak);

      historialMensajes.push(textoIngresadoG);

      const answers = data.map(personaje => apiKeyChatGrupal(textoIngresadoG, personaje));

      Promise.all(answers)
        .then(apiResponses => {
          apiResponses.forEach((apiResponse, index) => {
            const r2 = document.createElement('div');
            r2.classList.add('chatRespuesta2');
            const persona = personajes.length > 0 ? personajes[0] : { imageUrl: '' };
            r2.innerHTML = `
              <img src="${persona.imageUrl}" class="imagenRespuesta" id="imagenRespuesta${index}">
              <p>${apiResponse}</p>
            `;
            cajaMensajes.appendChild(r2);

            if (index < apiResponses.length - 1) {
              const lineBreak2 = document.createElement('br');
              cajaMensajes.appendChild(lineBreak2);
            }
          });
        })
        .catch(error => {
          console.error('Error fetching API responses:', error);
          const errorMensaje = document.createElement('p');
          errorMensaje.classList.add('chatRespuesta2');
          errorMensaje.textContent = 'Ups...!!! Lo siento, hubo un problema al procesar tu solicitud. Por favor, inténtalo de nuevo más tarde ó contacta a tu proveedor';
          cajaMensajes.appendChild(errorMensaje);
        })
        .finally(() => {
          escribiendoMensaje.style.display = 'none';
          entradaMensajeG.value = '';
        });
    }
  });

  return chatContenido;
};
