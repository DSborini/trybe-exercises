let pecaXadrez = "Cavalo";
pecaXadrez = pecaXadrez.toLocaleLowerCase();

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