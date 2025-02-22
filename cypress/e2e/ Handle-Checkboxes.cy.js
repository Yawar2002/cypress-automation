describe('Handling the checkbox', () => {
    it('Lunch Checkbox', () => {
        cy.visit('https://www.zoho.com/books/accounting-software-demo/#/home/gettingstarted', { headers: { "Accept-Encoding": "gzip, deflate" } })
        // cy.get('#ember269', ".btn.btn-link[data-test-title='Reports-Center']").click()
        //cy.get("#ember219.btn.btn-link[data-test-title='Reports-Center']", { timeout: 10000 })
        cy.get("#ember219").click()
        // .click();
        // cy.contains('button', 'Submit').click()
        cy.get('body > div:nth-child(20) > div:nth-child(3) > div:nth-child(3) > main:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > table:nth-child(2) > tbody:nth-child(2) > tr:nth-child(2) > td:nth-child(1)').click()
        cy.get('[type="checkbox"]').click({ multiple : true })
    })
})