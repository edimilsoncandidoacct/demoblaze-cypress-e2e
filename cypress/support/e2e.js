import './commands/home_commands'
import './commands/signup_commands'
import './commands/login_commands'
Cypress.on('uncaught:exception', (err, runnable) => {
    return false
  })
