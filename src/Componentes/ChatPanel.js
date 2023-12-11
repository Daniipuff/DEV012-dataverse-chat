import { footer } from "../Componentes/Footer.js";
import { header } from "../Componentes/Header.js";
import { navigateTo } from ".././router.js";

export const chat = () => {
  const divRoot = document.querySelector('#root');
  const chatContenido = document.createElement('div');
  chatContenido.setAttribute('id', 'chatContenido');
  const chatHeader = document.createElement('div');
  chatHeader.classList.add('chat-header');
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

  const regresarBoton1 = chatContenido.querySelector('button[id="regresarInicio"]');
  regresarBoton1.addEventListener('click', function () {
    navigateTo("/home");
  });

  // Adjuntamos el "<footer>"
  const footerComponent = footer();
  divRoot.appendChild(footerComponent);

  const entradaMensaje2 = chatContenido.querySelector('input[class="chat-input"]');
  const estadoEscribiendo2 = chatContenido.querySelector('#estadoEscribiendo2');

  const historialMensajes = [];

  entradaMensaje2.addEventListener('input', function () {
    const textoIngresado = entradaMensaje2.value.trim();
    estadoEscribiendo2.textContent = textoIngresado !== '' ? 'Está escribiendo...' : '';
  });

  sendButton.addEventListener('click', function () {
    const mensaje = entradaMensaje2.value.trim();
    if (mensaje !== '') {
      historialMensajes.push(mensaje);
      chatMessages.innerHTML = historialMensajes.map(msg => `<p>${msg}</p>`).join('<br>');
      entradaMensaje2.value = ''; 
    }
  });

  return chatContenido;
};
