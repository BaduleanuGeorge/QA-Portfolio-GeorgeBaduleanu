// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add("login", (username = "Admin", password = "admin123") => {
  cy.visit(
    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
  );
  cy.get(".orangehrm-login-slot").within(() => {
    cy.get("h5").should("contain.text", "Login");
  });
  cy.get('input[name="username"]').type(username);
  cy.get('input[name="password"]').type(password);
  cy.get(".oxd-form").within(() => {
    cy.get(".oxd-button").click();
  });
});

Cypress.Commands.add("logout", () => {
  cy.get(".oxd-topbar-header-userarea").click();
  cy.get(".oxd-topbar-header-userarea").within(() => {
    cy.get("li").eq(4).click();
  });
});

Cypress.Commands.add("typeInGridItem", (index, value) => {
  cy.get(".oxd-grid-item")
    .eq(index)
    .within(() => {
      cy.get(".oxd-input").type(value);
    });
});

Cypress.Commands.add("navigationTest", () => {
  cy.get('a[href="/web/index.php/pim/viewPimModule"]').parent("li").click();
  cy.get('a[href="/web/index.php/leave/viewLeaveModule"]').parent("li").click();
  cy.get('a[href="/web/index.php/time/viewTimeModule"]').parent("li").click();
  cy.get('a[href="/web/index.php/recruitment/viewRecruitmentModule"]')
    .parent("li")
    .click();
  cy.get('a[href="/web/index.php/admin/viewAdminModule"]').parent("li").click();
});
