class HelpersPayment {
  helperBodyPaymentIntent(){
    cy.readFile('cypress/fixtures/payments.json').then((data) => {
      let previousData = data
      let futureData = Number(previousData.paymentIntentBody.referenceId) + 1
      previousData.paymentIntentBody.referenceId = futureData.toString()
      cy.writeFile('cypress/fixtures/payments.json', JSON.stringify(previousData))
    })
  }
}
export default new HelpersPayment ()
