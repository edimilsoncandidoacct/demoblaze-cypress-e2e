const { ACESS_PAGE } = require('../page_elements/acess_page')


Cypress.Commands.add('validarBotaoLogin', (text) => {
    cy.get(ACESS_PAGE.LOGIN.BTN_LOGIN).should('be.visible').should('contain.text', text).click()
})
Cypress.Commands.add('validarHeaderModalLogin', (text) => {
    cy.get(ACESS_PAGE.LOGIN.HEADER_MODAL).should('be.visible').should('contain.text', text)
})