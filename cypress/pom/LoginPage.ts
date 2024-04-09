export function getUsername() {
  return cy.get("#loginusername")
}

export function getPassword() {
  return cy.get("#loginpassword")
}

export function getLoginIn() {
  return cy.get("button[onclick*='logIn()']")
}






























