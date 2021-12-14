import { Given,When,Then} from "cypress-cucumber-preprocessor/steps";

import flowhomepage from "../../flows/flowshomepage"



Given('As a user I need to navigate Jira Pineapple Agile board',function()
{
    cy.visit(Cypress.env('url'))
    //console.log(URL)

})

//When I enter the url

When ('I enter the user name',function()
{
    flowhomepage.userName();
    
})
And ('I click on the continue button',function()
{
    flowhomepage.continueButton();
})
And ('I enter my password',function()
{
   
    flowhomepage.typePassword();
})
And ('I click on the  submit button',function()
{
    flowhomepage.submitButton();
})
Then ('I can see the Pineapple Agile board for the team sucessfully',function()

{
    cy.log('login success');
   

})


//Then I can see an overview of the Mass Balances of The Netherlands
/*
And ('I can see the search results for my name',function()
{
    
    flowhomepage.gettypeText();

})*/