let nota = 85;

switch (nota) {
    case >= 90:
        console.log("A");
    case >= 80:
        console.log("B");
    case >= 70:
        console.log("C");
    case >= 60:
        console.log("D");
    case >= 50:
        console.log("E");
    case < 50:
        console.log("F");
    case < 0 || > 100:
        console.log("erro: nota invalida");
}