//-- Elementos de la gui
const gui = {
    tiempo : document.getElementById("tiempo"),
    start : document.getElementById("start"),
    stop : document.getElementById("stop"),
    reset : document.getElementById("reset")
}

console.log("Ejecutando JS...");

//-- Definir un objeto cronómetro
const crono = new Crono(gui.tiempo);

//---- Configurar las funciones de retrollamada

//-- Arranque del cronometro
gui.start.onclick = () => {
    console.log("Start!!");
    crono.start();
}
  
//-- Detener el cronómetro
gui.stop.onclick = () => {
    console.log("Stop!");
    crono.stop();
}

//-- Reset del cronómetro
gui.reset.onclick = () => {
    console.log("Reset!");
    crono.reset();
}