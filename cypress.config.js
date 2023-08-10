const { defineConfig } = require("cypress");

module.exports = defineConfig({
  // screenshotsFolder: "cypress/screenshots",
  // videosFolder: "cypress/videos",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      baseUrl: "http://localhost:3000";
    },
  },
});
