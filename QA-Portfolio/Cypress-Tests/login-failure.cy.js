describe("template spec", () => {
  //Test the log in form with invalid inputs
  it("should log in unsuccessfully", () => {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );
    cy.get(".orangehrm-login-slot").within(() => {
      cy.get("h5").should("contain.text", "Login");
    });

    // Submit empty form to trigger "Required" errors
    cy.get(".oxd-form").within(() => {
      cy.get(".oxd-button").click();
    });
    cy.contains(".oxd-input-field-error-message", "Required").should(
      "be.visible"
    );

    // Fill in invalid credentials
    cy.get('input[name="username"]').type("Admin2");
    cy.get('input[name="password"]').type("admin123");
    cy.get(".oxd-input-field-error-message").should("have.length", 0);
    cy.get(".oxd-form").within(() => {
      cy.get(".oxd-button").click();
    });
    cy.get(".oxd-alert").should("be.visible");
    cy.get(".oxd-alert").should("contain.text", "Invalid credentials");
  });
});
