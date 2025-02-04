// const { should } = require("chai")

describe ('Registration From', () =>{
    it('Register New User', () => {
        cy.visit('https://parabank.parasoft.com/parabank/index.htm')
        cy.get("input[name= 'username']").type('Alif')
        cy.get("input[name= 'password']").type('alif11')
        cy.get('#loginPanel > :nth-child(3) > a').click()
        cy.get("input[id='customer.firstName']").type('Ali')
        cy.get("input[id='customer.lastName']").type('jon')
        cy.get("input[id='customer.address.street']").type('8-b')
        cy.get("input[id='customer.address.city']").type('khi')
        cy.get("input[id='customer.address.state']").type('sindh')
        cy.get("input[id='customer.address.zipCode']").type('78600')
        cy.get("input[id='customer.phoneNumber']").type('03123446789')
        cy.get("input[id='customer.ssn']").type('786512')
        cy.get("input[id='customer.username']").type('alif')
        cy.get("input[id='customer.password']").type('alif11')
        cy.get("#repeatedPassword").type('alif11')
        cy.get("[colspan='2'] > .button").click()
        cy.get("span[id='customer.username.errors']").should('have.text','This username already exists.')
        cy.get("span[id='customer.username.errors']").contains('username already exists.')
      })
})
// describe('Launch Application', () => {
//     it('Launch the test application', () => {
//       cy.visit('https://www.saucedemo.com')
//     })
//   })

//   describe('Longin scenario', () => {
//     it('Test1 - Valid login', () => {

//   })

//   it('Test2 - Valid login', () => {

//     })
// })   