describe('Scroll Test', () => {
    it('Scroll Test', () => {
        cy.visit('https://parabank.parasoft.com/parabank/index.htm')
        cy.scrollTo('bottom')
        cy.get('#footerPanel > :nth-child(1) > :nth-child(2) > a').scrollIntoView()

    })
})