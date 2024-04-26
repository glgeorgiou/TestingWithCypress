describe('My first Test Suite', function() {

    beforeEach( () => {
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/');
    })


    it('Find products containing a specific word', function() {    
        //Fint the input text and type 'ca'
        cy.get('.search-keyword').type('ca')
        
        //Wait 2 seconds to load
        cy.wait(2000)

        //Count the products
        cy.get('.product').should('have.length',5)        
    })


    it('Add a specific product into cart', function() {
        //Fint the input text and type 'ca'
        cy.get('.search-keyword').type('ca')
        
        //Wait 2 seconds to load
        cy.wait(2000)

        //Count the products
        cy.get('.product').should('have.length',5)
        
        //Add a product with a specific name (iteration)
        cy.get('.products').find('.product').each(($el, index, $list) => {
          const textVeg = $el.find('.product-name').text() //Get the text
          
          if (textVeg.includes('Cashews')) 
          {
            cy.wrap($el).find('button').click() //$el is a promise so, .wrap method wraps the promise.
          }
        })
    })


    it('Log the logo text', function() {
         //Grap the logo. Cypress is asynchronous and uses promises.
        cy.get('.brand').then(function(logoElement) {
            cy.log(logoElement.text())
        })     
    })
})