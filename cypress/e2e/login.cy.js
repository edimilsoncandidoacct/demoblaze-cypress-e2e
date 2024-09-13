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

  it('Validar Modal Login', () => {
    cy.validarBotaoLogin(validation_data_header.login.title);
    cy.validarHeaderModalLogin(validation_data_header.login.title);
    cy.validarLogin(
      validation_data_user.user.username,
      validation_data_user.user.password
    );
    cy.validarMensagem(
      validation_data_mensagem.sucess.welcome +
        ' ' +
        validation_data_user.user.username
    );
  });
  it('validar Username Incorreto', () => {
    cy.validarBotaoLogin(validation_data_header.login.title);
    cy.validarHeaderModalLogin(validation_data_header.login.title);
    cy.validarLogin(
      validation_data_user.user.username_invalido,
      validation_data_user.user.password
    );
    cy.validarUsernameIncorreto(validation_data_mensagem.alert.user_incorreto);
  });

  it.only('validar Senha Incorreto', () => {
    cy.validarBotaoLogin(validation_data_header.login.title);
    cy.validarHeaderModalLogin(validation_data_header.login.title);
    cy.validarLogin(
      validation_data_user.user.username,
      validation_data_user.user.password_invalido
    );
    cy.on('window:alert', (txt) => {
      expect(txt).to.contains('Wrong password.');
    });
  });
});
