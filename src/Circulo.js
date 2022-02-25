import Geometria from "./Geometria.js";

class Circulo extends Geometria{
    constructor(parametros){
        super(parametros);
        this.radio = 10;
    }
    render(context){
        context.beginPath();
        context.arc(this.posicion.x, this.posicion.y, this.radio, 0, Math.PI * 2);
        context.fillStyle = this.color;
        context.fill();
        context.closePath();
    }
    update(){
        this.posicion.x+=this.velocidad.x;
        this.posicion.y+=this.velocidad.y;
    }
    rectanguloDelimitador(){
        const rectangulo = { 
            x: (this.posicion.x - this.radio), 
            y: (this.posicion.y - this.radio), 
            ancho: (this.radio * 2), 
            alto: (this.radio * 2) }
        return rectangulo;
    }
}

export default Circulo;