const uppercase = require('./uppercaseTest');

describe("Verifica se a string é modificada e aplicada na função", () => {
    it("Verifica se o retorno é maiusculo", () => {
        expect(uppercase("teste", console.log)).toEqual("TESTE");
    });
    it("Verifica se o retorno é aplicado a uma função", () => {
        let value = "";
        const getValue = ((val) => value = val);
        uppercase("teste", getValue);
        expect(value).toEqual("TESTE");
    });
})