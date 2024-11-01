describe('Handling Child Windows', function() 
{
    it('Should handle child window', () => {
    
    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
    
       cy.get(".blinkingText").invoke('removeAttr','target').click();
       cy.get("h1").should('contain','Documents request'); //BUG: Timeout after 4000 ms
       })
  
}  )