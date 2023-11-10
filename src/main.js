import { renderItems } from './view.js';
import { computeStats,soloUnFiltro } from './dataFunctions.js';
import data from './data/dataset.js';

const dataview = document.getElementById('root');
let datalist = renderItems(data);
dataview.appendChild(datalist);

const boton = document.querySelector('button[id="limpiar"]');
const familia = document.querySelector('select[data-testid="select-filter"]');
const ordena = document.querySelector('select[data-testid="select-sort"]');
const parrafo_genero = document.getElementById('genero');

boton.addEventListener('click', function (event) {
  familia.selectedIndex = event.target.value;
  ordena.selectedIndex = event.target.value;
  const datalist = renderItems(data);
  dataview.innerHTML = '';
  dataview.appendChild(datalist);
  parrafo_estadistica.innerHTML = "Facts";
  parrafo_genero.innerHTML = '';
});

familia.addEventListener("change", filtros);
ordena.addEventListener("change", filtros);

function filtros() {
  dataview.innerHTML = '';
  parrafo_estadistica.innerHTML = "Facts";
  parrafo_genero.innerHTML = '';
  const claveSeleccionada = familia.value;
  const ordenSeleccionado = ordena.value;

  const arregloDeFiltros = soloUnFiltro(data,claveSeleccionada,ordenSeleccionado,parrafo_genero);
  dataview.appendChild(renderItems(arregloDeFiltros));
}

const parrafo_estadistica = document.getElementById('facts');
parrafo_estadistica.addEventListener('click', function () {
  const informacion_eades = computeStats(data);
  parrafo_estadistica.innerHTML = "¿Sabías qué...? " + informacion_eades.menoresDe30 + " de los personajes son menores de 30 años" + " y " + informacion_eades.mayoresDe30 + " de ellos son mayores de 30 años...!!!";
});