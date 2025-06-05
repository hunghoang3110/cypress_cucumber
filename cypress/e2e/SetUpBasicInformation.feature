Feature: Create Test plan
    Feature Description

    Rule: Set up basic information
        Background: User in Step 1
            When User click 'Authoring' page
            And Click 'Test plan bank' card
            And Click 'Create' button

        Scenario: Validation mandatory fields
            When Click 'Save and next' button
            Then Check the validation message 'Select an item bank code.'
            And Check the validation message 'Enter the test plan code.'
            And Check the validation message 'Enter the duration.'
        
        Scenario: Create a new test plan
            When Select Item Bank Code
            And Enter Duration
            And Click 'Save and close' button
            And Search by Test plan code
            Then Check the created record in cell '1,2'