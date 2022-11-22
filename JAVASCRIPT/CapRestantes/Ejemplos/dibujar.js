// Fig. 13.4: dibujar.js
// Programa simple de dibujo.
// función de inicialización par inserttar celdaas en la tabla
function crearLienzo(){
    var lado = 100;
    var tbody = document.getElementById("cuerpotabla");

    for(var i = 0; i < lado; ++i){
        var fila = document.createElement("tr");
        for(var j = 0; j < lado; ++j){
            var celda = document.createElement("td");
            fila.appendChild(celda);
        }

        tbody.appendChild(fila);
    }

    // registrar componente de escucha de mousemove para la tabla
    document.getElementById("lienzo").addEventListener("mousemove", procesarMouseMove, false);
} // fin de la función crearLienzo

// procesa el evento onmousemove
function procesarMouseMove( e ){
    if(e.target.tagName.toLowerCase() == "td"){
        // coloca la celda de azul si está presionada la tecla ctrl
        if(e.ctrlKey){
            e.target.setAttribute("class", "blue");
        } // fin de if

        // colorea la elda de rojo si está presionada la tecla mayus
        if(e.shiftKey){
            e.target.setAttribute("class", "red");
        } // fin de if
    } // fin de if
} // fin de la función procesarMouseMove

window.addEventListener("load", crearLienzo, false);