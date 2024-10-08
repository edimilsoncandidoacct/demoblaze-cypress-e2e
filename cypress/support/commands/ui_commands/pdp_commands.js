const PDP_PAGE = require('../../page_elements/pdp_page').PDP_PAGE;


Cypress.Commands.add('validarImagemProduto', () => {
  cy.get(PDP_PAGE.IMG_PRODUTO).should('be.visible').should('have.attr', 'src')
});
