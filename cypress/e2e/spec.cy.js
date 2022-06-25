describe('empty spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io')
  })
  const firstInput = () => cy.get('input[name=first_name]')
  const lastInput = () => cy.get('input[name=last_name]')
  const emailInput = () => cy.get('input[email]')
  const passwordInput = () => cy.get('input[name=password]')
  const tosInput = () => cy.get('input[name=tos]')
  const submit = () => cy.get('input[id="submitBtn]')

  it('elements render', () => {
    firstInput().should('exist')
    lastInput().should('exist')
    emailInput().should('exist')
    passwordInput().should('exist')
    tosInput().should('exist')
    submit().should('exist')
  })

  it('terms of service is checked', () => {
    cy.get('tos-input').invoke('prop', 'indeterminate', true)
  })

  describe('Filled inputs', () => {
    it('navigates to the website', () => {
      cy.url().should('include', 'localhost')
    })

    it('type inputs', () => {
      firstInput().should('have.value', '').should('not.be.empty')
      lastInput().should('have.value', '').should('not.be.empty')
      emailInput().should('have.value', '').should('not.be.empty')
      passwordInput().should('have.value', '').should('not.be.empty')
    })
  })
})
