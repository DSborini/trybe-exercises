const { jest, test, expect } = require('@jest/globals');
const { describe } = require('yargs');
const randomNumber = require('./randomNumber');

jest.mock('./randomNumber', () => ({
    randomNumber: jest.fn().mockReturnValue(10),
}))

describe('Gerador de números aleatórios', () => {
    test('Verifica se a função retorna um número aleatório', () => {
        expect.assertions(3);
        expect(randomNumber()).toBeCalled();
        expect(randomNumber()).toEqual(10);
        expect(randomNumber()).toBeCalledTimes();
    })
})