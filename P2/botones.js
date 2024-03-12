const Estado = {
  init1 : 0,
  init2 : 1,
  op1 : 2,
  op3 : 3,
}

let estado = Estado.init1;

const obj = {
  botones : document.getElementsByClassName("digito"),
  display1 : document.getElementById("combinacion1"),
  display2 : document.getElementById("combinacion2"),
  display3 : document.getElementById("combinacion3"),
  display4 : document.getElementById("combinacion4"),
  tiempo : document.getElementById("tiempo"),
  clave1 : Math.floor(Math.random() * (9 - 0 + 1)),
  clave2 : Math.floor(Math.random() * (9 - 0 + 1)),
  clave3 : Math.floor(Math.random() * (9 - 0 + 1)),
  clave4 : Math.floor(Math.random() * (9 - 0 + 1)),
}

console.log("Ejecutando JS...");

function digito(value) {
  if (obj.tiempo.innerHTML == "0:0:0") {
    estado = Estado.init1;
  }
  else if (obj.tiempo.innerHTML != "0:0:0" ) {
    if (obj.display.innerHTML == "****") {
      estado = Estado.init2;
    }
  if (estado == Estado.init1) {
    const crono = new Crono(obj.tiempo);
    crono.start();
    console.log("Start!!");
    const mostrar = new numeros(value,obj.display,obj.clave1,obj.clave2,obj.clave3,obj.clave4);
    mostrar.comprobar();
    estado = Estado.op1
  }
  else if (estado == Estado.init2) {
    const mostrar = new numeros(value,obj.display,obj.clave1,obj.clave2,obj.clave3,obj.clave4);
    mostrar.comprobar();
    estado = Estado.op1
  }
  }
}

for (let boton of obj.botones) {
  boton.onclick = (ev) => {
    console.log("Valor: " + boton);
    digito(ev.target.value)
  }
}