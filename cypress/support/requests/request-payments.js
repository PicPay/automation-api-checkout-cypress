import helpersPayment from "../helpers/helpers-payments"

class RequestPayments {
  requestPaymentIntent(){
    cy.fixture('payments.json').then((data) => {
      //data.paymentIntentBody = helpersPayment.helperBodyPaymentIntent
      cy.log(helpersPayment.helperBodyPaymentIntent)
      cy.makeRequest(
        `${data.urlBase}/ecommerce/public/payments`,
        'POST',
        data.headers,
        helpersPayment.helperBodyPaymentIntent,
      ).as('paymentIntent')
    })
  }
}
export default new RequestPayments()
