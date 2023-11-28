import { footer } from "../Componentes/Footer.js";
import { header } from "../Componentes/Header.js";
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

    return contenedorApiKey;
};

