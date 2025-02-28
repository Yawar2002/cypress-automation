// describe('Scroll Test', () => {
//     it('Scroll Test', () => {
//         cy.visit('https://www.zoho.com/books/accounting-software-demo/#/documents/inbox')
//         // cy.get('#ember245').scrollIntoView()
//         cy.get('input[type="file"]')
//         cy.get('input[type="file"]').selectFile("Home:\\Downloads\\Contact Images\\Sunil Toto.png", { force: true })
//         cy.get('.btn.btn-button[type="file"]').selectFile("Home:\\Downloads\\Contact Images\\Ribal Shahid.png", { force: true })
//         // cy.get('#ember493 > div.btn.btn-primary.file-upload').scrollIntoView()
//         // cy.get("#ember24 span > input[type='file']").scrollIntoView()
//     })
// })
describe('Select file or Upload file', () => {
    it('Select file or Upload file', () => {
        cy.visit('https://www.zoho.com/books/accounting-software-demo/#/documents/inbox');

        // Ensure Cypress selects only one file input field
        cy.get('input[type="file"]').first().selectFile("Home:\\Downloads\\Contact Images\\Sunil Toto.png", { force: true });

        cy.get('input[type="file"]').eq(1).selectFile("C:\\Users\\User\\Downloads\\Contact Images\\Ribal Shahid.png", { force: true });

        // Scroll into view if necessary before interacting
        cy.get('input[type="file"]').first().scrollIntoView();
    });
});
