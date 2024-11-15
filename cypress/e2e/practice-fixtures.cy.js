describe('My CV site', () => {
  let data; // Define a variable to store the fixture data

  before(() => {
      cy.fixture('example.json').then((fixtureData) => {
          data = fixtureData; // Assign the fixture data to the variable
      });
  });

  it('Search terms about WordPress', () => {
      cy.visit('https://www.ggeorgiou.gr/');
      cy.get('#s').type(data.keyword); // Use the fixture data directly
      cy.get('.searchsubmit').click();
  });
});