import LoginPage from "./loginPage"

 
 const SUBMIT_BUTTON_Second= 'button[name="submit"]'
 
 class seconPage{

static submit_page_second() {
    console.log(LoginPage.data)
    cy.get(SUBMIT_BUTTON_Second).click()
}
 
}
export default seconPage