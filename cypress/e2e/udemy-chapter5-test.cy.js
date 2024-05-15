describe('My e-shop Test site', function() {

    it('Search the Beanie products', function() {
        
    cy.visit('https://wp-eshop.ggeorgiou.work/shop/')
      // Get an input, type into it
      cy.get('#wp-block-search__input-1').type('beanie')

      //Wait for it
      cy.wait(4000)
  
      //  Verify that the value has been updated
      cy.get('#wp-block-search__input-1').should('have.value', 'beanie')
  
      // Search results
      cy.get('.wp-block-search__button').click() 
    })


    it('Put products into cart', function() {
        
        //Parent-child chaining
        cy.get('.products').find('.ast-grid-common-col').each(($el, index, $list) => {
            let ben = $el.find('.woocommerce-loop-product__title').text()
            if(ben.includes('beanie')) {
                cy.wrap($el).find('.astra-shop-summary-wrap > .button').click()
            }
        })

    })

  })