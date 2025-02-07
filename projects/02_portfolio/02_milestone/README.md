
# **Week 2: Async Programming**

## **Overview**
In Week 2, you’ll learn about **asynchronous programming** in JavaScript by using the PokéAPI to dynamically fetch and display Pokémon in your portfolio. This project integrates `fetch`, `async/await`, and real-time data updates to create an interactive Pokémon showcase.

---

## **Learning Objectives**
1. **Understand Asynchronous Programming**:
   - Learn how JavaScript handles asynchronous tasks with `fetch`, `Promises`, and `async/await`.
   - Explore the importance of handling responses and errors.

2. **Use APIs**:
   - Make HTTP requests to fetch data from external APIs (e.g., PokéAPI).
   - Parse and display JSON data dynamically.

3. **Apply Concepts to the Project**:
   - Dynamically load Pokémon details into the portfolio’s "Projects" section.
   - Handle user input and update the page in real-time.

---

## **Why Learn These Concepts?**
APIs are a fundamental part of modern web development, enabling your applications to interact with external services. Think of APIs as bridges connecting your application to vast resources of data, like Pokémon in this project!

---

## **Project Requirements**
1. **HTML Setup**:
   - Update the "Projects" section to display Pokémon details.
   - Add buttons for fetching Pokémon data dynamically.

2. **JavaScript Features**:
   - Use `fetch` to retrieve Pokémon details from the PokéAPI.
   - Handle errors gracefully (e.g., invalid Pokémon names).

3. **Dynamic Updates**:
   - Allow users to search for a specific Pokémon or load a random one.

---

## **Steps to Complete**

### **1. Update the HTML**
- Modify the "Projects" section to display Pokémon details dynamically.

**Example Code**:
```html
<section id="projects">
    <h2>Pokemon Showcase</h2>
    <div id="pokemon-display"></div>
    <div id="controls">
        <input type="text" id="pokemon-name" placeholder="Enter Pokémon name">
        <button id="fetch-pokemon">Fetch Pokémon</button>
        <button id="fetch-random">Fetch Random Pokémon</button>
    </div>
</section>
```

---

### **2. Use Fetch to Retrieve Data**
- Write a function to fetch Pokémon details by name.

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

---

### **3. Display Pokémon Data**
- Dynamically update the DOM to show Pokémon details.

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

---

### **4. Add Random Pokémon Functionality**
- Fetch a random Pokémon using its ID.

**Example Code**:
```javascript
async function fetchRandomPokemon() {
    const randomId = Math.floor(Math.random() * 898) + 1; // Pokémon IDs range from 1 to 898
    await fetchPokemon(randomId);
}
```

---

### **5. Link Buttons to Functions**
- Add event listeners to the buttons for fetching data.

**Example Code**:
```javascript
document.getElementById("fetch-pokemon").addEventListener("click", () => {
    const name = document.getElementById("pokemon-name").value.trim().toLowerCase();
    if (name) fetchPokemon(name);
});

document.getElementById("fetch-random").addEventListener("click", fetchRandomPokemon);
```

---

## **Expected Output**
1. Users can search for Pokémon by name or fetch a random one.
2. Pokémon details, including name, abilities, and an image, are displayed dynamically.
3. Errors (e.g., invalid names) are handled gracefully with alert messages.

---

## **Bonus Challenge**
1. Add a "Favorites" feature to save and display selected Pokémon.
2. Include additional Pokémon data, like types and stats.

---

## **Resources**
1. **Async Programming**: [MDN Web Docs - async/await](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Promises)
2. **APIs**: [PokéAPI Documentation](https://pokeapi.co/)
3. **Error Handling**: [JavaScript.info - Error Handling](https://javascript.info/try-catch)

---
