Woodworking Order Management System: Integration Testing Folder

This folder contains integration testing information for the Woodworking Order Management System. 
Integration testing is used to make sure the different parts of the system work together correctly.

The integration tests focus on these areas:

- Adding and saving an order: This test checks that the form information can be entered, validated, saved to localStorage, and displayed in the saved orders table.
- Updating an order status: This test checks that the user can change an order status and that the new status stays saved.
- Deleting an order: This test checks that an order can be removed from the saved order list.
- Refreshing the page: This test checks that saved orders are still available after the browser page is refreshed.

Files included:

- integration_tests.js: This file contains JavaScript test examples for checking how the main system parts work together.

Notes:

- These tests are meant to show that the form, JavaScript logic, localStorage, and display table are all working together as one system.