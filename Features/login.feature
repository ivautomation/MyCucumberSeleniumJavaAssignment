Feature: Login

Scenario: successful login with valid credentials
Given user launch browser
When user enters url "https://admin-demo.nopcommerce.com/login"
Then user enters "admin@yourstore.com" and Password "admin"
Then click on loginBtn
Then page title display "Dashboard / nopCommerce administration"
Then click on logoutLink
Then page title display "Your store. Login"
And close browser


