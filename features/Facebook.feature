Feature: As a Facebook customer, I want to be able to navigate to Facebook's homepage

    @Facebook @test
    Scenario: Verification successful registration when the inputs are correct
        Given I am on the user registration page
        When I enter a valid user name 
        And valid e-mail address
        And valid password
        And valid confirmation password
        And valid birth-date
        And I enter Gender
        And valid phone number
        Then I should see registration successful

    @Facebook @test
    Scenario: Succeddful Login with Valid entries
        Given I navigates to the website facebook.com
        And I enter username as "maha@yahoo.com"
        And I enter password as "12345"
        And I click on "Login Button"
        Then login must be successful

    @Facebook @test
    Scenario: Unsucceddful Login with Invalid entries
        Given I navigates to the website facebook.com
        And I enter username as "maha@yahoo.com"
        And I enter password as "12345"
        And I click on "Login Button"
        Then I should see "error Message"
