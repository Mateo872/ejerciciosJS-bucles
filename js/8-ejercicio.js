// 8- Crea script para generar pirámide siguiente con los números del 1 al número que indique el usuario (no mayor de 50)

// 1
// 12
// 123
// 1234
// 12345
// 123456
// ……

let number = prompt("Ingrese un número");

let i, pyramid;

if (number > 0 && number <= 50) {
  for (i = 1; i < number; i++) {
    for (pyramid = 1; pyramid <= i; pyramid++) {
      document.write(pyramid);
    }
    document.write("<br>");
  }
}
