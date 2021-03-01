let array = [];
let divisao;

for (index = 1; index <= 25; index++) {
    array.push(index);
}

for (index = 0; index < array.length; index++) {
    divisao = array[index] / 2;
    console.log(divisao);
}