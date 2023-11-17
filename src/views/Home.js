// Importación de funciones y módulos
import { soloUnFiltro, computeStats } from "../lib/dataFunctions.js";
import { renderItems } from "../Componentes/ListItems.js";
import { footer } from "../Componentes/Footer.js";
import data from "../data/dataset.js";

// Definición del componente Home
export const Home = () => {
  //const bigContenedor = document.createElement("div");
  // Plantilla HTML del componente Home
  let homeView = document.createElement("div");
  homeView.innerHTML = `
      <div>
        <h1><img src="https://upload.wikimedia.org/wikipedia/commons/9/98/The_Simpsons_yellow_logo.svg" class="imagenTitulo"/>
          <img src="https://i.pinimg.com/originals/78/7e/10/787e1079c5d6c4232700673de8649034.png"
            class="imagenFamilia"/></h1>
      </div>
      <main>
        <input type="checkbox" id="check">
        <label for="check" class="mostrar">&#8801</label>
        <div class="menu">
            <label for="select-filter">Familia:</label>
            <select id="select-filter" data-testid="select-filter" name="familia">
              <option value="nada">...</option>
              <option value="simpson">Simpsons</option>
              <option value="flanders">Flanders</option>
              <option value="bouvier">Bouvier</option>
              <option value="wiggum">Wiggum</option>
              <option value="amistades">Amistades</option>
            </select>
            <label for="select-sort">Ordena:</label>
            <select id="select-sort" data-testid="select-sort" name="name">
              <option value="nada">...</option>
              <option value="asc">A - Z</option>
              <option value="desc">Z - A</option>
            </select>
            <label for="check" class="ocultar">&#215</label>
              <button type="button" data-testid="button-clear" id="limpiar">
              <img src="https://cdn-icons-png.flaticon.com/512/3717/3717049.png" height="30" width="30"></button>
              <button type="chat_panel " id="chat">Chat</button>
              </div>
          <div id="resultados"> 
          <button type="facts_1 " id="facts">Facts</button>
          <img src="https://play-lh.googleusercontent.com/tNr21lrG_29rtMZDz_SD4XtZwNIsRDhbIjGBvu1cPe5UjSNCD--pBMLzfp_q8BFlGtw=w600-h300-pc0xffffff-pd"
          height="50" width="80" class="foco">
          </div>
    </main>
    <div id="genero"></div>
    <div id="contenedor"></div>
      `;
  const boton = homeView.querySelector('button[id="limpiar"]');
  const dataview = homeView.querySelector("#contenedor");
  const familia = homeView.querySelector('select[data-testid="select-filter"]');
  const ordena = homeView.querySelector('select[data-testid="select-sort"]');
  const parrafo_genero = homeView.querySelector("#genero");
  const parrafo_estadistica = homeView.querySelector("#facts");
  //homeView.appendChild(homeView);
  const footerComponent = footer();
  homeView.appendChild(footerComponent);
  const datalist = renderItems(data);
  dataview.appendChild(datalist);

 
familia.addEventListener("change", filtros);
ordena.addEventListener("change", filtros);

function filtros() {
  const datalist = renderItems(data);
  dataview.innerHTML = '';
  parrafo_estadistica.innerHTML = "Facts";
  parrafo_genero.innerHTML = '';
  const claveSeleccionada = familia.value;
  const ordenSeleccionado = ordena.value;
 
const arregloDeFiltros = soloUnFiltro(data,claveSeleccionada,ordenSeleccionado,parrafo_genero);
  dataview.appendChild(renderItems(arregloDeFiltros));
}

  boton.addEventListener('click', function () {
    familia.selectedIndex = ordena.selectedIndex = 0;
    filtros();
    parrafo_estadistica.innerHTML = "Facts";
    parrafo_genero.innerHTML = '';
  });

  parrafo_estadistica.addEventListener('click', function () {
    const informacion_eades = computeStats(data);
    parrafo_estadistica.innerHTML = `¿Sabías qué...? ${informacion_eades.menoresDe30} de los personajes son menores de 30 años y ${informacion_eades.mayoresDe30} de ellos son mayores de 30 años...!!!`;
  });

  //bigContenedor.appendChild(homeView);
  return homeView;
};
