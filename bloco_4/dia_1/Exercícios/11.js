let salarioBruto = 3000;
let descontoInss;
let salarioBase;
let salarioLiquido;

if (salarioBruto <= 1556.94){
    descontoInss = ((salarioBruto / 100) * 8); 
} else if (salarioBruto <= 2594,92) {
    descontoInss = ((salarioBruto / 100) * 9);
} else if (salarioBruto <= 5189.82) {
    descontoInss = ((salarioBruto / 100) * 11);
} else {
    descontoInss = 570.88;
}

salarioBase = (salarioBruto - descontoInss);

if (descontoInss <= 1903.98) {
    salarioLiquido = salarioBase;
} else if (descontoInss <= 2826.65) {
    salarioLiquido = (((salarioBase / 100) * 7.5) - 142.80);
} else if (descontoInss <= 3751.05) {
    salarioLiquido = (((salarioBase / 100) * 15) - 354.80);
} else if (descontoInss <= 4664.68) {
    salarioLiquido = (((salarioBase / 100) * 22.5) - 636.13);
} else {
    salarioLiquido = (((salarioBase / 100) * 27.5) - 869.36);
}

console.log(descontoInss);
console.log(salarioBase);

//console.log(salarioLiquido);
