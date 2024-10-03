// cypress/support/commands.js
Cypress.Commands.add('apiLogin', (username, password) => {
  return cy.request({
    method: 'POST',
    url: Cypress.env('apiLoginUrl'),
    headers: {},
    body: {
      username: username,
      password: password
    },
    failOnStatusCode: false // Permite lidar com códigos de erro sem que o Cypress falhe automaticamente
  }).then((response) => {
    // Retorna a resposta completa para que os testes façam suas próprias validações
    return response;
  });
});

Cypress.Commands.add('apiLoginPlugin', (username, password) => {
  cy.api({
    method: 'POST',
    url: Cypress.env('apiLoginUrl'), // Acessa a URL do arquivo de config
    headers: {},
    body: {
      username: username,
      password: password
    }
  })
});