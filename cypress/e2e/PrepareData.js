import { Given, When, Then, And, Before, BeforeAll } from "@badeball/cypress-cucumber-preprocessor"

const today = new Date();
const datetime = `${today.getFullYear()}${String(today.getMonth() + 1).padStart(2, '0')}${String(today.getDate()).padStart(2, '0')}_${String(today.getHours()).padStart(2, '0')}${String(today.getMinutes()).padStart(2, '0')}`;
const autoTest = 'Auto_test_carter.nguyen';
const primaryCode = 'CPM'
const component = 'COM_' + autoTest + '_' + datetime;
const itemBankCode = primaryCode + '_' + component

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

When('Filter Inactive status', function () {
    Cypress.Common.clickLabel('Filter')
    Cypress.Common.checkFilter('Status', 'Inactive')
    Cypress.Common.clickButton('Apply')
})

When('Deactivate all match items', function () {
    Cypress.Common.checkBoxTable('0,1')
    Cypress.Common.clickButton('Deactivate')
    Cypress.Common.clickButtoninDialog('Deactivate')
})

When('Select Category', function () {
    Cypress.Common.selectDropdown('Category')
    Cypress.Common.selectFirstResult()
})

When('Select Primary code', function () {
    Cypress.Common.selectDropdown('Primary module code')
    Cypress.Common.searchFromDropdown(primaryCode)
    Cypress.Common.selectFirstResult()
})

When('Select Component', function () {
    Cypress.Common.selectDropdown('Component')
    Cypress.Common.searchFromDropdown(component)
    Cypress.Common.selectFirstResult()
})

When('Delete and confirm in Admin', function () {
    Cypress.Common.checkBoxTable('0,1')
    Cypress.Common.clickButton('Delete')
    Cypress.Common.clickButtoninDialog('Delete')
})

When('Delete and confirm in Bank', function () {
    Cypress.Common.checkBoxTable('0,1')
    Cypress.Common.clickButton('Delete')
    Cypress.Common.clickButtoninDialog('OK')
})

Then('Check the successful message {string}', function (message) {
    Cypress.Common.checkSuccessPopup(message)
})

Then('Check the created record in Component table', function () {
    Cypress.TestPlanBank.checkContent('1,2', component.toUpperCase())
    Cypress.Common.checkSuccessPopup("Successfully created component.")
})

Then('Check the created record in Item bank table', function () {
    Cypress.TestPlanBank.checkContent('1,2', itemBankCode.toUpperCase())
    Cypress.Common.checkSuccessPopup("Created item bank successfully")
    cy.writeFile('cypress/support/feature/datetime.json', {itemBankCode: itemBankCode})
    console.log(`this is from PrepareData file: ${itemBankCode}`)
})