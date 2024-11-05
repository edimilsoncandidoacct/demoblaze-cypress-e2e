const validation_data_cart = require('../../fixtures/cart.json');
const validation_data_parameter = require('../../fixtures/api_parameter.json');
const env_data_user = require('../../../cypress.env.json');
const validation_data_pdp = require('../../fixtures/pdp.json');

describe('teste de cart', () => {
  let token;
  beforeEach(() => {
    cy.apiLogin(
      Cypress.env('apiUrl') + validation_data_parameter.login_parameter,
      env_data_user.user.username,
      env_data_user.user.password_hash_api
    ).then((response) => {
      // Extrai e define o cookie com o token
      token = response.body.replace('Auth_token: ', '');
      cy.setCookie('tokenp_', token); // Define o cookie com o nome 'tokenp_' e o valor do token
    });
    cy.visit(
      Cypress.config().baseUrl + validation_data_cart.cart_page.link_page_cart
    );
  });
  it('validar pagina do cart', () => {
    cy.addToCart(
      Cypress.env('apiUrl') + validation_data_parameter.addtocart_parameter,

      'c172115a-0a79-2ec5-b90b-5a928dc4ccff',
      token,
      validation_data_pdp.pdp_produtos.id_produto,
      true
    );
  });

  it('validar Imagem Cart', () => {
    cy.validarImagemCart();
  });
  it('validar titulo do produto no carrinho', () => {
    cy.validarBodyProd(validation_data_cart.cart_page.tit_desc_prod_cart);
  });
  it('validar valor do produto no carrinho', () => {
    cy.validarBodyProd(validation_data_cart.cart_page.valor_prod_cart);
  });


  
});
