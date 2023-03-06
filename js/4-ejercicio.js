// 4- Realiza un script que pida números hasta que se pulse “cancelar”. Si no es un número deberá indicarse con un «alert» y seguir pidiendo números. Al salir con “cancelar” deberá indicarse la suma total de los números introducidos.

let numberResult = 0;

do {
  let number = prompt("Ingrese un número");

  if (isNaN(number)) {
    alert("No es un número");
  } else {
    numberResult += +number;
  }
} while (confirm("Querés seguir?"));

console.log(numberResult);
