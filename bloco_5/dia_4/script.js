
const body = document.getElementById("corpo");
const fundo1 = document.getElementById("fundo1");
const fundo2 = document.getElementById("fundo2");
const corFonte1 = document.getElementById("corFonte1");
const corFonte2 = document.getElementById("corFonte2");
const tamanho1 = document.getElementById("tamanho1");
const tamanho2 = document.getElementById("tamanho2");
const espaco1 = document.getElementById("espaco1");
const espaco2 = document.getElementById("espaco2");
const fonte1 = document.getElementById("fonte1");
const fonte2 = document.getElementById("fonte2");

let corFundo = localStorage.getItem("corFundo");
let corFonte = localStorage.getItem("corFonte");
let tamanhoDaFonte = localStorage.getItem("tamanhoFonte");
let espacamentoTexto = localStorage.getItem("espacamento");
let fontStyle = localStorage.getItem("fontStyle");

trocaFundo(corFundo);
trocaCor(corFonte);
tamanhoFonte(tamanhoDaFonte);
espacamento(espacamentoTexto);
trocaFonte(fontStyle);

fundo2.addEventListener("click", function(){
    trocaFundo(1);
})

fundo1.addEventListener("click", function(){
    trocaFundo(0);
})

corFonte1.addEventListener("click", function(){
    trocaCor(0);
})

corFonte2.addEventListener("click", function(){
    trocaCor(1);
})

tamanho1.addEventListener("click", function(){
    tamanhoFonte(0);
})

tamanho2.addEventListener("click", function(){
    tamanhoFonte(1);
})

espaco1.addEventListener("click", function(){
    espacamento(0);
})

espaco2.addEventListener("click", function(){
    espacamento(1);
})

fonte1.addEventListener("click", function(){
    trocaFonte(0);
})

fonte2.addEventListener("click", function(){
    trocaFonte(1);
})


function trocaFundo(valor) {
    if (valor == 1) {
        body.style.backgroundColor = "#30363d"
        localStorage.setItem("corFundo", 1)
    } else {
        body.style.backgroundColor = "white"
        localStorage.setItem("corFundo", 0)
    }   
}

function trocaCor(valor) {
    if (valor == 1) {
        body.style.color = "#b1bac4"
        localStorage.setItem("corFonte", 1)
    } else {
        body.style.color = "black"
        localStorage.setItem("corFonte", 0)
    }   
}

function tamanhoFonte(valor) {
    if (valor == 1) {
        body.style.fontSize = "large"
        localStorage.setItem("tamanhoFonte", 1)
    } else {
        body.style.fontSize = "medium"
        localStorage.setItem("tamanhoFonte", 0)
    }   
}

function espacamento(valor) {
    if (valor == 1) {
        body.style.lineHeight = "200%"
        localStorage.setItem("espacamento", 1)
    } else {
        body.style.lineHeight = "normal"
        localStorage.setItem("espacamento", 0)
    }   
}

function trocaFonte(valor) {
    if (valor == 1) {
        body.style.fontFamily = "'Akaya Telivigala', cursive"
        localStorage.setItem("fontStyle", 1)
    } else {
        body.style.fontFamily = "Arial, Helvetica, sans-serif"
        localStorage.setItem("fontStyle", 0)
    }   
}