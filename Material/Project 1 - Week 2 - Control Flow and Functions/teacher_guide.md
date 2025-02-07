
# **Teacher Guide – Week 2: Control Flow and Functions**

## **Introduction**
This guide provides instructors with key concepts, teaching strategies, and examples to help students understand control flow and functions in JavaScript. These tools allow students to write code that makes decisions, performs repetitive tasks efficiently, and organizes logic into reusable pieces.

---

## **Teaching Objectives**
1. **Introduce Control Flow**:
   - Explain the purpose of conditional statements (`if`, `else if`, `else`) for decision-making.
   - Teach logical operators (`&&`, `||`, `!`) for combining conditions.

2. **Teach Loops**:
   - Demonstrate how to use `for`, `while`, and `do...while` loops to repeat actions.
   - Show how loops can iterate over arrays or objects.

3. **Explain Functions**:
   - Highlight the benefits of modular and reusable code.
   - Guide students on how to define, call, and pass arguments to functions.
   - Emphasize the importance of returning values.

4. **Combine Concepts**:
   - Use control flow and functions together to build dynamic behaviors like validating inputs and calculating totals.

---

## **Classroom Flow**

### **1. Control Flow Basics**
- Begin with an analogy: Control flow is like making decisions at a crossroad. Depending on the condition, you take a specific path.
- Explain how `if`, `else if`, and `else` allow the program to make decisions.

**Example Code**:
```javascript
let totalCost = 55;
if (totalCost > 50) {
    console.log("You qualify for a discount!");
} else if (totalCost === 50) {
    console.log("You just made it for the discount!");
} else {
    console.log("No discount for this order.");
}
```

#### **Teaching Tip**:
- Use relatable scenarios like offering discounts for orders over $50 to explain conditions.

---

### **2. Loops in Action**
- Compare loops to repetitive tasks like checking every item in a grocery list.
- Demonstrate how `for` loops can iterate over arrays or lists.

**Example Code**:
```javascript
const quantities = [2, 1, 3];
let totalItems = 0;
for (let i = 0; i < quantities.length; i++) {
    totalItems += quantities[i];
}
console.log(`Total items: ${totalItems}`);
```

#### **Teaching Tip**:
- Emphasize how loops save time compared to writing repetitive code manually.

---

### **3. Functions for Reusability**
- Explain functions as tools that group logic into reusable blocks.
- Teach how to define and call functions.

**Example Code**:
```javascript
function calculateTotal(price, quantity) {
    return price * quantity;
}
const total = calculateTotal(10, 2);
console.log(`Total: $${total}`);
```

#### **Teaching Tip**:
- Highlight how functions reduce redundancy and make the code easier to maintain.

---

### **4. Combining Control Flow and Functions**
- Demonstrate how to validate user input and calculate totals using functions and conditionals.

**Example Code**:
```javascript
function validateQuantity(quantity) {
    if (quantity < 0) {
        console.log("Invalid quantity. Please enter a positive number.");
        return false;
    }
    return true;
}
```

---

## **Common Mistakes to Address**
1. **Logical Errors in Conditions**:
   - Explain the difference between `=` (assignment) and `===` (equality).
   - Highlight the importance of operator precedence in complex conditions.

2. **Infinite Loops**:
   - Warn students about forgetting to update loop counters, leading to infinite loops.

3. **Function Misuse**:
   - Emphasize returning values from functions instead of hardcoding results.

---

## **Teaching Strategies**
1. **Visualize Control Flow**:
   - Draw decision trees to illustrate how conditions lead to different outcomes.
   - Show loop iterations step by step to clarify how they work.

2. **Encourage Debugging**:
   - Teach students to use `console.log` to trace code execution.

3. **Build Incrementally**:
   - Start with simple examples of each concept.
   - Gradually combine them into more complex functionality, like the e-commerce calculations.

---

## **Expected Outcomes**
By the end of this milestone, students should:
1. Use conditional statements to control program flow.
2. Iterate over arrays and objects using loops.
3. Define and call functions to organize their code.
4. Combine these concepts to create dynamic and reusable logic.

---

## **Additional Resources**
1. **Control Flow**: [MDN Web Docs - Control Flow](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling)
2. **Loops**: [JavaScript.info - Loops](https://javascript.info/while-for)
3. **Functions**: [MDN Web Docs - Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions)
4. **Debugging**: [MDN Web Docs - Debugging](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/What_went_wrong)

---
