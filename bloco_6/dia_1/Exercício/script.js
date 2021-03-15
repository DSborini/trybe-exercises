const lista = document.getElementById("input-estado");

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