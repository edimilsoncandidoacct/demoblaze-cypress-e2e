const validation_data_header = require('../../fixtures/header.json');
const validation_data_mensagem = require('../../fixtures/mensagem.json');
const env_data_user = require('../../../cypress.env.json');

const { faker } = require('@faker-js/faker');

const user = {
  username: faker.internet.userName(),
  password: faker.internet.password()
};
describe('Teste de Login API', () => {
  it('Deve fazer login com sucesso', () => {
    cy.apiLogin(
      env_data_user.user.username,
      env_data_user.user.password_hash_api
    ).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.include(
        validation_data_mensagem.sucess.msg_token
      );
    });
  });

  it('Deve falhar ao tentar fazer login com senha inválidas', () => {
    cy.apiLogin(env_data_user.user.username, user.password).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.errorMessage).to.eq(
        validation_data_mensagem.alert.password_incorreto
      );
    });
  });
  it('Deve falhar ao tentar fazer login com usuario inválido', () => {
    cy.apiLogin(user.username, env_data_user.user.password_hash_api).then(
      (response) => {
        expect(response.status).to.eq(200);
        expect(response.body.errorMessage).to.eq(
          validation_data_mensagem.alert.user_incorreto
        );
      }
    );
  });
});
