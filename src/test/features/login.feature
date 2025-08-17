Feature: login


Scenario: Logins
Given I have accessed the Swag Lab Login Page
When a user enters the username "standard_user", the password "secret_sauce", and clicks on login button
Then I should Navigate to the Product Page
And I Add Two products to the basket
And I Click on the Shopping Cart to view the Basket
Then I should see 2 products in the basket
And I Click on Checkout button
Then I should Navigate to the Checkout Page
And I Enter the Checkout Information
|FNAME|LNAME|ZIPCODE|
|Owen |Olaye|M24 6XS|
 And Click On the Continue Button
 And Click on Finish Button




      