/// <reference types="Cypress" />
describe('Cypress test', () => {
  it('uses cy commands', () => {
    cy.wrap({}).should('deep.eq', {})
  })
});
