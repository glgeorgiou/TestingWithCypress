describe('Udemy course tests', function() {

    it('My first test case', function() {
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/');
        //Fint the input text and type 'ca'
        cy.get('.search-keyword').type('ca')
        
        //Wait 2 seconds to load
        cy.wait(2000)

        //Count the products
        cy.get('.products > .product').should('have.length',4)
    })

})
