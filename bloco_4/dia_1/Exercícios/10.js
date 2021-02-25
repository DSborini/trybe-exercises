let custo = 500;
let venda = 800;
let custoTotal;
let lucro;

custoTotal = custo + ((custo / 100) * 20);
lucro = venda - custoTotal;

console.log(custoTotal);
console.log(lucro);
console.log("O lucro de 1000 produtos seria de: " + (lucro * 1000));
