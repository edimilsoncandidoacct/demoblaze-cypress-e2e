const { defineConfig } = require('cypress');
const { faker } = require('@faker-js/faker');

module.exports = defineConfig({
  e2e: {
    experimentalRunAllSpecs: true, // Para rodar todas as Stec juntas tem que colocar esta comando
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },

    baseUrl: 'https://www.demoblaze.com/',
    env: {
      apiLoginUrl: 'https://api.demoblaze.com/login', // Defina sua URL aqui
    }
  },
  watchForFileChanges: false
  // este comando salva mas não executa a interface automaticamente
});
