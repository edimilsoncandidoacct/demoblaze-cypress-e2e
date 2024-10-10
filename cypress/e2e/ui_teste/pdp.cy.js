const validation_data_pdp = require('../../fixtures/pdp.json');

describe('teste de pdp', () => {
  beforeEach(() => {
    cy.visit(
      Cypress.config().baseUrl +
        validation_data_pdp.pdp_produtos.link_pdp +
        validation_data_pdp.pdp_produtos.id_produto
    );
  });
  it('Deve validar a imagem, título e descrição do segundo produto', () => {
    cy.validarImagemProduto();
    cy.validarTituloNome(validation_data_pdp.pdp_descricoes.titulo_name);
  });
});
