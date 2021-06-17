import assertPaymentFlow from "../support/assertions/assertion-payments"
import reqPaymentFlow from "../support/requests/request-payments"
import helpPaymentFlow from "../support/helpers/helpers-payments"

describe('Fluxo de pagamento', () => {
  beforeEach(()=>{
    helpPaymentFlow.helperBodyPaymentIntent()
  })
  it('Gerar intenção de pagamento', () => {
    reqPaymentFlow.requestPaymentIntent()
    assertPaymentFlow.assertionPaymentIntent(200)
  })
})
