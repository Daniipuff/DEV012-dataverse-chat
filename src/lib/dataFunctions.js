export function soloUnFiltro(data,apellidos,orden,parrafoG) {//checa si hemos seleccionado un algo o algo vacio
  let datosFiltrados = data;

  if (apellidos !== 'nada') {
    // si se  selecciona un campo del filtro
    datosFiltrados = filterData(datosFiltrados, apellidos);// lo guarda en esta variable 
    //Facts cambian segun filtro
    const informacion_Genero = generoFacts(datosFiltrados);
    parrafoG.innerHTML = "Fact: " + "En esta familia hay " + "hombres: " + informacion_Genero.hombres + " , " + " mujeres: " + informacion_Genero.mujeres

    if (orden !== 'nada') {
      // Se ha seleccionado un campo de ordenamiento
      const filtroApellido = filterData(data, apellidos);
      datosFiltrados = sortData(filtroApellido, 'name', orden);// lo guarda en esta variable 
    }
  } else if (orden !== 'nada') {
    // No se ha seleccionado un campo de filtrado, pero se ha seleccionado un campo de ordenamiento
    datosFiltrados = sortData(data, 'name', orden);// lo guarda en esta variable 
    
  } return datosFiltrados;
  
}

export const filterData = (data, filterBy) => {
  const apellidosFamilias = data.filter(filtro1 => filtro1.lastname === filterBy);
  return apellidosFamilias;
}

export function sortData(data, sortBy, sortOrder) {
  // Crear una copia de los datos originales
  const sortedData = data.slice();//devuelve una copia de una parte del array dentro de un nuevo array empezando por inicio hasta fin 

  if (sortBy) { // Verifica si se ha seleccionado un campo de ordenamiento
    sortedData.sort((a, b) => {//devuelve el arreglo ordenado se requiere de dos parametros para comparar 
      const nameA = a[sortBy].toLowerCase();
      const nameB = b[sortBy].toLowerCase();

      if (sortOrder === "asc") {
        return nameA.localeCompare(nameB);
      } else if (sortOrder === "desc") {
        return nameB.localeCompare(nameA);
      }
    });

    return sortedData;
  }
}

export function computeStats(data) {
  const estadistica = data.reduce((acumulador, personaje) => {
    const edad = parseInt(personaje.edad);
    acumulador.menoresDe30 += edad < 30 ? 1 : 0;
    acumulador.mayoresDe30 += edad >= 30 ? 1 : 0;
    return acumulador;
  }, { menoresDe30: 0, mayoresDe30: 0 });
  return estadistica;
}
export function generoFacts(data) {
  const arrayGenero = data.map(personaje => personaje.genero);
  let mujeres = 0;
  let hombres = 0;
  for (let i = 0; i < arrayGenero.length; i++) {
    const valoractual = arrayGenero[i];
    if (valoractual === 'm') {
      hombres++;
    }
    if (valoractual === 'f') {
      mujeres++;
    }
  
  }
  return {hombres, mujeres};
}

