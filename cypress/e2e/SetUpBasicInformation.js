import { Given, When, Then, And, Before, BeforeAll } from "@badeball/cypress-cucumber-preprocessor"

const duration = 60
let testPlanCode = ''

Before(() => {
    cy.login()
    cy.visit(Cypress.env('DEV_ENV'))
})

When('User click {string} page', function (page) {
    Cypress.Common.navPage(page)
    // cy.url().should('include', page)
})

When('Click {string} card', function (card) {
    Cypress.Common.clickCard(card)
})

When('Click {string} button', function (button) {
    Cypress.Common.clickButton(button)
})

When('Click {string} link', function (link) {
    Cypress.Common.clickLink(link)
})

Then('Check the validation message {string}', function (message) {
    Cypress.Common.checkValidMess(message)
})

When('Enter {string} input', function (input) {
    Cypress.Common.enterInput(input, component)
})

When('Enter {string} textarea', function (label) {
    Cypress.Common.enterTextarea(label, component)
})

When('Search {string} in {string} searchbox', function (keyword, placeholder) {
    Cypress.Common.searchFromBox(placeholder, keyword)
})

When('Select Item Bank Code', function () {
    Cypress.Common.selectDropdown('Item bank code')
    cy.readFile('cypress/support/feature/datetime.json').then((preData) => {
        Cypress.Common.searchFromDropdown(preData.itemBankCode)
        testPlanCode = `TP_${preData.itemBankCode}`
    })
    Cypress.Common.selectFirstResult()
})

When('Enter Test plan code', function () {
    Cypress.Common.enterInput('Test plan code', 'carter')
})

When('Enter Duration', function () {
    Cypress.Common.enterInput('Duration', duration)
})

When('Search by Test plan code', function () {
    Cypress.Common.checkSuccessPopup("The test plan has been successfully created.")
    Cypress.Common.searchFromBox('Search by Test plan code', testPlanCode)
})

Then('Check the created record in cell {string}', function (cell) {
    Cypress.TestPlanBank.checkContent(cell, testPlanCode.toUpperCase())
})