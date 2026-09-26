Feature: TakeUForward homepage
  @smoke
  Scenario: User opens the TakeUForward website
    Given I am on the TakeUForward homepage
    Then the TakeUForward homepage should be displayed
    And the main heading should be visible
 
 @smoke
  Scenario: User navigates to DSA page
    Given I am on the TakeUForward homepage
    When I navigate to the DSA page
    Then the DSA page should be displayed

@regression
  Scenario: User searches for a DSA problem
    Given I am on the TakeUForward homepage
    When I navigate to the DSA page
    And I search for "Two Sum"
    Then the search result should be displayed