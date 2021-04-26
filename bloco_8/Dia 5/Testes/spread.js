// Faça uma lista com as suas frutas favoritas
const specialFruit = ['Banana', 'Morango', 'Laranja'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['Granola', 'Leite Condensado'];

const fruitSalad = (fruit, additional) => {
  const salad = [...fruit, ...additional];
  return salad;
};

console.log(fruitSalad(specialFruit, additionalItens));