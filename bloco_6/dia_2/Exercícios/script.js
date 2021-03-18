const lista = document.getElementById("input-estado");
const botaoEnvia = document.getElementById("botao-enviar");
const botaoLimpa = document.getElementById("botao-limpar");
const resultado = document.getElementById("resultado");
const inputs = document.getElementsByClassName("input-value");
const radios = document.getElementsByName("tipores");
const forms = document.getElementById("forms");



let estadosBrasil = [
    "Acre", 
    "Alagoas", 
    "Amapá", 
    "Amazonas", 
    "Bahia", 
    "Ceará", 
    "Distrito Federal", 
    "Espirito Santo", 
    "Goiás", 
    "Maranhão", 
    "Mato Grosso do Sul", 
    "Mato Grosso", 
    "Minas Gerais", 
    "Pará", 
    "Paraíba", 
    "Paraná", 
    "Pernambuco", 
    "Piauí", 
    "Rio de Janeiro", 
    "Rio Grande do Norte", 
    "Rio Grande do Sul", 
    "Rondônia", 
    "Roraima", 
    "Santa Catarina", 
    "São Paulo", 
    "Sergipe", 
    "Tocantins"];


criarLista();

botaoEnvia.addEventListener("click", criarOutput);

botaoLimpa.addEventListener("click", resetar);
    
function criarLista() {
    for (let index = 0; index < estadosBrasil.length; index += 1) {
    criarOpcao(estadosBrasil[index]);
    }
}

function criarOpcao(estado) {
    opcao = document.createElement("option");
    opcao.innerText = estado;
    lista.appendChild(opcao); 
}

function criarOutput() {
     for (let index = 0; index < inputs.length; index += 1) {
        if (index === 6) {
            if (radios[0].checked) {
                criarParagrafo("Casa");
            }
        } else if (index === 7) {
            if (radios[1].checked) {
                criarParagrafo("Apartamento");
            }
        } else {
            criarParagrafo(inputs[index].value);
        }
     }
}

function criarParagrafo(input) {
    let paragrafo = document.createElement("p");
    paragrafo.innerText = input;
    resultado.appendChild(paragrafo);
}

function resetar() {
    forms.reset();
    resultado.innerHTML="";
}
