
describe('Login page', () => {
    beforeEach(() => {
        cy.visit('/login')
    })

    it('Error message for invalide email/password', () => {
        cy.get('#email').type(Cypress.env('testEmail'))
        cy.get('#password').type(Cypress.env('badPWD'))
        cy.contains('button', 'Sign in').click()
        cy.contains('Please enter a valid email or password')

    })

    it('Eye button allow to show/hide the password input', () => {
        cy.get('#email').type(Cypress.env('testEmail'))
        cy.get('#password').type(Cypress.env('badPWD'))
        cy.get('[data-testid=showIcon]').click()

        cy.get('#password').should('have.value', Cypress.env('badPWD'))

    })

    it('Reset password and send an email with reset link', () => {
        cy.contains('a','Forgot your password?').click()
        cy.location().then( loc => {
            expect(loc.pathname).eq('/reset-password')
        })
        cy.get('form')
            .within(() => {
                cy.contains('Reset your password')
                cy.contains('Send me the password reset link')
                cy.get('input[placeholder="name@abtasty.com"]')
            })

    })



})