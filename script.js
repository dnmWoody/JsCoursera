// *******************************
// COMIENCE AQUÍ SI DESEA UN PUNTO DE PARTIDA MÁS FÁCIL PARA ESTA TAREA
// *******************************
//
// Instrucciones de tarea del Módulo 4.
//
// La idea de esta tarea es tomar una matriz de nombres existente
// y luego envía Hola 'Nombre' o Adiós 'Nombre' a la consola.
// El programa debe decir "Hola" a cualquier nombre excepto a los nombres que comienzan con "J"
// o "j", en caso contrario, el programa debería decir "Adiós". Entonces, el resultado final
// en la consola debería verse así:
/*
Hola Yaakov
Adiós Juan
Adiós Jen
Adiós Jason
Hola pablo
Hola franco
Hola larry
Hola paula
Hola Laura
Adiós Jim

¡¡¡ADVERTENCIA!!! ¡¡¡ADVERTENCIA!!!
¡El código NO funciona actualmente! Es TU trabajo hacerlo funcionar
como se describe en los requisitos y los pasos para completar este
asignación.
¡¡¡ADVERTENCIA!!! ¡¡¡ADVERTENCIA!!!

*/

// PASO 1: (NADA QUE HACER. YA HECHO POR USTED)
// Envuelve todo el contenido de script.js dentro de un IIFE
// Ver Conferencia 52, parte 2
// (Nota: el paso 2 se realizará en el archivo SpeakHello.js).
(function () {
   // Define el objeto helloSpeaker
   var helloSpeaker = {};

   // Adjunta el método speak a helloSpeaker
   helloSpeaker.speak = function(name) {
     console.log("Hello " + name);
   };
 
   // Define el objeto byeSpeaker
   var byeSpeaker = {};
 
   // Adjunta el método speak a byeSpeaker
   byeSpeaker.speak = function(name) {
     console.log("Good Bye " + name);
   };
 

var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

// PASO 10: (NADA QUE HACER. YA HECHO POR USTED)
// Recorre la matriz de nombres y di "Hola" o "Adiós"
// usando el método 'hablar' de helloSpeaker o byeSpeaker.
// Ver Conferencia 50, parte 1
for (var i = 0; i < names.length; i++) {

 // PASO 11: (NADA QUE HACER. YA HECHO POR TI)
   // Recupera la primera letra del nombre actual en el bucle.
   // Utilice la función 'charAt' del objeto de cadena. ya que estamos buscando
   // nombres que comienzan con mayúsculas o minúsculas 'J'/'j', llame
   // método 'toLowerCase' del objeto de cadena en el resultado para que podamos comparar
   // al carácter 'j' en minúscula después.
   // Busque estos métodos en el sitio web de Mozilla Developer Network si es necesario.

  var firstLetter = names[i].charAt(0).toLowerCase();

// PASO 12: (NADA QUE HACER. YA HECHO POR TI)
   // Compara la 'primera letra' recuperada en el PASO 11 con minúsculas
   // 'j'. Si es lo mismo, llame al método 'speak' de byeSpeaker con el nombre actual
   // en el lazo. De lo contrario, llame al método 'speak' de helloSpeaker con la configuración actual
   // nombre en el bucle.


   //// Comprobamos si la primera letra es 'j' para usar byeSpeaker, de lo contrario usamos helloSpeaker
  if (firstLetter === 'j') {
    byeSpeaker.speak(names[i]);
  } else {
    helloSpeaker.speak(names[i]);
  }
}

})();
