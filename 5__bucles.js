// BUCLES 
// -COMPARACIONES 
// OPERADOR    DESCRIPCIÓN 
// ==          Igual a ...
// ===         Igual a ... y mismo tipo de dato 
// !=          Diferente a ... 
// >           Mayor a ... 
// <           Menor a ... 
// >=          Mayor o igual ... 
// <=          Menor o igual ... 

// CONCATENACIÓN DE COMPARACIONES (mediante operadors lógicos)
// OPERADOR     DESCRIPCIÓN 
// &&              AND: Devuelve un TRUE si se cumplen TODAS las condiciones 
// ||              OR: Devuelve un TRUE si se cumple ALGUNA de las condiciones 
// !               NOT: Invierte el valor Booleano 

// --------------------------------------------------------------------- 
// Utilizamos los bucles para ejecutar una repetición controlada de una instrucción 
// console.log(1);
// console.log(2); 
// . 
// . 
// . 
// console.log(5);
// En el código anterior no tiene sentido repetir cada "console.log()" para imprimir los números del 1 al 5.
// --------------------------------------------------------------------- 
// WHILE 
// sintaxis:
// while (condition) {
//     ejecuta intrucciones en bucle
// }

// Ejemplo: Imprimir los números del 1 al 5
var i = 1;  // 1-INICILIZACIÓN 
while (i < 6) { // 2-COMPARACIÓN 
    console.log(i);
    i++; // 3-ACTUALIZACIÓN 
}
console.log("-----------------------------------------------------------"); 
// DO-WHILE: Primero ejecuta la instrucción y luego compara (al revés que el WHILE) 
// sintaxis: 
// do {
    
// } while (condition);
// ---------------------------------------------------------------------  
// FOR: Se utiliza generalmente para trabajar con variables tipo ARRAYS 
// sintaxis: 
// for (var i = 0; i < valor; i++) {
//     instrucciones en bucle
// }
// Ejemplo1: Imprimir los números del 1 al 5 
for(var i = 1; i < 6; i++) {
    console.log(i);
}
console.log("-----------------------------------------------------------"); 
// Ejemplo2: Imprimir los datos de un ARRAY (recorrer ARRAY)
var leng_prog = ["JS","Python","SQL","PHP","JAVA","R"];
// Existe una propiedad "length" que nos devuelve la cantidad (logintud) de los elementos de un ARRAY 
console.log(leng_prog.length);
// Podemos seleccionar (apuntar) a un determinado dato del Array, con el nombre de Array y entre corchetes, la posición (numérica) empezando por 0.
console.log(leng_prog[2]); // SQL

for (var i = 0; i < leng_prog.length; i++) {
    console.log(leng_prog[i]);  
}


