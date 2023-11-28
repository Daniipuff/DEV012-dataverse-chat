import { navigateTo } from ".././router.js";
import { chat } from "./ChatPanel.js";
//import { detail } from "../views/Details.js";
export const renderItems = (data) => {
   //creamos el ul fuera del for para que se cree una sola vez
    const ul = document.createElement('ul');
    data.forEach(item => {
      const lista = document.createElement('li');
      lista.classList.add("listas");
      lista.setAttribute('itemscope', '');
      lista.setAttribute('itemtype','');
      //lista.setAttribute('itemprop', item.id);
      ul.appendChild(lista);
      const nombres = document.createElement('dl');
      nombres.setAttribute('itemscope', '');
      nombres.setAttribute('itemtype', 'Personaje de los Simpson');
      lista.appendChild(nombres);
      const imagen = document.createElement('img');
      imagen.setAttribute('src', item.imageUrl);
      imagen.setAttribute('alt', 'Personaje de los Simpson');
      nombres.appendChild(imagen);
      const dt1 = document.createElement('dt');
      dt1.innerHTML = 'Nombre:';
      nombres.appendChild(dt1);
      const dd1 = document.createElement('dd');
      dd1.setAttribute('itemprop', 'name');
      dd1.innerHTML = item.name;
      nombres.appendChild(dd1);
      const dt2 = document.createElement('dt');
      dt2.innerHTML = 'Edad:';
      nombres.appendChild(dt2);
      const dd2 = document.createElement('dd');
      dd2.setAttribute('itemprop', 'edad');
      dd2.innerHTML = item.edad;
      lista.addEventListener("click",function(){
      console.log(item.id);
      navigateTo("/details", { id: item.id });  
      nombres.appendChild(dd2);
    });
    return ul;
  });
};