import './commands/ui_commands/home_commands';
import './commands/ui_commands/signup_commands';
import './commands/ui_commands/login_commands';
import './commands/api_commands/api_login_commands';
import 'cypress-plugin-api';
import './commands/ui_commands/pdp_commands';
Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
});
import './commands/api_commands/api_cart_commands';
import './commands/ui_commands/cart_commands';
