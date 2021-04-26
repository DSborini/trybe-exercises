const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const compararNumeros = (a, b) => (a - b);
const ordena = (numeros) => numeros.sort(compararNumeros);
const ordenaArray = () => `Os números ${ordena(oddsAndEvens)} se encontram ordenados de forma crescente!`;

console.log(ordenaArray());



//https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/sort