// cypress/support/commands.js
Cypress.Commands.add('addToCart', (url, id, cookie, prod_id, flag = true) => {
  cy.request({
    method: 'POST',
    url: url,
    headers: {},
    body: {
      id: id,
      cookie: cookie,
      prod_id: prod_id,
      flag: flag
    }
  }).then((response) => {
    expect(response.status).to.eq(200);
    cy.log(JSON.stringify(response.body));
  });
});



