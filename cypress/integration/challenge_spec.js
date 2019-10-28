describe('Website loads', function() {
  it('Visit homepage', function() {
    cy.visit('http://localhost:3000/')
  })
})

describe('Authentication', function() {
  it('Log in', function() {
    cy.visit('http://localhost:3000/')
    cy.contains('Log in').click();
    cy.contains('Log out')
  })

  it('Log out', function() {
    cy.visit('http://localhost:3000/')
    cy.contains('Log in').click();
    cy.contains('Log out').click();
    cy.contains('Log in')
  })
})

describe('Navigation', function() {
  it('Visit Movies', function() {
    cy.visit('http://localhost:3000/')
    cy.contains('Popular Movies').click();
    cy.url().should('include', '/popular-movies')

  })

  it('Visit Series', function() {
    cy.visit('http://localhost:3000/')
    cy.contains('Popular Series').click();
    cy.url().should('include', '/popular-series')
  })

  it('Handle not found', function() {
    cy.visit('http://localhost:3000/asdf')
    cy.contains('not found')
    cy.contains('asdf')
  })
})
