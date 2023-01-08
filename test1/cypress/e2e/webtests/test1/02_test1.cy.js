/// <reference types="Cypress"/>




describe("This is the first test", ()=>{
    beforeEach(()=>{
        cy.visit(process.env.BASE_URL)
    })

    it("This will check the login page for title", ()=>{
        cy.get("[src='/symfony/web/webres_5e7b15c4882d04.47780062/themes/default/images/login/logo.png']")
        .should("be.visible")
    })

    it("login into the landing page", ()=>{
        cy.get('#txtUsername').type("admin")
        cy.get('#divPassword').type("!1Winner75")
        cy.get('#btnLogin').click()
        .then(()=>{
            let button = Cypress.$(
              ":nth-child(1) > .quickLaunge > a > img"
            );
            console.log(`The answer is ${button}`);

        }).debug()
        //cy.get(".firstLevelMenu").debug()
          //.each((data) => console.log(data.html()))
          //.then((data) => console.log(data));
        
    })
})