Feature: A Google search

  Scenario: Search for Cats
    When I search for cats
    Then I see "cats" in the search results