function comprobarEdad() {
    // Declaracion de variables y obtencion de elementos
    let inputEdad = document.getElementById("edadUsuario");
    let valorEdad = inputEdad.value;

    // Uso de condicionales if, else if, else
    if (valorEdad === "") {
        alert("El campo esta vacio. Por favor, ingresa tu edad.");
    } else if (Number(valorEdad) < 0 || isNaN(valorEdad)) {
        alert("Por favor, ingresa un numero valido y mayor o igual a cero.");
    } else if (Number(valorEdad) >= 18) {
        alert("Eres mayor de edad");
    } else {
        alert("Eres menor de edad");
    }
}