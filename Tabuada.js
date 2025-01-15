function calcular(index) {
 for (let i = 1; i <= 10; i++) {
  let resultado = index * i;
  console.log(index + " x " + i + " = " + resultado);
 }
}
for (let o = 1; o <= 10; o++) {
 calcular(o)
 console.log("");
}
