import * as HomePage from '../pom/HomePage'
import * as CartPage from '../pom/CartPage'
import * as LoginPage from '../pom/LoginPage'

beforeEach(() => {
  cy.visit('https://demoblaze.com/')
})

describe('Suite 001 - Ejercicios', () => {
  
  
  it('Test Case 0001', () => {
    cy.completeOrder() 
  })

  it('Test Case 0002', () => {

    //login
    HomePage.getGoLogin().click()
    LoginPage.getUsername().type("standard_user")
    LoginPage.getPassword().type("secret_sauce") 
    LoginPage.getLoginIn().click()  

    cy.completeOrder()
    
  })
})