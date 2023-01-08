describe("Async test", ()=>{
    beforeEach(()=>{ 
        cy.visit("${process.env.BASE_URL}")
        cy.get("#txtUsername").type("admin")
        cy.get("#txtPassword").type("!1Winner75")
        cy.get('#btnLogin').click()
    })

    it("1. This is the first test to know about async", ()=>{
        cy.get(".firstLevelMenu").then(($menu)=>{
        cy.get('#menu_admin_viewAdminModule > b').click()
            cy.url().should("have.text", `${process.env.BASE_URL}/symfony/web/index.php/admin/viewSystemUsers`)
        })
})


    it("2. This is the first test to know about async", ()=>{
        cy.get(".firstLevelMenu").then(($menu)=>{
            cy.get('#menu_pim_viewPimModule > b').click()
            cy.url().should("have.text", `${process.env.BASE_URL}/symfony/web/index.php/pim/viewEmployeeList`)
            cy.go("back")
        })
})


    it("3 This is the first test to know about async", ()=>{
        cy.get(".firstLevelMenu").then(($menu)=>{
           cy.get('#menu_leave_viewLeaveModule > b').click()
            cy.url().should("have.text", `${process.env.BASE_URL}/symfony/web/index.php/leave/defineLeavePeriod`)
            cy.go("back")
        })
})

    it("4 This is the first test to know about async", ()=>{
        cy.get(".firstLevelMenu").then(($menu)=>{
            cy.get('#menu_time_viewTimeModule > b').click()
            cy.url().should("have.text", `${process.env.BASE_URL}/symfony/web/index.php/time/defineTimesheetPeriod`)
            cy.go("back")
        })
})

})
