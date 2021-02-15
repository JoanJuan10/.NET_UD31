var valores = [true, 5, false, "hola", "adios", 2];
var mayor = 0;
for (let i = 0; i < valores.length; i++) {
    if (valores[i] > mayor) {
        mayor = valores[i];
    }
    
}
console.log("El valor mayor es " + mayor);

var v1 = valores[0] == valores[2];
var v2 = valores[0] != valores[2];

console.log(v1);
console.log(v2);

console.log(valores[1] + "+" + valores[5] + " = " + (valores[1] + valores[5]));
console.log(valores[1] + "-" + valores[5] + " = " + (valores[1] - valores[5]));
console.log(valores[1] + "*" + valores[5] + " = " + (valores[1] * valores[5]));
console.log(valores[1] + "/" + valores[5] + " = " + (valores[1] / valores[5]));
console.log(valores[1] + "%" + valores[5] + " = " + (valores[1] % valores[5]));
