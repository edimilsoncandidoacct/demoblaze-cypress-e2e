const validation_data_header = require ('../fixtures/header.json')
const validation_data_user = require ('../fixtures/userdata.json')
const validation_data_alert = require ('../fixtures/mensagem.json')
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
        cy.validarBotao(validation_data_header.signup.title) 
    });
    it('Validar Modal Sign up', () => {
        cy.validarBotao(validation_data_header.signup.title)
        cy.validarModalSignUp(validation_data_header.signup.title) 
        cy.validarInputUserName(user.username)
        cy.validarInputPassword(user.password)
        cy.validarSignup()
    });
    it('Validar Modal Sign up Usuario Existente', () => {
        cy.validarBotao(validation_data_header.signup.title)
        cy.validarModalSignUp(validation_data_header.signup.title) 
        cy.validarInputUserName(validation_data_user.user.username)
        cy.validarInputPassword(user.password)
        cy.validarSignupExistente(validation_data_alert.alert.user_existente)
        
    });


    

    



} ) 