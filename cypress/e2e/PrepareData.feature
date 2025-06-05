Feature: Create Test plan
    Feature Description

    Rule: Create Master data
        Background: User in Admin
            When User click 'Admin' page

        # Scenario: Clean old data of Test plan
        #     When User click 'Bank' page
        #     When Click 'Test plan bank' card
        #     And Search 'auto' in 'Search by Test plan code' searchbox
        #     And Deactivate all match items
        #     And Filter Inactive status
        #     And Delete and confirm in Bank
        #     Then Check the successful message 'The selected test plans were deleted successfully.'
        # Scenario: Clean old data of Item bank code
        #     When Click 'Item bank configuration' card
        #     And Search 'auto' in 'Search by Item bank code' searchbox
        #     And Deactivate all match items
        #     And Filter Inactive status
        #     And Delete and confirm in Admin
        #     Then Check the successful message 'Successfully deleted the item bank.'
        # Scenario: Clean old data of Component
        #     When Click 'Master data' card
        #     And Click 'Component' link
        #     And Search 'auto' in 'Search by Component code' searchbox
        #     And Deactivate all match items
        #     And Filter Inactive status
        #     And Delete and confirm in Admin
        #     Then Check the successful message 'Successfully deleted the component.'
        Scenario: Create Component code
            When Click 'Master data' card
            And Click 'Component' link
            And Click 'Create' button
            And Enter 'Component code' input
            And Select Category
            And Enter 'Description' textarea
            And Click 'Save' button
            Then Check the created record in Component table
        Scenario: Create Item bank code
            When Click 'Item bank configuration' card
            And Click 'Create' button
            And Select Primary code
            And Select Component
            And Click 'Save' button
            Then Check the created record in Item bank table