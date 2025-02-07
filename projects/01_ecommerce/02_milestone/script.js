
// Validate the quantity input
function validateQuantity(quantity) {
    if (quantity < 0) {
        alert("Quantity cannot be negative. Please enter a valid number.");
        return false;
    }
    return true;
}

// Calculate total for products
function calculateTotal(prices, quantities) {
    let total = 0;
    for (let i = 0; i < prices.length; i++) {
        if (validateQuantity(quantities[i])) {
            total += prices[i] * quantities[i];
        }
    }
    return total;
}

// Apply discount if total exceeds the threshold
function applyDiscount(total) {
    return total > 50 ? total * 0.9 : total;
}

// Handle the calculation logic when the button is clicked
document.getElementById("calculate").addEventListener("click", () => {
    const prices = [10, 20, 15];
    const quantities = [
        parseInt(document.getElementById("quantity1").value) || 0,
        parseInt(document.getElementById("quantity2").value) || 0,
        parseInt(document.getElementById("quantity3").value) || 0
    ];

    const total = calculateTotal(prices, quantities);
    const finalTotal = applyDiscount(total);

    // Display results dynamically
    document.body.innerHTML += `<h2>Order Summary</h2>`;
    document.body.innerHTML += `<p>Grand Total: $${total.toFixed(2)}</p>`;
    document.body.innerHTML += `<p>Final Total after Discount: $${finalTotal.toFixed(2)}</p>`;
});
