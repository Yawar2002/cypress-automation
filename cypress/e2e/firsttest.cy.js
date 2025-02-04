
describe ('luanch para', () =>{
    it('launches the Application', () => {
        cy.visit('https://parabank.parasoft.com/parabank/index.htm')
        cy.get("input[name= 'username']").type('text')
        cy.get("input[name= 'password']").type('text')
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