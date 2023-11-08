export function filterData(data, filterBy) {
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

