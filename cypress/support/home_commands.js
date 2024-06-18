const HOME_PAGE = require('../support/page_elements/home_page').HOME_PAGE

Cypress.Commands.add('validarPagina', (url) => {
    cy.url().should('eq', url)
})
Cypress.Commands.add('validarLogo', () => {
    cy.get(HOME_PAGE.IMG_LOGO).should('be.visible')
})
Cypress.Commands.add('validarBunner', () => {
    cy.get(HOME_PAGE.IMG_BUNNER).should('be.visible')
})