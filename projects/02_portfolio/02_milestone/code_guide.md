
# **Week 2: Async Programming – Code Guide**

## **Introduction**
In this project, you integrated **asynchronous programming** concepts into your portfolio by using the **PokéAPI** to fetch and display Pokémon data dynamically. This guide explains how the project leverages `fetch`, `async/await`, and DOM manipulation to create an interactive Pokémon showcase.

---

## **What’s Happening in index.html?**
The `index.html` file structures the page and provides placeholders for dynamic content.

1. **Pokemon Display Section**:
   - Includes an empty `<div>` for displaying fetched Pokémon details dynamically.
   - Example:
     ```html
     <div id="pokemon-display" class="card"></div>
     ```

2. **Controls Section**:
   - Contains input and buttons for fetching Pokémon data.
   - Example:
     ```html
     <div id="controls" class="controls">
         <input type="text" id="pokemon-name" placeholder="Enter Pokémon name">
         <button id="fetch-pokemon">Fetch Pokémon</button>
         <button id="fetch-random">Fetch Random Pokémon</button>
     </div>
     ```

---

## **What’s Happening in script.js?**
The `script.js` file handles fetching data from the PokéAPI and updating the DOM.

### **1. Fetching Pokémon Data**
A function retrieves Pokémon details by name or ID using `fetch`. The response is parsed as JSON.

**Code Example**:
```javascript
async function fetchPokemon(nameOrId) {
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${nameOrId}`);
        if (!response.ok) {
            throw new Error("Pokémon not found!");
        }
        const data = await response.json();
        displayPokemon(data);
    } catch (error) {
        alert(error.message);
    }
}
```

### **2. Displaying Pokémon Data**
The `displayPokemon` function updates the DOM to show fetched Pokémon details.

**Code Example**:
```javascript
function displayPokemon(data) {
    const display = document.getElementById("pokemon-display");
    display.innerHTML = `
        <h3>${data.name.toUpperCase()}</h3>
        <img src="${data.sprites.front_default}" alt="${data.name}">
        <p><strong>Base Experience:</strong> ${data.base_experience}</p>
        <p><strong>Abilities:</strong> ${data.abilities.map(a => a.ability.name).join(", ")}</p>
    `;
    display.classList.add("highlight");
    setTimeout(() => display.classList.remove("highlight"), 1000);
}
```

### **3. Fetching Random Pokémon**
A function generates a random Pokémon ID (1–898) and fetches data for that Pokémon.

**Code Example**:
```javascript
async function fetchRandomPokemon() {
    const randomId = Math.floor(Math.random() * 898) + 1;
    await fetchPokemon(randomId);
}
```

### **4. Adding Event Listeners**
Buttons are linked to their respective functions for fetching data.

**Code Example**:
```javascript
document.getElementById("fetch-pokemon").addEventListener("click", () => {
    const name = document.getElementById("pokemon-name").value.trim().toLowerCase();
    if (name) fetchPokemon(name);
});

document.getElementById("fetch-random").addEventListener("click", fetchRandomPokemon);
```

---

## **What’s Happening in style.css?**
The `style.css` file enhances the visual design with vibrant and engaging styles.

1. **General Layout**:
   - Creates a clean and centered layout.
   - Example:
     ```css
     body {
         font-family: Arial, sans-serif;
         background-color: #f4f4f9;
         color: #333;
         text-align: center;
     }
     ```

2. **Pokemon Card**:
   - Highlights the Pokémon display with a card-like design.
   - Example:
     ```css
     .card {
         background: #f9f9f9;
         padding: 20px;
         border-radius: 10px;
         box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
         text-align: center;
     }
     ```

3. **Highlight Animation**:
   - Adds a smooth animation when a Pokémon is displayed.
   - Example:
     ```css
     .highlight {
         animation: highlight-animation 1s ease;
     }

     @keyframes highlight-animation {
         0% {
             transform: scale(1);
             background-color: #fff;
         }
         50% {
             transform: scale(1.05);
             background-color: #ffcb05;
         }
         100% {
             transform: scale(1);
             background-color: #fff;
         }
     }
     ```

---

## **Summary**
1. **index.html**:
   - Provides the structure for the Pokémon showcase, including input and buttons for user interaction.

2. **script.js**:
   - Implements asynchronous functions to fetch data from the PokéAPI.
   - Updates the DOM dynamically with fetched Pokémon details.

3. **style.css**:
   - Enhances the user experience with clean layouts, vibrant colors, and animations.

---
