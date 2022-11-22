// Fig. 11.19: BusquedasFavoritasTwitter.js
// Almacenamiento y recuperación de pares clave/valor mediante el uso de 
// locaStorage y sessionStorage de HTML5
var etiquetas; // arreglo de etiquetas para consultas

// cargar las búsquedass etiquetadas anteriormente y las muestra en la página
function cargarBusquedas(){
    if(!window.sessionStorage.getItem("aquiPreviamente")){
        sessionStorage.setItem("aquiPreviamente", "true");
        document.getElementById("mensajeBienvenida").innerHTML = 
            "Bienvenido a la App de Búsquedas favoritas de Twitter";
    } // fin de if

    var longitud = localStorage.length; // número de pares clave-valor
    etiquetas = []; // crear un arreglo vacio

    // cargar todas las claves
    for(var i = 0; i < longitud; ++i){
        etiquetas[i] = localStorage.key(i);
    } // fin de for

    etiquetas.sort(); // ordemar las claves

    var marcado = "<ul>"; // se usa para almacenar el marcado de los vinvulos de búsqueda
    var url = "http://twitter.com/search?q=";

    // crear lista de vinculos
    for(var etiqueta in etiquetas){
        var consulta = url + localStorage.getItem(etiquetas[etiqueta]);
        marcado +="<li><span><a href = '" + consulta + "'>" + etiquetas[etiqueta] + "</a></span>" + 
        "<input id = '" + etiquetas[etiqueta] + "' type = 'button' value = 'Editar' onclick = 'editarEtiqueta(id)'>" + 
        "<input id = '" + etiquetas[etiqueta] + "' type = 'button' value = 'Eliminar' onclick = 'eliminarEtiqueta(id)'>";
    } // fin de for

    marcado += "</ul>";
    document.getElementById("busquedas").innerHTML = marcado;
} // fin de la función cargarBusquedas

// eliminar todos los pares clave-valor de localStorage
function borrarTodasLasBusquedas(){
    localStorage.clear()
    cargarBusquedas(); // volver a cargar las búsuqedas
} // fin de la función borrarTodasLasBusquedas

// guardar una búsuqeda recién etiquetada en localStorage
function guardarBusqueda(){
    var consulta = document.getElementById("consulta");
    var etiqueta = document.getElementById("etiqueta");
    localStorage.setItem(etiqueta.ariaValueMax, consulta.value);
    etiqueta.value = ""; // borrar entrada de etiqueta
    consulta.value = ""; // borrar entrada de consulta
    cargarBusquedas(); // vuelve a cargar las búsquedas
} // fin de la función guardarBusuqeda

// elimina un par clave-valor especificado de localStorage
function eliminarEtiqueta(etiqueta){
    localStorage.removeItem(etiqueta);
    cargarBusquedas(); // recargar búsquedas
} // fin de la función eliminarEtiqueta

// mostrar la consulta etiquetada existente para editarla
function editarEtiqueta(etiqueta){
    document.getElementById("consulta").value = localStorage[etiqueta];
    document.getElementById("etiqueta").value = etiqueta;
    cargarBusquedas(); // vuelve a cargar las búsquedas
} // fin de la función editarEtiqueta

// registrar manejadores de eventos y luego cargar búsquedas
function iniciar(){
    var botonGuardar = document.getElementById("botonGuardar");
    botonGuardar.addEventListener("click", guardarBusqueda, false);
    var botonBorrar = document.getElementById("botonBorrar");
    botonBorrar.addEventListener("click", borrarTodasLasBusquedas, false);
    cargarBusquedas(); // cargar las búsquedas guardadas previamente
} // fin de la función iniciar

window.addEventListener("load", iniciar, false);