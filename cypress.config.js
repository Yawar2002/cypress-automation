const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    // specPattern: 'cypress/testcase/**/*.cy.{js,jsx,ts,tsx}',
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
