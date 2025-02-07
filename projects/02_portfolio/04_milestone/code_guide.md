
# **Week 4: Case Studies Hub – Code Guide**

## **Introduction**
This project consolidates all the concepts learned in previous weeks by building a **Case Studies Hub**. This guide explains how the project integrates HTML, CSS, and JavaScript to create an interactive portfolio-like dashboard. Students learned how to dynamically display, filter, sort, and manage data using the PokéAPI.

---

## **What’s Happening in index.html?**
The `index.html` file structures the hub into three main sections:

1. **Introduction Section**:
   - Provides static content describing the purpose of the portfolio.
   - Example:
     ```html
     <section id="introduction">
         <h2>About Me</h2>
         <p>Welcome to my Case Studies Hub! Here you’ll find highlights of my work, including technical skills and achievements.</p>
     </section>
     ```

2. **Case Studies Section**:
   - Displays dynamically loaded projects (Pokémon) with controls for filtering and sorting.
   - Example:
     ```html
     <section id="case-studies">
         <h2>Case Studies</h2>
         <div id="case-studies-display" class="card-container"></div>
         <div id="controls" class="controls">
             <button id="filter-high-exp">Filter High Complexity</button>
             <button id="sort-by-name">Sort by Name</button>
             <button id="sort-by-exp">Sort by Complexity</button>
         </div>
     </section>
     ```

3. **Favorites Section**:
   - Lists projects marked as "favorites" by the user.
   - Example:
     ```html
     <section id="favorites">
         <h2>Favorites</h2>
         <div id="favorites-display" class="card-container"></div>
     </section>
     ```

---

## **What’s Happening in script.js?**
The `script.js` file implements all dynamic functionality, including data fetching, filtering, sorting, and favorites management.

### **1. Storing Data**
Fetched case studies (Pokémon) are stored as objects in arrays for manipulation.

**Code Example**:
```javascript
const caseStudies = [];
const favorites = [];
```

### **2. Fetching Data**
Fetch Pokémon data from the PokéAPI and format it into case study objects.

**Code Example**:
```javascript
async function fetchCaseStudy(nameOrId) {
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${nameOrId}`);
        if (!response.ok) throw new Error("Case Study not found!");
        const data = await response.json();
        addCaseStudy(data);
    } catch (error) {
        alert(error.message);
    }
}

function addCaseStudy(data) {
    const caseStudy = {
        name: data.name,
        complexity: data.base_experience,
        technologies: data.abilities.map(a => a.ability.name)
    };
    caseStudies.push(caseStudy);
    displayCaseStudies(caseStudies);
}
```

### **3. Displaying Data**
Update the DOM to display case studies or favorites dynamically.

**Code Example**:
```javascript
function displayCaseStudies(list) {
    const display = document.getElementById("case-studies-display");
    display.innerHTML = list
        .map(cs => `
            <div class="card">
                <h3>${cs.name.toUpperCase()}</h3>
                <p><strong>Complexity:</strong> ${cs.complexity}</p>
                <p><strong>Technologies:</strong> ${cs.technologies.join(", ")}</p>
                <button onclick="addToFavorites('${cs.name}')">Add to Favorites</button>
            </div>
        `)
        .join("");
}

function displayFavorites(list) {
    const display = document.getElementById("favorites-display");
    display.innerHTML = list
        .map(cs => `
            <div class="card">
                <h3>${cs.name.toUpperCase()}</h3>
                <p><strong>Complexity:</strong> ${cs.complexity}</p>
                <p><strong>Technologies:</strong> ${cs.technologies.join(", ")}</p>
            </div>
        `)
        .join("");
}
```

### **4. Filtering and Sorting**
Filter and sort the case studies array dynamically.

**Code Example**:
```javascript
function filterHighComplexity(threshold) {
    const filtered = caseStudies.filter(cs => cs.complexity > threshold);
    displayCaseStudies(filtered);
}

function sortByName() {
    caseStudies.sort((a, b) => a.name.localeCompare(b.name));
    displayCaseStudies(caseStudies);
}

function sortByComplexity() {
    caseStudies.sort((a, b) => b.complexity - a.complexity);
    displayCaseStudies(caseStudies);
}
```

---

## **What’s Happening in style.css?**
The `style.css` file creates a clean, professional design with responsive layouts.

### **Key Styles**
1. **General Layout**:
   - Centers content and uses Flexbox for responsive layouts.
   - Example:
     ```css
     .card-container {
         display: flex;
         flex-wrap: wrap;
         justify-content: center;
         gap: 15px;
         margin-top: 20px;
     }
     ```

2. **Card Design**:
   - Styles each case study or favorite as a card.
   - Example:
     ```css
     .card {
         background: #f9f9f9;
         padding: 15px;
         border-radius: 10px;
         box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
         width: 200px;
         text-align: center;
     }
     ```

3. **Button Styles**:
   - Adds hover effects to buttons for interactivity.
   - Example:
     ```css
     button {
         background: #2a75bb;
         color: white;
         border: none;
         padding: 10px;
         border-radius: 5px;
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
   - Provides a structured layout with semantic sections.

2. **script.js**:
   - Implements all dynamic functionality, including fetching, filtering, sorting, and managing favorites.

3. **style.css**:
   - Enhances the visual appeal and ensures responsive design.

---
