import { authoringAUI, authoringBankPage, authoringBestAIcontainer, authoringPaperBankPage, authoringQuestionBankPage, authoringPaperPage, authoringQuestionPage, authoringSetUpBasicInfor,STATUS_OF_TASK, SERVICE_TYPE, authoringMessageDialog, authoringPanel } from '../AUI/authoring.constants'

Cypress.Step1 = Cypress.Step1 || {};

Cypress.Step1.saveAndClose = () => {
    cy.get(authoringSetUpBasicInfor.btnSaveAndClose)
    .click()
}

Cypress.Step1.saveAndNext = () => {
    cy.get(authoringSetUpBasicInfor.btnSaveAndNext)
    .click()
}

Cypress.Step1.clickIBC = () => {
    cy.get(authoringSetUpBasicInfor.spItemBankCode)
    .click()
}

Cypress.Step1.enterTPC = (input) => {
    cy.get(authoringSetUpBasicInfor.spTestPlanCode)
    .type(input)
}

Cypress.Step1.enterDuration = (input) => {
    cy.get(authoringSetUpBasicInfor.ipDuration)
    .type(input)
}