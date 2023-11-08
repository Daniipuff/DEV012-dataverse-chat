import { filterData } from './dataFunctions.js';
import { renderItems } from './view.js';
import { sortData } from './dataFunctions.js';
import { computeStats } from './dataFunctions.js';
import { generoFacts } from './dataFunctions.js';
import data from './data/dataset.js';


const dataview = document.getElementById('root');
let datalist = renderItems(data);
dataview.appendChild(datalist);

const boton = document.querySelector('button[id="limpiar"]');
const limpiofiltro1 = document.querySelector('select[data-testid="select-filter"]');
const limpiofiltro2 = document.querySelector('select[data-testid="select-sort"]');

boton.addEventListener('click', function (event) {
  limpiofiltro1.selectedIndex = event.target.value;
  limpiofiltro2.selectedIndex = event.target.value;
  const datalist = renderItems(data);
  dataview.innerHTML = '';
  dataview.appendChild(datalist);
  parrafo_estadistica.innerHTML = "Facts";
  parrafo_genero.innerHTML = '';
});


const filtroClave = document.querySelector('select[data-testid="select-filter"]');//nos da el valor seleccionado
const filtroOrden = document.querySelector('select[data-testid="select-sort"]');//nos da el valor seleccionado
const parrafo_genero = document.getElementById('genero');

function soloUnFiltro() {//checa si hemos seleccionado un algo o algo vacio
  const claveSeleccionada = filtroClave.value;
  const ordenSeleccionado = filtroOrden.value;
  dataview.innerHTML = '';
  parrafo_genero.innerHTML = '';

  if (claveSeleccionada) {
    // si se  selecciona un campo del filtro
    const datosFiltrados = filterData(data, claveSeleccionada);// lo guarda en esta variable 

    // console.log(datosFiltrados);
    const informacion_Genero = generoFacts(datosFiltrados);
    parrafo_genero.innerHTML = "Fact: " + "En esta familia hay " + "hombres: " + informacion_Genero.hombres + " , " + " mujeres: " + informacion_Genero.mujeres

    if (ordenSeleccionado) {
      // Se ha seleccionado un campo de ordenamiento
      const datosOrdenados = sortData(datosFiltrados, 'name', ordenSeleccionado);// lo guarda en esta variable 
      datalist = renderItems(datosOrdenados);//renderizamos 
      dataview.appendChild(datalist)
      // console.log(informacion_Genero.generoContador);
    } else {
      // No se ha seleccionado un campo de ordenamiento

      datalist = renderItems(datosFiltrados);
      dataview.appendChild(datalist)
      //  console.log(datosFiltrados);
    }
  } else if (ordenSeleccionado) {
    // No se ha seleccionado un campo de filtrado, pero se ha seleccionado un campo de ordenamiento
    const datosOrdenados = sortData(data, 'name', ordenSeleccionado);// lo guarda en esta variable 
    datalist = renderItems(datosOrdenados);//renderizamos 
    dataview.appendChild(datalist)
  } else {
    // No se ha seleccionado ni un campo de filtrado ni un campo de ordenamiento
    renderItems(data);
  }
}
filtroClave.addEventListener("change", soloUnFiltro);//nuestra solo un filtro
filtroOrden.addEventListener("change", soloUnFiltro);//nuestra solo un filtro


const parrafo_estadistica = document.getElementById('facts');
parrafo_estadistica.addEventListener('click', function () {
  const informacion_eades = computeStats(data);
  parrafo_estadistica.innerHTML = "¿Sabías qué...? " + informacion_eades.menoresDe30 + " de los personajes son menores de 30 años" + " y " + informacion_eades.mayoresDe30 + " de ellos son mayores de 30 años...!!!";
});