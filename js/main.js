//! Variables
let palabra = prompt('Introduzca la primera palabra o escriba "ESC" para cancelar:'); // variable que obtiene una palabra ingresada por el usuario
let frase = palabra; // variable donde se irán concatenando las palabras ingresadas por el usuario

//! Ciclo while para concatenar input de usuario
while (palabra != "ESC") {
    alert(frase); // se muestra por alert la frase hasta el momento
    palabra = prompt('Introduzca la siguiente palabra o escriba "ESC" para cancelar:'); // se pide una nueva palabra
    frase = frase + " " + palabra; // se concatena la nueva palabra
};