
# **Week 2: Control Flow and Functions – Lesson Guide**

## **Overview**
In Week 2, you’ll enhance your e-commerce store by introducing **control flow** and **functions**. These concepts allow you to create dynamic and interactive applications by making decisions and automating repetitive tasks. You will learn to use conditional statements, loops, and functions to handle logic efficiently.

---

## **Learning Objectives**
1. **Understand Control Flow**:
   - Use conditional statements (`if`, `else`, `else if`) to make decisions in your code.
   - Apply logical operators (`&&`, `||`, `!`) to combine conditions.

2. **Explore Loops**:
   - Use loops (`for`, `while`, `do...while`) to repeat tasks efficiently.
   - Understand how to iterate over arrays and objects.

3. **Master Functions**:
   - Learn to define and call functions.
   - Pass arguments and return values from functions.
   - Understand the importance of reusable and modular code.

4. **Combine Concepts**:
   - Use functions and control flow together to create dynamic behaviors, such as calculating totals based on user input.

---

## **Why Learn These Concepts?**
Control flow is like a set of traffic lights guiding the flow of a busy intersection—it decides when and how code should run. Functions are the reusable blocks of logic that simplify your code and prevent redundancy, like pre-built tools for specific tasks. Together, they make your code smarter, faster, and more adaptable.

---

## **Project Requirements**
1. **HTML Updates**:
   - Add input fields for product quantities to allow user interaction.
   - Include a button to calculate totals dynamically.

2. **JavaScript Enhancements**:
   - Use `prompt` or input fields to collect user quantities for each product.
   - Implement **control flow** to validate user input (e.g., ensure it’s a positive number).
   - Write reusable **functions** to calculate totals and apply discounts.

3. **Dynamic Outputs**:
   - Display totals and discounts dynamically on the page.

---

## **Steps to Complete**

### **1. Update the HTML**
- Add input fields for each product quantity and a button to trigger the calculation.

**Example Code**:
```html
<ul id="product-list">
    <li>
        Product 1: $10
        <input type="number" id="quantity1" min="0" value="0">
    </li>
    <li>
        Product 2: $20
        <input type="number" id="quantity2" min="0" value="0">
    </li>
    <li>
        Product 3: $15
        <input type="number" id="quantity3" min="0" value="0">
    </li>
</ul>
<button id="calculate">Calculate Totals</button>
```

---

### **2. Write JavaScript Logic**
- Use **control flow** to validate user input:
  - Ensure quantities are non-negative numbers.
  - If invalid input is detected, display an error message.

**Example Code**:
```javascript
function validateQuantity(quantity) {
    if (quantity < 0) {
        alert("Quantity cannot be negative.");
        return false;
    }
    return true;
}
```

- Use **loops** to iterate over multiple products and calculate totals.

**Example Code**:
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

- Use a **function** to apply discounts if the total exceeds a threshold.

**Example Code**:
```javascript
function applyDiscount(total) {
    return total > 50 ? total * 0.9 : total;
}
```

---

### **3. Combine and Display Results**
- Calculate totals, apply discounts, and update the webpage dynamically.

**Example Code**:
```javascript
document.getElementById("calculate").addEventListener("click", () => {
    const prices = [10, 20, 15];
    const quantities = [
        parseInt(document.getElementById("quantity1").value),
        parseInt(document.getElementById("quantity2").value),
        parseInt(document.getElementById("quantity3").value)
    ];
    const total = calculateTotal(prices, quantities);
    const finalTotal = applyDiscount(total);

    document.write(`<p>Grand Total: $${total.toFixed(2)}</p>`);
    document.write(`<p>Final Total after Discount: $${finalTotal.toFixed(2)}</p>`);
});
```

---

## **Expected Output**
1. Users can input quantities for products.
2. Totals and discounts are calculated dynamically and displayed on the page.
3. Invalid inputs trigger an error message.

---

## **Bonus Challenge**
1. Allow users to reset quantities using a "Reset" button.
2. Add a feature to highlight products with the highest total cost.

---

## **Resources**
1. **Control Flow**: [MDN Web Docs - Control Flow](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling)
2. **Loops**: [JavaScript.info - Loops](https://javascript.info/while-for)
3. **Functions**: [MDN Web Docs - Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions)
4. **Event Handling**: [JavaScript.info - Events](https://javascript.info/events)

---
