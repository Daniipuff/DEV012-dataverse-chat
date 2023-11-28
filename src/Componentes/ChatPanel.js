import { footer } from "../Componentes/Footer.js";
import { header } from "../Componentes/Header.js";

export const chat = () => {
  const chatContenido = document.createElement('div');
  chatContenido.setAttribute('id', 'chatContenido');
  const chatHeader = document.createElement('div');
  chatHeader.classList.add('chat-header');
  chatHeader.innerHTML = `
    <h1>Chat en línea</h1>
    
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
  // Agrega el header directamente al principio de chatContenido
  const elHeader = header();
  chatContenido.insertBefore(elHeader, chatContenido.firstChild);

  const back1Button = document.createElement('button');
  back1Button.textContent = 'Regresar';
  back1Button.classList.add('back-button');
  chatContenido.appendChild(back1Button);

  // Adjuntamos el "<footer>"
  const footerComponent = footer();
  chatContenido.appendChild(footerComponent);

  return chatContenido;
};

