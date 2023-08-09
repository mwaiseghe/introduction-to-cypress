/// <reference types="cypress" />

describe("Navigation", () => {
    it("Should be able to navigate to and fro", () => {
        cy.visit("http://127.0.0.1:5500/");
        // navigate to login page
        cy.get(".jointeam").click();
        cy.location("pathname").should("equal", "/register.html");

        cy.get('[data-cy="login"]').click();
        cy.location("pathname").should("equal", "/login.html");

        // navigate using the back button
        cy.go("back");
        cy.location("pathname").should("equal", "/register.html");

        // navigate using the forward button
        cy.go("forward");
        cy.location("pathname").should("equal", "/login.html");
    });
});