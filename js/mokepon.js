// Variables del juego
let mascotaJugador = ""
let mascotaEnemigo = ""
let ataqueJugador = ""
let ataqueEnemigo = ""
let vidasJugador = 3
let vidasEnemigo = 3
let ataques = ["FUEGO", "AGUA", "TIERRA"]

// Función inicializadora
function iniciarJuego() {
    const botonMascota = document.getElementById("boton-mascotas")
    const botonFuego = document.getElementById("boton-fuego")
    const botonAgua = document.getElementById("boton-agua")
    const botonTierra = document.getElementById("boton-tierra")
    const botonReiniciar = document.getElementById("boton-reiniciar")

    botonMascota.addEventListener("click", seleccionarMascotaJugador)
    botonFuego.addEventListener("click", () => seleccionarAtaque("FUEGO"))
    botonAgua.addEventListener("click", () => seleccionarAtaque("AGUA"))
    botonTierra.addEventListener("click", () => seleccionarAtaque("TIERRA"))
    botonReiniciar.addEventListener("click", reiniciarJuego)
}

// Selección de mascota del jugador
function seleccionarMascotaJugador() {
    const hipoge = document.getElementById("hipoge")
    const capipepo = document.getElementById("Capipepo")
    const ratigueya = document.getElementById("Ratigueya")
    const seccionMascota = document.getElementById("seleccionar-mascota")
    const seccionAtaque = document.getElementById("seleccionar-ataque")

    if (hipoge.checked) {
        mascotaJugador = "Hipoge"
    } else if (capipepo.checked) {
        mascotaJugador = "Capipepo"
    } else if (ratigueya.checked) {
        mascotaJugador = "Ratigueya"
    } else {
        alert("⚠️ ¡Debes seleccionar una mascota!")
        return
    }

    // Seleccionar mascota enemiga aleatoria
    const mascotasEnemigo = ["Hipoge", "Capipepo", "Ratigueya"]
    mascotaEnemigo = mascotasEnemigo[Math.floor(Math.random() * mascotasEnemigo.length)]

    // Cambiar secciones
    seccionMascota.style.display = "none"
    seccionAtaque.classList.add("activo")

    // Mostrar mensaje
    actualizarMensaje(`¡Comenzó la batalla! 🎮<br>Tu mascota: ${mascotaJugador} vs ${mascotaEnemigo}`)
}

// Selección de ataque del jugador
function seleccionarAtaque(ataque) {
    ataqueJugador = ataque

    // Ataque enemigo aleatorio
    ataqueEnemigo = ataques[Math.floor(Math.random() * ataques.length)]

    // Resolver batalla
    resolverBatalla()
}

// Función para resolver la batalla
function resolverBatalla() {
    let resultado = ""
    let jugadorGana = false

    // Lógica de combate (Fuego > Tierra > Agua > Fuego)
    if (ataqueJugador === ataqueEnemigo) {
        resultado = "¡EMPATE! 🤝"
    } else if (
        (ataqueJugador === "FUEGO" && ataqueEnemigo === "TIERRA") ||
        (ataqueJugador === "TIERRA" && ataqueEnemigo === "AGUA") ||
        (ataqueJugador === "AGUA" && ataqueEnemigo === "FUEGO")
    ) {
        resultado = "¡GANASTE ESTA RONDA! 🎉"
        jugadorGana = true
        vidasEnemigo--
    } else {
        resultado = "¡PERDISTE ESTA RONDA! 💔"
        vidasJugador--
    }

    // Actualizar vidas en pantalla
    actualizarVidas()

    // Mostrar resultado de la ronda
    actualizarMensaje(
        `Tu ${mascotaJugador} atacó con ${ataqueJugador} 💥<br>
        El ${mascotaEnemigo} enemigo atacó con ${ataqueEnemigo} 💥<br><br>
        ${resultado}<br><br>
        Vidas: ${vidasJugador} ❤️ vs ${vidasEnemigo} ❤️`
    )

    // Verificar si el juego terminó
    verificarFinJuego()
}

// Actualizar vidas en la UI
function actualizarVidas() {
    const vidasJugadorSpan = document.querySelectorAll(".vidas-item span")[0]
    const vidasEnemigoSpan = document.querySelectorAll(".vidas-item span")[1]

    vidasJugadorSpan.textContent = vidasJugador
    vidasEnemigoSpan.textContent = vidasEnemigo
}

// Verificar si el juego terminó
function verificarFinJuego() {
    if (vidasJugador <= 0 || vidasEnemigo <= 0) {
        finalizarJuego()
    }
}

// Finalizar el juego
function finalizarJuego() {
    const seccionAtaque = document.getElementById("seleccionar-ataque")
    const seccionReiniciar = document.getElementById("reiniciar")
    const botonesAtaque = document.querySelectorAll(".botones-ataque button")

    // Desactivar botones de ataque
    botonesAtaque.forEach(boton => {
        boton.disabled = true
    })

    let mensajeFinal = ""
    if (vidasJugador > vidasEnemigo) {
        mensajeFinal = `¡🏆 ¡GANASTE LA BATALLA! 🏆<br>Derrotaste a ${mascotaEnemigo} con ${vidasJugador} vidas restantes`
    } else if (vidasEnemigo > vidasJugador) {
        mensajeFinal = `😢 ¡PERDISTE LA BATALLA! 😢<br>${mascotaEnemigo} te derrotó`
    } else {
        mensajeFinal = `⚖️ ¡BATALLA EMPATADA! ⚖️<br>Ambos dieron todo`
    }

    actualizarMensaje(mensajeFinal)
    seccionReiniciar.classList.add("activo")
}

// Reiniciar el juego
function reiniciarJuego() {
    // Resetear variables
    mascotaJugador = ""
    mascotaEnemigo = ""
    ataqueJugador = ""
    ataqueEnemigo = ""
    vidasJugador = 3
    vidasEnemigo = 3

    // Resetear UI
    const seccionMascota = document.getElementById("seleccionar-mascota")
    const seccionAtaque = document.getElementById("seleccionar-ataque")
    const seccionReiniciar = document.getElementById("reiniciar")
    const botonesAtaque = document.querySelectorAll(".botones-ataque button")
    const radios = document.querySelectorAll("input[type='radio']")

    // Limpiar selecciones
    radios.forEach(radio => {
        radio.checked = false
    })

    // Mostrar/ocultar secciones
    seccionMascota.style.display = "block"
    seccionAtaque.classList.remove("activo")
    seccionReiniciar.classList.remove("activo")

    // Habilitar botones
    botonesAtaque.forEach(boton => {
        boton.disabled = false
    })

    // Actualizar vidas
    actualizarVidas()

    // Mensaje inicial
    actualizarMensaje("Selecciona tu mascota para comenzar la batalla")
}

// Actualizar mensaje central
function actualizarMensaje(texto) {
    const seccionMensajes = document.getElementById("mensajes")
    seccionMensajes.innerHTML = `<p>${texto}</p>`
}

// Event listener para cargar el juego
window.addEventListener("load", iniciarJuego)