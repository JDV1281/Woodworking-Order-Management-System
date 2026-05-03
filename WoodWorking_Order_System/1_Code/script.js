// Woodworking Order Management System
// This file handles saving, displaying, updating, and deleting orders.

let orders = JSON.parse(localStorage.getItem("woodworkingOrders")) || [];

const orderForm = document.getElementById("orderForm");
const ordersTableBody = document.getElementById("ordersTableBody");
const errorMessage = document.getElementById("errorMessage");
const totalOrders = document.getElementById("totalOrders");
const totalBalance = document.getElementById("totalBalance");

orderForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const customerName = document.getElementById("customerName").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const email = document.getElementById("email").value.trim();
    const projectType = document.getElementById("projectType").value.trim();
    const projectDescription = document.getElementById("projectDescription").value.trim();
    const estimatedCost = parseFloat(document.getElementById("estimatedCost").value);
    const amountPaid = parseFloat(document.getElementById("amountPaid").value);
    const dueDate = document.getElementById("dueDate").value;
    const orderStatus = document.getElementById("orderStatus").value;

    if (
        customerName === "" ||
        projectType === "" ||
        isNaN(estimatedCost) ||
        isNaN(amountPaid) ||
        dueDate === "" ||
        orderStatus === ""
    ) {
        errorMessage.textContent = "Please fill in all required fields before saving the order.";
        return;
    }

    if (estimatedCost < 0 || amountPaid < 0) {
        errorMessage.textContent = "Cost and payment amounts cannot be negative.";
        return;
    }

    if (amountPaid > estimatedCost) {
        errorMessage.textContent = "Amount paid cannot be more than the estimated cost.";
        return;
    }

    const balanceDue = estimatedCost - amountPaid;

    const newOrder = {
        orderId: Date.now(),
        customerName: customerName,
        phone: phone,
        email: email,
        projectType: projectType,
        projectDescription: projectDescription,
        estimatedCost: estimatedCost,
        amountPaid: amountPaid,
        balanceDue: balanceDue,
        dueDate: dueDate,
        orderStatus: orderStatus,
        dateCreated: new Date().toLocaleDateString()
    };

    orders.push(newOrder);
    saveOrders();
    displayOrders();

    orderForm.reset();
    errorMessage.textContent = "";
});

function saveOrders() {
    localStorage.setItem("woodworkingOrders", JSON.stringify(orders));
}

function displayOrders() {
    ordersTableBody.innerHTML = "";

    orders.forEach(function(order) {
        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${order.customerName}</td>
            <td>${order.projectType}</td>
            <td>${order.dueDate}</td>
            <td>
                <select onchange="updateOrderStatus(${order.orderId}, this.value)">
                    <option value="Requested" ${order.orderStatus === "Requested" ? "selected" : ""}>Requested</option>
                    <option value="Approved" ${order.orderStatus === "Approved" ? "selected" : ""}>Approved</option>
                    <option value="In Progress" ${order.orderStatus === "In Progress" ? "selected" : ""}>In Progress</option>
                    <option value="Completed" ${order.orderStatus === "Completed" ? "selected" : ""}>Completed</option>
                    <option value="Delivered" ${order.orderStatus === "Delivered" ? "selected" : ""}>Delivered</option>
                </select>
            </td>
            <td>$${order.balanceDue.toFixed(2)}</td>
            <td>
                <button class="action-button delete-button" onclick="deleteOrder(${order.orderId})">Delete</button>
            </td>
        `;

        ordersTableBody.appendChild(row);
    });
	
	updateSummary();
}

function updateOrderStatus(orderId, newStatus) {
    orders = orders.map(function(order) {
        if (order.orderId === orderId) {
            order.orderStatus = newStatus;
        }
        return order;
    });

    saveOrders();
    displayOrders();
}

function deleteOrder(orderId) {
    const confirmDelete = confirm("Are you sure you want to delete this order?");

    if (confirmDelete) {
        orders = orders.filter(function(order) {
            return order.orderId !== orderId;
        });

        saveOrders();
        displayOrders();
    }
}

function updateSummary() {
    totalOrders.textContent = orders.length;

    let balanceTotal = 0;

    orders.forEach(function(order) {
        balanceTotal += order.balanceDue;
    });

    totalBalance.textContent = balanceTotal.toFixed(2);
}

displayOrders();