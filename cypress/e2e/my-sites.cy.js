describe('My CV site', () => {
  it('Test if \'wordpress\' word has results', () => {
    cy.visit('https://www.ggeorgiou.gr')

    // Get an input, type into it
    cy.get('#s').type('wordpress')

    //  Verify that the value has been updated
    cy.get('#s').should('have.value', 'wordpress')

    // Search results
    cy.get('.searchsubmit').click() 

    //Results assertion
    cy.get('.page-title').contains(21)
  })
})