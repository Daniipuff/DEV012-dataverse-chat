import { footer } from "../Componentes/Footer.js";
import { header } from "../Componentes/Header.js";
import { navigateTo } from "../router.js";  // Ajusté la importación del módulo "router.js"
import data from "../data/dataset.js";
import { apiKeyChatGrupal } from '../lib/API.js';

export const chat = ({ id }) => {
  const divRoot = document.querySelector('#root');
  const chatContenido = document.createElement('div');
  chatContenido.setAttribute('id', 'chatContenido');
  const chatHeader = document.createElement('div');
  chatHeader.classList.add('chat-header');
  const personajes = data.filter((x) => x.id == id);

  chatHeader.innerHTML = `
    <h1>Chat en línea</h1>
    <p id="estadoEscribiendo2"></p>
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
  chatContenido.appendChild(sendButton);

  const elHeader = header();
  divRoot.appendChild(elHeader);

  const back1Button = document.createElement('button');
  back1Button.textContent = 'Regresar';
  back1Button.setAttribute('id', 'regresarInicio');
  back1Button.classList.add('back-button');
  chatContenido.appendChild(back1Button);

  // Regresamos con navigateTo
  const regresarBoton1 = chatContenido.querySelector('button[id="regresarInicio"]');
  regresarBoton1.addEventListener('click', function () {
    navigateTo("/home");
  });

  // Adjuntamos el "<footer>"
  const footerComponent = footer();
  divRoot.appendChild(footerComponent);

  const entradaMensajeG = chatContenido.querySelector('input[class="chat-input"]');
  const cajaMensajes = chatContenido.querySelector('.chat-messages');
  const enviarChat = chatContenido.querySelector('.send-button');

  const historialMensajes = [];

  enviarChat.addEventListener('click', function () {
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
            const r2 = document.createElement('p');
            r2.classList.add('chatRespuesta2');
            r2.textContent = apiResponse;
            cajaMensajes.appendChild(r2);

            if (index < apiResponses.length - 1) {
              const lineBreak2 = document.createElement('br');
              cajaMensajes.appendChild(lineBreak2);
            }
          });
        })
        .catch(error => {
          console.error('Error fetching API responses:', error);
        })
        .finally(() => {
          // Limpiar el campo de entrada después de enviar el mensaje
          entradaMensajeG.value = '';
        });
    }
  });

  return chatContenido;
};