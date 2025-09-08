describe("template spec", () => {
  //Successfull Login
  it("should log in successfully", () => {
    //Fill in the right credentials and click button
    cy.login();
    cy.url().should("include", "/dashboard/index");
    cy.get(".oxd-topbar-header-title").should("contain.text", "Dashboard");
  });
});
