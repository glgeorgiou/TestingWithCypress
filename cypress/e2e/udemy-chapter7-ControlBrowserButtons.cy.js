describe('Tab Window', function() 
{
 
    
  it('Control buttons of the browser',function() {
    // Visit the A url then visit the B url and then go back to A url
    
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
    
    cy.visit("https://www.rahulshettyacademy.com/")
    //Validate url
    cy.url().should('include','rahulshettyacademy')
    
    cy.go('back')

  }  )

}  )