
console.log("Bienvenido al programa de conversion.")
console.log(" ")


let opc; 



do{

console.log("1_ Dolar. 0,0028 usd  ");
console.log("2_ Euro.  0,0025 eur ");
console.log("3_ Yen.   0,41 jpy");
console.log("4_ Real.  0,14 brl ");
console.log("5_ Salir.");


let pesos = prompt("Ingrese el monto que desea saber la conversion");

opc = parseInt(prompt("Ingrese la opcion del tipo de moneda que desea convertir."));

switch(opc){

    case 1: console.log(" La conversion a dolares es: " + converDolar(pesos) );
    break;

    case 2: console.log(" La conversion a euros es: " + converEuro(pesos));
    break;

    case 3: console.log(" La conversion a yenes es: " + converYenes(pesos));
    break;

    case 4: console.log(" La conversion a reales es: " + converReal(pesos));
    break;

    case 5: console.log("Muchas Gracias!");
    break;

    default: console.log("Ingrese una opcion valida.");
}
}while(opc !=5);

function converDolar (pesos){
    return pesos*0.0028;
}

function converEuro (pesos){
    return pesos*0.0025;
}
function converYenes (pesos){
    return pesos*0.41;
}
function converReal (pesos){
    return pesos*0.14;
}

