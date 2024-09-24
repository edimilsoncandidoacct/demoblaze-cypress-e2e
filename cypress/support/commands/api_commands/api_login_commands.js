// cypress/support/commands.js

Cypress.Commands.add('apiLogin', (username, password) => {
    cy.request({
      method: 'POST',
      url: Cypress.env('apiLoginUrl'), // Acessa a URL do arquivo de config
      headers: {},
      body: {
        username: username,
        password: password
      }
    }).then((response) => {
      // Valide aqui os resultados da API, como status code ou qualquer outro dado
      expect(response.status).to.eq(200);
      // Você pode adicionar mais validações com base na resposta da API
      expect(response.body).to.not.empty;
      cy.log('Login successful');
    });
  });
  