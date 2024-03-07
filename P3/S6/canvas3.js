//-- Obtener el contexto del canvas
const ctx = canvas.getContext("2d");


ctx.beginPath();
    //-- Definir un rectángulo de dimensiones 100x50,
    //-- cuya esquina superior izquierda está en (5,5)
    ctx.rect(5,5, 200, 50);

    //-- Dibujar
    ctx.fillStyle = 'red';

    //-- Cambiar el tamaño de la línea del trazo
    ctx.lineWidth = 10;

    //-- Rellenar
    ctx.fill();

    //-- Dibujar el trazo
    ctx.stroke()
    
ctx.closePath()

