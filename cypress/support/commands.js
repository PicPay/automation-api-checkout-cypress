Cypress.Commands.add('makeRequest', (Url, Method, Headers, Body) => {
  cy.request({
    url: Url,
    method: Method,
    headers: Headers,
    body: Body,
    failOnStatusCode: false,
  })
    .its('.')
    .should('not.be.empty')
    .then((res) => res)
})
Cypress.Commands.add('NathAjudando', ()=>{
  cy.readFile('cypress/fixtures/payments.json').should((data) => {
    let previousData = data
    let teste = Number(data.paymentIntentBody.referenceId) + 1
    data.paymentIntentBody.referenceId = teste.toString()
    cy.writeFile('cypress/fixtures/payments.json', JSON.stringify(previousData))
    return previousData
  })
})
