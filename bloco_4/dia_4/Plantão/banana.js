function transformaMaiusculo(palavra) {
    let palavraMaiuscula = "";
    for (let index = 0; index < palavra.length; index += 1) {
        palavraMaiuscula += palavra[index].toUpperCase() + " ";
    }
    return palavraMaiuscula;
}

console.log(transformaMaiusculo("banana"));