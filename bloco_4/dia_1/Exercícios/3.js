let a = 5;
let b = 10;
let c = 11;

if (a > b && a > c) {
    console.log(a)
} else if (b > a && b > c) {
    console.log(b)
} else if (c > a && c > b) {
    console.log(c)
} else {
    console.log("Dois ou mais valores são iguais")
}