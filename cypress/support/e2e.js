import './commands/ui_commands/home_commands';
import './commands/ui_commands/signup_commands';
import './commands/ui_commands/login_commands';
import './commands/api_commands/api_login_commands';
Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
});
