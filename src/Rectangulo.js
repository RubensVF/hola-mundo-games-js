import Geometria from "./Geometria.js";

class Rectangulo extends Geometria{
    constructor(parametros){
        super(parametros);
        this.ancho = parametros.ancho || 10;
        this.alto = parametros.alto || 10;
    }
    render(context){
        context.beginPath();
        context.rect(this.posicion.x, this.posicion.y, this.ancho, this.alto);
        context.fillStyle = this.color;
        context.fill();
        context.closePath();
    }
    update(){
        if(this.input){
            if(this.input.estados.moverIzquierda){
                this.posicion.x= this.posicion.x - this.velocidad.x;
            }
            if(this.input.estados.moverDerecha){
                this.posicion.x= this.posicion.x + this.velocidad.x;
            }
        }
    }
    rectanguloDelimitador(){
        const rectangulo = {
            x: this.posicion.x,
            y: this.posicion.y,
            ancho: this.ancho,
            alto: this.alto
                    }
        return rectangulo;
    }
}

export default Rectangulo;