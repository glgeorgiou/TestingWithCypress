describe('New Window', function() 
{
 
  it('Open a new tab',function() {
  
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
    
    /*
    Remove the target property so tha do not open in new tab 
    by using invoke function that uses jQuery.
    BUG: Δεν παίζει λόγο αργής ταχύτητας του server  - Timeout*/
    
    cy.get('opentab').invoke('removeAttr', 'target').click();

  }  )


  
  it('Open a new tab window url into the parent window',function() {
  
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
    
    //Grap the URL of the new tab.
    //Since prop() is a jQuery method
    // we have to resolve the promise first before use it
    cy.get('#opentab').then( function(el) {
      const url = el.prop('href')
      cy.visit(url)
      //Obsolete but, let log the url
      cy.log('The url is: '+url)
    })
    

  }  )

}  )