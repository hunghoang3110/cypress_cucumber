// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'
import './feature/authoring.paper.commands'
import './feature/authoring.question.commands'
import './feature/authoring.skeleton.commands'
import './feature/authoring.testplan.command'
// import registerCypressGrep from '@cypress/grep/src/support'
// registerCypressGrep()
import "@badeball/cypress-cucumber-preprocessor"

// Alternatively you can use CommonJS syntax:
// require('./commands')
// require('./feature/authoring.generateAIquespanel.commands')

// const createBundler = require('@bahmutov/cypress-esbuild-preprocessor')
// module.exports = (on, config) => {
//   const bundler = createBundler({
//     // any ESBuild options here
//     // https://esbuild.github.io/api/
//   })
//   on('file:preprocessor', bundler)
// }

const resizeObserverLoopErrRe = /^ResizeObserver loop limit exceeded/;
Cypress.on('uncaught:exception', (err) => {
    if (resizeObserverLoopErrRe.test(err.message)) {
        // returning false here prevents Cypress from failing the test
        return false;
    }
});

Cypress.on('uncaught:exception', (err, runnable) => {
    console.log('Uncaught exception:', err);
    // returning false here prevents Cypress from failing the test
    return false;
  });