import selectorhomepage from "../../support/pageobject/selectorhomepage"


class flowhomepage{

    static  userName(){
                
    selectorhomepage.getUsername().type('saravanakumar.sivan@shell.com',{ log: false });
    
    }
    static continueButton(){
                
         selectorhomepage.getContinue().click();
        
    }
   static  typePassword(){
                
         selectorhomepage.getPassword().type('Sarudt01!',{ log: false });
         
    } 
     static  submitButton(){
                
        selectorhomepage.getSubmit().click();
                    
    } 
    /*static  gettypeText(){
                
        // selectorhomepage.getinputtextjira().type('saravana');
        selectorhomepage.getinputtextjira().click();
                    
    }  */
    
}
    export default  flowhomepage

