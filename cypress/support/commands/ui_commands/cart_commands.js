const CART_PAGE = require('../../page_elements/cart_page').CART_PAGE;


Cypress.Commands.add('validarImagemCart', () => {
  cy.get(CART_PAGE.IMG_CART).should('be.visible').should('have.attr', 'src');
});
Cypress.Commands.add('validarBodyProd', (text) => {
  cy.get(CART_PAGE.BODY_PROD_CART).should('be.visible').contains(text);
});