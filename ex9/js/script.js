function inspeccionTexto(texto) {
    var minus = false;
    var mayus = false;
    
    for (let i = 0; i < texto.length; i++) {
        if (texto[i] === texto[i].toUpperCase()) {
            mayus = true;
        }
        else {
            minus = true;
        }
    }
    var texto = "";
    if (mayus) {
        texto += "Hay mayúsculas en el texto.\n";
    }
    if (minus) {
        texto += "Hay minúsculas en el texto.";
    }
    return texto;

}

var txt = prompt("Introduce un texto");

alert(inspeccionTexto(txt));

