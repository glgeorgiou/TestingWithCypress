describe('Testing Checkboxes', () => {

    beforeEach( () => {
        cy.visit('https://the-internet.herokuapp.com/checkboxes');
    })

    it('Check the check boxes', () => {
        cy.get("input[type='checkbox']:nth-child(1)").check().should('be.checked')
    })

    it('Uncheck the 2nd check box', () => {
        cy.get("input[type='checkbox']:nth-child(1)").uncheck().should('not.be.checked')
        cy.get("body > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > form:nth-child(2) > input:nth-child(3)").uncheck()
    })
})
