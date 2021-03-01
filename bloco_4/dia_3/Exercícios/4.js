
let n = 7;
let lineIndex;
let colunaLinha;
let linha = '';
let asterisco = '*';

let meio = (n + 1) / 2;
let posicaoEsquerda = meio;
let posicaoDireita = meio;

for (lineIndex = 0; lineIndex <= meio; lineIndex += 1) {
  for (colunaLinha = 1; colunaLinha <= n; colunaLinha += 1) {
    if (colunaLinha > posicaoDireita && colunaLinha < posicaoEsquerda) {
      linha = linha + asterisco;
    } else {
      linha = linha + ' ';
    }
  }
  console.log(linha);
  linha = '';
  posicaoDireita -= 1;
  posicaoEsquerda += 1;
};