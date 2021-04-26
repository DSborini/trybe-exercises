
const assert = require('assert');

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA() {
  return names.reduce((prev, current) => {
        return prev + current.split("").reduce((prev2, current2) => {
            if (current2 === "A" || current2 === "a") return prev2 + 1;
            return prev2;
        }, 0)
  }, 0)
}

assert.deepStrictEqual(containsA(), 20);
console.log(containsA());
