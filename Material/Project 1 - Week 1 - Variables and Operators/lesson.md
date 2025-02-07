# **Week 1: Variables and Operators – Lesson Guide**

## **Overview**

In this project, you will lay the foundation for a basic **e-commerce store** using **JavaScript**. By the end of this lesson, you’ll understand how to store and manipulate data using variables and operators, the building blocks of any program. Think of variables as labeled "storage boxes" where we keep data, and operators as the "tools" we use to modify or work with that data.

---

## **Learning Objectives**

1. **Understand Variables**:

   - Learn how to declare variables to store data.
   - Differentiate between `let`, `const`, and `var` for declaring variables.
   - Explore common data types: strings, numbers, and objects.

2. **Explore Operators**:

   - Use arithmetic operators (`+`, `-`, `*`, `/`) for calculations.
   - Understand assignment operators (`=`, `+=`) for updating values.
   - Learn comparison operators (`>`, `<`, `===`) to evaluate conditions.

3. **Combine Data Dynamically**:

   - Use **template literals** to create strings that incorporate variables seamlessly.
   - Example: `"The price of " + product + " is $" + price` becomes:
     ```javascript
     `The price of ${product} is $${price}`;
     ```

4. **Perform Calculations**:
   - Calculate totals using variables and operators.
   - Apply discounts based on conditions.

---

## **Why Learn These Concepts?**

Imagine running a grocery store. Every product has a price, and customers buy different quantities. Variables are like your price tags and customer orders—tools for keeping track of important data. Operators let you calculate totals, discounts, or even handle dynamic pricing like “Buy 2, Get 1 Free.”

Learning to combine variables and operators is like learning basic arithmetic for solving everyday problems, but in programming, it allows you to automate these calculations at scale.

---

## **Project Requirements**

1. **HTML Structure**:

   - Create a basic webpage with:
     - A `<header>` for the store name.
     - A `<main>` section to list 3 products with their prices.
     - A `<footer>` with contact details.

2. **JavaScript Logic**:

   - Use variables to store product data: names, prices, and quantities.
   - Perform calculations:
     - Calculate the total cost for each product (price × quantity).
     - Add up all product totals to compute a **grand total**.
     - Apply a **10% discount** if the grand total exceeds $50.
   - Log the results in the console.

3. **Dynamic Content**:
   - Use `console.log` to display all calculations.
   - Use `alert` or `document.write` to show key results dynamically on the page.

---

## **Steps to Complete**

### **1. Set Up the HTML**

- Use semantic tags to create a clear structure for your webpage:
  - `<header>` for the store name.
  - `<main>` for product listings.
  - `<footer>` for store contact information.

**Example HTML Skeleton**:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>My E-Commerce Store</title>
  </head>
  <body>
    <header>
      <h1>My E-Commerce Store</h1>
    </header>
    <main>
      <ul>
        <li>Product 1: $10</li>
        <li>Product 2: $20</li>
        <li>Product 3: $15</li>
      </ul>
    </main>
    <footer>
      <p>Contact us: info@myecommercestore.com</p>
    </footer>
  </body>
</html>
```

---

### **2. Write the JavaScript**

- **Define Variables**:
  - Use `let` for variables that may change, like quantities.
  - Use `const` for constants like product names or base prices.

**Code Example**:

```javascript
const product1 = { name: "Product 1", price: 10 };
const product2 = { name: "Product 2", price: 20 };
const product3 = { name: "Product 3", price: 15 };

let quantity1 = 2;
let quantity2 = 1;
let quantity3 = 3;
```

- **Perform Calculations**:
  - Calculate the total cost for each product and sum up the totals.
  - Use a conditional statement to apply a discount if the total exceeds $50.

**Code Example**:

```javascript
let total1 = product1.price * quantity1;
let total2 = product2.price * quantity2;
let total3 = product3.price * quantity3;

let grandTotal = total1 + total2 + total3;
let discount = grandTotal > 50 ? grandTotal * 0.1 : 0;
let finalTotal = grandTotal - discount;

console.log(`Total for ${product1.name}: $${total1}`);
console.log(`Grand Total: $${grandTotal}`);
console.log(`Discount: $${discount}`);
console.log(`Final Total: $${finalTotal}`);
```

- **Dynamic Outputs**:
  - Use `alert` or display results in HTML dynamically with `document.write`:
    ```javascript
    document.write(`<p>Your total is $${finalTotal}</p>`);
    ```

---

## **Expected Output**

1. The HTML page displays product names and prices.
2. The console logs:
   - Total for each product.
   - Grand total.
   - Discount (if applicable).
   - Final total.

---

## **Bonus Challenge**

1. Allow users to **input quantities** via prompt or input fields.
2. Add a fourth product dynamically using JavaScript.

---

## **Resources**

1. **JavaScript Basics**: [MDN Web Docs - JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
2. **Variables and Operators**: [JavaScript.info - Variables](https://javascript.info/variables)
3. **Template Literals**: [MDN Web Docs - Template Literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals)
4. **Conditionals**: [MDN Web Docs - Conditionals](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals)

---

## **Next Steps**

In Week 2, you will build on this project by adding interactivity through control flow, loops, and functions. Prepare to make your e-commerce store more dynamic and user-friendly!

---
