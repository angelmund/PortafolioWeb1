//Fig. 11.19: BusquedasFvaoritasTwitter.js
//Almacenamiento y recuperación de pares clave/Valor mediante el uso de 
//localStore y sessionStorage de HTML5

var etiquetas; //arreglo de etiquetas para consultas

//carga las búsquedas etiquetadas anteriormente y las muestra en la página
function cargarBusquedas()
{
    if( !window.sessionStorage.getItem("aquiPreviamente"))
    {
        sessionStorage.setItem("aquiPreviamente", "true");
        document.getElementById("mensajeBienvenida").innerHTML =
            "Bienvenido a la App de B&uacute;squedas favoritas de Twitter";
    }//fin de if

    var longitud = localStorage.length; //numero de pares clave-valor
    etiquetas = [];// crea un arreglo vacio

    //cargar todas las claves
    for(var i=0; i< longitud;i++)
    {
        etiquetas[i] = localStorage.key(i);
    }//fin de for

    etiquetas.sort(); //ordenar las claves

    var marcado = "<ul>"; //se usa para almacenar el marcado de los vinculos de busqueda
    var url = "https://twitter.com/search?"

    //crear lista de vinculos
    for(var etiqueta in etiquetas)
    {
        var consulta = url + localStorage.getItem(etiquetas[etiqueta]);
        marcado +="<li><span><a href=' " + consulta + "'>" +etiquetas[etiqueta] +
        "</a></span>" +
        "<input id= '" + etiquetas[etiqueta] + "' type = 'button'" +
            "value = 'Editar' oclick= 'editarEtiqueta(id)'> "+
        "<input id= '" +etiquetas[etiqueta] + "' type= 'button' " +
            "value = 'Eliminar' onclick='eliminarEtiquetas(id)'>";
    }//fin de for

    marcado +="</ul>";
    document.getElementById("busquedas").innerHTML = marcado;
}//fin de la funcion cargarBusquedas

//elimina todos los pares clave-valor de localStorage
function borrarTodasLasBusquedas()
{
    localStorage.clear();
    cargarBusquedas();//volver a cargar las búsquedas
}// fin de la funcion borararTodaslLasBusquedas

//guardar una busqueda recien etiqueda en localStorage
function guardarBusqueda()
{
    var consulta = document.getElementById("consulta");
    var etiqueta = document.getElementById("etiqueta");
    localStorage.setItem(etiqueta.ariaValueMax,consulta.value);
    etiqueta.value= ""; //borrar entrada de etiquetas
    consulta.value = ""; //borara entrada de consulta
    cargarBusquedas(); //vuelve a cargar las búsquedas
}//fin de la funcio guardarBusqueda

//elimina un oar clave-valor especifico de localStorage
function eliminarEtiqueta(etiqueta)
{
    localStorage.removeItem(etiqueta);
    cargarBusquedas(); //recargarBusquedas
}//fin de la funcion eliminarEtiqueta


//mostrar la consulta etiquetada existente para editarla
function editarEtiqueta()
{
    document.getElementById("consulta").value = localStorage[etiqueta];
    document.getElementById("etiqueta").value = etiqueta;
    cargarBusquedas();//vuelva a cargar busquedas
}//fin de la funcion editarEtiqueta

//registrar manejadores de eventos y leuego cargar busquedas
function iniciar()
{
    var botonGuardar = document.getElementById("botonGuardar");
    botonGuardar.addEventListener("click", guardarBusqueda, false);
    var botonBorrar = document.getElementById("botonBorrar");
    botonBorrar.addEventListener("click", borrarTodasLasBusquedas, false);
    cargarBusquedas(); //cargar las busquedas guardadas previamente
}//fin de la funcion iniciar

window.addEventListener("load", iniciar, false);