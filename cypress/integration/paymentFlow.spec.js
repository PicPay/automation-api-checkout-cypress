import assertPaymentFlow from "../support/assertions/assertion-payments"
import reqPaymentFlow from "../support/requests/request-payments"

describe('Fluxo de pagamento', () => {
  it('Gerar intenção de pagamento', () => {
    reqPaymentFlow.requestPaymentIntent()
    assertPaymentFlow.assertionPaymentIntent(200)
  })
})
