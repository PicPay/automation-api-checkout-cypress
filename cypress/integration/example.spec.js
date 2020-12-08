describe('Autenticação', () => {
  it('Realizar login', () => {
    cy.fixture('example.json').then((data) => {
      cy.makeRequest(
        `${data.urlBase}/login`,
        'POST',
        data.headers,
        data.loginCorretoBody,
      ).as('loginRealizado')

      cy.get('@loginRealizado').should((res) => {
        expect(res.body).not.to.be.empty
        expect(res.status).to.be.equal(200)
      })
    })
  })
})
