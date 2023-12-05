import { footer } from "../Componentes/Footer.js";
import { header } from "../Componentes/Header.js";
import { navigateTo } from ".././router.js";
export const componenteApiKey = () => {
    const contenedorApiKey = document.createElement('div');
    contenedorApiKey.setAttribute('class', 'contenedor-api-key');

    let tituloApiKey = document.createElement('h3');
    tituloApiKey.setAttribute('class','contenedor-api-key');
    tituloApiKey.innerHTML = 'Api Key';
    contenedorApiKey.appendChild(tituloApiKey);

    
    let entradaContraseña = document.createElement('input');
    entradaContraseña.setAttribute('class', 'inputKey');
    entradaContraseña.setAttribute('type', 'password');
    entradaContraseña.setAttribute('placeholder', 'Ingresa tu Api Key');
    contenedorApiKey.appendChild(entradaContraseña);

    
    let botonAceptar = document.createElement('button');
    botonAceptar.setAttribute('class', 'boton-aceptar');
    botonAceptar.innerHTML = 'Aceptar';
    botonAceptar.addEventListener('click', manejarClicEnAceptar);
    contenedorApiKey.appendChild(botonAceptar);

    let botonRegresar = document.createElement('button');
    botonRegresar.setAttribute('id', 'boton-regresar');
    botonRegresar.innerHTML = 'Regresar';
    contenedorApiKey.appendChild(botonRegresar);

    function manejarClicEnAceptar() {
        
        var valorContraseña = entradaContraseña.value;
        alert('Contraseña ingresada: ' + valorContraseña);
    }
    // Agrega el header directamente al principio de chatContenido
    const elHeader = header();
    contenedorApiKey.insertBefore(elHeader, contenedorApiKey.firstChild);

    // Adjuntamos el "<footer>"
    const footerComponent = footer();
    contenedorApiKey.appendChild(footerComponent);

    const regresarBoton2 = contenedorApiKey.querySelector('button[id="boton-regresar"]');
    regresarBoton2.addEventListener('click', function () {
      navigateTo("/home");
    });
    return contenedorApiKey;
};

/*import OpenAI from "openai";

const openai = new OpenAI({
  organization: 'YOUR_ORG_ID',
});

curl https://api.openai.com/v1/chat/completions \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $OPENAI_API_KEY" \
  -d '{
     "model": "gpt-3.5-turbo",
     "messages": [{"role": "user", "content": "Say this is a test!"}],
     "temperature": 0.7
   }'

   {
    "id": "chatcmpl-abc123",
    "object": "chat.completion",
    "created": 1677858242,
    "model": "gpt-3.5-turbo-1106",
    "usage": {
        "prompt_tokens": 13,
        "completion_tokens": 7,
        "total_tokens": 20
    },
    "choices": [
        {
            "message": {
                "role": "assistant",
                "content": "\n\nThis is a test!"
            },
            "finish_reason": "stop",
            "index": 0
        }
    ]
}*/