class KeyboardControl {
    constructor() {
        this.estados = {
            moverIzquierda: false,
            moverDerecha: false,
        }
        document.addEventListener('keydown', (e) => this.TeclaAbajo(e), false);
        document.addEventListener('keyup', (e) => this.TeclaArriba(e), false)
    }
    restart(){
        this.estados = {
            moverIzquierda: false,
            moverDerecha: false,
        }
    }
    TeclaAbajo(event) {
        switch (event.key) {
            case 'a': // a
                this.estados.moverIzquierda = true;
                break;
            case 'd': // d
                this.estados.moverDerecha = true;
                break;
        }
    }
    TeclaArriba(event) {
        switch (event.key) {
            case 'a': // a
                this.estados.moverIzquierda = false;
                break;
            case 'd': // d
                this.estados.moverDerecha = false;
                break;
        }
    }
}

export default KeyboardControl;