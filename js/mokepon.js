function iniciarjuego() {

}
function seleccionarMascotaJugador() {
    alert("SELECCIONASTE TU MASCOTA") 
}

let botonMascotaJugador = document.getElementById("boton-mascotas")
botonMascotaJugador.addEventListener("click" , seleccionarMascotaJugador)

Window.addEventListener("load" , iniciarjuego  )