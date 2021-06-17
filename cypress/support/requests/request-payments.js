import helpersPayment from "../helpers/helpers-payments"

class RequestPayments {
  requestPaymentIntent(){
    cy.fixture('payments.json').then((data) => {
      cy.makeRequest(
        `${data.urlBase}/ecommerce/public/payments`,
        'POST',
        data.headers,
        data.paymentIntentBody,
      ).as('paymentIntent')
    })
  }
}
export default new RequestPayments()
