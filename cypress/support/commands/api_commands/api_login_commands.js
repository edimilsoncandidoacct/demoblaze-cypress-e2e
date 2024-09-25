// cypress/support/commands.js
Cypress.Commands.add('apiLogin', (username, password) => {
  cy.api({
    method: 'POST',
    url: Cypress.env('apiLoginUrl'), // Acessa a URL do arquivo de config
    headers: {},
    body: {
      username: username,
      password: password
    }
  });
});
