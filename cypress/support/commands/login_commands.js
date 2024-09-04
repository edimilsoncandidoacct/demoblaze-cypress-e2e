const { ACESS_PAGE } = require('../page_elements/acess_page')
const { HEADER_PAGE } = require('../page_elements/header_page')


Cypress.Commands.add('validarBotaoLogin', (text) => {
    cy.get(ACESS_PAGE.LOGIN.BTN_LOGIN).should('be.visible').should('contain.text', text).click()
})
Cypress.Commands.add('validarHeaderModalLogin', (text) => {
    cy.get(ACESS_PAGE.LOGIN.HEADER_MODAL).should('be.visible').should('contain.text', text)
})
Cypress.Commands.add('validarLoginSucess', (user, pass, text) => {
    cy.get(ACESS_PAGE.LOGIN.INPUT_USERNAME).should('be.visible')
        .click() // Clica no campo para garantir o foco
        .clear() // Limpa o campo
        .type(user, { delay: 100 })
     cy.get(ACESS_PAGE.LOGIN.INPUT_PASSWORD).should('be.visible').type(pass)
     cy.get(ACESS_PAGE.LOGIN.BTN_MODAL_LOGIN).should('be.visible').click()
     cy.get(HEADER_PAGE.LOGIN.MSG_SUCESS).should('be.visible').should('contain.text', text)
})


