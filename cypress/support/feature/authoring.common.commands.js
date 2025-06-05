import { authoringAUI, authoringBankPage, authoringBestAIcontainer, authoringPaperBankPage, authoringQuestionBankPage, authoringPaperPage, authoringQuestionPage, STATUS_OF_TASK, SERVICE_TYPE, authoringMessageDialog, authoringPanel, masterData } from '../AUI/authoring.constants'

Cypress.PageBank = Cypress.PageBank || {};

Cypress.PageBank.allPaperPage = () => {
    cy.get(authoringBankPage.btnAllPapers)
    .click()
}

Cypress.PageBank.createPaperPage = () => {
    cy.get(authoringBankPage.btnCreatePaper)
    .click()
}

Cypress.PageBank.allQuestionPage = () => {
    cy.get(authoringBankPage.btnAllQuestions)
    .click()
}

Cypress.PageBank.createQuestionPage = () => {
    cy.get(authoringBankPage.btnCreateQuestion)
    .click()
}

Cypress.PageBank.clickTaskIcon = () => {
    cy.get(authoringBankPage.iTaskCenter)
    .click()
}

Cypress.TestPlanBank = Cypress.TestPlanBank || {};

Cypress.TestPlanBank.checkContent = (cell, testPlanCode) => {
    cy.get(authoringAUI.auiTable)
        .find(`div[data-cell="${cell}"]`)
        .find(authoringAUI.auiCellContent)
        .children()
        .should('have.attr', 'aria-label',testPlanCode)
        //.should('have.value', testPlanCode)
}

Cypress.Common = Cypress.Common || {};

Cypress.Common.clickCard = (card) => {
    cy.get(`div[aria-label="${card}"]`)
    .click()
}

Cypress.Common.clickLink = (link) => {
    cy.get('aui-navpanel')
    .shadow()
    .find(`a[role="link"][href*="${link}"]`, { timeout: 20000 })
    .click()
}

Cypress.Common.clickComponent = () => {
    cy.get(masterData.liComponent)
    .click()
}

Cypress.Common.leftNavigate = (name) => {
    cy.get('aui-navpanel')
    .shadow()
    .find('.navpanel')
    .contains(`${name}`)
    .should('be.visible')
    .click()
}

Cypress.Common.chooseFilter = (index) => {
    // Select the parent div and find the 5th div descendant
    cy.get(authoringAUI.auiFilterGroup) // Adjust the selector to target the specific parent div if needed
    .find(authoringAUI.auiComboBoxClass) // Find all div descendants within the parent div
    .eq(index) // Select the 5th div (index 4 because Cypress uses zero-based indexing)
    .click()
}

Cypress.Common.navPage = (page) => {
    cy.get('.common-nav-item')
    .contains(page)
    .click()
}

Cypress.Common.searchFromDropdown = (keyword) => {
    cy.get(authoringAUI.auiComboBoxShellPopUp)
    .find(authoringAUI.auiSearchBox)
    .shadow()
    .find(authoringAUI.auiInput)
    .type(keyword + '{enter}')
}

Cypress.Common.searchFromBox = (placeholder, keyword) => {
    cy.get('aui-searchbox')
    .shadow()
    .find(`input[type="search"][placeholder="${placeholder}"]`)
    .type(keyword + '{enter}')
}

// Cypress.Common.searchFromPanel = (name, keyword) => {
//     cy.get(authoringAUI.auiPanel)
//     .contains(name)
//     .shadow()
//     .find(authoringAUI.auiInput)
//     .type(keyword + '{enter}')
// }

Cypress.Common.selectFirstResult = () => {
    cy.get(authoringAUI.auiComboBoxShellPopUp)
    .find(authoringAUI.auiSelectionSelect)
    .first()
    .click()
}

