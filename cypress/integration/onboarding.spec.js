describe('Onboarding', () => {
  before(() => {
    cy.visit('/');

    cy.findByTestId('onboarding').as('onboarding');
  });

  describe('Onboarding has the correct link', () => {
    it('has an example link', () => {

      cy.get('@onboarding').should('have.attr', 'href', '/');
      cy.get('@onboarding').click();
    });
  });
});
