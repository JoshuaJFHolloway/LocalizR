Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
})

describe('Slath', function () {
  it('opens page and has correct content', function () {
    cy.visit('http://localhost:3000/home')
    cy.title().should('include', 'Slath')
    cy.get('.index').should('contain', 'Be a traveler, not a tourist!')
    cy.get('.loginbutton').should('contain', 'Login / Signup')
  })

  it('can create a new user and logs in', function () {
    cy.get('.loginbutton').click()
    cy.get('.auth0-lock-alternative-link').click()
    cy.get('.auth0-lock-tabs').last().click()
    cy.get('.auth0-lock-input').first().type(`test_slath${Math.floor(Math.random() * 200000)}@slath.com`)
    cy.get('.auth0-lock-input').last().type('slathPASSWORD99')
    cy.get('.auth0-lock-submit').click()
    cy.get('#allow').click()
  })

  it('can login with a registered user', function () {
    cy.visit('http://localhost:3000/home')
    cy.get('.loginbutton').click()
    cy.get('.auth0-lock-alternative').first().click()
    cy.get('.auth0-lock-input').first().type('test_slath105720@slath.com')
    cy.get('.auth0-lock-input').last().type('slathPASSWORD99')
    cy.get('.auth0-lock-submit').click()
    cy.get('.chooselanguage').click()
  })

  it('can login just by clicking the last login users e-mail', function () {
    cy.visit('http://localhost:3000/home')
    cy.get('.loginbutton').click()
    cy.get('.auth0-lock-social-button-text').click()
  })
})

describe('Rendering the game', function () {
  it('renders Spanish Scenarios correctly', function () {
    cy.get('.loginbutton').should('contain', 'Log Out')
    cy.get('.languagepagetitle').should('contain', 'Choose your language!')
    cy.get('.languagepagetitle').first().click()
    cy.get('#submitButton').first().should('contain', 'Spanish Scenario 1')
    cy.get('.loginbutton').last().should('contain', 'Spanish Scenario 2')
  })

  it('renders French Scenarios correctly', function () {
    cy.visit('http://localhost:3000/home')
    cy.get('.loginbutton').click()
    cy.get('.auth0-lock-social-button-text').click()
    cy.get('img').last().click()
    cy.get('#submitButton').first().should('contain', 'French Scenario 1')
    cy.get('.loginbutton').last().should('contain', 'French Scenario 2')
  })
})

describe('Playing the game', function () {
  it('renders first French scenario if clicked', function () {
    cy.get('#submitButton').click()
    cy.get('.chooselanguage').should('contain', 'You leave your house and start following these signs')
  })

  it('renders first Spanish scenario if clicked', function () {
    cy.visit('http://localhost:3000/home')
    cy.get('.loginbutton').click()
    cy.get('.auth0-lock-social-button-text').click()
    cy.get('.languagepagetitle').first().click()
    cy.get('#submitButton').first().should('contain', 'Spanish Scenario 1')
    cy.get('#submitButton').first().click()
    cy.get('.chooselanguage').should('contain', 'You leave your house and start following these signs')
  })
})
















