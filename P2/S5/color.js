console.log("Ejecutando JS...");

const elemento = document.getElementById("elemento");
const boton = document.getElementById("boton");

boton.onclick = () => {
  console.log("Clic!");

  //-- Cambiar color
  if (elemento.style.backgroundColor == "red") {
    elemento.style.backgroundColor = "blue";
  }
  else {
    elemento.style.backgroundColor = "red";
  }
  
}

function random_color() {

    return rcolor
}