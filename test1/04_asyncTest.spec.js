/// <reference types="Cypress"/>



describe("Async test", ()=>{
it("This is the first test to know about async", ()=>{
        cy.visit("http://192.168.43.227")
        cy.get("#txtUsername").type("admin")
        cy.get("#txtPassword").type("!1Winner75")
        cy.get("#btnLogin").click()
})

})
