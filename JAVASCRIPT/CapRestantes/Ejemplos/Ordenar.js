//fig 10.16: Ordenar.js
//ordenar un arreglo mediante sort
function iniciar(){
    var a = [10, 1, 9, 2, 8, 3, 7, 4, 6, 5];

    imprimirArreglo("Elementos de datos en el orden original: ", a,
        document.getElementById("arregloOriginal"));
    a.sort(compararEnteros); //ordenar el arreglo
    imprimirArreglo("Elementos de datos en orden ascendente: ", a,
        document.getElementById("arregloOrdenado"));
}//fin de la funcion iniciar

//imprimir el encabezado seguido del contenido de elArreglo
function imprimirArreglo(encabezado, elArreglo, salida){
    salida.innerHTML = encabezado + elArreglo.join(" ");
} //fin de la funcion imprimirArreglo

//funcion de comparacion para usar con sort
function compararEnteros(valor1, valor2){
    return parseInt(valor1) - parseInt(valor2);
}//fin de la funcion compararEnteros

window.addEventListener("load", iniciar, false);