describe('Clear Methods', () => {
    it('Lunch clear methods', () => {
        cy.visit('https://parabank.parasoft.com/parabank/index.htm')

        cy.get("input[name= 'username']").type('Alif')
        cy.get("input[name= 'password']").type('alif11')
        cy.get('#loginPanel > :nth-child(3) > a').click()
        cy.get('input[name="loginPanel" > :nth-child(3) > a').clear()
    })
})