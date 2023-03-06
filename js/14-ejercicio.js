// 14- Realiza un script que pida una cadena de texto y lo muestre poniendo el signo – entre cada carácter sin usar el método replace. Por ejemplo, si tecleo “hola qué tal”, deberá salir “h-o-l-a- -q-u-e- -t-a-l”.

let string = prompt("Ingrese un texto");

let i;

for (i = 0; i < string.length; i++) {
  let carac = string.charAt(i);

  if (i == string.length - 1) {
    document.write(carac);
  } else {
    document.write(`${carac} -`);
  }
}
