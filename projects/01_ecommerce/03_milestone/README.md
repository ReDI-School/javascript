
# **Week 3: DOM Basics – Code Guide**

## **Introduction**
In this project, you enhanced your e-commerce store by learning how to manipulate the **Document Object Model (DOM)**. Using JavaScript, you dynamically updated the content, handled user interactions, and applied animations to create a more engaging user experience.

This guide explains the key aspects of the code in `index.html` and `script.js`.

---

## **What’s Happening in index.html?**
The `index.html` file now includes placeholders for dynamic content and additional buttons for interactivity.

1. **Adding a Summary Section**:
   - A `<section>` element was added to display the order summary, including totals, discounts, and the final total.
   - Example:
     ```html
     <section id="summary">
         <h2>Order Summary</h2>
         <p id="total-display">Total: $0.00</p>
         <p id="discount-display">Discount: $0.00</p>
         <p id="final-total-display">Final Total: $0.00</p>
     </section>
     ```

2. **Adding Buttons**:
   - Buttons for resetting quantities and highlighting totals were included.
   - Example:
     ```html
     <button id="reset">Reset Quantities</button>
     <button id="animate">Highlight Total</button>
     ```

3. **Connecting JavaScript**:
   - The `<script>` tag links the `script.js` file, which implements the dynamic logic.
   - Example:
     ```html
     <script src="script.js"></script>
     ```

---

## **What’s Happening in script.js?**
The `script.js` file implements the core logic for DOM manipulation, event handling, and animations.

### **1. Validating Input**
A function ensures that user inputs are valid (non-negative numbers).

**Code Example**:
```javascript
function validateQuantity(quantity) {
    return quantity >= 0;
}
```

### **2. Calculating Totals**
A reusable function iterates through product prices and user-provided quantities to calculate the total cost.

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
If the total exceeds $50, a 10% discount is applied. This logic is encapsulated in a reusable function.

**Code Example**:
```javascript
function applyDiscount(total) {
    return total > 50 ? total * 0.9 : total;
}
```

### **4. Resetting Quantities**
A button resets all input fields and clears the summary.

**Code Example**:
```javascript
document.getElementById("reset").addEventListener("click", () => {
    document.querySelectorAll("input[type='number']").forEach(input => {
        input.value = 0;
    });
    document.getElementById("total-display").textContent = "Total: $0.00";
    document.getElementById("discount-display").textContent = "Discount: $0.00";
    document.getElementById("final-total-display").textContent = "Final Total: $0.00";
});
```

### **5. Highlighting Totals**
A button toggles a highlight animation on the total display.

**Code Example**:
```javascript
document.getElementById("animate").addEventListener("click", () => {
    const totalDisplay = document.getElementById("total-display");
    totalDisplay.classList.add("highlight");
    setTimeout(() => totalDisplay.classList.remove("highlight"), 1000);
});
```

### **6. Dynamic Updates**
The webpage dynamically updates totals, discounts, and final totals based on user input.

**Code Example**:
```javascript
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
```

---

## **Summary**
1. **index.html**:
   - Includes a summary section to display totals dynamically.
   - Adds buttons for resetting quantities and highlighting totals.

2. **script.js**:
   - Implements input validation, dynamic updates, and animations.
   - Uses event listeners to handle user interactions.

---
