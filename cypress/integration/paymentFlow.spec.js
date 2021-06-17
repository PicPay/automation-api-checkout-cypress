import assertPaymentFlow from "../support/assertions/assertion-payments"
import reqPaymentFlow from "../support/requests/request-payments"
import helpPaymentFlow from "../support/helpers/helpers-payments"

describe('Fluxo de pagamento', () => {
  beforeEach(()=>{
    let test = cy.NathAjudando()
    cy.log(test)
  })
  it('Gerar intenção de pagamento', () => {
    reqPaymentFlow.requestPaymentIntent()
    assertPaymentFlow.assertionPaymentIntent(200)
  })
})
