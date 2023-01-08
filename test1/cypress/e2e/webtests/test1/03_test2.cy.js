/// <reference types="Cypress"/>


console.log(Cypress.env())

describe("This is the beginning of the", ()=>{
    it("The initial console setup ", ()=>{
        cy.visit(process.env.BASE_URL)
        cy.get("#txtUsername")
        .type("admin")
       cy.get("#txtPassword").clear()
       .type("!1Winner75")
       cy.get("#btnLogin").click();
       cy.get(".firstLevelMenu").each((item)=>{
           cy.get(item.html()).
           cy.go("back")
           cy.get("#txtUsername").should("not.have.text").type("admin");
           cy.get("#txtPassword").clear().type("!1Winner75");
           cy.get("#btnLogin").click();
       });

    })})