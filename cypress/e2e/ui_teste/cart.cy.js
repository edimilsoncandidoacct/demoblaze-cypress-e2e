const validation_data_cart = require('../../fixtures/cart.json');
const validation_data_parameter = require('../../fixtures/api_parameter.json');
const env_data_user = require('../../../cypress.env.json');
const validation_data_pdp = require('../../fixtures/pdp.json');

describe('teste de cart', () => {
  beforeEach(() => {
    cy.apiLogin(
      Cypress.env('apiUrl') + validation_data_parameter.login_parameter,
      env_data_user.user.username,
      env_data_user.user.password_hash_api
    ).then((response) => {
      // Extrai e define o cookie com o token
      const token = response.body.replace('Auth_token: ', '');
      cy.setCookie('tokenp_', token); // Define o cookie com o nome 'tokenp_' e o valor do token
    });
    cy.visit(
      Cypress.config().baseUrl + validation_data_cart.cart_page.link_page_cart
    );
  });
  it('validar pagina do cart', () => {
    cy.addToCart(
      Cypress.env('apiUrl') + validation_data_parameter.addtocart_parameter,
      {
        id: "c172115a-0a79-2ec5-b90b-5a928dc4ccff",
        cookie: "ZWRpY2FuZGlkbzE3MzAxOTU=",
        prod_id: validation_data_pdp.pdp_produtos.id_produto
      }
    );
  });
  
});