Cypress.Common.selectStatus = (comboBoxShell, statusCode) => {
    cy.get(comboBoxShell)
    .find(authoringAUI.auiSelectionSelectAll)
    .click()

    cy.get(comboBoxShell)
    .find(authoringAUI.auiSelectionListbox)
    .find(authoringAUI.auiSelectionBox)
    .eq(statusCode)
    .click()

    cy.get(comboBoxShell)
    .find(authoringAUI.auiComboBoxShellFooter)
    .find(authoringAUI.auiBtnOK)
    .click()
}

Cypress.Common.checkBoxTable = (cell) => {   
    cy.get(authoringAUI.auiTable)
    .find(`div[data-cell="${cell}"]`)
    .find(authoringAUI.auiChoice)
    .click()
}

Cypress.Common.clickLinkTable = (cell) => {   
    cy.get(authoringAUI.auiTable)
    .find(`div[data-cell="${cell}"]`)
    .find(authoringAUI.auiCellContent)
    .find('a')
    .click()
}

Cypress.Common.closePanel = () => {
    cy.get(authoringAUI.auiModalPanel)
    .not('[style="inset: 0px; display: none;"]')
    .find(authoringAUI.auiModalPanelHeader)
    .find(authoringAUI.auiClose)
    .find('button')
    .click({ multiple: true, force: true })
}

Cypress.Common.checkVisible = (input, isVisible) => {
    if (isVisible === 'visible') {
        cy.get(input)
        .should('be.visible')
    } else {
        cy.get(input)
        .should('not.be.visible')
    }
    
}

Cypress.Common.selectByText = (text) => {
    cy.contains('button', text, {matchCase: true})
        .should('be.visible')
        .and('not.be.disabled')
        .click()
}

Cypress.Common.escape = () => {
    cy.get(authoringAUI.auiBody)
    .type('{esc}')
}

Cypress.Common.clickButton = (name) => {
    cy.contains('button', name)
    .should('be.visible')
    .and('not.be.disabled') 
    .click({})
}

Cypress.Common.clickLabel = (label) => {
    cy.get(`button[aria-label="${label}"]`)
    .should('be.visible')
    .and('not.be.disabled') 
    .click({})
}

Cypress.Common.checkFilter = (name, label) => {
    // cy.get('aui-panel')
    // .find('h3[slot="header"]')
    // .filter(':contains("Filter")')
    // .as('filterPanel')
    // cy.get('@filterPanel')
    // .shadow()
    // .find(`input[aria-label="${label}"]`,{'includeShadowDom': true})
    // .click()
    // .should('have.attr', 'aria-checked', 'true')

    cy.get(`div[aria-label="${label}"]`).as('filter')
    cy.get('@filter')
    .click()
    .find('input')
    .should('have.attr', 'aria-checked', 'true')
}

Cypress.Common.uncheckFilter = (name, label) => {
    // cy.get('aui-panel')
    // .contains(name)
    // .find(`[aria-label="${label}"]`)
    // .should('be.visible')
    // .and('not.be.disabled') 
    cy.get(`div[aria-label="${label}"]`).as('filter')
    cy.get('@filter')
    .click()
    .find('input')
    .should('have.attr', 'aria-checked', 'false')
}

Cypress.Common.enterInput = (input, text) => {
    cy.get(`input[aria-label="${input}"]`)
    .type(`${text}{enter}`)
}

Cypress.Common.enterTextarea = (textarea, text) => {
    cy.get(`textarea[aria-label="${textarea}"]`)
    .type(text)
}

Cypress.Common.checkValidMess = (message) => {
    cy.get(authoringAUI.auiValidMess)
    .should('be.visible')
    .should('contain.text', message)
}

Cypress.Common.selectDropdown = (name) => {
    cy.contains('span',name)
    .find('span[data-element="Combobox"]')
    .click()
}

Cypress.Common.checkSuccessPopup = (message) => {
    cy.get('aui-toast[classify="success"]')
    .should('contain.text', message)
}

Cypress.Common.clickButtoninDialog = (button) => {
    cy.get('aui-modal#aui-message-dialog')
    .contains('button',button)
    .click()
}

Cypress.Panel = Cypress.Panel || {};
Cypress.Panel.verifyHeader = (header) => {
    cy.get(authoringPanel.panel)
    .find(authoringPanel.header)
    .should('have.text', header)
    .should('be.visible')
}

