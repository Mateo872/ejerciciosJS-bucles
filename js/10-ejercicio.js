// 10- Realiza un script que pida número de filas y columnas y escriba una tabla. Dentro de cada una de las celdas deberá escribirse un número consecutivo en orden descendente. Si, por ejemplo, la tabla es de 7×5 los números irán del 35 al 1.

let row = +prompt("Ingrese un número de filas");

let column = +prompt("Ingrese un número de columnas");

let result = row * column;

document.write("<table>");

for (let i = 0; i < row; i++) {
  document.write("<tr>");
  for (let col = 0; col < column; col++) {
    document.write("<td>");
    document.write(result);
    result--;
    document.write("</td>");
  }
  document.write("</tr>");
}
document.write("</table>");
