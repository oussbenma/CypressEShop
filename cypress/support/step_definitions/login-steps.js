import { use } from "chai";
import { Before, Given, When, Then } from "cypress-cucumber-preprocessor/steps";

Given("I access the login page", () => {
  cy.visit("/login");
  cy.initBrowser();
});

When("I enter a username {word}", (username) => {
  cy.get('[i18ntext="E-Mail-Adresse"] > .d-input-element > .d-input').type(username);
});

And("I enter a password {string}", (password) => {
  cy.get(".toggleType > .d-input-element > .d-input").type(password);
});

And("I click on the login button", () => {
  cy.get("m-button.message-pipe").click();
});

Then("I see an alert message {string}", (message) => {
  cy.scrollTo(0, '-500px')
  cy.get(".global-alert-message > span").should(
    "have.text",
    message
  );
});
