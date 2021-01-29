const { expect } = require("chai")

describe('Endpoints de Healthcheck', () => {
  it('Verificar primeira rota de saúde', () => {
    cy.fixture('health.json').then((data) => {
      cy.makeRequest(
        `${data.urlBase}/health`,
        'GET',
        data.headers
      ).as('healthcheck')

      cy.get('@healthcheck').should((res) => {
        expect(res.status).to.be.equal(200)
      })
    })
  })

  it('Verificar segunda rota de saúde', () => {
    cy.fixture('health.json').then((data) => {
      cy.makeRequest(
        `${data.urlBase}/health2`,
        'GET',
        data.headers
      ).as('healthcheck2')

      cy.get('@healthcheck2').should((res) => {
        expect(res.status).to.be.equal(200)
      })
    })
  })
})
