const { encode, decode } = require('./encodeTest.js');

describe('Função 1', () => {
    it('Encode é uma função', () => {
        expect(typeof encode).toEqual('function');
    })
    it('A função recebe "Olá mundo!" e retorna "Olá m5nd4!"', () => {
        expect(encode("Olá mundo!")).toEqual("Olá m5nd4!");
    });
    it('A função é definida', () => {
        expect(encode).toBeDefined();
    })
    it('A função converte todas as vogais', () => {
        expect(encode("a, e, i, o, u")).toEqual("1, 2, 3, 4, 5");
    })
    it('A função retorna uma string de mesmo tamanho', () => {
        expect(encode("string").length).toEqual(6);
    })
})

describe('Função 2', () => {
    it('Decode é uma função', () => {
        expect(typeof decode).toEqual('function');
    })
    it('A função recebe "Olá m5nd4!" e retorna "Olá mundo!"', () => {
        expect(decode("Olá m5nd4!")).toEqual("Olá mundo!");
    })
    it('A função é definida', () => {
        expect(decode).toBeDefined();
    })
    it('A função converte todos os números', () => {
        expect(decode("1, 2, 3, 4, 5")).toEqual("a, e, i, o, u");
    })
    it('A função retorna uma string de mesmo tamanho', () => {
        expect(decode("str3ng").length).toEqual(6);
    })
})