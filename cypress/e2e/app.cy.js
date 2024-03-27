/// <reference types="cypress" />

describe('Sign Up', () => {
  Cypress._.times(10, (k) => {
    it(`Adds person to course ${k + 1} / 10`, () => {
      cy.visit('/')

      // add a new record
      cy.get('input[name="name"]').click().type('Some Name')
      cy.get('input[name="email"]').click().type('some@email.com')
      cy.get('select[name="department"]').select('core')
      cy.get('select[name="course"]').select('git-it')
      cy.get('input[type="submit"]').click()
      cy.get('input[value="Saved!"]').should('be.visible')
      cy.contains('li', 'Some Name - some@email.com - core - git-it')
    })
  })
})
