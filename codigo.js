function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function eleccion(jugada) {
    let resultado = ""
    if (jugada == 1) {
        resultado = "piedra"
    } else if (jugada == 2) {
        resultado = "papel"
    } else if (jugada == 3) {
        resultado = "tijera"
    } else {
        resultado = "MAL ELEGIDO"
    }
    return resultado
}

// 1 es piedra, 2 es papel, 3 es tijera

let jugador = 0
let pc = 0
let triunfos = 0
let perdidas = 0

function jugar(jugadaJugador) {
    jugador = jugadaJugador
    pc = aleatorio(1, 3)
    
    let jugadorTexto = eleccion(jugador)
    let pcTexto = eleccion(pc)
    let resultado = ""
    
    // Lógica del juego
    if (jugador === pc) {
        resultado = "EMPATE"
    } else if (
        (jugador === 1 && pc === 3) ||  // piedra vence tijera
        (jugador === 2 && pc === 1) ||  // papel vence piedra
        (jugador === 3 && pc === 2)     // tijera vence papel
    ) {
        resultado = "GANASTE"
        triunfos++
    } else if (jugador != pc) {
        resultado = "PERDISTE"
        perdidas++
    }
    
    return {
        jugadorTexto,
        pcTexto,
        resultado,
        triunfos,
        perdidas
    }
}