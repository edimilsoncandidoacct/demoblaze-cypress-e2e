const { ACESS_PAGE } = require('../page_elements/acess_page')


Cypress.Commands.add('validarBotaoLogin', (text) => {
    cy.get(ACESS_PAGE.LOGIN.BTN_LOGIN).should('be.visible').should('contain.text', text).click()
})
Cypress.Commands.add('validarHeaderModalLogin', (text) => {
    cy.get('#logInModalLabel').should('be.visible').should('contain.txt', text)
    // cy.get(ACESS_PAGE.LOGIN.HEADER_MODAL).should('be.visible').should('contain.txt', text)
})