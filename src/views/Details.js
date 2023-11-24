// En Details.js
export const detail = () => {
    const params = new URLSearchParams(window.location.search);
    const personajeId = params.get('id');
    console.log(params);
  
    // Lógica para obtener información del personaje según el id y mostrarla
  
    const detailContenido = document.createElement('div');
    detailContenido.innerHTML = `
      <h1>Detalles del personaje ${personajeId}</h1>
      <!-- Agrega aquí la información específica del personaje -->
    `;
  
    return detailContenido;
  };
  