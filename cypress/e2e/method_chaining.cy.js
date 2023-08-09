/// <reference types="cypress" />

describe('Method Chaining', () => {
    it("Uses aliases and variables to chain methods", () => {
        cy.visit("http://127.0.0.1:5500/login.html");

        cy.get('#username').type('testuser@gmail.com');
        cy.get('#password').type('testuser');
        cy.get('.btnlogin').as('loginButton');
        cy.get('@loginButton').click();
    });

    it("uses the .then() method to chain methods", () => {
        cy.visit("http://127.0.0.1:5500/login.html");

        cy.get('#username').type('testuser@gmail.com');
        cy.get('#password').type('testuser');
        cy.get('.btnlogin').as('loginButton');
        cy.get('@loginButton').click().then((el) => {
            // expect(el.val()).to.equal('Sign In');
            expect(el).to.have.value('Please wait...');
            
        });
    });
});
