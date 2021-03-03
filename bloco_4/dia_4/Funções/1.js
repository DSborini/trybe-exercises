
// Maior Numero de 2

function maiorNumero(a, b) {
    if (a > b) {
        console.log(a)
    } else if (b > a) {
        console.log(b)
    } else {
        console.log("Os valores são iguais")
    }
    
}

maiorNumero(10, 56);

// Maior Numero de 3

function maiorNumero3(a, b, c) {
    if (a > b && a > c) {
        console.log(a)
    } else if (b > a && b > c) {
        console.log(b)
    } else if (c > a && c > b) {
        console.log(c)
    } else {
        console.log("Dois ou mais valores são iguais")
    }
}

maiorNumero3(24, 45, 21);

// Valor negativo ou positivo

function positivoNegativo(valor) {
    if (valor < 0) {
        console.log("negative")
    } else if (valor > 0) {
        console.log("positive")
    } else {
        console.log("zero")
    }
}

positivoNegativo(-10);

// Triângulo Retângulo

function triangulo(lado1, lado2, lado3) {
    if (lado1 + lado2 + lado3 == 180) {
        console.log("triângulo válido")
    } else {
        console.log("erro: triângulo inválido")
    }
}

triangulo(90, 45, 45);

// Movimento Peça Xadrez

function movimentoXadrez(pecaXadrez) {
    
    switch (pecaXadrez) {
        case "peao":
            console.log("norte/1 casa");
            break;
        case "cavalo":
            console.log("movimento em L/4 casas");
            break;
        case "torre":
            console.log("movimento em linha reta/casas ilim.");
            break;
        case "bispo":
            console.log("movimento em diagonal/casas ilim.");
            break;
        case "rainha":
            console.log("movimento em linha reta e diagonal/casas ilim.");
            break;
        case "rei":
            console.log("movimento em linha reta e diagonal/1 casa");
            break;
        default:
            console.log("peça inválida");    
    }
}

movimentoXadrez("cavalo");



