class Geometria{
    constructor(parametros){
        this.posicion = parametros.posicion || {x:0,y:0};
        this.velocidad = parametros.velocidad || {x:0,y:0};
        this.color = parametros.color || '#ffffff';
        this.input = parametros.input || null;
        this.name = parametros.name || '';
    }
    setPosicion(x,y){
        this.posicion = {x,y};
    }
    setVelocidad(x,y){
        this.velocidad = {x,y};
    }
    setColor(color){
        this.color = color;
    }
    render(){
    }
    rectanguloDelimitador(){
    }
    update(){
    }
    intersecta(geometria){
        const rect1 = this.rectanguloDelimitador();
        const rect2 = geometria.rectanguloDelimitador();
        if (rect1.x < rect2.x + rect2.ancho &&
            rect1.x + rect1.ancho > rect2.x &&
            rect1.y < rect2.y + rect2.alto &&
            rect1.alto + rect1.y > rect2.y) {
            return true;
        }
        return false;
    }
    intersectaX(geometria){
        const rect1 = this.rectanguloDelimitador();
        const rect2 = geometria.rectanguloDelimitador();
        if(rect1.x+rect1.ancho > rect2.x  || rect2.x+rect2.ancho > rect1.x)
            return true;
        return false;
    }
    intersectaY(geometria){
        const rect1 = this.rectanguloDelimitador();
        const rect2 = geometria.rectanguloDelimitador();
        if(rect1.y+rect1.alto > rect2.y  || rect2.y+rect2.alto > rect1.y)
            return true;
        return false;
    }

}

export default Geometria;