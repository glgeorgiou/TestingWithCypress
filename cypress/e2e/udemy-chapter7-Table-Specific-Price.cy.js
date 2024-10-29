describe('Tables', function() 
{
 
  it('Get the price of the text includes word: Python',function() {
  
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
    
    //Go through table in 2nd column
    cy.get('tr td:nth-child(2)').each( ($el, index, $list) => {

        const text = $el.text()

        if (text.includes("Python")) {
        
          //Get the current index and move next, 3rd column.
          // 'then' because is a promise
          cy.get('tr td:nth-child(2)').eq(index).next().then(function(price) {
            const priceText = price.text()
            expect(priceText).to.equal('25')
          })
        }

    })
    
  }  )
  
}  )