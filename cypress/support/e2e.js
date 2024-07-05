import './commands/home_commands'
Cypress.on('uncaught:exception', (err, runnable) => {
    return false
  })
