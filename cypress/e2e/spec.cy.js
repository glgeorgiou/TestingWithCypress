describe('Open a web page', () => {
  it('Visit my cv site', () => {
    cy.visit('https://www.ggeorgiou.gr')

    // Get an input, type into it
    cy.get('#s').type('wordpress')

    //  Verify that the value has been updated
    cy.get('#s').should('have.value', 'wordpress')

    // Search results
    cy.get('.searchsubmit').click()
  })
})