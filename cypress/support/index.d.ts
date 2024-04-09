export { }
declare global {
  namespace Cypress {
    interface Chainable {
      completeOrder(): Chainable<void>;
    }
  }
}