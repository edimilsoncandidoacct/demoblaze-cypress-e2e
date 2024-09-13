const { ACESS_PAGE } = require('../page_elements/acess_page');
const { HEADER_PAGE } = require('../page_elements/header_page');

Cypress.Commands.add('validarBotaoLogin', (text) => {
  cy.get(ACESS_PAGE.LOGIN.BTN_LOGIN)
    .should('be.visible')
    .should('contain.text', text)
    .click();
});
Cypress.Commands.add('validarHeaderModalLogin', (text) => {
  cy.get(ACESS_PAGE.LOGIN.HEADER_MODAL)
    .should('be.visible')
    .should('contain.text', text);
});
Cypress.Commands.add('validarLogin', (user, pass) => {
  cy.get(ACESS_PAGE.LOGIN.INPUT_USERNAME)
    .should('be.visible')
    .click() // Clica no campo para garantir o foco
    .clear() // Limpa o campo
    .type(user, { delay: 100 });
  cy.get(ACESS_PAGE.LOGIN.INPUT_PASSWORD).should('be.visible').type(pass,{ log: false });
  cy.get(ACESS_PAGE.LOGIN.BTN_MODAL_LOGIN).should('be.visible').click();
});

Cypress.Commands.add('validarMensagem', (text) => {
  cy.get(HEADER_PAGE.LOGIN.MSG_SUCESS)
    .should('be.visible')
    .should('contain.text', text);
});

// Esta função não tem um bom uso quando é executado todos os testes, pois sua requeste para api de login é chamada em mais de uma situação
// Cypress.Commands.add('validarUsernameIncorreto', (text) => {
//   // Intercepta a requisição POST para a API de login
//   cy.intercept('POST', '**/login').as('loginRequest');

//   // Espera a requisição e verifica o status da resposta e a mensagem de erro
//   cy.wait('@loginRequest').then((interception) => {
//     // Verifica se a resposta da API foi OK (200)
//     expect(interception.response.statusCode).to.equal(200);

//     // Verifica se a resposta contém uma mensagem de erro
//     if (interception.response.body.errorMessage) {
//       // Se houver uma mensagem de erro, falha o teste
//       expect(interception.response.body.errorMessage).to.not.be.empty;
//       expect(interception.response.body.errorMessage).to.equal(text);
//     }
//   });
// });

Cypress.Commands.add('validarAlert', (text) => {
  cy.on('window:alert', (txt) => {
    expect(txt).to.contains(text);
  });
});

