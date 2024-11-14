describe('My CV site', () => {

    before(() => {
        cy.fixture('example.json').then(function(data) {
            this.data = data
        })
    } )

    it('Search terms about WordPress', () => {
      cy.visit('https://www.ggeorgiou.gr/')
      // cy.get('#s').type('wordpress')
      cy.get('#s').type(this.data.keyword)
      cy.get('.searchsubmit').click()
    })
  })