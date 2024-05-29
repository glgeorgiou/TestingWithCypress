describe('Testing Checkboxes', () => {

    beforeEach( () => {
        cy.visit('https://the-internet.herokuapp.com/checkboxes');
    })

    it('Check the check boxes', () => {
        cy.get("input[type='checkbox']:nth-child(1)").check().should('be.checked')
    })

    it('Uncheck the check boxes', () => {
        cy.get("input[type='checkbox']:nth-child(1)").uncheck().should('not.be.checked')
    })
})
