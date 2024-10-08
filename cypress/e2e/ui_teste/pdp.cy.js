const validation_data_home = require('../../fixtures/home.json');

describe('template spec', () => {
  beforeEach(() => {
    cy.visit('/');
  });
    it('Deve validar a imagem, título e descrição do segundo produto', () => {
    cy.validateProductTitle(validation_data_home.product_name.nokia);
    cy.validateProductLink(validation_data_home.product_name.nokia);
    cy.validarImagemProduto()
  });
});



