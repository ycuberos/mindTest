export function getProduct1() {
  return cy.get("h4 a[href='prod.html?idp_=1']")
}

export function getProduct2() {
  return cy.get("h4 a[href='prod.html?idp_=2']")
}

export function getAddToCart() {
  return cy.get("a[onclick*='addToCart']")
}

export function getGoHome() {
  return cy.get("li a[href*='index']")
}

export function getGoLogin() {
  return cy.get("#login2")
}

export function getGoCart() {
  return cy.get("#cartur")
}































