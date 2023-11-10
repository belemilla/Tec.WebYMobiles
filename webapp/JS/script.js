// Incicializacion de variables
let tarjetasDestapadas= 0;
let tarjeta1 = null;
let tarjeta2 =  null;

// Generacion de numeros aleatorios
let numeros = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8];
numeros = numeros.sort(()=>{return Math. random()-0.5});
console.log(numeros);


// Funcion principal
function destapar(id){
    tarjetasDestapadas++;
console.log(tarjetasDestapadas);

if(tarjetasDestapadas ==1)
//Mostrar primer numero
tarjeta1 = document.getElementById(id);
primerResultado = numeros[id]
tarjeta1.innerHTML = primerResultado;

//Deshabilitar primer boton
tarjeta1.disabled = true;
}else if(tarjetasDestapadas ==2){
 // Mostrar segundo numero
 tarjeta2 = document.getelementByid(id);
 segundoResultado = numeros[id];
tarjeta2.innerHTML = segundoResultado;
 //Deshabilitar segundo boton
tarjeta2.disabled = true;

 // Incrementar movimientos
movimientos++;
mostrarMovimientos.innerHTML = 'Movimientos: $ {movimientos}';




}



