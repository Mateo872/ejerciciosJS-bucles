// 16- Realiza un script que pida una cadena de texto y la devuelva al revés. Es decir, si tecleo “hola que tal” deberá mostrar “lat euq aloh”.

let string = prompt("Ingrese un texto");
let reverse = "";

for (let i = 0; i < string.length; i++) {
  let carac = string.charAt(i);
  reverse = carac + reverse;
}

document.write(reverse);
