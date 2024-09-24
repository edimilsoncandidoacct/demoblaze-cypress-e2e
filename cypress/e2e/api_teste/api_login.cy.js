const validation_data_header = require('../../fixtures/header.json');
const validation_data_mensagem = require('../../fixtures/mensagem.json');
const env_data_user = require('../../../cypress.env.json');

const { faker } = require('@faker-js/faker');

const user = {
  username: faker.internet.userName(),
  password: faker.internet.password()
};
describe('teste login api', () => {
  it('Validar API Login', () => {
    cy.apiLogin(env_data_user.user.username, env_data_user.user.password_hash_api)
  });
});
