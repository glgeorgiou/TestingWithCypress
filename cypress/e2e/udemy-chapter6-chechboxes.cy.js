describe('Check boxes', () => {

    beforeEach( () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
    })

    it('Check the checkboxes', () => {
        cy.get('#checkBoxOption1').check().should('be.checked').and('have.value','option1')
        cy.get('#checkBoxOption2').check().should('be.checked').and('have.value','option2')
        cy.get('#checkBoxOption3').check().should('be.checked').and('have.value','option3')
    })

    it('Uncheck the check boxes', () => {
        cy.get('#checkBoxOption1').uncheck().should('not.be.checked')
        cy.get('#checkBoxOption3').uncheck().should('not.be.checked')
        cy.get('#checkBoxOption3').uncheck().should('not.be.checked')
    })
    
    it('Check the checkboxes by type', () => {
        //Chechboxes are clicked and verified through type
        cy.get('input[type="checkbox"]').check(['option1','option2','option3'])
    
    })
})



    