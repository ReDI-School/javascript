
# **Final Project: E-Commerce Application – Lesson Guide**

## **Overview**
In this final project, you will create a **Minimal E-Commerce Application** using the DummyJSON API. This project consolidates all the concepts you've learned throughout the course, including HTML, CSS, and JavaScript. You will build a dynamic application that displays products, allows filtering and sorting, and manages a simple shopping cart.

---

## **Learning Objectives**
1. **HTML and CSS**:
   - Structure a responsive, user-friendly e-commerce application.
   - Apply advanced CSS techniques for grid layouts and interactivity.

2. **JavaScript**:
   - Fetch and display data dynamically using the DummyJSON API.
   - Implement functionality for filtering, sorting, and a dynamic cart system.

3. **API Integration**:
   - Use `fetch` to retrieve data from the DummyJSON API.
   - Parse and display JSON data in a meaningful way.

4. **User Interaction**:
   - Allow users to interact with the application by adding products to a cart and viewing detailed product information.

---

## **Project Features**
### **1. Homepage**
- Displays a list of products in a responsive grid layout.
- Each product card includes:
  - Thumbnail image.
  - Product title.
  - Price.
  - A button to view details or add to the cart.

### **2. Product Details**
- Clicking on a product opens a detailed view.
- Displays:
  - Full description.
  - Rating and reviews.
  - Brand and category.
  - Additional specifications (e.g., dimensions, weight).

### **3. Cart**
- A dynamic cart accessible from any page.
- Features:
  - List of added products with quantity and price.
  - Total price calculation.
  - Buttons to increase/decrease quantity or remove products.

### **4. Filters and Sorting**
- Users can:
  - Filter products by category.
  - Sort products by price, rating, or availability.

### **5. Responsive Design**
- A layout that adapts seamlessly to mobile, tablet, and desktop screens.

---

## **Steps to Complete**
### **1. Set Up the HTML Structure**
- Create sections for:
  - Header with a navigation bar.
  - Main content for product listings and details.
  - Sidebar or popup for the cart.

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

### **2. Style the Application with CSS**
- Create a responsive design using Flexbox and Grid.
- Add hover effects and transitions for better user interaction.

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
    overflow: hidden;
    text-align: center;
}
```

### **3. Fetch Products from the API**
- Use the DummyJSON API to load and display product data.

**Example Code**:
```javascript
async function fetchProducts() {
    const response = await fetch("https://dummyjson.com/products");
    const data = await response.json();
    displayProducts(data.products);
}

function displayProducts(products) {
    const productList = document.getElementById("product-list");
    productList.innerHTML = products.map(product => `
        <div class="product-card">
            <img src="${product.thumbnail}" alt="${product.title}">
            <h3>${product.title}</h3>
            <p>$${product.price}</p>
            <button onclick="viewDetails(${product.id})">View Details</button>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        </div>
    `).join("");
}
```

### **4. Implement Filtering and Sorting**
- Add dropdown menus or buttons for filtering and sorting.

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

### **5. Build the Cart System**
- Use an array to track cart items and update the DOM dynamically.

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

function updateCartDisplay() {
    const cartDisplay = document.getElementById("cart-items");
    cartDisplay.innerHTML = cart.map(item => `
        <div class="cart-item">
            <h3>${item.title}</h3>
            <p>Quantity: ${item.quantity}</p>
            <p>Price: $${(item.price * item.quantity).toFixed(2)}</p>
        </div>
    `).join("");
}
```

---

## **Expected Outcome**
By the end of this project, you will have:
1. A functional e-commerce site displaying products dynamically.
2. Interactive features like a cart, filtering, and sorting.
3. A professional-looking responsive design.

---

## **Resources**
1. **DummyJSON API**: [API Documentation](https://dummyjson.com/)
2. **HTML Basics**: [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/HTML)
3. **CSS Grid**: [CSS Tricks - Complete Guide](https://css-tricks.com/snippets/css/complete-guide-grid/)
4. **JavaScript DOM**: [JavaScript.info](https://javascript.info/dom-nodes)

---
