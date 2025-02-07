
# **Week 1: Variables and Operators – Code Guide**

## **Introduction**
Welcome to your first JavaScript project! In this task, you will build the foundation of an **e-commerce store**. The **HTML file** acts as the storefront, displaying products and basic information, while the **JavaScript file** becomes the engine that calculates totals, applies discounts, and updates the webpage dynamically.

This guide explains what’s happening in the code files (`index.html` and `script.js`) to help you understand the structure and logic behind the project.

---

## **What’s Happening in index.html?**
The `index.html` file is the blueprint of your store’s structure. It defines the layout and content that users see when they visit the page. Here's what each part of the file represents:

1. **The Header**:
   - The `<header>` tag is like the store’s signboard—it displays the store name to grab attention.
   - Example:
     ```html
     <header>
         <h1>My E-Commerce Store</h1>
     </header>
     ```

2. **The Main Section**:
   - The `<main>` tag holds the list of products. Each `<li>` (list item) represents a product, just like items displayed on a physical store shelf.
   - Example:
     ```html
     <ul id="product-list">
         <li>Product 1: $10</li>
         <li>Product 2: $20</li>
         <li>Product 3: $15</li>
     </ul>
     ```

3. **The Footer**:
   - The `<footer>` is the equivalent of the contact details or “About Us” section at the bottom of a webpage.
   - Example:
     ```html
     <footer>
         <p>Contact us: info@myecommercestore.com</p>
     </footer>
     ```

4. **Connecting JavaScript**:
   - The `<script>` tag links the `script.js` file, which brings the store to life by calculating totals and dynamically updating the page.
   - Example:
     ```html
     <script src="script.js"></script>
     ```

---

## **What’s Happening in script.js?**
If `index.html` is the store's structure, then `script.js` is the **cash register** that handles all the behind-the-scenes logic. Here’s a breakdown of the JavaScript:

### **1. Storing Product Data**
In `script.js`, we define three products as objects, each with a name, price, and quantity. Objects group related information, like a product’s details.

**Example Code**:
```javascript
const product1 = { name: "Product 1", price: 10, quantity: 2 };
const product2 = { name: "Product 2", price: 20, quantity: 1 };
const product3 = { name: "Product 3", price: 15, quantity: 3 };
```

**Why Objects?**
Objects let you package related data together. Instead of managing separate variables for price and quantity, you bundle them into one logical “box.”

---

### **2. Performing Calculations**
This is where the logic of the “cash register” starts working:
1. **Calculating Totals**:
   - Each product’s total cost is calculated as `price × quantity`.
   - Example:
     ```javascript
     const total1 = product1.price * product1.quantity;
     ```

2. **Grand Total and Discount**:
   - All product totals are summed up to get the grand total.
   - If the grand total exceeds $50, a 10% discount is applied using a conditional statement.
   - Example:
     ```javascript
     const discount = grandTotal > 50 ? grandTotal * 0.1 : 0;
     ```

---

### **3. Logging Outputs**
Just like a receipt prints out the breakdown of your purchase, `console.log` displays the calculations for debugging and understanding the logic.

**Example Code**:
```javascript
console.log(`Total for ${product1.name}: $${total1}`);
console.log(`Grand Total: $${grandTotal}`);
console.log(`Discount: $${discount}`);
console.log(`Final Total: $${finalTotal}`);
```

---

### **4. Dynamic Updates**
Instead of showing a static page, JavaScript dynamically updates the webpage with calculations. Using `document.write`, results are added to the HTML.

**Example Code**:
```javascript
document.write(`<h2>Order Summary</h2>`);
document.write(`<p>Total for ${product1.name}: $${total1}</p>`);
document.write(`<p>Grand Total: $${grandTotal}</p>`);
document.write(`<p>Discount: $${discount}</p>`);
document.write(`<p>Final Total: $${finalTotal}</p>`);
```

---
