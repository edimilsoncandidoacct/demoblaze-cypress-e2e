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
    // Verifica se o token existe no corpo da resposta
    const token = response.body;
      // Remove o prefixo 'Auth_token: ' se ele existir e armazena o token
      const cleanToken = token.replace('Auth_token: ', '');
      cy.wrap(cleanToken).as('authToken'); // Armazena o token sem o prefixo como alias
    
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