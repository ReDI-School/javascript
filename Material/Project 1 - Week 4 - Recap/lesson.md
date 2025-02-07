
# **Week 4: Recap – Lesson Guide**

## **Overview**
In this recap week, you’ll combine everything you’ve learned so far—**variables**, **operators**, **control flow**, **functions**, and **DOM manipulation**—to create an **Interactive E-Commerce Dashboard**. This project consolidates your skills in a practical, rewarding way, building a more advanced and interactive application based on the work from previous weeks.

---

## **Learning Objectives**
1. **Reinforce Core Concepts**:
   - Apply variables, operators, and functions to handle calculations and logic.
   - Use control flow to validate input and manage conditions.

2. **Deepen Understanding of the DOM**:
   - Dynamically add and remove products from the page.
   - Update the interface based on user input.

3. **Integrate Features**:
   - Create a modular and interactive e-commerce dashboard that provides real-time feedback.

---

## **Project Requirements**
1. **Dynamic Product Management**:
   - Allow users to add new products (name, price, and quantity) to the list.
   - Enable users to remove individual products.

2. **Real-Time Calculations**:
   - Automatically calculate totals and discounts when products are added, removed, or updated.

3. **User Interaction**:
   - Reset the entire dashboard with a single button.
   - Highlight totals dynamically when updated.

---

## **Steps to Complete**

### **1. Set Up the HTML**
- Add a section for displaying products, a form for adding new products, and buttons for resetting the dashboard.

**Example Code**:
```html
<section id="product-section">
    <h2>Products</h2>
    <ul id="product-list"></ul>
</section>
<section id="controls">
    <h2>Add a Product</h2>
    <input type="text" id="product-name" placeholder="Product Name">
    <input type="number" id="product-price" placeholder="Price">
    <input type="number" id="product-quantity" placeholder="Quantity">
    <button id="add-product">Add Product</button>
    <button id="reset-dashboard">Reset Dashboard</button>
</section>
<section id="summary">
    <h2>Order Summary</h2>
    <p id="total-display">Total: $0.00</p>
    <p id="discount-display">Discount: $0.00</p>
    <p id="final-total-display">Final Total: $0.00</p>
</section>
```

---

### **2. Write the JavaScript**
- Use functions to add, remove, and update products dynamically.
- Ensure the totals and discounts update in real-time.

#### **Key Features**:
1. **Add a Product**:
   - Validate the input fields (name, price, quantity).
   - Dynamically add a new product to the DOM.

**Example Code**:
```javascript
function addProduct(name, price, quantity) {
    const productList = document.getElementById("product-list");
    const li = document.createElement("li");
    li.textContent = `${name}: $${price} x ${quantity}`;
    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";
    removeBtn.addEventListener("click", () => li.remove());
    li.appendChild(removeBtn);
    productList.appendChild(li);
}
```

2. **Update Totals**:
   - Calculate totals and discounts whenever products are added or removed.

**Example Code**:
```javascript
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
```

3. **Reset Dashboard**:
   - Clear all products and reset totals.

**Example Code**:
```javascript
document.getElementById("reset-dashboard").addEventListener("click", () => {
    document.getElementById("product-list").innerHTML = "";
    updateTotals();
});
```

---

## **Expected Output**
1. Users can dynamically add products to the list and see their totals and discounts update in real-time.
2. Individual products can be removed with a "Remove" button.
3. The dashboard can be reset entirely, clearing all data.

---

## **Bonus Challenge**
1. Add a confirmation dialog before removing products or resetting the dashboard.
2. Highlight the product with the highest total cost.

---

## **Resources**
1. **DOM Manipulation**: [MDN Web Docs - Introduction to the DOM](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction)
2. **Event Handling**: [JavaScript.info - Events](https://javascript.info/events)
3. **JavaScript Functions**: [MDN Web Docs - Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions)

---
