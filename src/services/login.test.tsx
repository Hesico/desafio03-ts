import { login } from "./login"

describe('login', () => {

    it('Deve exibir um alert com boas vindas caso o email seja válido', async() => {
        const response = await login('henrique@dio.bank')
        expect(response).toBeTruthy()
    })

    it('Deve exibir um erro caso o email seja inválido', async() => {
        const response = await login('email@invalido.com')
        expect(response).toBeFalsy()
    })
})