describe("Utilizing Basic Features", () => {
    it("uses contains", () => {
        cy.visit("https://example.cypress.io");
        cy.contains("type").click();
        cy.url().should("include", "/commands/actions");
        cy.get(".action-email")
    });

    it("should not have forgotten password", () => {
        cy.visit("http://127.0.0.1:5500/register.html");
        cy.contains("forgot password").should("not.contain", "forgot password");
    });

    it("Simulates user interaction", () => {
        cy.visit("https://example.cypress.io");
        cy.get(".action-email")
            .type("devop047@gmail.com")
            .should("have.value", "devop047@gmail.com");
    });
});
