// cypress/integration/forgotPassword.spec.js

describe('Forgot Password Feature', () => {
   
      // Visit the forgot password page
      
    
  
    it('Forget password', () => {
    cy.visit('https://parabank.parasoft.com/parabank/index.htm')
    cy.get('#loginPanel > :nth-child(2) > a').click()
    cy.get('#firstName').type('Yashu')
    cy.get('#lastName').type('Subedi')
    cy.get('#address\.street').type('kathmanu')
    cy.get('#address\.state').type('NY')
    cy.get('#address\.zipCode').type('10001')
    cy.get('#ssn').type('123456789')
      // Fill in forgot password form with valid username
    //   cy.get('input[name="username"]').type('john');
  
      // Submit the form
      cy.get('input[type="submit"]').click();
  
      // Verify success message displayed
      cy.get('.title').should('contain', 'Your password has been emailed');
    });
  
//     it('should display error message with invalid username', () => {
//       // Fill in forgot password form with invalid username
//       cy.get('input[name="username"]').type('invalid_username');
  
//       // Submit the form
//       cy.get('input[type="submit"]').click();
  
//       // Verify error message displayed
//       cy.get('.error').should('contain', 'The username you entered does not exist');
//     });
  
//     // Add more test cases for edge cases, validation, etc.
   });
  