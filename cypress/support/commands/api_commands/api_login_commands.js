// cypress/support/commands.js

Cypress.Commands.add('apiLogin', (username, password) => {
    cy.request({
      method: 'POST',
      url: 'https://api.demoblaze.com/login',
      headers: {
        'accept': '*/*',
        'accept-language': 'pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7',
        'content-type': 'application/json',
        'origin': 'https://www.demoblaze.com',
        'priority': 'u=1, i',
        'referer': 'https://www.demoblaze.com/',
        'sec-ch-ua': '"Chromium";v="128", "Not;A=Brand";v="24", "Google Chrome";v="128"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-site',
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36'
      },
      body: {
        username: username,
        password: password
      }
    }).then((response) => {
      // Valide aqui os resultados da API, como status code ou qualquer outro dado
      expect(response.status).to.eq(200);
      // Você pode adicionar mais validações com base na resposta da API
      cy.log('Login successful');
    });
  });
  