const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },

baseUrl: 'https://www.demoblaze.com/'

  },
  modifyObstructiveCode: false            // esse comando não deixa o cypress executar automaticamente apos i save automatico do VS
});
