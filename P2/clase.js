//-- Clase cronómetro
class Crono {

    //-- Constructor. Hay que indicar el 
    //-- tiempo donde mostrar el cronómetro
    constructor(tiempo) {
        this.tiempo = tiempo;

        //-- Tiempo
        this.cent = 0, //-- Centésimas
        this.seg = 0,  //-- Segundos
        this.min = 0,  //-- Minutos
        this.timer = 0;  //-- Temporizador asociado
    }

    //-- Método que se ejecuta cada centésima
    tic() {
        //-- Incrementar en una centesima
        this.cent += 1;

        //-- 100 centésimas hacen 1 segundo
        if (this.cent == 100) {
        this.seg += 1;
        this.cent = 0;
        }

        //-- 60 segundos hacen un minuto
        if (this.seg == 60) {
        this.min = 1;
        this.seg = 0;
        }

        //-- Mostrar el valor actual
        this.tiempo.innerHTML = this.min + ":" + this.seg + ":" + this.cent
    }

    //-- Arrancar el cronómetro
    start() {
       if (!this.timer) {
          //-- Lanzar el temporizador para que llame 
          //-- al método tic cada 10ms (una centésima)
          this.timer = setInterval( () => {
              this.tic();
          }, 10);
        }
    }

    //-- Parar el cronómetro
    stop() {
        if (this.timer) {
            clearInterval(this.timer);
            this.timer = null;
        }
    }

    //-- Reset del cronómetro
    reset() {
        this.cent = 0;
        this.seg = 0;
        this.min = 0;

        this.tiempo.innerHTML = "0:0:0";
    }
}

class display {
    constructor (boton,display1,display2,display3,display4,clave1,clave2,clave3,clave4){
        this.boton = boton
        this.display1 = display1
        this.display2 = display2
        this.display3 = display3
        this.display4 = display4
        this.clave1 = clave1
        this.clave2 = clave2
        this.clave3 = clave3
        this.clave4 = clave4
    }

    comprobar() {
        if (this.display1.innerHTML == this.clave1) {
            this.clave1 = "correcta"
        }
        if (this.display2.innerHTML == this.clave2) {
            this.clave2 = "correcta"
        }
        if (this.display3.innerHTML == this.clave3) {
            this.clave3 = "correcta"
        }
        if (this.display4.innerHTML == this.clave4) {
            this.clave4 = "correcta"
        }
        this.claves = [this.clave1,this.clave2,this.clave3,this.clave4];
        for (let i=0; i<= this.claves.length-1; i++) {
            if (this.boton == this.claves[i]) {
                if (i == 0) {
                    this.display1.innerHTML = this.clave1;
                    break
                }
                else if (i == 1) {
                    this.display2.innerHTML = this.clave2;
                    break
                }
                else if (i == 2) {
                    this.display3.innerHTML = this.clave3;
                    break
                }
                else if (i == 3) {
                    this.display4.innerHTML = this.clave4;
                    break
                }
            }
        }
    }
}