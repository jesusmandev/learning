const { triunfos, perdidas, pc, aleatorio, jugador, eleccion } = require("./codigo");

while (triunfos < 3 && perdidas < 3) {
    pc = aleatorio(1, 3);
    jugador = prompt("Elige: 1 para piedra, 2 para papel, 3 para tijera");

    //alert("Elegiste  " + jugador)
    alert("PC elige: " + eleccion(pc));
    alert("Tu eliges: " + eleccion(jugador));

    // COMBATE
    if (pc == jugador)
        alert("EMPATE");
    else if (jugador == 1 && pc == 3) {
        alert("GANASTE");
        triunfos = triunfos + 1;
    }
    else if (jugador == 2 && pc == 1) {
        alert("GANASTE");
        triunfos = triunfos + 1;
    }
    else if (jugador == 3 && pc == 2) {
        alert("GANASTE");
        triunfos = triunfos + 1;
    }

    else { alert("PERDISTE"); }
    perdidas = perdidas + 1;

}
