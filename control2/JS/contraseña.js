document.getElementById("generar-contrasena").addEventListener("click", function() {
    var longitud = parseInt(document.getElementById("longitud").value);
// Condicion para la longitud de la contraseña
    if (longitud >= 8 && longitud <= 20) {
        var caracteres = "";
        
        if (document.getElementById("mayusculas").checked) {
            caracteres += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        }
        if (document.getElementById("minusculas").checked) {
            caracteres += "abcdefghijklmnñopqrstuvwxyz";
        }
        if (document.getElementById("numeros").checked){
            caracteres += "0123456789";
        }
        if (document.getElementById("caracteres especiales").checked) {
            caracteres += "!@#$%^&*";
        }
        if (caracteres === "") {
            alert("Debes seleccionar al menos un tipo de caracter.");
            return;
        }
            for (var i = 0; i < longitud; i++) {
                var randomIndex = Math.floor(Math.random() * caracteres.length);
                contrasena += caracteres.charAt(randomIndex);
            }
            document.getElementById("Contraseña generada").value = contraseña;
        } else {
            alert("La contraseña debe tener entre 8 a 20 caracteres");
        }
});