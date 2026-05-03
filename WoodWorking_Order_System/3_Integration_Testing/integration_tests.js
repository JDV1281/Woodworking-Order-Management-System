// Integration test examples for Woodworking Order Management System

let testOrders = [];

function saveTestOrder(order) {
    testOrders.push(order);
    localStorage.setItem("testWoodworkingOrders", JSON.stringify(testOrders));
}

function getTestOrders() {
    return JSON.parse(localStorage.getItem("testWoodworkingOrders")) || [];
}

function updateTestOrderStatus(orderId, newStatus) {
    testOrders = testOrders.map(function(order) {
        if (order.orderId === orderId) {
            order.orderStatus = newStatus;
        }
        return order;
    });

    localStorage.setItem("testWoodworkingOrders", JSON.stringify(testOrders));
}

function deleteTestOrder(orderId) {
    testOrders = testOrders.filter(function(order) {
        return order.orderId !== orderId;
    });

    localStorage.setItem("testWoodworkingOrders", JSON.stringify(testOrders));
}

// Previous test data
localStorage.removeItem("testWoodworkingOrders");

// Test 1: Add and save order
console.log("Test 1 - Add and Save Order");

const sampleOrder = {
    orderId: 1,
    customerName: "John Smith",
    projectType: "Dining Table",
    estimatedCost: 1200,
    amountPaid: 300,
    balanceDue: 900,
    dueDate: "2026-05-01",
    orderStatus: "In Progress"
};

saveTestOrder(sampleOrder);

console.log(getTestOrders().length === 1 ? "Passed" : "Failed");

// Test 2: Update order status
console.log("Test 2 - Update Order Status");

updateTestOrderStatus(1, "Completed");

console.log(getTestOrders()[0].orderStatus === "Completed" ? "Passed" : "Failed");

// Test 3: Delete order
console.log("Test 3 - Delete Order");

deleteTestOrder(1);

console.log(getTestOrders().length === 0 ? "Passed" : "Failed");