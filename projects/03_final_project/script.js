// Data Storage
let products = [];
let cart = [];

// Fetch Products from DummyJSON API
async function fetchProducts() {
  try {
    const response = await fetch("https://dummyjson.com/products");
    const data = await response.json();
    products = data.products;
    displayProducts(products);
  } catch (error) {
    console.error("Error fetching products:", error);
  }
}

// Display Products
function displayProducts(productList) {
  const productContainer = document.getElementById("products");
  productContainer.innerHTML = productList
    .map(
      (product) => `
        <div class="product-card">
            <img src="${product.thumbnail}" alt="${product.title}">
            <h3>${product.title}</h3>
            <p>Price: $${product.price}</p>
            <p>Rating: ${product.rating} ⭐</p>
            <button onclick="viewProductDetails(${product.id})">View Details</button>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        </div>
    `
    )
    .join("");
}

// View Product Details
function viewProductDetails(productId) {
  const product = products.find((p) => p.id === productId);
  if (product) {
    alert(`
            Title: ${product.title}
            Description: ${product.description}
            Price: $${product.price}
            Rating: ${product.rating} ⭐
            Stock: ${product.stock}
        `);
  }
}

// Add Product to Cart
function addToCart(productId) {
  const product = products.find((p) => p.id === productId);
  if (!product) {
    alert("Product not found!");
    return;
  }

  const cartItem = cart.find((item) => item.id === productId);
  if (cartItem) {
    cartItem.quantity++;
    alert("Product quantity updated in cart!");
  } else {
    cart.push({ ...product, quantity: 1 });
    alert("Product added to cart!");
  }

  updateCart();
}

// Update Cart Display
function updateCart() {
  const cartItemsContainer = document.getElementById("cart-items");
  const cartTotalDisplay = document.getElementById("cart-total");

  cartItemsContainer.innerHTML = cart
    .map(
      (item) => `
        <div class="cart-item">
            <h3>${item.title}</h3>
            <p>Quantity: ${item.quantity}</p>
            <p>Price: $${(item.price * item.quantity).toFixed(2)}</p>
            <button onclick="removeFromCart(${item.id})">Remove</button>
        </div>
    `
    )
    .join("");

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  cartTotalDisplay.textContent = `$${total.toFixed(2)}`;
}

// Remove Product from Cart
function removeFromCart(productId) {
  cart = cart.filter((item) => item.id !== productId);
  updateCart();
}

// Filter Products by Category
document
  .getElementById("category-filter")
  .addEventListener("change", function () {
    const category = this.value;
    if (category) {
      const filtered = products.filter(
        (product) => product.category === category
      );
      displayProducts(filtered);
    } else {
      displayProducts(products);
    }
  });

// Sort Products
document.getElementById("sort-filter").addEventListener("change", function () {
  const sortBy = this.value;
  let sortedProducts = [...products];

  if (sortBy === "price-asc") {
    sortedProducts.sort((a, b) => a.price - b.price);
  } else if (sortBy === "price-desc") {
    sortedProducts.sort((a, b) => b.price - a.price);
  } else if (sortBy === "rating-desc") {
    sortedProducts.sort((a, b) => b.rating - a.rating);
  }

  displayProducts(sortedProducts);
});

// Search Products
document.getElementById("search-bar").addEventListener("input", function () {
  const searchTerm = this.value.toLowerCase();
  if (searchTerm) {
    const filtered = products.filter((product) =>
      product.title.toLowerCase().includes(searchTerm)
    );
    displayProducts(filtered);
  } else {
    displayProducts(products);
  }
});

// Open and Close Cart Popup
document.addEventListener("DOMContentLoaded", () => {
  const cartPopup = document.getElementById("cart-popup");
  const viewCartButton = document.getElementById("view-cart");
  const closeCartButton = document.getElementById("close-cart");

  // Open Cart
  viewCartButton.addEventListener("click", () => {
    console.log("View Cart clicked.");
    if (cartPopup.classList.contains("hidden")) {
      cartPopup.classList.remove("hidden");
    }
  });

  // Close Cart
  closeCartButton.addEventListener("click", () => {
    console.log("Close Cart clicked.");
    if (!cartPopup.classList.contains("hidden")) {
      cartPopup.classList.add("hidden");
    }
  });
});

// Handle Checkout
document.getElementById("checkout").addEventListener("click", () => {
  if (cart.length === 0) {
    alert("Your cart is empty!");
  } else {
    alert("Thank you for your purchase!");
    cart = []; // Clear the cart after checkout
    updateCart(); // Update the cart display to reflect empty state
    const cartPopup = document.getElementById("cart-popup");
    cartPopup.classList.add("hidden"); // Close the cart popup
  }
});

// Initialize Application
fetchProducts();
