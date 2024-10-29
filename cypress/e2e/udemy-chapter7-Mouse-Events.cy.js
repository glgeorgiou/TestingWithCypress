describe('Mouse events', function() 
{
 
  it('Mouse hover to show hidden menu',function() {
  
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
    
    //Show the hiden menu of the button. Click the 1st menu item labeled Top
    cy.contains('Top').click({force: true})
    cy.url().should('include','top')

  }  )
  

}  )