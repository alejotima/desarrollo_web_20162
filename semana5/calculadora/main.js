/*jslint loopfunc: true, vars: true, plusplus: true, devel: true, nomen: true, indent: 4, maxerr: 50 */
/*
 *   patron de diseño - immediately-invoked function expression - soluciona el problema que le paso a david
 *   https://en.wikipedia.org/wiki/Immediately-invoked_function_expression
 */
(function () {
    'use strict';
    var i,
        buttons,    //Variable utilizada para bindear el evento a todos los botones con clase CSS .boton
        pantalla,   //Variable utilizada para mostrar el resultado en el div con id pantalla
        operacion,  //Variable utilizada para guardar la evaluacion de la operacion
        isIgual;    //Variable utilizada para saber cuando le da Igual, y asi borrar el contenido y iniciar de nuevo las operaciones
    pantalla = document.getElementById('pantalla');     //Obtengo el div con identificador pantalla
    buttons = document.querySelectorAll('.boton');      //Ontengo todos los elementos que tienen la clase boton
    isIgual = false;                                    //Inicializo la variable igual en false, hasta que no le den igual
    for (i = 0; i < buttons.length; i++) {              //Recorrolo el array con los elementos con clase boton
        buttons[i].addEventListener('click', function (event) { //por cada uno de los botones les Bindeo el evento click
            if (isIgual) {          // Si no se le a dado en el igual no entra, pero luego de que se le de igual entra y limpia la pantalla y inicializa la variable en false
                pantalla.innerHTML = '';
                isIgual = false;
            }
            switch (this.id) { //This.id me trae el elemento al que le estoy dando click y el id es para saber que elemento es, para mas informacion sobre el SWITCH vayan a esta pagina http://www.w3schools.com/js/js_switch.asp
            case 'suma':
                pantalla.innerHTML += event.target.innerHTML; //Voy concatenando cada vez que le dan click a algun elemento de la calculadora
                return;
            case 'resta':
                pantalla.innerHTML += event.target.innerHTML; //Voy concatenando cada vez que le dan click a algun elemento de la calculadora
                return;
            case 'multi':
                pantalla.innerHTML += event.target.innerHTML; //Voy concatenando cada vez que le dan click a algun elemento de la calculadora
                return;
            case 'divi':
                pantalla.innerHTML += event.target.innerHTML; //Voy concatenando cada vez que le dan click a algun elemento de la calculadora
                return;
            case 'igual':
                operacion = eval(pantalla.innerHTML);       //Evaluo lo escrito, ese es el resultado
                pantalla.innerHTML = '';                    //Limpio la pamtalla
                pantalla.innerHTML = operacion;             //Asigno la operacion
                isIgual = true;                             //restablezco la calculadora, para que inicie otra operacion
                return;
            default:
                pantalla.innerHTML += event.target.innerHTML;//Voy concatenando numeros cada vez que le dan click a algun numero
                return;
            }
        });
    }
}());