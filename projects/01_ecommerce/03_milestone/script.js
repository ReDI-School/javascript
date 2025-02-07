
// Validate the quantity input
function validateQuantity(quantity) {
    return quantity >= 0;
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

// Reset quantities and summary
document.getElementById("reset").addEventListener("click", () => {
    document.querySelectorAll("input[type='number']").forEach(input => {
        input.value = 0;
    });
    document.getElementById("total-display").textContent = "Total: $0.00";
    document.getElementById("discount-display").textContent = "Discount: $0.00";
    document.getElementById("final-total-display").textContent = "Final Total: $0.00";
});

// Highlight total display
document.getElementById("animate").addEventListener("click", () => {
    const totalDisplay = document.getElementById("total-display");
    totalDisplay.classList.add("highlight");
    setTimeout(() => totalDisplay.classList.remove("highlight"), 1000);
});

// Handle quantity updates and summary calculations
document.querySelectorAll("input[type='number']").forEach((input, index) => {
    input.addEventListener("input", () => {
        const prices = [10, 20, 15];
        const quantities = [
            parseInt(document.getElementById("quantity1").value) || 0,
            parseInt(document.getElementById("quantity2").value) || 0,
            parseInt(document.getElementById("quantity3").value) || 0
        ];
        const total = calculateTotal(prices, quantities);
        const finalTotal = applyDiscount(total);

        document.getElementById("total-display").textContent = `Total: $${total.toFixed(2)}`;
        document.getElementById("discount-display").textContent = `Discount: $${(total - finalTotal).toFixed(2)}`;
        document.getElementById("final-total-display").textContent = `Final Total: $${finalTotal.toFixed(2)}`;
    });
});
