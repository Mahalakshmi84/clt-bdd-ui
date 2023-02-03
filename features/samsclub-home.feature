Feature: As a samsclub customer, I want to be able to navigate to samsclub's homepage

@Samsclub @SignIn
Scenario: Customer is displayed with samsclub.com landing page
Given I am on the samsclub website
When I click on "signin" link
Then I should get "signinheader"

@SamsclubValidCredentials @success
Scenario: Customer is displayed with samsclub.com landing page
Given I am on the samsclub website
When I click on "signin" link
And I enter the signin inputs
            | InputName | InputValue |
            | username  | muthuvel76@yahoo.com |
            | password  | Yamaha@76 |
And I click "signinbutton"
Then I should receive "welcomemessage"

