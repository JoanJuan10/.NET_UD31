var numero = prompt("Introduce un factorial entero");
var num = numero;
var resultado = num;
num--;

for (let i = num; i > 0; i--) {
    resultado *= num--;
}
alert("Factorial de " + numero + " es: " + resultado);