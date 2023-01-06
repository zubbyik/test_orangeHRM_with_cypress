describe("Testing how variable and aliases work", () => {
  let elem = []
  beforeEach(() => {
    cy.visit("/");
    cy.get("#txtUsername").type("admin");
    cy.get("#txtPassword").type("!1Winner75");
    cy.get("#btnLogin").click();
    cy.get(".firstLevelMenu").each((d)=>{
        elem.push(d.attr("id"))
    })
    })
  
/*
  links = [
    "menu_admin_viewAdminModule",
    "menu_pim_viewPimModule",
    "menu_leave_viewLeaveModule",
    "menu_time_viewTimeModule",
    "menu_recruitment_viewRecruitmentModule",
    "menu_pim_viewMyDetails",
    "menu__Performance",
    "menu_dashboard_index",
    "menu_directory_viewDirectory",
    "menu_maintenance_purgeEmployee",
  ];
*/

it("The admin check", ()=>{

           elem.forEach((item) => {
            
               cy.get(`#${item}`).click();
               cy.log(cy.url());
               cy.go("back");
             
           });




})

});
