let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let maiorNumero = 0;
let numeroAtual = 0;

for (index = 0; index < numbers.length; index++) {
    numeroAtual = numbers[index];
    if (numeroAtual > maiorNumero) {
        maiorNumero = numeroAtual;
    }
}

console.log (maiorNumero);