import { footer } from "../Componentes/Footer.js";
import { header } from "../Componentes/Header.js";
import { navigateTo } from "../router.js";  
import data from "../data/dataset.js";
import { apiKeyChatGrupal } from '../lib/API.js';

// Función principal del chat
export const chat = ({ id }) => {
  // obtenemos el elemento raiz del documento
  const divRoot = document.querySelector('#root');

  // creamos el contenedor principal del chat
  const chatContenido = document.createElement('div');
  chatContenido.setAttribute('id', 'chatContenido');

  //creamos el encabezado del chat
  const chatHeader = document.createElement('div');
  chatHeader.classList.add('chat-header');
  // Esta buscando un objeto en la data cuya propiedad id coincida con el valor de id.
  const personajes = data.filter((x) => x.id == id);

  chatHeader.innerHTML = `
    <h1>Chat en línea</h1>
    <p id="estadoEscribiendo2"></p>
  `;
  chatContenido.appendChild(chatHeader);

  // creamos el contenedor de mensajes del chat
  const chatMessages = document.createElement('div');
  chatMessages.classList.add('chat-messages');
  chatContenido.appendChild(chatMessages);

  // creamos el campo de entrada de mensajes con input
  const chatInput = document.createElement('input');
  chatInput.setAttribute('type', 'text');
  chatInput.setAttribute('placeholder', 'Escribe tu mensaje...');
  chatInput.classList.add('chat-input');
  chatContenido.appendChild(chatInput);

  // creamos el boton para enviar los mensajes
  const sendButton = document.createElement('button');
  sendButton.textContent = 'Enviar';
  sendButton.classList.add('send-button');
  sendButton.setAttribute('type', 'button'); // asegura que el tipo de sendButton sea un botón y evitar envio automatico del formulario
  chatContenido.appendChild(sendButton);

  // Agrega el encabezado al elemento raíz del documento
  const elHeader = header();
  divRoot.appendChild(elHeader);

  //creamos el boton para regresar
  const back1Button = document.createElement('button');
  back1Button.textContent = 'Regresar';
  back1Button.setAttribute('id', 'regresarInicio');
  back1Button.classList.add('back-button');
  chatContenido.appendChild(back1Button);

  //Regresamos a la pagina de inicio con navigateTo
  const regresarBoton1 = chatContenido.querySelector('#regresarInicio');
  regresarBoton1.addEventListener('click', () => {
    navigateTo("/home");
  });

  // Adjunta el "<footer>"
  const footerComponent = footer();
  divRoot.appendChild(footerComponent);

  const entradaMensajeG = chatContenido.querySelector('.chat-input');
  const cajaMensajes = chatContenido.querySelector('.chat-messages');
  const enviarChat = chatContenido.querySelector('.send-button');  
  const historialMensajes = [];

  //Agregamos un evento al boton de enviar mensajes
  enviarChat.addEventListener('click', () => {
    const textoIngresadoG = ' ' + entradaMensajeG.value.trim();

    if (textoIngresadoG !== '') {
      //creamos un elemento de parrafo para el mensaje del usuario
      const p2 = document.createElement('p');
      p2.classList.add('chatUser2');
      p2.textContent = textoIngresadoG;
      cajaMensajes.appendChild(p2);

      //Ponemos un salto de linea para los parrafos
      const lineBreak = document.createElement('br');
      cajaMensajes.appendChild(lineBreak);

      //Se agrega el mensaje del usuario al historial
      historialMensajes.push(textoIngresadoG);

      //Hacemos interacion con la Api.js para tener respuesta
      const answers = data.map(personaje => apiKeyChatGrupal(textoIngresadoG, personaje));

      Promise.all(answers)
        .then(apiResponses => {
          apiResponses.forEach((apiResponse, index) => {
            //creamos el contenedor para la respuesta
            const r2 = document.createElement('div');
            r2.classList.add('chatRespuesta2');

            //Validamos que "personajes" tenga al menos un elemento antes de acceder a la propiedad
            const persona = personajes.length > 0 ? personajes[0] : { imageUrl: '' };

            //Ponemos la imagen y el texto de la respuesta API al contenedor pero no sirve :( 
            r2.innerHTML = `
              <img src="${persona.imageUrl}" class="imagenRespuesta" id="imagenRespuesta${index}">
              <p>${apiResponse}</p>
            `;

            // adjunta el contenedor al area de mensajes
            cajaMensajes.appendChild(r2);

            //Damos un salto de linea si no es la ultima respuesta
            if (index < apiResponses.length - 1) {
              const lineBreak2 = document.createElement('br');
              cajaMensajes.appendChild(lineBreak2);
            }
          });
        })
        .catch(error => {
          console.error('Error fetching API responses:', error);

          //mensaje de error para el usuario
          const errorMensaje = document.createElement('p');
          errorMensaje.classList.add('chatRespuesta2');
          errorMensaje.textContent = 'Ups...!!! Lo siento, hubo un problema al procesar tu solicitud. Por favor, inténtalo de nuevo más tarde ó contacta a tu proveedor';
          cajaMensajes.appendChild(errorMensaje);
        })
        //.finally se utiliza para especificar que codigo que se ejecutara sin importar si la promesa se resuelve correctamente
        .finally(() => {
          // Limpia el campo de entrada despues de enviar el mensaje
          entradaMensajeG.value = '';
        });
    }
  });

  return chatContenido;
};