//   it('Homepage renders correctly', function () {
//     cy.visit('http://localhost:3000')
//     cy.title().should('include', 'Slath')
//     cy.get('.sc-bwzfXH').should('contain', 'Be a traveler, not a tourist')
//   })
//
// // this one had to be commented due to already havin'
// // a registered account
//   // it('can register and log in', function () {
//   //   cy.contains('Log In or Sign Up').click()
//   //   cy.contains('Sign Up').click()
//   //   cy.get('input.auth0-lock-input').first()
//   //     .type(`test_slath${Math.floor(Math.random() * 200000)}@slath.com`)
//   //   cy.get('input.auth0-lock-input').last()
//   //     .type('slathPASSWORD99')
//   //   cy.get('span.auth0-label-submit').click()
//   //   cy.get('.icon-budicon-500').click()
//   // })
//
//   it('can log in w/ registered user and log out', function () {
//     cy.get('button').should('contain', 'Log In or Sign Up').click()
//     cy.get('.auth0-lock').should('contain', 'test_slath105720@slath.com')
//     cy.get('button').first().click()
//   })
//
//   it('can log in after log out again', function () {
//     cy.get('button').should('contain', 'Log Out')
//     cy.contains('Log Out').click()
//     cy.get('button').should('contain', 'Log In or Sign Up')
//     cy.get('button').click()
//     cy.get('.auth0-lock').should('contain', 'test_slath105720@slath.com')
//     cy.get('button').first().click()
//   })
//
//   it('can play Spanish game', function () {
//     cy.contains('Choose your language!')
//     cy.get('img').first().click()
//   })
//
//   it('can play scenario1-s first question', function () {
//     cy.contains('Spanish Scenario 1').click()
//     cy.contains('Log Out')
//     cy.get('img')
//     cy.contains('You choose to wear this for your date')
//     cy.contains('Which of these is your suit?')
//     cy.contains('el vestido rojo')
//     cy.contains('Los pantalones rojos')
//     cy.contains('La camiseta roja')
//     cy.contains('el traje rojo').click()
//   })
//
//   it('can play scenario1-s second question', function () {
//     cy.contains('Log Out')
//     cy.get('img')
//     cy.contains("You're going to the restaurant where your date is waiting for you...")
//     cy.contains('Which direction you should take?')
//     cy.contains('Este')
//     cy.contains('Norte')
//     cy.contains('Sur')
//     cy.contains('Oeste').click()
//   })
//
//   it('can play scenario1-s third question', function () {
//     cy.contains('Log Out')
//     cy.get('img')
//     cy.contains('You want to surprise your date with some ....')
//     cy.contains('What is your idea of the perfect romantic gift?')
//     cy.contains('Galletas')
//     cy.contains('Cucharas')
//     cy.contains('Uvas')
//     cy.contains('Flores').click()
//   })
//
//   it('can play scenario1-s fourth question', function () {
//     cy.contains('Log Out')
//     cy.get('img')
//     cy.contains('You want to impress your date with a nice compliment ....')
//     cy.contains('Which of these is the best compliment?')
//     cy.contains('Qué bello estás')
//     cy.contains('Qué extraña estás')
//     cy.contains('Qué grande estás')
//     cy.contains('Qué guapa estás').click()
//   })
//
//   it('can play scenario1-s fifth question', function () {
//     cy.contains('Log Out')
//     cy.get('img')
//     cy.contains("After a romantic and successfull date, you're inviting your date for a drink...")
//     cy.contains('Which of these is the best option?')
//     cy.contains('Mercado')
//     cy.contains('Banco')
//     cy.contains('Tienda')
//     cy.contains('Terraza-Bar de copas').click()
//   })
//
//   it('shows correct score after 5 good answers', function () {
//     cy.contains('Log Out')
//     cy.contains('Nice one, your score is 5')
//     cy.contains('Languages Page')
//     cy.contains('Retry Quiz')
//   })
//
//   it('Language Page button takes us back to home Choose Language page', function () {
//     cy.contains('Languages Page').click()
//     cy.contains('Choose your language!')
//   })
//
//
// describe('Slath scenario 2', function () {
//   it('can play scenario2-s first question', function () {
//     cy.get('img').click()
//     cy.contains('Spanish Scenario 2').click()
//     cy.contains('Log Out')
//     cy.get('img')
//     cy.contains("After a long trip to Malaga, you're getting ready to go to the beach, but you don't know how to the direction")
//     cy.contains('Which of these is a swinsuit?')
//     cy.contains('Toalla')
//     cy.contains('Camiseta')
//     cy.contains('Calcetines')
//     cy.contains('Bañador').click()
//   })
//
//   it('can play scenario2-s second question', function () {
//     cy.contains('Log Out')
//     cy.get('img')
//     cy.contains('As a person who takes care of the skin, you need to buy sun protection to prevent sunburn..')
//     cy.contains('Which of these is the sun protector?')
//     cy.contains('Crema de cara')
//     cy.contains('Pasta de dientes')
//     cy.contains('Gel de baño')
//     cy.contains('Protector solar').click()
//   })
//
//   it('can play scenario2-s third question', function () {
//     cy.contains('Log Out')
//     cy.get('img')
//     cy.contains("Now, You're getting to the beach by Bus...")
//     cy.contains('Which bus you need to get?')
//     cy.contains('Dirección centro')
//     cy.contains('Dirección Feria')
//     cy.contains('Dirección pueblo')
//     cy.contains('Dirección playa').click()
//   })
//
//   it('can play scenario2-s fourth question', function () {
//     cy.contains('Log Out')
//     cy.get('img')
//     cy.contains("You're enjoying a nice day on the beach, but You're geting thristy...")
//     cy.contains('What can you get?')
//     cy.contains('Pan')
//     cy.contains('Botella de vino')
//     cy.contains('Ensalada')
//     cy.contains('Botella de agua').click()
//   })
//
//   it('can play scenario2-s fifth question', function () {
//     cy.contains('Log Out')
//     cy.get('img')
//     cy.contains('After a nice day on the beach, you lose the track time and you miss your bus ..')
//     cy.contains('What time is the next bus?')
//     cy.contains('Cinco y media')
//     cy.contains('Seis y media')
//     cy.contains('Ocho en punto')
//     cy.contains('Seis en punto').click()
//   })
//
//   it('shows correct score after 5 good answers', function () {
//     cy.contains('Log Out')
//     cy.contains('Nice one, your score is 5')
//     cy.contains('Languages Page')
//     cy.contains('Retry Quiz')
//   })
// })
//
// describe('Slath wrong answers test', function () {
//   it('has 0 correct answers at the end of Spanish Scenario 1', function () {
//     cy.contains('Languages Page').click()
//     cy.get('img').click()
//     cy.contains('Spanish Scenario 1').click()
//     cy.get('#submitButton1').click()
//     cy.get('#submitButton3').click()
//     cy.get('#submitButton2').click()
//     cy.get('#submitButton1').click()
//     cy.get('#submitButton2').click()
//     cy.contains('Nice one, your score is 0')
//   })
//
//   it('has 0 correct answers at the end of Spanish Scenario 2', function () {
//     cy.contains('Languages Page').click()
//     cy.get('img').click()
//     cy.contains('Spanish Scenario 2').click()
//     cy.get('#submitButton2').click()
//     cy.get('#submitButton3').click()
//     cy.get('#submitButton1').click()
//     cy.get('#submitButton3').click()
//     cy.get('#submitButton2').click()
//     cy.contains('Nice one, your score is 0')
//   })
// })
//
// describe('Mixed good/wrong answers tests', function () {
//   it('has 3 correct answers at the end of Spanish Scenario 1', function () {
//     cy.contains('Languages Page').click()
//     cy.get('img').click()
//     cy.contains('Spanish Scenario 1').click()
//     cy.get('#submitButton2').click()
//     cy.get('#submitButton').click()
//     cy.get('#submitButton').click()
//     cy.get('#submitButton3').click()
//     cy.get('#submitButton').click()
//     cy.contains('Nice one, your score is 3')
//   })
//
//   it('has 2 correct answers at the end of Spanish Scenario 2', function () {
//     cy.contains('Languages Page').click()
//     cy.get('img').click()
//     cy.contains('Spanish Scenario 2').click()
//     cy.get('#submitButton').click()
//     cy.get('#submitButton2').click()
//     cy.get('#submitButton1').click()
//     cy.get('#submitButton3').click()
//     cy.get('#submitButton').click()
//     cy.contains('Nice one, your score is 2')
//   })
// })
