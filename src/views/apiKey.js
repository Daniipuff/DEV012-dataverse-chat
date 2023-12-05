import { footer } from "../Componentes/Footer.js";
import { header } from "../Componentes/Header.js";
import { navigateTo } from ".././router.js";


const contrasenaCorrecta = "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";

export const componenteApiKey = () => {
    let contenedorApiKey = document.createElement("div");
    contenedorApiKey.setAttribute("class", "contenedor-api-key");
    contenedorApiKey.innerHTML = `
        <h3 class="contenedor-api-key">Por favor ingresa tu Api key...!!</h3>
        <input  class="inputKey" type="password" placeholder="Ingresa tu Api Key"></input>
        <button class="boton-aceptar">Aceptar</button>
        <button id="boton-regresar">Regresar</button>
    `;

    const botonAceptar = contenedorApiKey.querySelector('button[class="boton-aceptar"]');
    botonAceptar.addEventListener('click', manejarClicEnAceptar);
    contenedorApiKey.appendChild(botonAceptar);

    function manejarClicEnAceptar() {

        var valorContraseña = contenedorApiKey.querySelector('.inputKey').value;

        if (valorContraseña === contrasenaCorrecta) {
            alert('Contraseña correcta. Acceso permitido. REGRESAR AL INICIO');
   
        } else {
            alert('Contraseña incorrecta. Acceso denegado.');
        }
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
