describe('Testing Radio buttons', () => {

    beforeEach( () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
    })

    it('Click 1st', () => {
        cy.get('[value="radio1"]').click().should('be.checked')
    })

    it('Click 2nd', () => {
        cy.get('[value="radio2"]').click().should('be.checked')
    })

    it('Click 3rd', () => {
        cy.get('[value="radio3"]').click().should('be.checked')
    })

    
})