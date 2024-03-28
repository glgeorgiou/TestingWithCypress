describe('My First Test', () => {
    it('Visits the Kitchen Sink', () => {
      cy.visit('https://example.cypress.io')

      cy.contains('type').click()

      // Should be on a new URL which includes '/commands/actions'
      cy.url().should('include','/commands/actions')

       // Get an input, type into it
    cy.get('#email1').type('fake@email.com')

    //  Verify that the value has been updated
    cy.get('#email1').should('have.value', 'fake@email.com')
    })
  })