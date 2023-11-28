// En Details.js
export const detail = () => {
  const params = new URLSearchParams(window.location.search);
  const personajeId = params.get('id');
  console.log(params);


const tituloChatIndividual = document.createElement('div');
tituloChatIndividual.classList.add('chat-individual');
tituloChatIndividual.innerHTML = `
  <h1 class="titulo-personaje">Nombre del personaje</h1>
`;

const detalleContenido = document.createElement('div');
detalleContenido.id = 'detalleContenido';
detalleContenido.innerHTML = `
  <div class ="descripcion">
    Descripcion del personaje ...
  </div>
`;

// Agregar los elementos al cuerpo del documento
document.body.appendChild(tituloChatIndividual);
document.body.appendChild(detalleContenido);


  const chatIndivi = document.createElement('div');
  chatIndivi.setAttribute('id', 'chatIndivi');
  const chatPersonajes = document.createElement('div');
  chatPersonajes.classList.add('chat-individual');
  chatPersonajes.innerHTML = `
    <h1>Chat en línea</h1>
  `;
  chatIndivi.appendChild(chatPersonajes);
  const chatMensajes = document.createElement('div');
  chatMensajes.classList.add('chat-mensaje');
  chatIndivi.appendChild(chatMensajes);
  const chatInput2 = document.createElement('input');
  chatInput2.setAttribute('type', 'text');
  chatInput2.setAttribute('placeholder', 'Escribe tu mensaje...');
  chatInput2.classList.add('chat-input');
  chatIndivi.appendChild(chatInput2);
  const enviarBoton = document.createElement('button');
  enviarBoton.textContent = 'Enviar';
  enviarBoton.classList.add('send-button');
  chatIndivi.appendChild(enviarBoton);
  const regresarBoton = document.createElement('button');
  regresarBoton.textContent = 'Regresar';
  regresarBoton.classList.add('back-button');
  chatIndivi.appendChild(regresarBoton);
  
  detalleContenido.appendChild(chatIndivi); // Añadir el chatIndivi al detalle principal

  return detalleContenido;
};

