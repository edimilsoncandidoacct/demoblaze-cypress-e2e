const validation_data_home = require('../../fixtures/home.json');
const validation_data_pdp = require('../../fixtures/pdp.json');

describe('template spec', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.validateProductTitle(validation_data_home.product_name.nokia);
    cy.validateProductLink(validation_data_home.product_name.nokia);
  });
    it('Deve validar a imagem, título e descrição do segundo produto', () => {
    cy.validarImagemProduto();
    cy.validarTituloNome(validation_data_pdp.pdp_descricoes.titulo_name);
  });

});





