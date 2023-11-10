//Escribir un programa en el que se pregunte al usuario por una frase y una letra
// y muestre por pantalla el numero de veces que aparece la letra en la frase 
// pedir al usuario una frase y una letra
var frase = prompt("Ingrese una frase: ");
var letra = prompt("Ingrese una letra: ");

var contador = 0;
for (var i = 0; i < frase.length; i++) {
    if (frase.charAt(i) === letra) {
        contador++;
    }
console.log(`La letra '${letra}' aparece ${contador} veces en la frase '${frase}'.`);

}