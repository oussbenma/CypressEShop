/// <reference types="Cypress"/>
/// <reference types="Cypress-xpath"/>




describe("TS01 - First Spec", () => {
  beforeEach(() => {
    cy.viewport(Cypress.env("viewPort"));
    cy.visit("/");
    cy.initBrowser();
  });





});
