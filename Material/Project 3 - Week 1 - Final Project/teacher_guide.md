
# **Teacher Guide – Final Project: E-Commerce Application**

## **Introduction**
This guide helps instructors support students in building a **Minimal E-Commerce Application** using the DummyJSON API. The project consolidates all key concepts learned throughout the course, including HTML structure, CSS styling, JavaScript for interactivity, and API integration.

---

## **Teaching Objectives**
1. **HTML and CSS**:
   - Reinforce semantic HTML for structuring web pages.
   - Apply advanced CSS for a responsive grid layout and interactive elements.

2. **JavaScript Concepts**:
   - Demonstrate API integration using `fetch` to retrieve and display product data.
   - Implement dynamic features like filtering, sorting, and cart management.

3. **Problem-Solving Skills**:
   - Encourage students to debug API responses and manipulate JSON data.
   - Guide students in creating reusable functions for filtering and sorting.

---

## **Classroom Flow**

### **1. Introduction to the Project**
- Begin by discussing the overall project goals and expected outcomes.
- Highlight the key features of the application:
  - Product listing with filters and sorting.
  - Detailed product views.
  - Dynamic cart functionality.

#### **Discussion Prompt**:
- What are the primary components of an e-commerce application?

---

### **2. HTML Structure**
#### **Objective**:
- Teach students how to structure the application into semantic sections (e.g., header, main, footer).

**Key Concepts**:
1. Use semantic tags for better accessibility.
2. Include reusable sections for products, details, and the cart.

**Example Code**:
```html
<header>
    <h1>My E-Commerce Store</h1>
    <nav>
        <button id="view-cart">View Cart</button>
        <input type="text" id="search-bar" placeholder="Search products...">
    </nav>
</header>
<main>
    <section id="product-list"></section>
</main>
```

---

### **3. Styling with CSS**
#### **Objective**:
- Guide students in creating a responsive and visually appealing layout.

**Key Concepts**:
1. Use CSS Grid for the product listing layout.
2. Add hover effects for better user interaction.

**Example Code**:
```css
#product-list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 20px;
    padding: 20px;
}
.product-card {
    background: #fff;
    border: 1px solid #ddd;
    border-radius: 10px;
    text-align: center;
    transition: transform 0.3s;
}
.product-card:hover {
    transform: scale(1.05);
}
```

---

### **4. Fetching Data with JavaScript**
#### **Objective**:
- Show students how to use `fetch` to retrieve product data from the DummyJSON API.

**Key Concepts**:
1. Parse JSON responses.
2. Display product data dynamically on the webpage.

**Example Code**:
```javascript
async function fetchProducts() {
    const response = await fetch("https://dummyjson.com/products");
    const data = await response.json();
    displayProducts(data.products);
}
```

#### **Common Pitfalls**:
- Forgetting to handle API errors.
- Not correctly selecting DOM elements for updates.

---

### **5. Filtering and Sorting**
#### **Objective**:
- Teach students how to implement filtering and sorting for products.

**Key Concepts**:
1. Use `filter` to return products based on a condition (e.g., category).
2. Use `sort` to arrange products by price or rating.

**Example Code**:
```javascript
function filterByCategory(category) {
    const filtered = products.filter(product => product.category === category);
    displayProducts(filtered);
}

function sortByPrice(order = "asc") {
    const sorted = products.sort((a, b) => order === "asc" ? a.price - b.price : b.price - a.price);
    displayProducts(sorted);
}
```

#### **Teaching Tip**:
- Explain the difference between mutating the original array and creating a new array.

---

### **6. Building the Cart**
#### **Objective**:
- Guide students in implementing a dynamic cart system.

**Key Concepts**:
1. Use an array to track cart items.
2. Dynamically update the DOM to reflect cart changes.

**Example Code**:
```javascript
const cart = [];

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const cartItem = cart.find(item => item.id === productId);
    if (cartItem) {
        cartItem.quantity++;
    } else {
        cart.push({ ...product, quantity: 1 });
    }
    updateCartDisplay();
}
```

---

## **Common Mistakes to Address**
1. **API Response Errors**:
   - Remind students to use `try...catch` for handling errors.

2. **CSS Overlaps**:
   - Emphasize the importance of using specific class names to avoid style conflicts.

3. **DOM Manipulation Issues**:
   - Ensure students use unique IDs and classes for dynamic updates.

---

## **Expected Outcomes**
By the end of this project, students should:
1. Create a fully functional e-commerce application.
2. Demonstrate mastery of JavaScript for dynamic functionality.
3. Build a professional and responsive design.

---

## **Additional Resources**
1. **DummyJSON API**: [API Documentation](https://dummyjson.com/)
2. **CSS Grid**: [CSS Tricks](https://css-tricks.com/snippets/css/complete-guide-grid/)
3. **JavaScript DOM**: [JavaScript.info](https://javascript.info/dom-nodes)

---
