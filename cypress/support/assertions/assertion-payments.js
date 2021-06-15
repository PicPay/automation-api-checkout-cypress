class AssertionsPayments {
  assertionPaymentIntent(status){
    cy.get('@paymentIntent').should((res) => {
      expect(res.body).not.to.be.empty
      expect(res.status).to.be.equal(status)
    })
  }
}
export default new AssertionsPayments()
