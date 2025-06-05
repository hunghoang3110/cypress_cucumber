const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const { addCucumberPreprocessorPlugin } = require("@badeball/cypress-cucumber-preprocessor");
const {createEsbuildPlugin} = require("@badeball/cypress-cucumber-preprocessor/esbuild");

async function setupNodeEvents(on, config) {
  await addCucumberPreprocessorPlugin(on, config);

  on(
    "file:preprocessor",
    createBundler({
      plugins: [createEsbuildPlugin(config)],
    })
  );

  return config; // Important: Return modified config
}

module.exports = defineConfig({
  defaultCommandTimeout: 60000,
  pageLoadTimeout: 120000,
  video: false,
  chromeWebSecurity: false,
  viewportWidth: 1920,
  viewportHeight: 1080,
  env: {
    omitFiltered: true,
    filterSpecs: true
  },
  e2e: {
    specPattern: "**/*.feature",
    includeShadowDom: true,
    setupNodeEvents,
  },
});