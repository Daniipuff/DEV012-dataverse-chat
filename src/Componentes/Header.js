export const header = () =>{
    let elHeader = document.createElement('h1');
    elHeader.setAttribute('class', 'header');
    elHeader.innerHTML =
`   <img src="https://upload.wikimedia.org/wikipedia/commons/9/98/The_Simpsons_yellow_logo.svg" class="imagenTitulo"/>
    <img src="https://i.pinimg.com/originals/78/7e/10/787e1079c5d6c4232700673de8649034.png"
    class="imagenFamilia"/>
`;
return elHeader;
};