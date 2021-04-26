

function calcularFatorialRecursivamente (n) {
    if (n === 1) {
        return 1;
    }
     
    return n * calcularFatorialRecursivamente (n - 1);
}

console.log(calcularFatorialRecursivamente(4));