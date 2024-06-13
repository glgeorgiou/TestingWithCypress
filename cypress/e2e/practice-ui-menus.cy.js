describe('Testing a static drop down menu in herokuapp site', () => { 

    beforeEach( () => {
        cy.visit('https://the-internet.herokuapp.com/dropdown');
    })

    it('Select the 1st option from the menu', () => {
        cy.get('select').select('Option 1').should('have.value','1')
    })

    it('Select the 2nd option from the menu', () => {
        cy.get('select').select('Option 2').should('have.value','2')
    })

})



describe('Testing e-learning-eduvation.gr', () => {
    
    beforeEach( () => {
        cy.visit('https://www.e-learning-education.gr/');
    })

    it('Click on \'Επικοινωνία\' menu item', () => {
        cy.get('#menu-item-108').click()
    })

    it('Click on a 1st level menu item to enable a hidden submenu', () => {
        //To be implemented. May be by using AI.
    })
})