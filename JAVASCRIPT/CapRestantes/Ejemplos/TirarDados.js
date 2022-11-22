//fin 10.10:TirarDados.js
//resumen de las frecuencias de tiro de dado con un arreglo en vez de una instruccion switch
var frecuencia = [ , 0, 0, 0, 0, 0, 0]; //frecuencia[0] sin inicializar
var totalDados = 0;
var imagenesDado = new Array(12); //arreglo para almacenar elementos img

//obtener elementos img de dado
function iniciar(){
    var boton = document.getElementById("botonTirar");
    boton.addEventListener("click", tirarDados, false);
    var longitud = imagenesDado.length; //obtener longitud del arreglo una vez antes del ciclo

    for (var i = 0; i < longitud; ++i){
        imagenesDado[i] = document.getElementById("dado" + (i + 1));
    }//fin de for
}//fin de la funcion iniciar

//tirar los dados
function tirarDados(){
    var cara; //cara que se tiro
    var longitud = imagenesDado.length;

    for (var i = 0; i < longitud; ++i){
        cara = Math.floor(1 + Math.random() * 6);
        calcularTiros(cara); //incrementar un contador de frecuencia
        establecerImagen(i, cara); //mostrar imagen de dado apropiada
        ++totalDados; //incrementar total
    }//fin de for

    actualizarTablaFrecuencias();
}//fin de la funcion tirarDados

//incrementar contador de frecuencia apropiado
function calcularTiros(cara){
    ++frecuencia[cara]; //incrementar contador apropiado
}//fin de la funcion calcularTiros

function establecerImagen(numeroDado, cara){
    imagenesDado[numeroDado].setAttribute("src", "/javascript/ejemplos/dado" + cara + ".png");
    imagenesDado[numeroDado].setAttribute("alt",
    "dado con " + cara + "punto(s)");
}//fin de la funcion establecerImagen

//actualizar la tabla de frecuencias en la pagina
function actualizarTablaFrecuencias(){
    var resultados = "<table><caption>Frecuencias de tiro de dado</caption>" +
    "<thead><th>Cara</th><th>Frecuencia</th>" +
    "<th>Porcentaje</th></thead><tbody>";
    var longitud = frecuencia.length;

    //crear filas de tabla para frecuencias
    for (var i = 1; i < longitud; ++i){
        resultados += "<tr><td>" + i + "</td><td>" + frecuencia[i] + "</td><td>" +
        formatoPorciento(frecuencia[i] / totalDados) + "</td></tr>";
    }//fin de for

    resultados += "</tbody></table>";
    document.getElementById("divTablaFrecuencias").innerHTML = resultados;
}//fin de la funcion actualizarTablaFrecuencias

//formato de porcentaje
function formatoPorciento(valor){
    valor *= 100;
    return valor.toFixed(2);
}//fin de la funcion formatoPorciento

window.addEventListener("load", iniciar, false);