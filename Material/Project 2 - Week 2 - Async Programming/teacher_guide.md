
# **Teacher Guide – Week 6: Async Programming**

## **Introduction**
This guide helps instructors teach students the fundamentals of **asynchronous programming** using `fetch`, `Promises`, and `async/await`. Students will use the PokéAPI to dynamically fetch and display Pokémon data in their portfolio. This milestone introduces real-world API integration while reinforcing DOM manipulation skills.

---

## **Teaching Objectives**
1. **Introduce Async Programming**:
   - Explain the need for asynchronous operations in web development (e.g., fetching data from APIs).
   - Teach `fetch` for making HTTP requests.
   - Explore `async/await` for handling asynchronous tasks.

2. **Teach Error Handling**:
   - Show how to handle errors gracefully using `try...catch`.
   - Emphasize the importance of user-friendly error messages.

3. **Integrate with the DOM**:
   - Guide students to dynamically update the webpage with fetched data.

---

## **Classroom Flow**

### **1. What is Asynchronous Programming?**
- Start with an analogy: Asynchronous programming is like multitasking—you can do something else while waiting for a task (like fetching data) to complete.

#### **Key Points**:
- **Synchronous Code**: Executes one line at a time.
- **Asynchronous Code**: Can start tasks and continue running other code while waiting for results.

#### **Discussion Prompt**:
- Why is asynchronous programming essential for fetching data from APIs?

---

### **2. Introducing Fetch and API Calls**
- Demonstrate how to use `fetch` to make API requests.
- Explain the structure of the PokéAPI response.

**Example Code**:
```javascript
async function fetchPokemon(name) {
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
        if (!response.ok) {
            throw new Error("Pokémon not found");
        }
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error(error.message);
    }
}
```

#### **Teaching Tip**:
- Use `console.log` to inspect the API response structure and guide students in parsing it.

---

### **3. Displaying Pokémon Data**
- Show how to dynamically update the DOM with fetched data.

**Example Code**:
```javascript
function displayPokemon(data) {
    const display = document.getElementById("pokemon-display");
    display.innerHTML = `
        <h3>${data.name.toUpperCase()}</h3>
        <img src="${data.sprites.front_default}" alt="${data.name}">
        <p>Base Experience: ${data.base_experience}</p>
        <p>Abilities: ${data.abilities.map(a => a.ability.name).join(", ")}</p>
    `;
}
```

#### **Teaching Tip**:
- Break down the DOM manipulation step by step, explaining how to create and append elements dynamically.

---

### **4. Handling Errors Gracefully**
- Teach students to handle API errors using `try...catch`.

**Example Code**:
```javascript
async function fetchPokemon(name) {
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
        if (!response.ok) {
            throw new Error("Pokémon not found");
        }
        const data = await response.json();
        displayPokemon(data);
    } catch (error) {
        alert(error.message);
    }
}
```

#### **Teaching Tip**:
- Highlight the importance of providing clear and informative error messages for a better user experience.

---

### **5. Fetching Random Pokémon**
- Use a random Pokémon ID to fetch and display a random Pokémon.

**Example Code**:
```javascript
async function fetchRandomPokemon() {
    const randomId = Math.floor(Math.random() * 898) + 1;
    await fetchPokemon(randomId);
}
```

#### **Teaching Tip**:
- Discuss the range of Pokémon IDs (1–898) and how to generate random numbers in JavaScript.

---

## **Common Mistakes to Address**
1. **Uncaught Fetch Errors**:
   - Explain that network issues or invalid URLs can cause fetch to fail.
   - Emphasize using `try...catch` to handle such cases.

2. **DOM Selection Errors**:
   - Ensure students use correct selectors (`getElementById`, `querySelector`) for dynamic updates.

3. **Data Parsing Confusion**:
   - Highlight the structure of the PokéAPI response and guide students in accessing nested properties.

---

## **Teaching Strategies**
1. **Visualize API Responses**:
   - Use tools like Postman or the browser console to explore the API response structure.

2. **Debug with Console Logs**:
   - Encourage students to use `console.log` to inspect responses and identify issues.

3. **Build Incrementally**:
   - Start by fetching data for a specific Pokémon.
   - Gradually add features like random Pokémon fetching and error handling.

---

## **Expected Outcomes**
By the end of this milestone, students should:
1. Understand the basics of asynchronous programming and how to use `fetch`.
2. Handle API responses and errors gracefully.
3. Dynamically update the DOM with fetched data.

---

## **Additional Resources**
1. **Async Programming**: [MDN Web Docs - async/await](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Promises)
2. **APIs**: [PokéAPI Documentation](https://pokeapi.co/)
3. **Error Handling**: [JavaScript.info - Error Handling](https://javascript.info/try-catch)

---
