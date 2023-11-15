import { footer } from "../Componentes/Footer";
export const Home = () =>{
    const homeView = `
    <header>
    <h1><img src="https://upload.wikimedia.org/wikipedia/commons/9/98/The_Simpsons_yellow_logo.svg" class="imagenTitulo"/>
        <img src="https://i.pinimg.com/originals/78/7e/10/787e1079c5d6c4232700673de8649034.png"
        class="imagenFamilia"/></h1>
  </header>
  <main>
    <input type="checkbox" id="check">
    <label for="check" class="mostrar">&#8801</label>
    <div class="contenedor1">
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
        <button type="button" data-testid="button-clear" id="limpiar"><img
            src="https://cdn-icons-png.flaticon.com/512/3717/3717049.png" height="30" width="30"></button>
    </div>
    <div id="resultados"> <button type="facts_1 " id="facts">Facts</button><img
        src="https://play-lh.googleusercontent.com/tNr21lrG_29rtMZDz_SD4XtZwNIsRDhbIjGBvu1cPe5UjSNCD--pBMLzfp_q8BFlGtw=w600-h300-pc0xffffff-pd"
        height="50" width="80" class="basurita">
        <button type="facts_2 " id="chat">Chat</button></div>
  </main>
  <div id="genero">
  </div>`
homeView += footer ();
  return homeView;
}