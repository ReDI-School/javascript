
// Product data
const product1 = { name: "Product 1", price: 10, quantity: 2 };
const product2 = { name: "Product 2", price: 20, quantity: 1 };
const product3 = { name: "Product 3", price: 15, quantity: 3 };

// Calculate totals
const total1 = product1.price * product1.quantity;
const total2 = product2.price * product2.quantity;
const total3 = product3.price * product3.quantity;

// Calculate grand total and apply discount if applicable
const grandTotal = total1 + total2 + total3;
const discount = grandTotal > 50 ? grandTotal * 0.1 : 0;
const finalTotal = grandTotal - discount;

// Display results in the console
console.log(`Total for ${product1.name}: $${total1}`);
console.log(`Total for ${product2.name}: $${total2}`);
console.log(`Total for ${product3.name}: $${total3}`);
console.log(`Grand Total: $${grandTotal}`);
console.log(`Discount: $${discount}`);
console.log(`Final Total: $${finalTotal}`);

// Dynamically update the webpage
document.write(`<h2>Order Summary</h2>`);
document.write(`<p>Total for ${product1.name}: $${total1}</p>`);
document.write(`<p>Total for ${product2.name}: $${total2}</p>`);
document.write(`<p>Total for ${product3.name}: $${total3}</p>`);
document.write(`<p>Grand Total: $${grandTotal}</p>`);
document.write(`<p>Discount: $${discount}</p>`);
document.write(`<p>Final Total: $${finalTotal}</p>`);
