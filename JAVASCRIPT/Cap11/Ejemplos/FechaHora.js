//Fig. 11.12: FechaHora.js
//Métodods de fecha y hora del objeto Date

function iniciar()
{
    var actual= new Date();

    //Métodos de formato de cadenas y valueOf
    document.getElementById("cadenas").innerHTML =
        "<p>toString: " +actual.toString() + "</p>"
        "<p>toLocalString: " + actual.toLocaleString() + "</p>" +
        "<P>toUTCString: " + actual.toUTCString() + "</p>" +
        "<p>valueOf: " + actual.valueOf() + "</p>";

    //Métodos get
    document.getElementById("metodosGet").innerHTML =
        "<p>getDate: " + actual.getDate() + "</p>" +
        "<p>getDay: " + actual.getDay() + "</p>" +
        "<p>getMonth: " + actual.getMonth() + "</p>" +
        "<p>getFullYear: " +actual.getFullYear() + "</p>"+
        "<p>getTime: " + actual.getTime() + "</p>" +
        "<p>getHours:" + actual.getHours() +"</p>" +
        "<p>Seconds: " +actual.getMinutes() + "</p>" +
        "<p>getHours: " + actual.getSeconds() + "</p>" +
        "<p>getSeconds: " + actual.getMilliseconds() + "</p>" +
        "<p>getTimezoneOffset: " + actual.getTimezoneOffset() + "</p>";

    //creación de un objeto Date
    var otraFecha = new Date(2011,2, 18, 1, 5, 0, 0);
    document.getElementById("nuevosArgumentos").innerHTML =
        "<p>Date: " +otraFecha + "</p>";

    //Métodos set
    otraFecha.setDate(31);
    otraFecha.setMonth(11);
    otraFecha.setFullYear(2011);
    otraFecha.setHours(23);
    otraFecha.setMinutes(59);
    otraFecha.setSeconds(59);
    document.getElementById("metodosSet").innerHTML=
        "<p>Fecha modificada: " + otraFecha + "</p>";
}//fin de ka funcion iniciar

window.addEventListener("load", iniciar, false);