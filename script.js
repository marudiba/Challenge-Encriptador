var vocalesEncriptar = {
    "a":"ai", "e":"enter", "i":"imes", "o":"ober", "u":"ufat"
};
var vocalesDesencriptar = {
    "ai":"a", "enter":"e", "imes":"i", "ober":"o", "ufat":"u"
};
function Encriptar(){
    let texto = document.getElementById("texto").value;
    var nuevotexto = texto.replace(/[aeiou]/g, function(match){
        return vocalesEncriptar[match]
    });
    document.getElementById("copy").value = nuevotexto;
}
function Desencriptar(){
    let texto = document.getElementById("texto").value;
    var nuevotexto = texto.replace(/ai|enter|imes|ober|ufat/g, function(match){
        return vocalesDesencriptar[match];
    })
    document.getElementById("copy").value = nuevotexto;
}
function ValidarTexto(){
    var verificador = false;
    let texto = document.getElementById("texto").value;
    acentos = /[áéíóúÁÉÍÓÚ]/;
    mayus = /[A-Z]/;
    if(acentos.test(texto) || mayus.test(texto)){
        verificador = true;
    }
    if(verificador == false){
        Encriptar();
    }
    else{
        alert("Evite usar acentos o mayúsculas en el texto");
    }
}
function CopiarTexto(){
    var oTextarea = document.getElementById("copy");
    oTextarea.select();
    document.execCommand("copy");
}
