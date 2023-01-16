/// <reference types="Cypress"/>
/// <reference types="Cypress-xpath"/>




describe("TS01 - First Spec", () => {
  beforeEach(() => {
    cy.viewport(Cypress.env("viewPort"));
    cy.visit("/");
    cy.initBrowser();
  });


  it("TF01 Hello World Test", () => {
      cy.log('Hello World!');
  });



});
