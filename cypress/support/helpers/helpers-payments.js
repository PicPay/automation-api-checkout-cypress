import { reject, resolve } from "bluebird"

class HelpersPayment {
  helperBodyPaymentIntent(){
    function updateReferenceId () {
      const AddId = 1
      cy.readFile('cypress/fixtures/payments.json').should((data) => {
        globalThis.previousReferenceId = data.paymentIntentBody.referenceId
        laterReferenceId = Number(previousReferenceId) + AddId
      })
      cy.writeFile('cypress/fixtures/payments.json', {
        referenceId: laterReferenceId
      })
    }
    new Cypress.Promise((resolve, reject) =>{
      resolve(updateReferenceId)
    })
    return data.paymentIntentBody
  }
}
export default new HelpersPayment ()
