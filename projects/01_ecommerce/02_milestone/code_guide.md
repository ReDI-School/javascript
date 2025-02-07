
# **Week 2: Control Flow and Functions – Code Guide**

## **Introduction**
In this project, you expanded the functionality of your e-commerce store by introducing **control flow** and **functions**. The HTML structure now includes input fields for product quantities, and the JavaScript logic dynamically calculates totals, validates user input, and applies discounts based on specified conditions.

This guide explains the key aspects of the code in `index.html` and `script.js`.

---

## **What’s Happening in index.html?**
The `index.html` file serves as the structure of the e-commerce store, with updates to include user input and interaction capabilities.

1. **Adding Input Fields**:
   - Each product now has an associated input field for the user to specify the quantity they wish to purchase.
   - Example:
     ```html
     <li>
         Product 1: $10
         <input type="number" id="quantity1" min="0" value="0">
     </li>
     ```

2. **Adding a Button**:
   - A button is included to trigger the calculation logic when clicked.
   - Example:
     ```html
     <button id="calculate">Calculate Totals</button>
     ```

3. **Connecting JavaScript**:
   - The `<script>` tag links the JavaScript file (`script.js`) that handles all calculations and dynamic updates.
   - Example:
     ```html
     <script src="script.js"></script>
     ```

---

## **What’s Happening in script.js?**
The `script.js` file implements the core logic for calculating totals, validating inputs, and dynamically updating the webpage.

### **1. Validating User Input**
To ensure that quantities are valid (non-negative numbers), a validation function checks each input.

**Code Example**:
```javascript
function validateQuantity(quantity) {
    if (quantity < 0) {
        alert("Quantity cannot be negative. Please enter a valid number.");
        return false;
    }
    return true;
}
```

### **2. Calculating Totals**
A reusable function iterates through the product prices and user-provided quantities to calculate the total cost.

**Code Example**:
```javascript
function calculateTotal(prices, quantities) {
    let total = 0;
    for (let i = 0; i < prices.length; i++) {
        if (validateQuantity(quantities[i])) {
            total += prices[i] * quantities[i];
        }
    }
    return total;
}
```

### **3. Applying Discounts**
If the total exceeds $50, a discount of 10% is applied. This logic is encapsulated in a function for reusability.

**Code Example**:
```javascript
function applyDiscount(total) {
    return total > 50 ? total * 0.9 : total;
}
```

### **4. Combining Results**
The script gathers inputs from the HTML, calculates the totals, and updates the webpage dynamically when the "Calculate" button is clicked.

**Code Example**:
```javascript
document.getElementById("calculate").addEventListener("click", () => {
    const prices = [10, 20, 15];
    const quantities = [
        parseInt(document.getElementById("quantity1").value) || 0,
        parseInt(document.getElementById("quantity2").value) || 0,
        parseInt(document.getElementById("quantity3").value) || 0
    ];

    const total = calculateTotal(prices, quantities);
    const finalTotal = applyDiscount(total);

    document.body.innerHTML += `<h2>Order Summary</h2>`;
    document.body.innerHTML += `<p>Grand Total: $${total.toFixed(2)}</p>`;
    document.body.innerHTML += `<p>Final Total after Discount: $${finalTotal.toFixed(2)}</p>`;
});
```

---

## **Summary**
1. **index.html**:
   - Includes input fields for user interaction.
   - Adds a button to trigger JavaScript calculations.

2. **script.js**:
   - Implements validation, calculations, and discounts.
   - Uses functions for modular and reusable logic.
   - Dynamically updates the page with totals and final results.

---
