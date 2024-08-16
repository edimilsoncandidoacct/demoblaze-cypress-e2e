const { defineConfig } = require("cypress");
const {faker} = require("@faker-js/faker");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },

baseUrl: 'https://www.demoblaze.com/'

  },
 "watchForFileChanges": false
});
