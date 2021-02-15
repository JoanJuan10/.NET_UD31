function palindromoTexto(texto) {
    var sinEspacios = texto.replace(/ /g, "");
    var minuscula = sinEspacios.toLowerCase();

    let y = minuscula.length - 1;
    for (let i = 0; i < (minuscula.length / 2); i++) {
        if (minuscula[i] !== minuscula[y]) {
            return false;
        }
        y--;
        
    }
    return true;
}

var txt = prompt("Introduce un texto");

palindromoTexto(txt) ? alert("Es palindromo") : alert("No es palindromo");

