const { expect } = require('chai')

describe('Fluxos de Pagamento', () => {
  it('Receber arquivo JSON com solicitação de pagamento', () => {
    cy.fixture('payments.json').then((data) => {
      cy.makeRequest(
        `${data.urlBase}/ecommerce/public/payments`,
        'POST',
        data.headersPaymentJson,
        data.bodyPaymentJson,
      ).as('paymentJson')
    })

    cy.get('@paymentJson').should((res) => {
      expect(res.status).to.be.equal(200) //401
    })
  })

  it('Consulta status de uma transação de pagamento', () => {
    cy.fixture('payments.json').then((data) => {
      cy.makeRequest(
        `${data.urlBase}/ecommerce/public/payments/${data.referenceId}/status`,
        'GET',
        data.headersPayment,
      ).as('statusPayment')
    })

    cy.get('@statusPayment').should((res) => {
      expect(res.status).to.be.equal(200) //401
    })
  })

  it('Receber um pagamento via PicPay App', () => {
    cy.fixture('payments.json').then((data) => {
      cy.makeRequest(
        `${data.urlBase}/ecommerce/app/payments/${data.orderId}`,
        'POST',
        data.headersPaymentApp,
        data.bodyPaymentApp,
      ).as('paymentApp')
    })

    cy.get('@paymentApp').should((res) => {
      expect(res.status).to.be.equal(200) //422
    })
  })
})
