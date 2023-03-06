// 15- Realiza un script que cuente el número de vocales que tiene un texto.

let string = prompt("Ingrese un texto");

let cont = 0;

for (let i = 0; i < string.length; i++) {
  let carac = string.charAt(i).toLowerCase();

  if (
    carac == "a" ||
    carac == "e" ||
    carac == "i" ||
    carac == "o" ||
    carac == "u"
  ) {
    cont++;
  }
}

document.write(`Son ${cont} vocales`);
