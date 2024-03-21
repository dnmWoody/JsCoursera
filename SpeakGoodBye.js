// ¡NOTA! Los pasos de este archivo son básicamente idénticos a los que usted
// realizado en el archivo SpeakHello.js.

// PASO 6: Envuelva todo el contenido de SpeakGoodBye.js dentro de un IIFE
// Ver Conferencia 52, parte 2


// PASO 7: Crea un objeto, llamado 'byeSpeaker' al que adjuntarás
// el método "hablar" y que expondrás al contexto global
// Ver Conferencia 52, parte 1
// var byeSpeaker =

// NO adjunte la variable SpeakWord al objeto 'byeSpeaker'.
//                                                    var speakWord = "Good Bye";

// PASO 8: Reescribe la función 'speak' de manera que esté adjunta al
// objeto byeSpeaker en lugar de ser una función independiente.
// Ver Conferencia 52, parte 2
//                                                    function speak(name) {
//                                                      console.log(speakWord + " " + name);
//                                                    }

// PASO 9: Exponer el objeto 'byeSpeaker' al alcance global. Nombralo
// 'byeSpeaker' también en el ámbito global.
// xxxx.xxxx = byeSpeaker;

/****************************************/
(function(window) {
  var byeSpeaker = {}; // Creamos un objeto llamado byeSpeaker
  var speakWord = "Good Bye"; // Definimos la palabra a hablar

  byeSpeaker.speak = function(name) { // Adjuntamos el método speak al objeto byeSpeaker
    console.log(speakWord + " " + name);
  };

  window.byeSpeaker = byeSpeaker; // Exponemos el objeto byeSpeaker al ámbito global
})(window);


/*
Explicación paso a paso:

- Paso 6: Envuelves todo el contenido dentro de un IIFE para encapsularlo.
- Paso 7: Creas un objeto llamado byeSpeaker.
- Paso 8: Reescribes la función speak para que esté adjunta al objeto byeSpeaker.
- Paso 9: Expones el objeto byeSpeaker al ámbito global asignándolo a window.

Ahora, el objeto byeSpeaker contiene un método speak, y puedes acceder a él desde cualquier parte de tu código. Por ejemplo, byeSpeaker.speak("Juan") imprimirá "Good Bye Juan" en la consola.
*/