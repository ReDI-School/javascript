# **Week 8: Case Studies Hub – Lesson Guide**

## **Overview**

In this recap week, we will consolidate all the concepts learned so far by creating a **Case Studies Hub**. This project serves as a narrative-driven portfolio where each Pokémon represents a case study or project, complete with dynamic functionality such as filtering, sorting, and local data storage.

---

## **Learning Objectives**

1. **Integrate All Concepts**:

   - Apply HTML, CSS, and JavaScript knowledge to create a functional, interactive hub.
   - Consolidate concepts like DOM manipulation, asynchronous programming, and functional programming.

2. **Reinforce Data Structures**:

   - Use arrays and objects to store and manage case study data.

3. **Focus on User Interaction**:
   - Create an engaging user interface with filters, sorting, and responsive design.

---

## **Project Requirements**

1. **HTML Structure**:

   - Sections for Introduction, Case Studies, and Favorites.
   - Buttons and input fields for interacting with case studies.

2. **JavaScript Features**:

   - Fetch Pokémon data to populate case studies dynamically.
   - Enable filtering, sorting, and saving favorites.

3. **Responsive Design**:
   - Ensure the layout adapts seamlessly to different screen sizes.

---

## **Steps to Complete**

### **1. Structure the HTML**

- Create three main sections: **Introduction**, **Case Studies**, and **Favorites**.

**Example Code**:

```html
<header>
  <h1>Case Studies Hub</h1>
  <p>
    Explore my key projects and experiences, brought to life with dynamic
    functionality.
  </p>
</header>
<main>
  <section id="introduction">
    <h2>About Me</h2>
    <p>
      Welcome to my portfolio! Here you’ll find highlights of my work, including
      technical skills and achievements.
    </p>
  </section>
  <section id="case-studies">
    <h2>Case Studies</h2>
    <div id="case-studies-display" class="card-container"></div>
    <div id="controls" class="controls">
      <button id="filter-high-exp">Filter High Complexity</button>
      <button id="sort-by-name">Sort by Name</button>
      <button id="sort-by-exp">Sort by Complexity</button>
    </div>
  </section>
  <section id="favorites">
    <h2>Favorites</h2>
    <div id="favorites-display" class="card-container"></div>
  </section>
</main>
```

---

### **2. Enhance Functionality with JavaScript**

#### **Fetching and Displaying Data**

- Fetch Pokémon data to populate the case studies.

**Example Code**:

```javascript
const caseStudies = [];
const favorites = [];

async function fetchCaseStudy(nameOrId) {
  try {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${nameOrId}`
    );
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
    technologies: data.abilities.map((a) => a.ability.name),
  };
  caseStudies.push(caseStudy);
  displayCaseStudies(caseStudies);
}
```

#### **Filtering and Sorting**

- Filter by complexity and sort by name or complexity.

**Example Code**:

```javascript
function filterHighComplexity(threshold) {
  return caseStudies.filter((cs) => cs.complexity > threshold);
}

function sortByName() {
  caseStudies.sort((a, b) => a.name.localeCompare(b.name));
}

function sortByComplexity() {
  caseStudies.sort((a, b) => b.complexity - a.complexity);
}
```

#### **Favorites Management**

- Allow users to save and view favorite case studies.

**Example Code**:

```javascript
function addToFavorites(caseStudy) {
  favorites.push(caseStudy);
  displayFavorites(favorites);
}
```

---

### **3. Style with CSS**

- Create a clean, modern, and responsive design.

**Example Code**:

```css
/* General Styles */
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  background-color: #f4f4f9;
  color: #333;
  text-align: center;
}

header {
  background-color: #ffcb05;
  color: #2a75bb;
  padding: 20px;
  border-bottom: 5px solid #2a75bb;
}

header h1 {
  font-size: 2.5rem;
}

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

button {
  background: #2a75bb;
  color: white;
  padding: 10px;
  margin: 5px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.3s ease;
}

button:hover {
  background: #184785;
}
```

---

## **Expected Outcome**

1. A responsive portfolio-like hub with case studies displayed dynamically.
2. Functional filters, sorting, and a favorites section.
3. A professional design showcasing technical skills.

---

## **Bonus Challenge**

1. Persist favorites in `localStorage` to retain them between sessions.
2. Add an animation when a new case study is added.

---

## **Resources**

1. **Arrays**: [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
2. **Objects** [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)
3. **CSS Grid and Flexbox**: [CSS Tricks](https://css-tricks.com/)

---
