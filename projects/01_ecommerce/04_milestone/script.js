
// Add a product to the product list
function addProduct(name, price, quantity) {
    const productList = document.getElementById("product-list");
    const li = document.createElement("li");
    li.textContent = `${name}: $${price} x ${quantity}`;
    
    // Add a remove button
    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";
    removeBtn.addEventListener("click", () => {
        li.remove();
        updateTotals();
    });
    li.appendChild(removeBtn);
    productList.appendChild(li);

    updateTotals();
}

// Update totals and discounts
function updateTotals() {
    let total = 0;
    document.querySelectorAll("#product-list li").forEach(product => {
        const [name, priceQuantity] = product.textContent.split(": $");
        const [price, quantity] = priceQuantity.split(" x ").map(Number);
        total += price * quantity;
    });

    const discount = total > 50 ? total * 0.1 : 0;
    const finalTotal = total - discount;

    document.getElementById("total-display").textContent = `Total: $${total.toFixed(2)}`;
    document.getElementById("discount-display").textContent = `Discount: $${discount.toFixed(2)}`;
    document.getElementById("final-total-display").textContent = `Final Total: $${finalTotal.toFixed(2)}`;
}

// Reset the dashboard
document.getElementById("reset-dashboard").addEventListener("click", () => {
    document.getElementById("product-list").innerHTML = "";
    updateTotals();
});

// Handle adding a new product
document.getElementById("add-product").addEventListener("click", () => {
    const name = document.getElementById("product-name").value.trim();
    const price = parseFloat(document.getElementById("product-price").value);
    const quantity = parseInt(document.getElementById("product-quantity").value);

    if (!name || price <= 0 || quantity <= 0) {
        alert("Please enter valid product details.");
        return;
    }

    addProduct(name, price, quantity);

    // Clear input fields
    document.getElementById("product-name").value = "";
    document.getElementById("product-price").value = "";
    document.getElementById("product-quantity").value = "";
});
