describe('Testing a drop down menu', () => {

    beforeEach( () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
    })

    it('Select an element from a static menu', () => {
        cy.get('select').select('option2').should('have.value','option2')
    })

    it('Make a fake assertion', () => {
        cy.get('select').select('option2').should('have.value','option1')
    })

    it('Select an alement from a dynamic menu', () => {
        //Select an option from a dynamic drop down menu
        cy.get('#autocomplete').type('gr')
        cy.wait(1000)
        cy.get('.ui-menu-item div').each(($el, index, $list) => {
        if ($el.text() === "Greece") {
            cy.wrap($el).click()
        }
        })
        //Value assertion
        cy.get('#autocomplete').should('have.value','Greece')
    })

})