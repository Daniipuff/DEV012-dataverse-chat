import { filterData, sortData, computeStats, generoFacts } from '../src/lib/dataFunctions.js';



describe('Filtros', () => {
  it('la aplicacion filtra solo el apellido', () => {
    const datos = [
      { firstname: "Homero", lastname: "simpson" },
      { firstname: "Ned", lastname: "flanders" },
      { firstname: "Waylon Smithers", lastname: "amistades" },
    ];
    const filtroApellidos = filterData(datos, "simpson")
    expect(filtroApellidos).toEqual([{ firstname: 'Homero', lastname: 'simpson' }]);
  });
  it('la aplicacion filtra ascendente', () => {
    const ordenamiento = [
      { num: 3, nombre: "Seymour Skinner" },
      { num: 2, nombre: "Marge Simpson" },
      { num: 1, nombre: "Homero Simpson" },
    ];
    const resultadoEsperado = [
      { num: 1, nombre: "Homero Simpson" },
      { num: 2, nombre: "Marge Simpson" },
      { num: 3, nombre: "Seymour Skinner" },
    ];
    const filtroOrden = sortData(ordenamiento, "nombre", "asc")
    expect(filtroOrden).toEqual(resultadoEsperado);
  });
  it('la aplicacion filtra descendente', () => {
    const ordenamiento = [
      { num: 1, nombre: "Homero Simpson" },
      { num: 2, nombre: "Marge Simpson" },
      { num: 3, nombre: "Seymour Skinner" },
    ];
    const resultadoEsperado = [
      { num: 3, nombre: "Seymour Skinner" },
      { num: 2, nombre: "Marge Simpson" },
      { num: 1, nombre: "Homero Simpson" },
    ];
    const filtroOrden = sortData(ordenamiento, "nombre", "desc")
    expect(filtroOrden).toEqual(resultadoEsperado);
  });
  it('la aplicación muestra estadística de edades mayores de 30', () => {
    const edades = [
      { fullname: "Homero Simpson", edad: "34 años" },
      { fullname: "Seymour Skinner", edad: "44 años" },
      { fullname: "Bart Simpson", edad: "8 años" },
    ];
    const resultadoEsperado = {
      mayoresDe30: 2,
      menoresDe30: 1,
    };
    const filtroFacts = computeStats(edades);
    expect(filtroFacts).toEqual(resultadoEsperado);
  });
  it('la aplicación muestra generos por familia', () => {
    const genero = [
      { name: "Homero Simpson", genero: "m" },
      { name: "Marge Simpson", genero: "f" },
      { name: "Lisa Simpson", genero: "f" },
    ];
    const resultadoEsperado = {
      mujeres: 2,
      hombres: 1,
    };
    const filtroFacts = generoFacts(genero);
    expect(filtroFacts).toEqual(resultadoEsperado);
  });
});