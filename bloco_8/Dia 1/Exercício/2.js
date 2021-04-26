function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }
 //https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/random

 const verification = (luckNumber, number) => {
     if (luckNumber === number) {
         console.log(`Numero sorteado: ${luckNumber}, seu numero: ${number},`)
         console.log("Parabéns você ganhou!")
     } else {
         console.log(`Numero sorteado: ${luckNumber}, seu numero: ${number},`)
         console.log("Tente novamente :p")
     }
 }

 const result = (number) => {
    let luckNumber = getRandomInt(1, 6);
    return verification(luckNumber, number);
}

result(5);