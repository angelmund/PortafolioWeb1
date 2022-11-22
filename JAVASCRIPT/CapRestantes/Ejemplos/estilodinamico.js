// Fig. 12.16: estilodinamico.js
// Secuencia de comandos para demostrar los estilos dinámicos.
function iniciar(){
    var colorEntrada = prompt("Escriba el nombre de un color para el fondo de esta página", "");
    document.body.setAttribute("style", "background-color: " + colorEntrada);
} // fin de la función iniciar

window.addEventListener("load", iniciar, false);