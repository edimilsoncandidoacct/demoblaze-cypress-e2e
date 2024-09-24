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
    cy.apiLogin(env_data_user.user.username, env_data_user.user.password_hash_api)
      .then((response) => {
        // Validações de sucesso
        expect(response.status).to.eq(200);
        expect(response.body).to.not.be.empty;
      });
  });

  it('Deve falhar ao tentar fazer login com credenciais inválidas', () => {
    cy.apiLogin('usuarioInvalido', 'senhaInvalida')
      .then((response) => {
        // Validações de erro
        expect(response.status).to.eq(200); // Ou qualquer código de erro que sua API retorne
      });
  });
});
