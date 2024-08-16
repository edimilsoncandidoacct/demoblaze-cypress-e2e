const validation_data_signup = require ('../fixtures/signup.json')
const { faker } = require("@faker-js/faker");

const user = {
    username: faker.internet.userName(),
    password: faker.internet.password(),
};
describe('teste cadastro', () => {
    beforeEach(() => {
        cy.visit('/')
    })
    it('Validar Botão Cadastro', () => {
        cy.validarBotao(validation_data_signup.header.signup) 
    });
    it.only('Validar Modal Sign up', () => {
        cy.validarBotao(validation_data_signup.header.signup)
        cy.validarModalSignUp(validation_data_signup.header.signup) 
        cy.validarInputUserName("Jacques_Kautzer")
        cy.validarInputPassword(user.password)
        cy.validarCriacaoUsuario()
    });



    

    



} ) 