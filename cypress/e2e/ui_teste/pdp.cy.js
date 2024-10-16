const validation_data_pdp = require('../../fixtures/pdp.json');

describe('teste de pdp', () => {
  beforeEach(() => {
    cy.visit(
      Cypress.config().baseUrl +
        validation_data_pdp.pdp_produtos.link_pdp +
        validation_data_pdp.pdp_produtos.id_produto
    );
  });
  it('Deve validar a imagem, título e descrição do segundo produto Nokia', () => {
    cy.validarImagemProduto();
    cy.validarTituloNome(validation_data_pdp.pdp_descricoes.name);
    cy.validarTituloPrice(validation_data_pdp.pdp_descricoes.price);
    cy.validarTituloDescricao(
      validation_data_pdp.pdp_descricoes.titulo_descricao
    );
    cy.validarParagrafo(validation_data_pdp.pdp_descricoes.descricao);
    cy.validateBotaoAdd(validation_data_pdp.pdp_descricoes.botao_add);
  });

  it.skip('Deve validar a imagem, título e descrição de qualquer produto', () => {
    cy.validarImagemProduto();
    cy.validarQualquerProduto();
  });
});
