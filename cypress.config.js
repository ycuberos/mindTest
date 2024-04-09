const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    //baseUrl: 'http://localhost:4200',
    //viewportWidth: 1920,
    //viewportHeight: 1080
    viewportWidth: 1280,
    viewportHeight: 600,
    trashAssetsBeforeRuns: true,
    chromeWebSecurity: false
  },
});
