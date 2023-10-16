const array = ["Moto", "carro", "burro"];

function acto(){

    let h1 = document.createElement("h1");
    let h1cosa1 = document.createTextNode(array);
    h1.appendChild(h1cosa1);
    

  let cosa = document.getElementById("cosa").value;

    array.shift()
    array.push(cosa)
  

  let divcosa = document.getElementById("contenedor");

  

  let h2 = document.createElement("h2");
  let h2cosa = document.createTextNode(array);
  h2.appendChild(h2cosa);


  contenedor.appendChild(h1);
  contenedor.appendChild(h2);
}
