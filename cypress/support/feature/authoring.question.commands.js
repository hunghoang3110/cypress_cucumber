import { authoringAUI, authoringBankPage, authoringBestAIcontainer, authoringPanel, authoringQuestionBankPage, authoringQuestionPage, authoringRubricPanel, QUESTION_TYPES, STATUS_OF_QUESTION } from '../AUI/authoring.constants'
import './authoring.common.commands'



Cypress.PageCreateQuestion = Cypress.PageCreateQuestion || {};

Cypress.PageCreateQuestion.addNewQuestion = (type) => {
    cy.get(authoringQuestionPage.btnAddNewQuestion)
        .click()
    authoringQuestionPage.selectMenuQuestion(type)
    cy.get(authoringQuestionPage.liMenuQuestion)
        .click()
}

Cypress.PageCreateQuestion.addNewSubQuestion = (type) => {
    cy.get(authoringQuestionPage.btnAddNewSubQuestion)
        .click()
    authoringQuestionPage.selectSubMenuQuestion(type)
    cy.get(authoringQuestionPage.liSubMenuQuestion)
        .click()
}

Cypress.PageCreateQuestion.selectSubQuestion = () => {
    cy.get(authoringQuestionPage.btnSubQuestion)
        .click()
}

Cypress.PageCreateQuestion.clickGeneAIsubQuestion = () => {
    cy.get(authoringQuestionPage.divAddNewQuestion)
        .find(authoringQuestionPage.btnGenerateSubAI)
        .click()
}

Cypress.PageCreateQuestion.changeMarkingMethod = (option) => {
    cy.get('.col-md-4 > .pull-right')
        .find(authoringAUI.auiComboBoxShell)
        .click()
    authoringAUI.selectOptionListBoxItem(option)
    cy.get(authoringAUI.auiOptionListBox)
        .find(authoringAUI.auiOptionListBoxItem)
        .click()
}

Cypress.PageEditRubric = Cypress.PageEditRubric || {};

Cypress.PageEditRubric.modifyCell = (type, button, row, col) => {
    authoringAUI.labelAuiButton(button)

    if (type === 'td') {    
        authoringRubricPanel.selectTdCell(row,col)
        cy.get(authoringRubricPanel.tdCell).as('selectedCell')
    } else if (type === 'th') {
        authoringRubricPanel.selectThCell(row,col)
        cy.get(authoringRubricPanel.thCell).as('selectedCell')
    }

    cy.get('@selectedCell')
    .click()
    
    cy.get('@selectedCell')
    .find(authoringAUI.auiButton)
    .should('be.visible')
    .click()
}

Cypress.PageEditRubric.editMarkingRange = (row, col, marks) => {
    authoringRubricPanel.selectTdCell(row,col)
    cy.get(authoringRubricPanel.tdCell)
    .find(authoringRubricPanel.inputMarking)
    .clear()
    .type(marks)
}

Cypress.PageEditRubric.checkThCount = (quantity) => {
    cy.get(authoringRubricPanel.tableRubric + ' thead>tr>th')
    .should(($th) => {
        expect($th).to.have.length(quantity + 1)
    })
}

Cypress.PageEditRubric.checkTdCount = (quantity) => {
    cy.get(authoringRubricPanel.tableRubric + ' tbody>tr:nth-child(1)>td')
    .should(($td) => {
        expect($td).to.have.length(quantity)
    })
}

Cypress.PageEditRubric.checkTrCount = (quantity) => {
    cy.get(authoringRubricPanel.tableRubric + ' tbody>tr')
    .should(($tr) => {
        expect($tr).to.have.length(quantity)
    })
}

Cypress.PageEditRubric.checkMark = (row, col, value) => {
    authoringRubricPanel.selectTdCell(row, col)

    cy.get(authoringRubricPanel.tdCell)
    .find(authoringRubricPanel.marking)
    .should('have.text', value)
}

Cypress.PageEditRubric.checkTotalMark = (row, col, value) => {
    authoringRubricPanel.selectThCell(row, col)

    cy.get(authoringRubricPanel.thCell)
    .find(authoringRubricPanel.totalMarks)
    .should('contain.text', value)
}

Cypress.PageQuestionBank = Cypress.PageQuestionBank || {};

Cypress.PageQuestionBank.filterStatus = (statusName) => {
    Cypress.Common.chooseFilter(5);

    Cypress.Common.selectStatus(authoringQuestionBankPage.comboBoxShellStatus, STATUS_OF_QUESTION.get(statusName));
}

Cypress.PageQuestionBank.clickEditButton = () => {
    cy.get(authoringQuestionBankPage.btnEdit)
        .click();
}

Cypress.PageQuestionBank.filterQuestionType = (type) => {
    Cypress.Common.chooseFilter(4);

    Cypress.Common.selectStatus(authoringQuestionBankPage.comboBoxShellType, QUESTION_TYPES.get(type));
}

Cypress.PageQuestionAI = Cypress.PageQuestionAI || {};

Cypress.PageQuestionAI.checkBestPracAiVisible = (isVisible) => {
    Cypress.Common.checkVisible(authoringBestAIcontainer.ctnBestPracAI, isVisible)
}