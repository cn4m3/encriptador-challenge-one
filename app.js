let valorTA="";

let resultado;

function encriptar() {

    valorTA = document.getElementById('valorTextArea').value;

     if (valorTA!='') {

        let mapObj = {
            a:"ai",
            e:"enter",
            o:"ober",
            u:"ufat",
            i:"imes",
        };
    
        resultado = valorTA.replace(/a|e|i|o|u/g, function(matched){
           return mapObj[matched];
        });

        asignarTextoElemento('#resultado', resultado);

        document.getElementById('valorTextArea').value = '';

        document.getElementById('imagenMuneco').style.display = 'none';

        document.getElementById('insDos').style.display = 'none';

        document.getElementById('botonCopiar').style.display = 'block';

        var cambioCaja = document.getElementById('resultado');

        cambioCaja.style.height = '350px';

    } else{

        alert('No se ha ingresado ningún texto');

    }

    return;

}

function desencriptar() {

    valorTA = document.getElementById('valorTextArea').value;

    if (valorTA!='') {

        let mapObj = {
            ai:"a",
            enter:"e",
            ober:"o",
            ufat:"u",
            imes:"i",
        };
    
        resultado = valorTA.replace(/ai|enter|imes|ober|ufat/g, function(matched){
           return mapObj[matched];
        });

        asignarTextoElemento('#resultado', resultado);

        document.getElementById('valorTextArea').value = '';

        document.getElementById('imagenMuneco').style.display = 'none';

        document.getElementById('insDos').style.display = 'none';

        document.getElementById('botonCopiar').style.display = 'block';

    } else{

        alert('No se ha ingresado ningún texto');

    }

    return;

}

function copiar() {

    let texta = document.getElementById('resultado');

    texta.select();

    texta.setSelectionRange(0, 99999);

    document.execCommand('copy');

}


function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}