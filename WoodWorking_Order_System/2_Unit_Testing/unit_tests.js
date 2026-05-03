// Unit test examples for Woodworking Order Management System

function calculateBalance(estimatedCost, amountPaid) {
    return estimatedCost - amountPaid;
}

function isValidPayment(estimatedCost, amountPaid) {
    return estimatedCost >= 0 && amountPaid >= 0 && amountPaid <= estimatedCost;
}

function hasRequiredFields(order) {
    return (
        order.customerName !== "" &&
        order.projectType !== "" &&
        order.dueDate !== "" &&
        order.orderStatus !== ""
    );
}

// Test 1: Balance calculation
console.log("Test 1 - Balance Calculation");
console.log(calculateBalance(1200, 300) === 900 ? "Passed" : "Failed");

// Test 2: Payment validation
console.log("Test 2 - Payment Validation");
console.log(isValidPayment(1200, 300) === true ? "Passed" : "Failed");

// Test 3: Negative payment validation
console.log("Test 3 - Negative Payment Validation");
console.log(isValidPayment(1200, -50) === false ? "Passed" : "Failed");

// Test 4: Amount paid can't be more than estimated cost
console.log("Test 4 - Overpayment Validation");
console.log(isValidPayment(500, 700) === false ? "Passed" : "Failed");

// Test 5: Required fields validation
console.log("Test 5 - Required Fields Validation");

const sampleOrder = {
    customerName: "John Smith",
    projectType: "Dining Table",
    dueDate: "2026-05-01",
    orderStatus: "In Progress"
};

console.log(hasRequiredFields(sampleOrder) === true ? "Passed" : "Failed");