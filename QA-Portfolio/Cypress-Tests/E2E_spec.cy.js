describe("E2E: Admin Workflow", () => {
  it("should navigate, filter admin users, and add a new employee", () => {
    cy.login(); // Custom command defined in commands.js
    // 🔹 Navigation Test
    cy.navigationTest(); // Custom command for clicking through main tabs

    // 🔹 Admin Module: Filter users
    cy.get('a[href="/web/index.php/admin/viewAdminModule"]')
      .parent("li")
      .click();
    cy.get(".oxd-topbar-header-title h6").should("contain.text", "Admin");
    cy.get(".oxd-table-filter .oxd-input").type("Admin");

    cy.get(".oxd-form-actions").within(() => {
      cy.contains("button", "Search").click();
      cy.contains("button", "Reset").click();
    });

    // 🔹 Add New Employee
    cy.get(".orangehrm-header-container .oxd-button").click();

    // Select role: Admin
    cy.get(".oxd-grid-item")
      .eq(0)
      .within(() => {
        cy.get(".oxd-select-wrapper").click();
      });
    cy.contains(".oxd-select-dropdown", "Admin").click();

    // Type employee name
    cy.get(".oxd-grid-item")
      .eq(1)
      .within(() => {
        cy.get('input[placeholder="Type for hints..."]').type("John Doe");
      });

    // Select status: Enabled
    cy.get(".oxd-grid-item")
      .eq(2)
      .within(() => {
        cy.get(".oxd-select-text").click();
      });
    cy.contains(".oxd-select-dropdown", "Enabled").click();

    // Fill credentials
    cy.typeInGridItem(3, "John_Doe123");
    cy.typeInGridItem(4, "NewPassword123");
    cy.typeInGridItem(5, "NewPassword123");

    // Submit form
    cy.get(".oxd-form-actions .oxd-button--secondary").click();

    // 🔹 Assertion: Confirm success
    cy.contains("Successfully Saved").should("be.visible");
  });
});
