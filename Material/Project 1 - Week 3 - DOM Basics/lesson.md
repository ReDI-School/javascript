
# **Week 3: DOM Basics – Lesson Guide**

## **Overview**
In Week 3, you will learn how to interact with the **Document Object Model (DOM)** to enhance the functionality of your e-commerce store. The DOM is a programming interface that allows you to manipulate HTML and CSS dynamically, enabling you to create engaging and interactive web applications.

You will use DOM manipulation to dynamically update content, handle user events, and introduce animations for better user experience.

---

## **Learning Objectives**
1. **Understand the DOM**:
   - Learn the structure of the DOM and how it represents HTML as a tree-like structure.
   - Access and modify elements using JavaScript.

2. **Manipulate DOM Elements**:
   - Add, remove, and update elements dynamically.
   - Use `querySelector` and `getElementById` to target specific elements.

3. **Handle Events**:
   - Learn to respond to user actions using event listeners (e.g., clicks, inputs).
   - Understand how to pass data through events.

4. **Introduce Animations**:
   - Apply basic animations using CSS classes and JavaScript.

---

## **Why Learn These Concepts?**
The DOM is the bridge between your HTML structure and JavaScript logic. Imagine it as a "remote control" that lets you interact with and modify the webpage on the fly. Whether you’re updating content, responding to user clicks, or animating elements, mastering the DOM is key to building dynamic web applications.

---

## **Project Requirements**
1. **HTML Enhancements**:
   - Add placeholders for dynamic content, such as a summary section to display user totals and discounts.
   - Include buttons for features like resetting quantities or applying animations.

2. **JavaScript Features**:
   - Use the DOM to update the webpage dynamically based on user actions.
   - Add event listeners to handle button clicks and input changes.
   - Implement basic animations to enhance visual feedback.

---

## **Steps to Complete**

### **1. Update the HTML**
- Add a `<section>` for the summary output and buttons for additional actions.

**Example Code**:
```html
<section id="summary">
    <h2>Order Summary</h2>
    <p id="total-display">Total: $0.00</p>
    <p id="discount-display">Discount: $0.00</p>
    <p id="final-total-display">Final Total: $0.00</p>
    <button id="reset">Reset Quantities</button>
    <button id="animate">Highlight Total</button>
</section>
```

---

### **2. Access and Manipulate the DOM**
- Use `querySelector` or `getElementById` to select elements dynamically.
- Update the content of elements based on user interactions.

**Example Code**:
```javascript
document.getElementById("total-display").textContent = `Total: $${total.toFixed(2)}`;
```

---

### **3. Add Event Listeners**
- Handle events like button clicks or input changes.
- Reset quantities or apply visual highlights dynamically.

**Example Code**:
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

---

### **4. Add Basic Animations**
- Use JavaScript to toggle CSS classes for animations.
- Highlight elements like the total display when it’s updated.

**Example Code**:
```javascript
document.getElementById("animate").addEventListener("click", () => {
    const totalDisplay = document.getElementById("total-display");
    totalDisplay.classList.add("highlight");
    setTimeout(() => totalDisplay.classList.remove("highlight"), 1000);
});
```

---

## **Expected Output**
1. Totals and discounts are updated dynamically based on user input.
2. Buttons allow users to reset quantities or highlight totals visually.
3. Animations provide feedback, enhancing the user experience.

---

## **Bonus Challenge**
1. Allow users to toggle between different discount rates (e.g., 10%, 20%, 30%).
2. Create a smooth transition effect for adding and removing elements dynamically.

---

## **Resources**
1. **DOM Basics**: [MDN Web Docs - Introduction to the DOM](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction)
2. **Event Handling**: [JavaScript.info - Events](https://javascript.info/events)
3. **Animations**: [MDN Web Docs - Using CSS animations](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Animations/Using_CSS_animations)

---
