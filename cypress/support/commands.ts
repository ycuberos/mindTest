/// <reference types="cypress" />
import * as HomePage from '../pom/HomePage'
import * as CartPage from '../pom/CartPage'
import * as LoginPage from '../pom/LoginPage'

Cypress.Commands.add('completeOrder', () => {
  
//Add to cart
HomePage.getProduct1().click()
CartPage.getAddToCart().click()

cy.on('window:alert', (text) => {
  cy.window().then((win) => {
    win.alert = () => true;
  });
});

//Add to cart
HomePage.getGoHome().click()
HomePage.getProduct2().click()
CartPage.getAddToCart().click()

cy.on('window:alert', (text) => {
  cy.window().then((win) => {
    win.alert = () => true;
  });
});

//Purchase
HomePage.getGoCart().click()
CartPage.getPlaceOrder().click()

//Complete information
CartPage.getName().type("Yessica")
CartPage.getCountry().type("Argentina")
CartPage.getCity().type("Buenos Aires")
CartPage.getCard().type("1234567898")
CartPage.getMonth().type("12")
CartPage.getYear().type("2028")

CartPage.getPurchase().click()
CartPage.getThanks().should('be.visible')



})
