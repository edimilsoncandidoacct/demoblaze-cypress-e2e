const validation_data_signup = require ('../fixtures/signup.json')
const validation_data_userdata = require ('../fixtures/userdata.json')
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
        cy.validarInputUserName(validation_data_userdata.user.username)
        cy.validarInputPassword(validation_data_userdata.user.password)
        cy.validarClickbutton()
    });



    

    



} ) 