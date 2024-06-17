Cypress.Commands.add('validarPagina', (url) => {
    cy.url().should('eq', url)
})