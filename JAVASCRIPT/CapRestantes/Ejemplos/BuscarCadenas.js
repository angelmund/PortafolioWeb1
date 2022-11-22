// Fig. 11.7: BuscarCadenas. j s
// Búsqueda en cadenas con indexOf y lastln d ex O f.
var letras= "abcdefghljklmnopqrstuvwxyzabcdefghljklm";

function botonPresionado()
{
    var campoEntrada= document.getElementById("campoEntrada");

    document.getElementById("resultados").innerHTML = 
    "<p> La primera ocurrencia se encuentra en el &iacute;ndice"+
    letras.indexOf(campoEntrada.value) + "</p>" +
    "<p> La &uacute;ltima ocurrencia se encuentra en el &iacute;ndice" +
    letras.lastIndexOf(campoEntrada.value) + "</p>" +
    "<p>La primera ocurrencia de &iacute;ndice 12 se encunetra en el &iacute;ndice"
    letras.indexOf(campoEntrada.value, 12) + "</p>"+
    "<p>La &uacuteltima ocurrencia del &iacute 12 se encunetra en el &iacute;ndice" +
    letras.lastIndexOf(campoEntrada.value, 12) + "</p>";
}//finde la funcion botonPresionado

function iniciar()
{
    var botonBuscar = document.getElementById("botonuscar");
    botonBuscar.addEventListener("click", botonPresionado, false);
}//fin de la funcion iniciar

window.addEventListener("load", iniciar, false);