// CONDICIONALES 
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

// Toda comparación en programación, va a devolver un valor Booleano (true/false) 
// Ejemplos: 
console.log(5 == 5); // true 
console.log(5 == "5"); // true 
console.log(5 === "5"); // false
console.log(5 != 5); // false
console.log(5 > 5); // false
console.log(5 >= 5); // true 
console.log(5 < 5); // false
console.log(5 <= 5); // true
console.log("-----------------------------------------------------------");
// Ejemplos: 
console.log(5 == 5 && "Hola" == "Hola"); // true
console.log(5 == 5 && "Hola" == "hola"); // false
console.log(5 == 5 || "Hola" == "Hola"); // true
console.log(5 == 5 || "Hola" == "hola"); // true
console.log("-----------------------------------------------------------");

// IF/ELSE 
// sintaxis:
// if (condicion) {
//     instrucciones que se ejecutan SI se cumple la comparación
// } else {
//     instrucciones que se ejecutan SINO se cumple la comparación
// } 

// Ejemplo1: Comprobar el mayor de dos números 
var n1 = 30;
var n2 = 30;

if (n1 > n2) {
    console.log("n1 es mayor que n2");
} else if(n2 > n1) {
    console.log("n2 es mayor que n1");
} else {
    console.log("son iguales");
}

// Ejemplo2: Simulación de un LOGIN 
// registro 
var emailDB = "armand@gmail.com";
var passDB = "a1234a";
// login 
var emailUSER = "armand@gmail.com";
var passUSER = "a1234";

if (emailUSER == emailDB && passUSER == passDB){
    console.log("LOGIN OK!!!");
}else{
    console.log("DATOS INCORRECTOS!!!");
}
console.log("-----------------------------------------------------------");
// SWITCH:  Utilizamos el SWITCH siempre que CONOZCAMOS los datos a comparar
// sintaxis: 
// switch (dato) {
//     case value:
//             ejecuta estas instrucciones
//         break; // sale del SWITCH
//     case value:
//         ejecuta estas instrucciones
//         break; 
//     .
//     . 
//     . 

//     default:
//         ejecuta estas instrucciones sino ha entrado en ningún CASE
//         break;
// }

// Ejemplo: Semáforo 
var color = "x";

switch (color) {
    case "rojo":
        console.log("No puedes pasar!");
        break;
    case "ambar":
        console.log("Precaución!");
        break;
    case "verde":
        console.log("Puedes pasar!");
        break;
    default:
        console.log("No hay un color correcto!");
        break;
}







