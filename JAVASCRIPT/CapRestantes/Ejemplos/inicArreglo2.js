//fig 10.6: inicArreglo2.js
//inicializacion de los arreglos con listas inicializadas
function iniciar(){
    // la lista inicializadora especifica el numero de elemtnos y
    // un valor para cada elemento
    var colores = new Array("cyan", "magenta", "amarillo", "negro");
    var enteros1 = [2, 4, 6, 8];
    var enteros2 = [2, , , 8];

    imprimirArreglo("El arreglo colores contiene", colores,
        document.getElementById("salida1"));
    imprimirArreglo("El arreglo enteros1 contiene", enteros1,
        document.getElementById("salida2"));
    imprimirArreglo("El arreglo enteros2 contiene", enteros2,
        document.getElementById("salida3"));
}//fin de la funcion iniciar

//imprimir el encabezado seguido de un atabla de dos columnas
//que contiene indices y elementos de "elArreglo"
function imprimirArreglo(encabezado, elArreglo, salida){
    var contenido = "<h2>" + encabezado + "</h2><table>" +
    "<thead><th>Index</th><th>Value</th></thead><tbody>";
    //imprime el indice y el valor de cada elemento del arreglo
    var longitud = elArreglo.length; //obtiene la longitud del arreglo una vez despues del ciclo
    for (var i = 0; i < longitud; ++i){
        contenido += "<tr><td>" + i + "</td><td>" + elArreglo[i] +
        "</td></tr>";
    }//fin de for

    contenido += "</tbody></table>";
    salida.innerHTML = contenido; //colocar en el elemento salida
}//fin de la funcion imprimirArreglo

window.addEventListener("load", iniciar, false);