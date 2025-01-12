function calcular(index) {
 for (let i = 1; i < 11; i++) {
  let resultado = index * i;
  console.log(i + " x " + index + " = " + resultado);
 }
}
for (var o = 1; o < 11; o++) {
 calcular(o)
 console.log("");
}
