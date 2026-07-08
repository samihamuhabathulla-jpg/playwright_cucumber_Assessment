@Login
Feature: Login Functionality

  Background:
    Given User launches the Demo Web Shop login page

  Scenario Outline: Verify login with multiple credentials
    When User logs in with "<email>" and "<password>"
    Then Login should be "<result>"

    Examples:
      | email                    | password    | result  |
      | samiha2@gmail.com        | Samiha@2005 | success |
      | user@gmail.com           | Samiha@2005 | failure |
      | samiha2@gmail.com        | sami@123    | failure |