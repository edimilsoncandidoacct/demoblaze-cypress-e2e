const validation_data_mensagem = require('../../fixtures/mensagem.json');
const validation_data_parameter = require('../../fixtures/api_parameter.json');
const env_data_user = require('../../../cypress.env.json');

const { faker } = require('@faker-js/faker');

const user = {
  username: faker.internet.userName(),
  password: faker.internet.password()
};
describe('Teste de Login API', { env: { hideCredentials: true } }, () => {
  it('Deve fazer login com sucesso', () => {
    cy.apiLogin(
      Cypress.env('apiUrl') + validation_data_parameter.login_parameter,
      env_data_user.user.username,
      env_data_user.user.password_hash_api
    ).then((response) => {
      expect(response.status).to.eq(
        validation_data_mensagem.status_code.sucess
      );
      expect(response.body).to.include(
        validation_data_mensagem.sucess.msg_token
      );
    });
  });

  it('Deve falhar ao tentar fazer login com senha inválida', () => {
    cy.apiLogin(
      Cypress.env('apiUrl') + validation_data_parameter.login_parameter,
      env_data_user.user.username,
      user.password
    ).then((response) => {
      expect(response.status).to.eq(
        validation_data_mensagem.status_code.sucess
      );
      expect(response.body.errorMessage).to.eq(
        validation_data_mensagem.alert.password_incorreto
      );
    });
  });

  it('Deve falhar ao tentar fazer login com usuário inválido', () => {
    cy.apiLogin(
      Cypress.env('apiUrl') + validation_data_parameter.login_parameter,
      user.username,
      env_data_user.user.password_hash_api
    ).then((response) => {
      expect(response.status).to.eq(
        validation_data_mensagem.status_code.sucess
      );
      expect(response.body.errorMessage).to.eq(
        validation_data_mensagem.alert.user_incorreto
      );
    });
  });

  it('pega e define token no cookie', () => {
    cy.apiLogin(
      Cypress.env('apiUrl') + validation_data_parameter.login_parameter,
      env_data_user.user.username,
      env_data_user.user.password_hash_api
    ).then((response) => {
      // Extrai e define o cookie com o token
      const token = response.body.replace('Auth_token: ', '');
      cy.setCookie('tokenp_', token); // Define o cookie com o nome 'tokenp_' e o valor do token
    });
    cy.visit('/');
  });
});
