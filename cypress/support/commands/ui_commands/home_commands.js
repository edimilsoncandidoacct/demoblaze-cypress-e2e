const HOME_PAGE = require('../../page_elements/home_page').HOME_PAGE;

Cypress.Commands.add('validarPagina', (url) => {
  cy.url().should('eq', url);
});
Cypress.Commands.add('validarLogo', () => {
  cy.get(HOME_PAGE.IMG_LOGO).should('be.visible');
});
Cypress.Commands.add('validarBunner', () => {
  cy.get(HOME_PAGE.IMG_BUNNER).should('be.visible');
});
Cypress.Commands.add('validarLista', (text) => {
  cy.get(HOME_PAGE.LIST_TEXT).should('be.visible').should('contain.text', text);
});
Cypress.Commands.add('validarOpcoesLista', (text) => {
  cy.contains(HOME_PAGE.LIST_ITEMS, text)
    .should('be.visible')
    .should('contain.text', text);
});
Cypress.Commands.add('validateProductTitle', (expectedTitle) => {
  cy.get(HOME_PAGE.TEXT_TITLE)
    .find(HOME_PAGE.TEXT_H4)
    .find(HOME_PAGE.LINK_TITLE)
    .should('contain.text', expectedTitle);
});
Cypress.Commands.add('validateProductLink', (expectedTitle) => {
  cy.get(HOME_PAGE.TEXT_NAME_TITLE).contains(expectedTitle).click();
  cy.url().should('include', 'prod.html?idp_=');
});
