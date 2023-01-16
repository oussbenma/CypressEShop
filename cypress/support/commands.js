import { isMobile } from "../support/functions/device.js";


Cypress.Commands.add("initBrowser", () => {
  cy.loginQA();
  cy.get(".footer > .primary").click();
});



