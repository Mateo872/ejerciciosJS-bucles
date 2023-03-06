// 7- Haz un script que escriba una pirámide inversa de los números del 1 al número que indique el usuario (no mayor de 50)  de la siguiente forma : (suponiendo que indica 30).

// 303030303030303030303030303030303030303030303030303030303030
// 2929292929292929292929292929292929292929292929292929292929
// 28282828282828282828282828282828282828282828282828282828
// …..
// 333
// 22
// 1

let number = +prompt("Ingrese un número");

let i;
let pyramid;

if (number > 0 && number <= 50) {
  for (i = number; i >= 1; i--) {
    for (pyramid = i; pyramid >= 1; pyramid--) {
      document.write(i);
    }
    document.write("<br>");
  }
}
