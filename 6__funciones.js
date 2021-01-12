// FUNCIONES 
// def: Es un bloque de código diseñado para realizar una operación determinada. 
// A esta función, la podemos llamar desde cualquier punto del programa, podemos enviarle datos (parámetros) y nos puede devolver un dato (resultado)

// sintaxis:
// function nombre_funcion(parametro1, parametro2, ...){ // params son opcionales
//     // bloque de código (instrucciones) 
//     . 
//     . 
//     . 
//     return resultado; // opcional
// }
// LLAMADA A LA FUNCIÓN:
// nombre_funcion(parametro1, parametro2, ...)

// Ejemplo1: Función que suma dos números (sin params ni return)  
var n1 = 5;
var n2 = 10;

function suma_dos_numeros_1(){
    var suma = n1 + n2;
    console.log(suma);
}

suma_dos_numeros_1(); // llamada 

// Ejemplo2: Función que suma dos números (con params y sin return)  
function suma_dos_numeros_2(num1, num2) {
    var suma = num1 + num2;
    console.log(suma);
}
suma_dos_numeros_2(5,10); // llamada 

// Ejemplo3: Función que suma dos números (con params y con return)  
function suma_dos_numeros_3(num1, num2) {
    var suma = num1 + num2;
    return suma;
}
// 1
// var resultado = suma_dos_numeros_3(5, 10); // llamada 
// console.log(resultado);
// 2
console.log(suma_dos_numeros_3(5, 10));

// SIEMPRE que una función, tenga un return, la llamada a la función, se iguala a una variable