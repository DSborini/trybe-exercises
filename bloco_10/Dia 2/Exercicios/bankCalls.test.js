const {findUserById, getUserName} = require('./bankCalls');

//  com Async/Await:
describe('Testa função getUserName', () => {
    test('Verifica se o usuário é encontrado a partir do ID', async () => {
        expect.assertions(1);
        const name = await getUserName(4)
        expect(name).toEqual('Mark');
    });
    test('Verifica se um erro é retornado caso o ID não exista', async () => {
        expect.assertions(1);
        try {
            await getUserName(3);
        } catch (error) {
            expect(error).toEqual({ error: 'User with 3 not found.'});
        }
    });
  });

//   com Promisse:  
//   describe('Testa função getUserName', () => {
//     test('Verifica se o usuário é encontrado a partir do ID', () => {
//         expect.assertions(1);
//         return getUserName(4).then(result => {
//             expect(result).toEqual('Mark');
//         })
//     });
//     test('Verifica se um erro é retornado caso o ID não exista', () => {
//         expect.assertions(1);
//         return getUserName(3).catch(error => {
//             expect(error).toEqual({ error: 'User with 3 not found.'})
//         })
//     });
//   });