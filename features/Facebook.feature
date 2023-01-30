Feature: As a facebook customer, I want to be able to navigate to facebook's homepage

@Facebook @Login
Scenario: Successful Login with Valid entries
Given I am on the website "facebook.com" 
When I click on Login link
And I enter username as "maha@yahoo.com"
And I enter password as "12345"
Then I should see "LoginHeader"
