class HelpersPayment {
  helperBodyPaymentIntent(){
      cy.readFile('cypress/fixtures/payments.json').should((data) => {
        let previousData = data
        let teste = Number(previousData.paymentIntentBody.referenceId) + 1
        previousData.paymentIntentBody.referenceId = teste.toString()
        cy.writeFile('cypress/fixtures/payments.json', JSON.stringify(previousData))
        return previousData
      })
  }
}
export default new HelpersPayment ()
