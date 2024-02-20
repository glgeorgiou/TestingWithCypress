describe('spec.cy.js', () => {
  it('Visit example cypress site', () => {
    cy.visit('https://example.cypress.io')
  })
})
describe('My First Test', () => {
  it('Does much!', () => {
    expect(true).to.equal(true)
  })
})