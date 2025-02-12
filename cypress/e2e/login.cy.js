
describe ('Login functionality', () =>{
    it('Login register user', () => {
        cy.visit('https://parabank.parasoft.com/parabank/index.htm')
        cy.get('#loginPanel > form > div:nth-child(2) > input').type('Alif')
        cy.get('#loginPanel > form > div:nth-child(4) > input').type('Alif11')
        cy.get('#loginPanel > form > div:nth-child(5) > input').click()
        cy.get('#rightPanel > ul.services > li:nth-child(2) > input').click();
      })
})
// describe('Launch Application', () => {
//     it('Launch the test application', () => {
//       cy.visit('https://www.saucedemo.com')
//     })
//   }) #loginPanel > form > div:nth-child(2) > input #loginPanel > form > div:nth-child(4) > input

//   describe('Longin scenario', () => {
//     it('Test1 - Valid login', () => {

//   })

//   it('Test2 - Valid login', () => {

//     })
// })