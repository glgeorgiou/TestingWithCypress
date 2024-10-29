describe('Alerts,popups', function() 
{
 
  it('Alert button clicked',function() {
  
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
    
    //Click alert button
    cy.get('#alertbtn').click()
    
    //Window: alert. Έχουμε το event και το string από το pup up παράθυρο.
    cy.on('window:alert', (str) => {
      //Mocha
      expect(str).to.equal('Hello , share this practice page and share your knowledge')
    })
    
  }  )


  it('Confirm button clicked',function() {
  
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
    
    //Click confirm button
    cy.get('#confirmbtn').click()
    
    //Confirm window. Έχουμε το event και το string από το pup up παράθυρο.
    //?? Πως να ελέγξω τι κουμπί πατήθηκε;
    cy.on('window:confirm', (str) => {
      //Mocha
      expect(str).to.equal('Hello , Are you sure you want to confirm?')
    })
    
  }  )



}  )