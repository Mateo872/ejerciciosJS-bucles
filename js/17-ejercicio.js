// 17- Realiza un script que muestre la posición de la primera vocal de un texto introducido por teclado.

let string = prompt("Ingrese un texto");

let position = 0;

for (let i = 0; i < string.length; i++) {
  if (
    string[i] == "a" ||
    string[i] == "e" ||
    string[i] == "i" ||
    string[i] == "o" ||
    string[i] == "u"
  ) {
    position = i + 1;
    break;
  }
}

document.write(`La primera vocal está en la posición: ${position}`);
