describe('template spec', () => {
  it('passes', () => {
    cy.visit('/login')
    cy.location().then(loc => console.log(loc))
  })
})