// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
Cypress.Commands.add('login', () => {
    // cy.session('adminSession', () => {
        cy.request({
            method: 'POST',
            url: Cypress.env('LOGIN'),
            headers: {
            'Content-Type': 'application/json'
            },
            body: {
                domainName: Cypress.env('DOMAIN'),
                password: Cypress.env('ADMIN_PASSWORD'),
                rememberLogin: false,
                returnUrl: Cypress.env('RETURN_URL'),
                userName: Cypress.env('ADMIN_USERNAME')
            }
        })
        .then((resp) => {
            expect(resp.status).to.eq(200)
        })
    // });
})
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
