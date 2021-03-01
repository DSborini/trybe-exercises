let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let menorNumero = 1000;
let numeroAtual = 0;

for (index = 0; index < numbers.length; index++) {
    numeroAtual = numbers[index];
    if (numeroAtual < menorNumero) {
        menorNumero = numeroAtual;
    }
}

console.log (menorNumero);