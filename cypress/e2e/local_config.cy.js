/// <reference types="cypress" />

desccribe('Explains Local COnfigurations' ,{
    defautlCommandTimeout: 10000, // 10 seconds
    execTimeout: 20000, // 20 seconds
    taskTimeout: 20000, // 20 seconds
}, () => {
    beforeEach(() => {
        cy.visit("/login.html");
    });

    // check url
    it("checks the url", () => {
        cy.url().should('include', 'login.html');
    });
});