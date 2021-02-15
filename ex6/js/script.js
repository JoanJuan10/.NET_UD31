var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P','D',
'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

var dni = prompt("Introduce un DNI");

var dniPartes = [dni.substr(0,8),dni.substr(8,1)];

var letraDNI;

dniPartes[0] > 99999999 ? alert("DNI INVALIDO") : letraDNI = letras[dniPartes[0] % 23];


if (letraDNI == dniPartes[1]) {
    alert("DNI CORRECTO");
}
else {
    alert("LA LETRA NO COINCIDE");
}


