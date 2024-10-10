const validation_data_home = require('../../fixtures/home.json');

describe('teste de home', () => {
  beforeEach(() => {
    cy.visit('/');
  });
  it.only('Validar Acesso', () => {
    cy.validarPagina(Cypress.config().baseUrl);
  });

  it.only('Validar Logo', () => {
    cy.validarLogo();
  });

  it('Validar Bunner', () => {
    cy.validarBunner();
  });
  it('validar Lista', () => {
    cy.validarLista(validation_data_home.lista_categories.titulo);
  });
  it('validar Phones', () => {
    cy.validarOpcoesLista(validation_data_home.lista_categories.phones);
  });
  it('validar Laptops', () => {
    cy.validarOpcoesLista(validation_data_home.lista_categories.laptops);
  });
  it('validar Monitors', () => {
    cy.validarOpcoesLista(validation_data_home.lista_categories.monitors);
  });

  it('Deve validar a imagem, título e descrição do primeiro produto', () => {
    cy.validateProductTitle(validation_data_home.product_name.samsung);
  });

  it('Deve validar a imagem, título e descrição do segundo produto', () => {
    cy.validateProductTitle(validation_data_home.product_name.nokia);
    cy.validateProductLink(validation_data_home.product_name.nokia);
  });
});



