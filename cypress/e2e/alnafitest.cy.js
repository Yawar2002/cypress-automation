// describe ('luanch alnafi', () =>{
//   it('luuanch the test alnafi', () =>{
//       cy.visit('https://alnafi.com')
//   })
// })

context('when the test alnafi', () => {
  beforeEach(() => {
    cy.visit('https://alnafi.com')
  })
  it('has an h1 on the page', () => {
    cy.get('h1').should('exist');
  })
  it('render the correct h1 text', () => {
    cy.get('h1').should('contain.text', 'Action')
  })
  it('renders a paragraph under the h1 text', () => {
    cy.get('.container').eq(1).find('p').should('exist')
  })
  cy.get('button').then(($btn) => {
    const cls = $btn.attr('class')
  
    cy.wrap($btn).click().should('not.have.class', cls)
  })
})