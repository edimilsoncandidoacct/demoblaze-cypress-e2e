const validation_data_header = require ('../fixtures/header.json')

const { faker } = require("@faker-js/faker");

const user = {
    username: faker.internet.userName(),
    password: faker.internet.password(),
};
describe('teste login', () => {
    beforeEach(() => {
        cy.visit('/')
    })
    it('Validar Botão Login', () => {
        cy.validarBotaoLogin(validation_data_header.login.title) 
    });

} ) 