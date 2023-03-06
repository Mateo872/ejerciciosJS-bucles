// 11- Realiza un script que pida por teclado 3 edades y 3 nombres e indique el nombre del mayor. *

// Nota: ver funcion Math() https://www.w3schools.com/js/js_math.asp

let firstName = prompt("Ingrese un nombre");
let firstNumber = +prompt("Ingrese un número");

let secondName = prompt("Ingrese otro nombre");
let secondNumber = +prompt("Ingrese otro número");

let thirdName = prompt("Ingrese otro nombre");
let thirdNumber = +prompt("Ingrese otro número");

const max = Math.max(firstNumber, secondNumber, thirdNumber);

if (max == firstNumber) {
  document.write(`El mayor es: ${firstName}`);
} else if (max == secondNumber) {
  document.write(`El mayor es: ${secondName}`);
} else if (max == thirdNumber) {
  document.write(`El mayor es: ${thirdName}`);
}
