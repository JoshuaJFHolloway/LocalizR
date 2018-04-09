Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
})

describe('Slath', function () {

  it('Homepage renders correctly', function () {
    cy.visit('http://localhost:3000')
    cy.contains('slath')
    cy.contains('Be a traveler, not a tourist')
  })

  // it('can register and log in', function () {
  //   cy.contains('Log In or Sign Up').click()
  //   cy.contains('Sign Up').click()
  //   cy.get('input.auth0-lock-input').first()
  //     .type(`test_slath${Math.floor(Math.random() * 200000)}@slath.com`)
  //   cy.get('input.auth0-lock-input').last()
  //     .type('slathPASSWORD99')
  //   cy.get('span.auth0-label-submit').click()
  //   cy.get('.icon-budicon-500').click()
  // })

  it('can log in w registered user and log out', function () {
    cy.contains('Log In or Sign Up').click()
    cy.contains('test_slath105720@slath.com').click()
    cy.contains('Log Out').click()
  })

  it('can log in after log out again', function () {
    cy.contains('Log In or Sign Up').click()
    cy.contains('test_slath105720@slath.com').click()
  })

  it('can play Spanish game', function () {
    cy.contains('Choose your language!')
    cy.get('img').first().click()
  })

  it('can play scenario1-s first question', function () {
    cy.contains('Spanish Scenario 1').click()
    cy.contains('Log Out')
    cy.contains('You choose to wear this for your date')
    cy.contains('Which of these is your suit?')
    cy.contains('el vestido rojo')
    cy.contains('Los pantalones rojos')
    cy.contains('La camiseta roja')
    cy.contains('el traje rojo').click()
  })

  it('can play scenario1-s second question', function () {
    cy.contains('Log Out')
    cy.contains("You're going to the restaurant where your date is waiting for you...")
    cy.contains('Which direction you should take?')
    cy.contains('Este')
    cy.contains('Norte')
    cy.contains('Sur')
    cy.contains('Oeste').click()
  })

  // it('can play scenario1-s third question', function () {
  //
  // })

  // it('can ')

  // it('can register', function () {
  //   cy.contains('Log In or Sign Up').click()
  //   cy.get('input.auth0-lock-input').first()
  //     .type('example@example.com')
  //   cy.get('input.auth0-lock-input').last()
  //     .type('password')
  // })

  // it('can register user with e-mail and password', function () {
  //   cy.contains('Log In or Sign Up').click().type('text')
  // })

})
