Feature: DSA page

  @regression
  Scenario Outline: User searches for a DSA problem
    Given I am on the TakeUForward homepage
    When I navigate to the DSA page
    And I search for "<problem>"
    Then the "<problem>" search result should be displayed

    Examples:
      | problem                  |
      | Two Sum                  |
      | Search X in sorted array |

 

  @smoke
  Scenario: DSA page has search box
    Given I am on the TakeUForward homepage
    When I navigate to the DSA page
    Then the DSA search box should be displayed