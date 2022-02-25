import Game from "./src/Game.js";
import KeyboardControl from "./src/KeyboardControl.js";
import Rectangulo from "./src/Rectangulo.js";
import Circulo from "./src/Circulo.js";
import Skate from "./src/Skate.js";

const canvas = document.getElementById("myCanvas");
const game = new Game(canvas);
const audio = new Audio('/assets/boing.mp3');


const pared1 = new Rectangulo({
    posicion: { x: 0, y: 0 },
    velocidad: { x: 5, y: 0 },
    color: '#000000',
    ancho: 10,
    alto: 320,
    name: 'name'
});



game.add(pared1);

const pared2 = new Rectangulo({
    posicion: { x: 470, y: 0 },
    color: '#000000',
    ancho: 10,
    alto: 320,
});
game.add(pared2);
const pared3 = new Rectangulo({
    posicion: { x: 0, y: 0 },
    color: '#000000',
    ancho: 480,
    alto: 10,
});
game.add(pared3);

const bola = new Circulo({
    posicion: { x: 210, y: 160 },
    velocidad: { x: 2, y: 2 },
    color: '#ff0000',
    radio: 10,
});
game.add(bola);

const control = new KeyboardControl();


const jugador = new Skate({
    posicion: { x: 210, y: 280 },
    velocidad: { x: 5, y: 0 },
    color: '#00ff00',
    ancho: 100,
    alto: 40,
    input: control
})

game.add(jugador)



for (let i = 0; i < 8; i++) {
    const block = new Rectangulo({
        posicion: { x: 20 + 50 * (i + 0.1 * i), y: 100 },
        color: '#0000ff',
        ancho: 50,
        alto: 10,
        name: `block${i}`
    });
    game.add(block);
}

function gameLoop() {
    if (jugador.intersecta(pared1))
        control.estados.moverIzquierda = false;
    if (jugador.intersecta(pared2))
        control.estados.moverDerecha = false;
    if (bola.intersecta(jugador)) {
        audio.play();
        bola.velocidad.y = -bola.velocidad.y;
    }
    if (bola.intersecta(pared1) || bola.intersecta(pared2))
        bola.velocidad.x = -bola.velocidad.x;
    if (bola.intersecta(pared3))
        bola.velocidad.y = -bola.velocidad.y;
    if (bola.posicion.y > game.height) {
        bola.setPosicion(240, 160);
        control.restart();
    }
    for (let i = 0; i < 8; i++) {
        const block = game.getByName(`block${i}`);
        if (block) {
            if (bola.intersecta(block)) {
                bola.velocidad.y = -bola.velocidad.y;
                game.deleteChildByName(`block${i}`);
            }
        }

    }
    game.clear();
    game.update();
    game.render();
    requestAnimationFrame(gameLoop);
}
gameLoop();
