import { footer } from "../Componentes/Footer.js";
import { header } from "../Componentes/Header.js";
import { navigateTo } from ".././router.js";
import data from "../data/dataset.js";
import { apiKeyChatGrupal } from '../lib/API.js';

export const chat = ({ id }) => {
  const divRoot = document.querySelector('#root');
  const chatContenido = document.createElement('div');
  chatContenido.setAttribute('id', 'chatContenido');
  const chatHeader = document.createElement('div');
  chatHeader.classList.add('chat-header');

  const personajes = data.filter((x) => x.id == id);
  // console.log(personajes);

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
  //Regresamos con navigateTo
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
  //creamos un arreglo vacio para almacenar el historial posteriormente
  const historialMensajes = [];

  enviarChat.addEventListener('click', function () {
    //el valor ingresado elimina los espacios en blanco al principio y al final del texto con el .trim
    const textoIngresadoG = 'yo: ' + entradaMensajeG.value.trim();
    //condicion que valida si.."no es igual a"
    if (textoIngresadoG !== '') {
      //metodo que agrega un nuevo elemento al final del array, cada vez que esta línea se ejecuta, se añade el ultimo mensaje al array, lo que permite rastrear los mensajes anteriores en el historial.
      historialMensajes.push(textoIngresadoG);
      //recorre cada el elemento del array y crea un parrafo, con join une la cadena y con br damos un salto de linea
      cajaMensajes.innerHTML = historialMensajes.map(msg => `<p>${msg}</p>`).join('<br>');


      const answers = data.map(personajes => apiKeyChatGrupal(textoIngresadoG, personajes))
      // console.log(answers);
      Promise.all(answers)
        .then(apiResponse => {

          historialMensajes.push(apiResponse);
          //recorre cada el elemento del array y crea un parrafo, con join une la cadena y con br damos un salto de linea
          cajaMensajes.innerHTML = historialMensajes.map(msg => `<p> ${msg}</p>`).join('<br>');
          entradaMensajeG.value = "";

        });
      /*contenedor .appendChild y lo que recibes 
      donde se construye la promesa en fetch 
      vista appendChild
      en api 
      result retorna un nodo document.createElement p .textContent retur p */
      /* .then((apiResponse) => {
         //metodo que agrega un nuevo elemento al final del array, cada vez que esta línea se ejecuta, se añade el ultimo mensaje al array, lo que permite rastrear los mensajes anteriores en el historial.
         historialMensajes.push(apiResponse);
         //recorre cada el elemento del array y crea un parrafo, con join une la cadena y con br damos un salto de linea
         cajaMensajes.innerHTML = historialMensajes.map(msg => `<p> ${msg}</p>`).join('<br>');
         entradaMensajeG.value = "";
       })
       .catch((error) => {
         console.error('Error al obtener respuesta:', error);
       });*/
    }
  });

  return chatContenido;
};
