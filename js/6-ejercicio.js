// 6- Realiza un script que escriba una pirámide del 1 al 30 de la siguiente forma :

// 1
// 22
// 333
// 4444
// 55555
// 666666
// …….

let pyramid;

for (let i = 0; i <= 30; i++) {
  for (pyramid = 0; pyramid < i; pyramid++) {
    document.write(i);
  }
  document.write("<br>");
}