Cypress.PageTaskCenter = Cypress.PageTaskCenter || {};

Cypress.PageTaskCenter.filterStatus = (statusName) => {   
    Cypress.Common.chooseFilter(1)

    Cypress.Common.selectStatus(authoringAUI.auiComboBoxShellPopUp, STATUS_OF_TASK(statusName))
}

Cypress.PageTaskCenter.filerServiceType = (type) => {
    Cypress.Common.chooseFilter(0)

    Cypress.Common.selectStatus(authoringAUI.auiComboBoxShellPopUp, SERVICE_TYPE(type))
}

Cypress.PageTaskCenter.searchText = (text) => {
    cy.get(authoringAUI.auiSearchBox)
    .type(`${text}{enter}`)
}

Cypress.MessageDialog = Cypress.MessageDialog || {};

Cypress.MessageDialog.checkHeading = (heading) => {
    cy.get(authoringMessageDialog.modal).as('dialog')
    
    cy.get('@dialog')
    .contains('h3', heading)
    .should('be.visible')
}

Cypress.MessageDialog.clickButton = (heading, button) => {
    cy.get(authoringMessageDialog.modal)
    .find('h3')
    .filter(`:contains(${heading})`)
    .siblings()
    .find('button')
    .filter(`:contains(${button})`)
    .should('be.visible')
    .should('not.be.disabled')
    .click();
}

Cypress.PageBestPracAI = Cypress.PageBestPracAI || {};

Cypress.PageBestPracAI.clickBestPracAIButton = () => {
    cy.get(authoringBestAIcontainer.btnBestPracAI)
    .click()
}

Cypress.PageBestPracAI.closeBestPracAI = () => {
    cy.get(authoringBestAIcontainer.divBestPracAI)
    .find(authoringAUI.auiClose)
    .find('button')
    .click()
}

Cypress.Common.checkContainText = (text) => {
    cy.get(authoringPaperPage.buttonClass)
    .contains(text)
    .should('contain', text)
}

Cypress.Common.settingLanguage = (enterLocale) => {
    var locale, slocale;
    switch (enterLocale) {
        case 'English US':
            locale = 'en-US',
            slocale = 'en'
            break;

        case 'English UK':
            locale = 'en-GB',
            slocale = 'en'
            break;

        case 'German':
            locale = 'de-DE',
            slocale = 'de'
            break;

        case 'Japan':
            locale = 'ja',
            slocale = 'ja'
            break;

        case 'Dutch':
            locale = 'nl',
            slocale = 'nl'
            break;

        case 'Chinese':
            locale = 'zh-CN',
            slocale = 'zh'
            break;
        default:
            break;
    }
    // Cypress.env('locale', locale);
    // cy.visit(Cypress.env('author_host'));
    cy.visit(Cypress.env('author_host'), {
        onBeforeLoad(win) {
            Object.defineProperty(win.navigator, 'language', { value: locale, configurable: true });
            Object.defineProperty(win.navigator, 'languages', { value: [locale], configurable: true });
            Object.defineProperty(win.navigator, 'accept_languages', { value: [locale] });
        },
        headers: {
        'Accept-Language': locale,
        }   
    })   
}

Cypress.Common.checkLanguage = (enterLocale) => {
    var locale;
    switch (enterLocale) {
        case 'English US':
            locale = 'Best practices for AI questions'
            break;

        case 'English UK':
            locale = 'Best practices for AI questions'
            break;

        case 'German':
            locale = 'Best Practices für KI-Fragen'
            break;

        case 'Japan':
            locale = 'AI 問題に対するベスト プラクティス'
            break;

        case 'Dutch':
            locale = 'Beste Praktijken voor AI Vragen'
            break;

        case 'Chinese':
            locale = '人工智能问题的最佳实践'
            break;
        default:
            break;
    }
    cy.get(authoringBestAIcontainer.btnBestPracAI)
    .should('have.text', locale)
}