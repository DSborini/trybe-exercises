let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let numerosImpares = 0;
let numeroAtual = 0;

for (index = 0; index < numbers.length; index++) {
    numeroAtual = numbers[index];
    if ((numeroAtual % 2) != 0) {
        numerosImpares++;
    }
}

if (numerosImpares > 0) {
    console.log(numerosImpares)
} else {
    console.log("nenhum valor ímpar encontrado")
}