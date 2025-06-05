import { authoringAUI, authoringBankPage, authoringBestAIcontainer, authoringPaperBankPage, authoringPaperPage, STATUS_OF_QUESTION } from '../AUI/authoring.constants'
import './authoring.common.commands'

Cypress.PageCreatePaper = Cypress.PageCreatePaper || {};

Cypress.PageCreatePaper.clickAddSectionButton = () => {
    cy.get(authoringPaperPage.divFirstAddSectionn)
    .find('button')
    .click();
}

Cypress.PageCreatePaper.clickGenerateAIButton = () => {
    cy.get(authoringPaperPage.divGenerateAI)
    .find(authoringPaperPage.btnGenerateAI)
    .click();
}

Cypress.PageCreatePaper.clickSaveButton = () => {
    cy.get(authoringPaperPage.btnSave)
    .click({force:true});
}

Cypress.PagePaperBank = Cypress.PagePaperBank || {};

Cypress.PagePaperBank.clickEditButton = () => {
    cy.get(authoringPaperBankPage.btnEdit)
    .click();
} 

Cypress.PagePaperBank.filterStatus = (statusName) => {
    Cypress.Common.chooseFilter(4);

    Cypress.Common.selectStatus(authoringAUI.auiComboBoxShellPopUp, STATUS_OF_QUESTION.get(statusName));

}

Cypress.PageEditPaper = Cypress.PageEditPaper || {};

Cypress.PageEditPaper.checkOut = () => {
    cy.get(authoringAUI.auiCheckOutEditBtn)
    .click();
    cy.get(authoringAUI.auiMessageModal)
    .find(authoringAUI.auiBtnOK)
    .click();
}

Cypress.PageEditPaper.checkIn = () => {
    cy.get(authoringAUI.auiCheckInBtn)
    .click();
    cy.wait(3000);
}