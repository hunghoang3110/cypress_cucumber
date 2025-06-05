export const authoringMessageDialog = {
    modal: '#aui-message-dialog',
    heading: 'h3[slot="header"]'
}

export const authoringAUI = {
    ariaLabel: '',
    divAriaLabel: function (name) {
        this.ariaLabel = `div[aria-label="${name}"]`
    },
    auiSearchBox: 'aui-searchbox[placeholder="Input keyword"]',
    auiInput: 'input[type="search"]',
    auiBody: '.aui-body',
    auiPanel: '.aui-panel',
    auiNavPanel: '.aui-navpanel',
    auiSelectionListBox: '.aui-selection-listbox-container',
    auiModalPanel: 'div[class*="aui-panel-content"][data-backdrop="true"]',
    auiModalPanelHeader: 'div[class*="aui-panel-head"][type="close"]',
    auiFilterGroup: '.aui-filter-group',
    auiComboBoxClass: '[role="combobox"]',
    auiComboBoxShellPopUp: 'div[id^=aui_comboboxshell_popup_aui_comboboxshell_][style*="display: flex"]',
    auiSelectionSelect: '.aui-selection-label.aui-selection-item',
    auiSelectionSelectAll: '.aui-selection-select-all',
    auiComboBoxShellFooter: '.aui-comboboxshell-footer',
    auiOptionListBox: 'div[id^=aui_optionlist_listbox_]',
    auiOptionListBoxItem: '',
    selectOptionListBoxItem: function (nth) {
        this.auiOptionListBoxItem = `div[id^=aui_optionlist_listbox_item_][id$=_${nth}]`
    },
    auiBtnOK: 'button[name="ok"]',
    auiButton: '',
    nameAuiButton: function (name) {
        this.auiButton = `button[name="${name}"]`
    },
    labelAuiButton: function (label) {
        this.auiButton = `button[aria-label="${label}"]`
    },
    auiClose: 'aui-button[name="tabskip-close"][icon="faui-close"]',
    auiTable: '.aui-table-box',
    auiEditBtn: '.button-icon-part.fia-pen-edit',
    auiCellContent: '.aui-table-cell-content',
    auiCheckOutEditBtn: '#check-out-edit-btn',
    auiCheckInBtn: '#check-in-btn',
    auiMessageModal: '#aui-message-dialog',
    auiChoice: '.aui-choice-input',
    auiBtnFooter: '.button-footer',
    colMD4: '.col-md-4',
    pullRight: '.pull-right',
    auiComboBoxShell: 'div[id^=aui_comboboxshell_][style*="display: inline-block"]',
    auiValidMess: 'div[class=aui-validation-message][style="visibility: visible;"]'
}

export const authoringSetUpBasicInfor = {
    btnSaveAndClose: '#save-and-close-basic-btn',
    btnSaveAndNext: '#save-and-next-basic-btn',
    spItemBankCode: '#vt-item-bank-code',
    spTestPlanCode: '#vt-test-plan-code',
    ipDuration: 'input[aria-label="Duration"]'
}

export const masterData = {
    liComponent: '#master-data-component',
}

export const authoringBankPage = {
    btnAllQuestions: '#question-bank-all-btn',
    btnCreateQuestion: '#question-bank-create-btn',
    btnAllPapers: '#paper-bank-all-btn',
    btnCreatePaper: '#paper-bank-create-btn',
    iTaskCenter: '.fia-calendar-check'
}

export const authoringPaperBankPage = {
    actionHeader: ".action-header",
    btnEdit: "#edit-paper-btn",
    paperBankTable: '#paperBankTable',
    checkBox: 'input[name="paperBankTable-Checkbox"]',
}

export const authoringQuestionBankPage = {
    comboBoxShellStatus: '#aui_comboboxshell_popup_status-filter',
    comboBoxShellType: '#aui_comboboxshell_popup_question-type-filter',
    btnEdit: '#edit-question-btn'
}

export const authoringPaperPage = {
    buttonClass: '.button-text-part',
    divSectionPanel: '.section-panel',
    divFirstAddSectionn: '#buttons-undefined',
    btnLaterAddSectionn: '#add-section-btn',
    divGenerateAI: '.nocontent-btncontainer',
    btnGenerateAI: 'button[data-classify="ai"]', ///#add-ai-question-btn-\d/
    btnSave: 'button[name="save"]'
}

export const authoringQuestionPage = {
    liMenuQuestion: '',
    selectMenuQuestion: function (type) {
        this.liMenuQuestion = `li > aui-button[id='${type}']`
    },
    liSubMenuQuestion: '',
    selectSubMenuQuestion: function (type) {
        const nth = SUB_QUESTION_TYPES.get(type)
        this.liSubMenuQuestion = `aui-tabloop > li:nth-child(${nth})`
    },
    divAddNewQuestion: '.nocontent-btncontainer',
    btnSubQuestion: '#Sub-question',
    btnGenerateSubAI: 'button[data-classify="ai"]', ///#add-ai-question-btn-\d/
    btnAddNewQuestion: 'button[aria-label="Add new question"]',
    btnAddNewSubQuestion: 'button[aria-label="Add new sub-question"]',
    tbRubric: '#rubricTableCommon'
}

export const authoringBestAIcontainer = {
    btnBestPracAI: '#show-best-practices-tips',
    ctnBestPracAI: '.best-practices-container',
    divBestPracAI: '[data-trigger="show-best-practices-tips"]',
}

export const authoringPanel = {
    panel: 'div[aira-labelledby^="aui-panelheader"]:not([style$="display: none;"])',
    header: 'div[id*=aui-panelheader-]'
}

export const authoringRubricPanel = {
    tdCell: '',
    selectTdCell: function (row, col) {
        this.tdCell = `td[id=rubric-table-cell-${row}-${col}]`
    },
    thCell: '',
    selectThCell: function (row, col) {
        this.thCell = `th[id=rubric-table-cell-${row}-${col}]`
    },
    inputMarking: '.rubric-cell-onEditing input[aria-label="Question marks"]',
    marking: '.rubric-criterion-name span[class=strong]',
    totalMarks: '.rubric-criterion-marks',
    tableRubric: 'div[id=rubricTableCommon] table'
}

// Create Maps
const SUB_QUESTION_TYPES = new Map([
    ["Categorization", 1],
    ["Choice", 2],
    ["Essay", 3],
    ["File upload", 4],
    ["Fill-in-the-blank", 5],
    ["Hot spot", 6],
    ["Matching", 7],
    ["Multiple drop-down", 8],
    ["Ordering", 9],
    ["True/False", 10]
  ])

export const QUESTION_TYPES = new Map([
    ["Categorization", 0],
    ["Choice-Multiple", 1],
    ["Choice-Single", 2],
    ["Essay", 3],
    ["File upload", 4],
    ["Fill-in-the-blank", 5],
    ["Hot spot", 6],
    ["Matching", 7],
    ["Multiple drop-down", 8],
    ["Oral question", 9],
    ["Ordering", 10],
    ["Secured Excel", 11],
    ["Sub-question", 12],
    ["True/False", 13],
    ["WordDoc assignment", 14]
  ])

export const STATUS_OF_QUESTION = new Map([
    ["Completed", 0],
    ["Draft", 1],
    ["Rejected", 2],
    ["Waiting for approval", 3]
])

export const STATUS_OF_TASK = new Map([
    ["Approved", 0],
    ["Rejected", 1],
    ["Waiting for approval", 2]
])

export const SERVICE_TYPE = new Map([
    ["Exam", 0],
    ["Question", 1],
    ["Paper", 2]
])