describe('template spec', () => {

  beforeEach(() => {
    cy.visit('/')
  })
  it('Validar Acesso', () => {
    cy.validarPagina(Cypress.config().baseUrl)
  })

  it('Validar Logo', () => {
    cy.validarLogo()
  });

  it('Validar Bunner', () => {
    cy.validarBunner()
  });
})