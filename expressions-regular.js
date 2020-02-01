//# Expresiones regulares
//
//1. **Ejercicio** Escribe una expresion regular para indicar si la primera letra esta en mayúscula o no.
const mayus = "Hello";
const minus = "hello";
let regex = /^[A-Z]/;


console.log(regex.test(mayus));//La primera es true por que empieza por mayuscula y la segunda false
console.log(regex.test(minus));

//1. **Ejercicio** Escribe un programa para probar si una cadena es un email o no. 

const email = "deivid.develop@gmail.com"
regex = /[\w]+@[\w]+\.\w/; 
console.log(regex.test(email));


//1. **Ejercicio** Escribe un programa para contar el numero de palabras que tiene un string. Intenta además que
//* Se quiten los espacios en blanco al inicio y final del string.
//* Se conviertan los espacios en blanco sucesivos en un único espacio en blanco.
//* Se cambie los saltos de líneas a un espacio en blanco.



//1. **Ejercicio** Escribe una regex para comprobar que un valor es alfanumérocio.

const alfaNum = '5';
const alfaNum2 = '-';
console.log(/\w/.test(alfaNum));
console.log(/\w/.test(alfaNum2));
//1. **Ejercicio** Escribe una regex para ver si una cadena es un codigo postal.

