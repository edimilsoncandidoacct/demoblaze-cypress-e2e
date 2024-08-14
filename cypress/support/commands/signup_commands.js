const { ACESS_PAGE } = require('../page_elements/acess_page')

const HEADER_PAGE = require('../page_elements/header_page').HEADER_PAGE

Cypress.Commands.add('validarBotao', (text) => {
    cy.get(HEADER_PAGE.BTN_SIGNUP).should('be.visible').should('contain.text', text).click()
})
Cypress.Commands.add('validarModalSignUp', (text) => {
    cy.get(HEADER_PAGE.H5_SIGNUP).should('be.visible').should('contain.text', text).click()
})
Cypress.Commands.add('validarInputUserName', (text) => {
    cy.get(ACESS_PAGE.INPUT_USERNAME).should('be.visible').type(text)
})
Cypress.Commands.add('validarInputPassword', (text) => {
    cy.get(ACESS_PAGE.INPUT_PASSWORD).should('be.visible').type(text)
})
Cypress.Commands.add('validarClickbutton', () => {
    cy.get(ACESS_PAGE.BTN_SIGNUP).should('be.visible').click()
})