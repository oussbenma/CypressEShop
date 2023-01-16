Feature: Login

    Scenario Outline: : Login Test
        Given I access the login page
        When I enter a username <username>
        And I enter a password <password>
        And I click on the login button
        Then I see an alert message <message>
        

        Examples:
            | username                              | password   | message                                               |
            | test-automation-deichmann@yopmail.com | 'Test1234' | 'Deine Anmeldung war erfolgreich. Willkommen zurück!' |
            | test-automation-deichmann@yopmail.com | 'Test1235' | 'Bitte überprüfe deine Eingaben' |
  


            