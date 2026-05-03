Woodworking Order Management System: Unit Testing Folder

This folder contains unit testing information for the Woodworking Order Management System. 
Unit testing is used to check smaller parts of the system to make sure that they work on their own.

The unit tests focus on these areas:

- Balance calculation: This test checks that the system correctly subtracts the amount paid from the estimated cost.
- Required field validation: This test checks that an order cannot be saved if important fields are missing.
- Payment validation: This test checks that estimated cost and amount paid are valid numbers and are not negative.
- Status validation: This test checks that an order has a valid order status before being saved.

Files included:

- unit_tests.js: This file contains simple JavaScript test examples for the main system logic.

Notes:

- These tests are meant to show how the smaller parts of the system can be checked before testing the whole application together.