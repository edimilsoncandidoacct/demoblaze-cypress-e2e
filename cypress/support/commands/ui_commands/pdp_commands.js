const PDP_PAGE = require('../../page_elements/pdp_page').PDP_PAGE;

Cypress.Commands.add('validarImagemProduto', () => {
  cy.get(PDP_PAGE.IMG_PRODUTO).should('be.visible').should('have.attr', 'src');
});

Cypress.Commands.add('validarTituloNome', (text) => {
  cy.get(PDP_PAGE.TIT_NAME).contains(text);
});

Cypress.Commands.add('validarTituloPrice', (text) => {
  cy.get(PDP_PAGE.TIT_PRICE).contains(text);
});
Cypress.Commands.add('validarTituloDescricao', (text) => {
  cy.get(PDP_PAGE.TIT_DESCRIPTION).contains(text);
});
Cypress.Commands.add('validarParagrafo', (text) => {
  cy.get(PDP_PAGE.TIT_PARAGRAFO).should('be.visible').contains(text);
});


  Cypress.Commands.add('validarQualquerProduto', () => {
    cy.get(PDP_PAGE.TIT_PARAGRAFO).invoke('text').then((initialText) => {
      const trimmedInitialText = initialText.trim();
      cy.get(PDP_PAGE.TIT_PARAGRAFO).invoke('text').then((currentText) => {
        const trimmedCurrentText = currentText.trim();
        expect(trimmedCurrentText).to.eq(trimmedInitialText);
      });
    });
  });


Cypress.Commands.add('validateBotaoAdd', (text) => {
  cy.get(PDP_PAGE.BTN_ADD_CART).contains(text).click();
});

