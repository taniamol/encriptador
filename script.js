const texto_ingresado = document.querySelector("#texto-encriptar");
const texto_resultado = document.querySelector("#texto-encriptado");
onload= document.getElementById('texto-encriptar').value='';
onload= document.getElementById('texto-encriptado').value='';

const matriz_codificador = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
];

function botonEncriptar() {
    const texto = encriptar(texto_ingresado.value);
    texto_resultado.value = texto;
    document.getElementById('texto-encriptado').style.visibility = "visible";
    document.getElementById('no-encontrado').style.visibility = "hidden";
    document.getElementById('primera-frase').style.visibility = "hidden";
    document.getElementById('segunda-frase').style.visibility = "hidden";
    document.getElementById('copiar-boton').style.visibility = "visible";
}

function encriptar(fraseEncriptada){
    for(let i = 0; i < matriz_codificador.length; i++){
        if(fraseEncriptada.includes(matriz_codificador[i][0])){
                fraseEncriptada = fraseEncriptada.replaceAll(
                matriz_codificador[i][0],
                matriz_codificador[i][1],
            );
        }
    }

    return fraseEncriptada;
    }

function botonDesencriptar() {
    const textoDesencriptado = desencriptar(texto_ingresado.value);
    texto_resultado.value = textoDesencriptado;
}

function desencriptar(fraseDesencriptada){
    for(let i = 0; i < matriz_codificador.length; i++){
        if(fraseDesencriptada.includes(matriz_codificador[i][1])){
                fraseDesencriptada = fraseDesencriptada.replaceAll(
                matriz_codificador[i][1],
                matriz_codificador[i][0],
            );
        }
    }


    return fraseDesencriptada;
}

function copiarTexto() {
    
    var copyText = document.getElementById("texto-encriptado");
    copyText.select();
    navigator.clipboard.writeText(copyText.value);document.getElementById('texto-encriptado').style.visibility = "visible";

  } 