// PASO 2: Envuelva todo el contenido de SpeakHello.js dentro de un IIFE
// Ver Conferencia 52, parte 2


// PASO 3: Crea un objeto, llamado 'helloSpeaker' al que adjuntarás
// el método "hablar" y que expondrás al contexto global
// Ver Conferencia 52, parte 1
// var holaAltavoz =

// NO adjunte la variable SpeakWord al objeto 'helloSpeaker'.
//                                  var speakWord = "Hello";

// PASO 4: Reescribe la función 'hablar' de manera que esté adjunta al
// objeto helloSpeaker en lugar de ser una función independiente.
// Ver Conferencia 52, parte 2
//                                  function speak(name) {
//                                    console.log(speakWord + " " + name);
//                                  }

// PASO 5: Exponer el objeto 'helloSpeaker' al alcance global. Nombralo
// 'helloSpeaker' también en el ámbito global.
// Ver Conferencia 52, parte 2
// (Nota: el paso 6 se realizará en el archivo SpeakGoodBye.js).
// xxxx.xxxx = helloSpeaker;

    /**********************************************************/

(function(window) {

  var speakWord = "Hello"; // Definimos la palabra a hablar

  // Reescribimos la función 'speak' para que esté dentro del IIFE
  function speak(name) {
    console.log(speakWord + " " + name);
  }

  // Exponemos la función 'speak' al ámbito global asignándola a 'window'
  window.speak = speak;
})(window);


/*

En este código:

- Todo el contenido de SpeakHello.js está envuelto dentro de un IIFE, que comienza con 
          (function() { 
              y termina con 
            })(window);.
- La variable speakWord se define dentro del IIFE.
- La función speak(name) también está definida dentro del IIFE.
- La función speak(name) se expone al ámbito global asignándola a window, lo que permite que sea accesible desde fuera del IIFE.

Esto asegura que el código esté encapsulado dentro de su propio ámbito y no cause conflictos con otras variables o funciones en el ámbito global.
*/


/*
Un IIFE, que significa "Immediately Invoked Function Expression" en inglés, es una función que se invoca inmediatamente después de ser definida. Es una forma común de encapsular el código dentro de su propio ámbito, evitando así la contaminación del ámbito global y posibles conflictos de nombres con otras variables o funciones.

La estructura básica de un IIFE es la siguiente:

javascript
Copy code
(function() {
    // código aquí
})();
*/