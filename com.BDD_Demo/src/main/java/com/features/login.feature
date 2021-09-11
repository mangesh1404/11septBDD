Feature: JBK offline application test

@login
Scenario: login test

Given user should be on login page
When  user enters username
And   user enters password
And   user clicks login button
Then  user will be on dashboard page

@logo
Scenario: verify a JBK logo

Given user should be on login page
Then  user should see a jbk logo




@invalidLogin
Scenario Outline: login test with multiple data

Given user should be on login page
When user enters "<uname>" and "<pass>"
Then user will verify "<title>"
And  user will capture error message


Examples:
|uname|pass|title|
|kiran@gmail.com  |123456| Dashboard |
|mangesh@gmail.com|1234567| Log in    |
|neelam@gmail.com |asdfgh| Log in    |



