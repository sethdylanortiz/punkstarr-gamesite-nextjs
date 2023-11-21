// cypress assertion docs: 
// https://docs.cypress.io/guides/references/assertions
const inputUsernameSelector = '[data-cy="input_username"]';
const inputEmailSelector = '[data-cy="input_email"]';
const inputReportMsg = '[data-cy="input_reportmsg"]';
const formSubmitBtn = 'button[data-cy="submit"]';

describe('bugreport page', () => {
    it('should notify the user to fill all entries when entire form is not complete', () => {
      cy.visit('http://localhost:3000/contact')
      cy.get(formSubmitBtn).click();
      cy.get(inputUsernameSelector).should('exist');
      cy.get(inputEmailSelector).should('exist');
      cy.get(inputReportMsg).should('exist');
    });

    it('should show redirect the user to the success page when form is submitted', () => {
        cy.visit('http://localhost:3000/contact')
        cy.get(inputUsernameSelector).type('cypress_test_username');
        cy.get(inputEmailSelector).type('cypress_test@gmail.com');
        cy.get(inputReportMsg).type('testing reportmsg from cypress');
        cy.get(formSubmitBtn).click();

        cy.get('.page_contentContainer__Hs9DQ > :nth-child(1)').should('be.visible');
        cy.url().should('match', /\/success/);
    });
})

//  it('should show error when form is not filled out properly', () => {
//  it('should show error 404 page when dynamodb write call fails', () => {