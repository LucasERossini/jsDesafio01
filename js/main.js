//! Variables
let palabra = prompt('Introduzca la primera palabra o escriba "ESC" para cancelar:'); // variable que obtiene una palabra ingresada por el usuario
let frase = palabra; // variable donde se irán concatenando las palabras ingresadas por el usuario

//! Condición de salida del programa
if (palabra != "ESC") {
    //! Ciclo while para concatenar input de usuario
    while (palabra != "ESC") {
        alert('La frase hasta el momento es: "' + frase + '".'); // se muestra por alert la frase hasta el momento
        palabra = prompt('Introduzca la siguiente palabra o escriba "ESC" para cancelar:'); // se pide una nueva palabra
        //! Condición de concatenación de nueva palabra
        if (palabra != "ESC") {
            frase = frase + " " + palabra; // se concatena la nueva palabra
        };
    };
    alert('La frase final es: "' + frase + '".'); // se muestra por alert la frase final
};

alert('Salió del programa.'); // se avisa que se saió del programa