//fig 10.12:imagenaleatoria.js
//seleccion de imagenes al azar usando arreglos
var imgIcono;
var imagenes = ["ECP", "TPE", "BPP", "GUI", "REND", "PORT", "OIS"];
var descripciones = ["Error com&uacute;n de programaci&oacute;n",
"Tipo para prevenir errores", "Buena pr&aacute;ctica programaci&oacute;n",
"Observaci&oacute;n de ingenieri&iacute;a de software"];

//elegir una imagen al azar y su descripcion correspondiente, despues modificar
//el elemento img en el cuerpo del documento
function elegirImagen(){
    var indice = Math.floor(Math.random() * 7);
    imgIcono.setAttribute("src", "/javascript2/ejemplos/" + imagenes[indice] + ".jpg");
    imgIcono.setAttribute("alt", descripciones[indice]);
}//fin de la funcion alegirImagen

//registrar el manejador de eventos de clic de imgIcono
function iniciar(){
    imgIcono = document.getElementById("imagen");
    imgIcono.addEventListener("click", elegirImagen, false);
}//fin de la funcion inicir

window.addEventListener("load", iniciar, false);