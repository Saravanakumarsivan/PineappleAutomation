Feature: As a user I need to validate Login function for Pineapple Agile board

    Scenario: Validating Pineapple Agile board
    Given As a user I need to navigate Jira Pineapple Agile board
    When  I enter the user name
    And  I click on the continue button
    And I enter my password
    And I click on the  submit button
    Then I can see the Pineapple Agile board for the team sucessfully
    
