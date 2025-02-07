
# **Week 3: Functional Programming with Arrays and Objects – Code Guide**

## **Introduction**
This project demonstrates the use of **arrays** and **objects** in JavaScript and introduces functional programming methods (`map`, `filter`, `reduce`) to enhance the Pokémon Showcase. You learned how to manage data using these structures and added filtering and sorting functionality.

---

## **What’s Happening in index.html?**
The `index.html` file structures the Pokémon Showcase and provides controls for dynamic functionality.

1. **Pokemon Display Section**:
   - Displays fetched Pokémon data dynamically in a card layout.
   - Example:
     ```html
     <div id="pokemon-display" class="card-container"></div>
     ```

2. **Controls Section**:
   - Includes buttons for fetching, filtering, and sorting Pokémon.
   - Example:
     ```html
     <div id="controls" class="controls">
         <input type="text" id="pokemon-name" placeholder="Enter Pokémon name">
         <button id="fetch-pokemon">Fetch Pokémon</button>
         <button id="fetch-random">Fetch Random Pokémon</button>
     </div>
     <div id="additional-controls" class="controls">
         <button id="filter-high-exp">Filter High Experience</button>
         <button id="sort-by-name">Sort by Name</button>
         <button id="sort-by-exp">Sort by Base Experience</button>
     </div>
     ```

---

## **What’s Happening in script.js?**
The `script.js` file handles fetching Pokémon data, managing it using arrays and objects, and dynamically updating the DOM.

### **1. Storing Pokémon Data**
Fetched Pokémon are stored in an array as objects. Each object contains the Pokémon's name, base experience, and abilities.

**Code Example**:
```javascript
const pokemonList = [];

function addPokemonToList(data) {
    const pokemon = {
        name: data.name,
        baseExperience: data.base_experience,
        abilities: data.abilities.map(a => a.ability.name)
    };
    pokemonList.push(pokemon);
    console.log(pokemonList); // Debug: View the updated list of Pokémon
}
```

### **2. Fetching Pokémon Data**
- Fetch Pokémon by name or ID using `fetch` and `async/await`.
- Handle errors gracefully using `try...catch`.

**Code Example**:
```javascript
async function fetchPokemon(nameOrId) {
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${nameOrId}`);
        if (!response.ok) {
            throw new Error("Pokémon not found!");
        }
        const data = await response.json();
        addPokemonToList(data);
        displayPokemon(data);
    } catch (error) {
        alert(error.message);
    }
}
```

### **3. Displaying Pokémon Data**
- Dynamically update the DOM to display Pokémon details.

**Code Example**:
```javascript
function displayPokemon(data) {
    const display = document.getElementById("pokemon-display");
    display.innerHTML = `
        <div class="card">
            <h3>${data.name.toUpperCase()}</h3>
            <img src="${data.sprites.front_default}" alt="${data.name}">
            <p><strong>Base Experience:</strong> ${data.base_experience}</p>
            <p><strong>Abilities:</strong> ${data.abilities.map(a => a.ability.name).join(", ")}</p>
        </div>
    `;
}
```

### **4. Filtering and Sorting Pokémon**
#### **Filter by Base Experience**:
Use `filter` to return Pokémon with base experience above a certain threshold.

**Code Example**:
```javascript
function filterHighExperience(threshold) {
    return pokemonList.filter(p => p.baseExperience > threshold);
}
```

#### **Sort by Name or Base Experience**:
Use `sort` to order Pokémon alphabetically or by experience.

**Code Example**:
```javascript
function sortByName() {
    pokemonList.sort((a, b) => a.name.localeCompare(b.name));
}

function sortByBaseExperience() {
    pokemonList.sort((a, b) => b.baseExperience - a.baseExperience);
}
```

### **5. Display Filtered or Sorted Pokémon**
- Update the DOM to reflect filtered or sorted data.

**Code Example**:
```javascript
function displayAllPokemon(list = pokemonList) {
    const display = document.getElementById("pokemon-display");
    display.innerHTML = list
        .map(pokemon => `
            <div class="card">
                <h3>${pokemon.name.toUpperCase()}</h3>
                <p><strong>Base Experience:</strong> ${pokemon.baseExperience}</p>
                <p><strong>Abilities:</strong> ${pokemon.abilities.join(", ")}</p>
            </div>
        `)
        .join("");
}
```

---

## **What’s Happening in style.css?**
The `style.css` file provides a clean and modern design for the Pokémon Showcase.

1. **Card Layout**:
   - Displays Pokémon data in a responsive card layout.
   - Example:
     ```css
     .card-container {
         display: flex;
         flex-wrap: wrap;
         justify-content: center;
         gap: 15px;
         margin-top: 20px;
     }

     .card {
         background: #f9f9f9;
         padding: 15px;
         border-radius: 10px;
         box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
         width: 200px;
         text-align: center;
     }
     ```

2. **Button Styles**:
   - Styled buttons with hover effects.
   - Example:
     ```css
     button {
         background: #2a75bb;
         color: white;
         border: none;
         cursor: pointer;
         transition: background 0.3s ease;
     }

     button:hover {
         background: #184785;
     }
     ```

---

## **Summary**
1. **index.html**:
   - Provides the structure for Pokémon display and user controls.

2. **script.js**:
   - Implements data management with arrays and objects.
   - Adds filtering and sorting functionality using functional programming.

3. **style.css**:
   - Enhances the project with a visually appealing design.

---
