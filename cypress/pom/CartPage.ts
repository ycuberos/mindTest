export function getAddToCart() {
  return cy.get("a[onclick*='addToCart']")
}

export function getPlaceOrder() {
  return cy.get("button[data-target*='#orderModal']")
}

export function getName() {
  return cy.get("#name")
}

export function getCountry() {
  return cy.get("#country")
}

export function getCity() {
  return cy.get("#city")
}

export function getCard() {
  return cy.get("#card")
}

export function getMonth() {
  return cy.get("#month")
}

export function getYear() {
  return cy.get("#year")
}

export function getPurchase() {
  return cy.get("button[onclick*='purchaseOrder']")
}

export function getThanks() {
  return cy.get("div.sweet-alert.showSweetAlert.visible > h2")
}























