
# **Final Project: E-Commerce Application – Code Guide**

## **Introduction**
This project is a fully functional e-commerce application that uses the DummyJSON API to display products, manage a cart, and implement dynamic filtering and sorting. This guide explains how each part of the code works.

---

## **HTML (`index.html`)**
The `index.html` file structures the e-commerce application into sections:
1. **Header**:
   - Includes the title, search bar, and a button to open the cart.

   **Key Code**:
   ```html
   <header>
       <h1>My E-Commerce Store</h1>
       <nav>
           <button id="view-cart">View Cart</button>
           <input type="text" id="search-bar" placeholder="Search products...">
       </nav>
   </header>
   ```

2. **Main Content**:
   - Displays filters and the product grid.

   **Key Code**:
   ```html
   <section id="filters">
       <h2>Filter Products</h2>
       <select id="category-filter">
           <option value="">All Categories</option>
           <option value="beauty">Beauty</option>
           <option value="electronics">Electronics</option>
       </select>
   </section>
   <section id="product-list">
       <h2>Products</h2>
       <div id="products" class="product-grid"></div>
   </section>
   ```

3. **Cart Popup**:
   - Displays the cart items dynamically and calculates the total.

   **Key Code**:
   ```html
   <div id="cart-popup" class="hidden">
       <div class="cart-container">
           <h2>Your Cart</h2>
           <div id="cart-items"></div>
           <div class="cart-summary">
               <p>Total: <span id="cart-total">$0.00</span></p>
               <button id="checkout">Checkout</button>
               <button id="close-cart">Close</button>
           </div>
       </div>
   </div>
   ```

---

## **CSS (`style.css`)**
The `style.css` file styles the application to make it visually appealing and responsive.

### **Key Styles**
1. **Product Grid**:
   - Displays products in a responsive grid layout.

   **Key Code**:
   ```css
   .product-grid {
       display: grid;
       grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
       gap: 20px;
   }
   .product-card {
       background: white;
       border: 1px solid #ddd;
       border-radius: 10px;
       text-align: center;
       transition: transform 0.3s ease;
   }
   .product-card:hover {
       transform: scale(1.05);
       box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
   }
   ```

2. **Cart Popup**:
   - Styles the cart popup with a clean layout.

   **Key Code**:
   ```css
   #cart-popup {
       position: fixed;
       top: 0;
       left: 0;
       width: 100%;
       height: 100%;
       background: rgba(0, 0, 0, 0.7);
       display: flex;
       justify-content: center;
       align-items: center;
   }
   .cart-container {
       background: white;
       padding: 20px;
       border-radius: 10px;
       width: 400px;
       text-align: left;
   }
   ```

---

## **JavaScript (`script.js`)**

### **1. Fetching Products**
- Fetch products from the DummyJSON API and display them.

**Key Code**:
```javascript
async function fetchProducts() {
    const response = await fetch("https://dummyjson.com/products");
    const data = await response.json();
    products = data.products;
    displayProducts(products);
}
```

### **2. Displaying Products**
- Generate HTML dynamically for each product.

**Key Code**:
```javascript
function displayProducts(productList) {
    const productContainer = document.getElementById("products");
    productContainer.innerHTML = productList.map(product => `
        <div class="product-card">
            <img src="${product.thumbnail}" alt="${product.title}">
            <h3>${product.title}</h3>
            <p>Price: $${product.price}</p>
            <p>Rating: ${product.rating} ⭐</p>
            <button onclick="viewProductDetails(${product.id})">View Details</button>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        </div>
    `).join("");
}
```

### **3. Cart Management**
- Add, remove, and display cart items.

**Key Code**:
```javascript
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const cartItem = cart.find(item => item.id === productId);
    if (cartItem) {
        cartItem.quantity++;
    } else {
        cart.push({ ...product, quantity: 1 });
    }
    updateCart();
}
```

### **4. Filtering and Sorting**
- Filter by category and sort by price or rating.

**Key Code**:
```javascript
document.getElementById("category-filter").addEventListener("change", function () {
    const category = this.value;
    const filtered = category ? products.filter(product => product.category === category) : products;
    displayProducts(filtered);
});

document.getElementById("sort-filter").addEventListener("change", function () {
    const sortBy = this.value;
    let sortedProducts = [...products];
    if (sortBy === "price-asc") {
        sortedProducts.sort((a, b) => a.price - b.price);
    } else if (sortBy === "price-desc") {
        sortedProducts.sort((a, b) => b.price - a.price);
    }
    displayProducts(sortedProducts);
});
```

### **5. Cart Popup**
- Open and close the cart popup.

**Key Code**:
```javascript
document.getElementById("view-cart").addEventListener("click", () => {
    document.getElementById("cart-popup").classList.remove("hidden");
});

document.getElementById("close-cart").addEventListener("click", () => {
    document.getElementById("cart-popup").classList.add("hidden");
});
```

---

## **Summary**
1. **HTML**: Structures the e-commerce store into sections for products, cart, and filters.
2. **CSS**: Provides a modern, responsive design with transitions and hover effects.
3. **JavaScript**: Adds dynamic functionality for fetching products, managing a cart, and filtering/sorting.

---
