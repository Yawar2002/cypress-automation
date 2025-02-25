describe('Handling the checkbox', () => {
    it('Lunch Checkbox', () => {
        cy.visit('https://www.zoho.com/books/accounting-software-demo/#/home/gettingstarted', { headers: { "Accept-Encoding": "gzip, deflate" } })
        // cy.get('#ember269', ".btn.btn-link[data-test-title='Reports-Center']").click()
        //cy.get(".btn.btn-link[data-test-title='Configure-Features']").click()
        cy.get('#main-nav-tab > ul > li.font-small.nav-item.mt-3 > a').click()
        cy.get('[type="checkbox"]').check()
        //cy.get('div.modal.fade.d-block.show.nested-modal > div > div > div.modal-body > form > div.row > div > div:nth-child(4) > div').check('Price List')
        // cy.get('[type="checkbox"]').click({ multiple: true })
        // cy.get('[type="radio"]').check('Price List')
        // cy.get(".btn.btn-link[data-test-title='All-Reports']", { timeout: 10000 }).click()
        //cy.get("#ember219").click()
        cy.get('#business_overview > :nth-child(2) > .text-blue')
        cy.get('body > div:nth-child(2) > div:nth-child(3) > div:nth-child(3) > main:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > table:nth-child(2) > tbody:nth-child(2) > tr:nth-child(2) > td:nth-child(1)').click()
            .click();
        cy.contains('button', 'Submit').click()
    })
})