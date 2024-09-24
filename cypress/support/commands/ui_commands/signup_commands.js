const { ACESS_PAGE } = require('../../page_elements/acess_page');

const HEADER_PAGE = require('../../page_elements/header_page').HEADER_PAGE;

Cypress.Commands.add('validarBotao', (text) => {
  cy.get(HEADER_PAGE.SIG_UP.BTN_SIGNUP)
    .should('be.visible')
    .should('contain.text', text)
    .click();
});
Cypress.Commands.add('validarModalSignUp', (text) => {
  cy.get(HEADER_PAGE.SIG_UP.H5_SIGNUP)
    .should('be.visible')
    .should('contain.text', text)
    .click();
});
Cypress.Commands.add('validarInputUserName', (text) => {
  cy.get(ACESS_PAGE.INPUT_USERNAME)
    .should('be.visible')
    .focus()
    .clear()
    .type(text, { delay: 100 });
});

Cypress.Commands.add('validarInputPassword', (text) => {
  cy.get(ACESS_PAGE.INPUT_PASSWORD).should('be.visible').type(text);
});
Cypress.Commands.add('validarSignup', () => {
  // Intercepta a requisição POST para a API de signup
  cy.intercept('POST', '**/signup').as('signupRequest');

  // Clica no botão de signup
  cy.get(ACESS_PAGE.BTN_SIGNUP)
    .should('be.visible')
    .should('have.text', 'Sign up')
    .click();

  // Espera a requisição e verifica o status da resposta e a mensagem de erro
  cy.wait('@signupRequest').then((interception) => {
    // Verifica se a resposta da API foi OK (200)
    expect(interception.response.statusCode).to.equal(200);

    // Verifica se a resposta contém uma mensagem de erro
    if (interception.response.body.errorMessage) {
      // Se houver uma mensagem de erro, falha o teste
      expect(interception.response.body.errorMessage).to.be.empty;
    }

    // Se não houver erro, armazena o username criado
    const createdUsername = interception.request.body.username;

    // Fecha o modal
    cy.get(ACESS_PAGE.MODAL_ACESS)
      .should('be.visible')
      .then(() => {
        cy.get(ACESS_PAGE.MODAL_ACESS).click();
      });

    // Retorna o username criado
    cy.wrap(createdUsername).as('createdUsername');
  });
});
Cypress.Commands.add('validarSignupExistente', (text) => {
  // Intercepta a requisição POST para a API de signup
  cy.intercept('POST', '**/signup').as('signupRequest');

  // Clica no botão de signup
  cy.get(ACESS_PAGE.BTN_SIGNUP)
    .should('be.visible')
    .should('have.text', 'Sign up')
    .click();

  // Espera a requisição e verifica o status da resposta e a mensagem de erro
  cy.wait('@signupRequest').then((interception) => {
    // Verifica se a resposta da API foi OK (200)
    expect(interception.response.statusCode).to.equal(200);

    // Se houver uma mensagem de erro, falha o teste
    expect(interception.response.body.errorMessage).to.not.be.empty;
    expect(interception.response.body.errorMessage).to.equal(text);
  });
});
