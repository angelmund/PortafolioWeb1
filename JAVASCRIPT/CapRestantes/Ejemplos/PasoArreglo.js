//fig 10.14: pasoarreglo.js
//paso de arreglos y elementos individuales de arreglos a funciones
function iniciar(){
    var a = [1, 2, 3, 4, 5];

    //pasar tod un arreglo
    imprimirArreglo("Arreglo original: ", a,
        document.getElementById("arregloOriginal"));
    modificarArreglo(a); //el arreglo a pasado por referencia
    imprimirArreglo("Arreglo modificado: ", a,
        document.getElementById("arregloModificado"));

    //pasar un elemento individual del arreglo
    document.getElementById("elementoOriginal").innerHTML = 
        "a[3] antes de modificarElemento: " + a[3];
    modificarElemento(a[3]); //elemento del arreglo a[3] pasado por valor
    document.getElementById("elementoModificado").innerHTML =
        "a[3] despu&eacute;s de modificarElemento: " + a[3];
}//fin de la funcion iniciar()

//imprime encabezado seguido del contenido de "elArreglo"
function imprimirArreglo(encabezado, elArreglo, salida){
    salida.innerHTML = encabezado + elArreglo.join(" ");
}//fin de la funcion imprimirArreglo

//funcion que modifica los elementos de un arreglo
function modificarArreglo(elArreglo){
    for (var j in elArreglo){
        elArreglo[j] *= 2;
    }//fin de for
}//fin de la funcion modificarArreglo

//funcion que modifica el valor que se paso
function modificarElemento(e){
    e *= 2; //escala el elemento e solo mientras dure la funcion
    document.getElementById("enModificarElemento").innerHTML =
    "Valor en modificarElemento: " + e;
}//fin de la funcion modificarElemento

window.addEventListener("load", iniciar, false);