Feature:Login

Background: 
Given the user is on register page of demo web shop
When the user click login

Scenario Outline: login to the demo web shop
And enter the valid details of the user from "<data>"
Then user should should be displayed with respective page "<data>"

Examples:
|data | 
|valid |
|invalid |