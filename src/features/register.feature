@register
Feature: User Registration

  Scenario: Register a new user

    Given User opens the Demo Web Shop registration page
    When User registers using CSV data
   Then Registration should be successfull