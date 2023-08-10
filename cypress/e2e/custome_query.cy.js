/// <reference types="cypress" />

describe("Selecting Elements", () => {
    before(() => {
        cy.visit("/login.html");
    });

    it("selects data-cy", () => {
        cy.getElementsByDataCy('login_email').type("devop047@gmail.com");
        cy.getElementsByDataCy("login_password").type("devop047");
        cy.getElementsByDataCy("login_submit").click();
    });
});