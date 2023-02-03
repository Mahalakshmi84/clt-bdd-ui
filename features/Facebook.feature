Feature: As a facebook customer, I want to be able to navigate to facebook's homepage

@Facebook @login
Scenario: Successful login with Valid entries
Given I am on the Facebook portal
When I enter the inputs for login
            | InputName | InputValue          |
            | username  | rameshsct@gmail.com |
            | password  | Hariom*123          |
And I click on "login"
# Then I should see "LoginHeader"

