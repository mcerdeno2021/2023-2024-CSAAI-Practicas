//-- Elementos de la clock
const clock = {
  tiempo : document.getElementById("tiempo"),
  start : document.getElementById("start"),
  stop : document.getElementById("stop"),
  reset : document.getElementById("reset")
}

const Estado = {
  init1 : 0, //tiempo en 0:0:0
  init2 : 1, //tiempo empezado
  op1 : 2,
  fin : 3,
}

let estado = Estado.init1;

const numeros = {
  botones : document.getElementsByClassName("digito"),
  display1 : document.getElementById("combinacion1"),
  display2 : document.getElementById("combinacion2"),
  display3 : document.getElementById("combinacion3"),
  display4 : document.getElementById("combinacion4"),
  clave1 : Math.floor(Math.random() * (9 - 0 + 1)),
  clave2 : Math.floor(Math.random() * (9 - 0 + 1)),
  clave3 : Math.floor(Math.random() * (9 - 0 + 1)),
  clave4 : Math.floor(Math.random() * (9 - 0 + 1)),
}

console.log("Ejecutando JS...");

//-- Definir un objeto cronómetro
const crono = new Crono(clock.tiempo);

//---- Configurar las funciones de retrollamada

//-- Arranque del cronometro
clock.start.onclick = () => {

  console.log("Start!!");
  crono.start();
  estado = Estado.init2;
}

//-- Detener el cronómetro
clock.stop.onclick = () => {
  console.log("Stop!");
  crono.stop();
}

//-- Reset del cronómetro
clock.reset.onclick = () => {
  console.log("Reset!");
  crono.reset();
}

function digito(value) {
  if (estado == Estado.init1) {
    crono.start();
    estado == Estado.op1;
    show(value);   
  }
  else if (estado == Estado.init2) {
    estado = Estado.op1;
    show(value);
  }
}

function show(value) {
  const mostrar = new display(value,numeros.display1,numeros.display2,numeros.display3,numeros.display4,numeros.clave1,numeros.clave2,numeros.clave3,numeros.clave4);
    mostrar.comprobar();
    if (numeros.display1.innerHTML== numeros.clave1 && numeros.display2.innerHTML==numeros.clave2 && numeros.display3.innerHTML==numeros.clave3 && numeros.display4.innerHTML==numeros.clave4) {
      estado = Estado.fin;
      fin();
    }
    else {
      estado = Estado.init2;
    }  
}

function fin() {
  crono.stop();
  numeros.display1.style.color="green";
  numeros.display2.style.color="green";
  numeros.display3.style.color="green";
  numeros.display4.style.color="green";
}

for (let boton of numeros.botones) {
  boton.onclick = (ev) => {
    console.log("Valor: " + boton.innerHTML);
    digito(ev.target.value)
  }
}