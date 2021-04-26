function encode(frase) {
    let codificacao = "";
    for (let index in frase) {
      if (frase[index] == "a") {
        codificacao += 1;
      } else if (frase[index] == "e") {
        codificacao += 2;
      } else if (frase[index] == "i") {
        codificacao += 3;
      } else if (frase[index] == "o") {
        codificacao += 4;
      } else if (frase[index] == "u") {
        codificacao += 5;
      } else {
        codificacao += frase[index];
      }
    }
    return codificacao
  }
  
function decode(frase) {
    let decodificacao = "";
    for (let index in frase) {
    if (frase[index] == 1) {
        decodificacao += "a";
    } else if (frase[index] == 2) {
        decodificacao += "e";
    } else if (frase[index] == 3) {
        decodificacao += "i";
    } else if (frase[index] == 4) {
        decodificacao += "o";
    } else if (frase[index] == 5) {
        decodificacao += "u";
    } else {
        decodificacao += frase[index];
    }
    }
    return decodificacao
}

const functions = { encode, decode };
module.exports = functions;