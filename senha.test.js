const {verificarsenha} = require('./formulario')

it('Testando se a senha é igual a confirmação da senha', () => {
    expect(verificarsenha("senha","confirmarsenha")).toBe(false)
})

const {validarsenha} = require('./formulario')

it('Validando se as senhas são diferentes', () => {
    expect(validarsenha("senha","validarsenha")).toBe(false)
})

const {senhasiguais} = require('./formulario')

it('Verificar se as senhas são iguais ', () => {
    expect(senhasiguais("senha123","senha123")).toBe(true)
})

const {senhacomnumero} = require('./formulario')

it('Verificar se tem número na senha ', () => {
    expect(senhacomnumero("senha123")).toBe(true)
})

const {senhacomcaractereespecial} = require('./formulario')

it('Verificar se tem caractere especial na senha ', () => {
    expect(senhacomcaractereespecial("senha!@#")).toBe(true)
})