//solicitar nombre de usuario y verificar si cumple con los criterios de validez
//tener al menos 6 caracteres de longitud
//contener letras ademas de numeros
//comenzar con letra y termina con numero
function validarnombreusuario() {
    var nombreUsuario = document.getElementById("nombreusuario").value;
    if (nombreUsuario.length < 6) {
        alert("El nombre de usuario debe tener al menos 6 caracteres.");
        return;
    }
    if (!/^[a-zA-Z]/.test(nombreUsuario)) {
        alert("El nombre de usuario debe comenzar con una letra.");

        return;
    }

    if (!/\d$/.test(nombreUsuario)) {
        alert("El nombre de usuario ingresado debe terminar con un número.");
        return;
    }
    if (!/[a-zA-Z]/.test(nombreUsuario)) {
        alert("El nombre de usuario debe contener al menos una letra además de números.");
        return;
    }


    alert("El nombre de usuario es válido.");
    alert("El nombre de usuario no cumple con los requisitos solicitados.");
}
    

