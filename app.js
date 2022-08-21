var botonEncriptar = document.querySelector(".btn-encriptar");
var botonDesencriptar = document.querySelector(".btn-desencriptar");
var imagen = document.querySelector(".imagen");
var h3 = document.querySelector(".h3");
var resultado = document.querySelector(".textarea");
var botonCopiar = document.querySelector(".btn-copiar")

botonEncriptar.onclick = encriptar;
botonDesencriptar.onclick = desencriptar;
botonCopiar.onclick = copiar;

function encriptar() {
   ocultarElementos();
   var area = recuperarTexto();
   resultado.textContent = encriptarTexto(area);
}

function desencriptar(){
    ocultarElementos();
    var area = recuperarTexto();
    resultado.textContent = desencriptarTexto(area);
}

function recuperarTexto() {
    var area = document.querySelector(".area");
    return area.value;
}

function ocultarElementos() {
    imagen.classList.add("ocultar");
    h3.classList.add("ocultar");
}

function encriptarTexto(mensaje) {
    var texto = mensaje;
    var textoFinal = "";
    for(var i = 0; i < texto.length; i++){
        if(texto[i] == "a"){
            textoFinal = textoFinal + "ai";
        }else if(texto[i] == "e"){
            textoFinal = textoFinal + "enter"
        }else if(texto[i] == "i"){
            textoFinal = textoFinal + "imes"
        }else if(texto[i] == "o"){
            textoFinal = textoFinal + "ober"
        }else if(texto[i] == "u"){
            textoFinal = textoFinal + "ufat"
        }else {
            textoFinal = textoFinal + texto[i];
        }
    }
    return textoFinal;
}

function desencriptarTexto(mensaje) {
    var texto = mensaje;
    var textoFinal = "";
    for(var i = 0; i < texto.length; i++){
        if(texto[i] == "a"){
            textoFinal = textoFinal + "a";
            i++;
        }else if(texto[i] == "e"){
            textoFinal = textoFinal + "e"
            i = i + 4;
        }else if(texto[i] == "i"){
            textoFinal = textoFinal + "i"
            i = i + 3;
        }else if(texto[i] == "o"){
            textoFinal = textoFinal + "o"
            i = i + 3;
        }else if(texto[i] == "u"){
            textoFinal = textoFinal + "u"
            i = i + 3;
        }else{
            textoFinal = textoFinal + texto[i];
        }
    }
    return textoFinal;
}

function copiar(){
    var contenido = document.querySelector(".textarea");
    navigator.clipboard.writeText(contenido.innerHTML);
    alert("¡Se Copió!")
}