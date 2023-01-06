/// <reference types="Cypress"/>


describe("Testing the wordpress api", ()=>{
    it("testing the initial get from the wordpress Api", ()=>{
            cy.request({
              url: "https://mkennyproperties.com/wp-json",
              method: "GET"
            }).then(response => {

                    expect(response.body.name).to.eq(
                      "mkennyproperties | making the difference"
                    );
            })

            
                    
            
          
    })
})