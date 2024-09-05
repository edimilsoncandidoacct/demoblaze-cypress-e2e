const validation_data_header = require('../fixtures/header.json');
const validation_data_mensagem = require('../fixtures/mensagem.json');
const validation_data_user = require('../fixtures/userdata.json');

const { faker } = require('@faker-js/faker');

const user = {
  username: faker.internet.userName(),
  password: faker.internet.password()
};
describe('teste login', () => {
  beforeEach(() => {
    cy.visit('/');
  });
  it('Validar Botão Login', () => {
    cy.validarBotaoLogin(validation_data_header.login.title);
  });

    it.only('Validar Modal Login', () => {
        cy.validarBotaoLogin(validation_data_header.login.title)
        cy.validarHeaderModalLogin(validation_data_header.login.title) 
        cy.validarLoginSucess(validation_data_user.user.username, validation_data_user.user.password, validation_data_mensagem.sucess.welcome + " " + validation_data_user.user.username)
    });
} ) 