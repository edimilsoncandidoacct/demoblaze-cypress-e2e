// cypress/support/commands.js
Cypress.Commands.add('apiLogin', (username, password) => {
  return cy.request({
    method: 'POST',
    url: Cypress.env('apiLoginUrl'), // Acessa a URL do arquivo de config
    headers: {},
    body: {
      username: username,
      password: password,
    },
    failOnStatusCode: false, // Permite capturar respostas com erro sem falhar o teste automaticamente
  });
});
