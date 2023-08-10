/// <reference types="cypress" />

describe("submit form", () => {
    beforeEach(() => {
        cy.visit("/login.html");
    });

    it("submits a form", () => {
        cy.get("#username").type("devop047@gmail.com");
        cy.get("#password").type("devop047");
        cy.get(".btnlogin").click();
    });
});