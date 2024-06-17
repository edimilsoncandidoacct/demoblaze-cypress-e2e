describe('template spec', () => {
  it('passes', () => {
    cy.visit('/')
    cy.validarPagina(Cypress.config().baseUrl)
  })
})