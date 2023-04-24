
describe('Login page', () => {
    beforeEach(() => {
        cy.visit('/login')
    })

    it('Error message for invalide email/password', () => {
        cy.loginBy()
        cy.contains('Please enter a valid email or password')

    })

    it('Eye button allow to show/hide the password input', () => {
        cy.typeLoginPassword()
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

    it('An error message is displayed if password is wrong with default error message', () => {
        cy.loginBy('some.user@mail.com', 'somePdw')
        cy.contains('Please enter a valid email or password')
    })


})