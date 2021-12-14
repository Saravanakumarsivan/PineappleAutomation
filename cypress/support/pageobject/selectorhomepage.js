

class selectorhomepage{

    static  getUsername(){

        return cy.get('#username')
       
    }
   
   static  getContinue(){

            return cy.get('button[id="login-submit"]')
       
    }
  static  getPassword(){

        return cy.get('#password')
       
    }

     static  getSubmit(){

        return  cy.get('button[id="login-submit"]')
    }
     /*static  getinputtextjira(){

        return  cy.get('button[type="button"]').find('span').contains('Only My Issues');
       
    }
   */

    } 
    export default selectorhomepage