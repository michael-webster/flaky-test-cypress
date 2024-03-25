/// <reference types="cypress" />

describe('Students app', { baseUrl: 'http://localhost:5000' }, () => {
  it('shows the list of students', () => {
    cy.request('POST', 'http://localhost:4000/reset', {
      students: [
        {
          name: 'Some Name',
          email: 'some@email.com',
          course: 'git-it',
          department: 'core',
          id: 1,
        },
      ],
    })
    cy.visit('/')
    cy.contains('h1', 'Students')
    cy.contains('#students', 'Loading...')
  })
})
