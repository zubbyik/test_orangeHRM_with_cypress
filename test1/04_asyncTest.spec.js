/// <reference types="Cypress"/>
require("dotenv").config()


describe("Async test", ()=>{
it("This is the first test to know about async", ()=>{
        cy.visit(process.env.BASE_URL)
        cy.get("#txtUsername").type("admin")
        cy.get("#txtPassword").type("!1Winner75")
        cy.get("#btnLogin").click()
})

})
