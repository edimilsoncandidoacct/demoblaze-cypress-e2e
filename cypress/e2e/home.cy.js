import { it } from "mocha"

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
})