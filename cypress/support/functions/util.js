import { should } from "chai"


export const clickIfExists = (selector) => {
    cy.document().then(($document) => {
      const documentResult = $document.querySelectorAll(selector)
      if (documentResult.length) {
        cy.get(selector).click();
      }
    })
  } 