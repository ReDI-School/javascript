# **Teacher Guide – Week 8: Case Studies Hub**

## **Introduction**

This guide helps instructors consolidate all concepts learned in previous weeks by guiding students through building a **Case Studies Hub**. This project integrates HTML, CSS, and JavaScript to create an interactive, narrative-driven portfolio that highlights key technical skills and experiences.

---

## **Teaching Objectives**

1. **Reinforce Key Concepts**:

   - HTML for structuring content and layout.
   - CSS for responsive and visually engaging designs.
   - JavaScript for interactivity, dynamic updates, and data management.

2. **Integrate Functional Programming**:

   - Use methods like `map`, `filter`, and `reduce` to manipulate case study data.

3. **Encourage Creativity**:
   - Allow students to personalize their Case Studies Hub with unique styles and narratives.

---

## **Classroom Flow**

### **1. Review Key Concepts**

#### **HTML and CSS Basics**:

- Discuss how semantic HTML improves accessibility and organization.
- Reinforce responsive design principles using CSS Flexbox and Grid.

#### **JavaScript Fundamentals**:

- Review the use of arrays and objects for managing data.
- Recap DOM manipulation, event listeners, and asynchronous programming.

---

### **2. Introduce the Case Studies Hub**

#### **Overview**:

- A portfolio-like project that dynamically displays "case studies" (Pokémon) with filtering, sorting, and favorites.

#### **Key Components**:

1. **Introduction Section**:
   - Static content introducing the developer.
2. **Case Studies Section**:
   - A grid layout displaying dynamically fetched case studies.
   - Controls for filtering and sorting.
3. **Favorites Section**:
   - A persistent list of user-selected favorites.

---

### **3. Hands-On Guidance**

#### **Step 1: Structuring the HTML**

- Guide students to create semantic sections for Introduction, Case Studies, and Favorites.

**Teaching Tip**:

- Emphasize semantic tags like `<section>`, `<header>`, and `<main>` for accessibility.

#### **Step 2: Enhancing with CSS**

- Teach students to apply responsive styles using Flexbox and Grid.

**Key Concepts**:

- Flexbox for centering and aligning cards.
- CSS transitions for interactive button effects.

#### **Step 3: Fetching and Displaying Data**

- Use `fetch` to retrieve Pokémon data and populate the Case Studies section.

**Teaching Tip**:

- Walk through how to inspect API responses and extract relevant data.

**Example Code**:

```javascript
async function fetchCaseStudy(nameOrId) {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${nameOrId}`);
  const data = await response.json();
  addCaseStudy(data);
}
```

#### **Step 4: Adding Filtering and Sorting**

- Demonstrate how to use `filter` and `sort` to manipulate case study data.

**Example Code**:

```javascript
function filterHighComplexity(threshold) {
  return caseStudies.filter((cs) => cs.complexity > threshold);
}

function sortByName() {
  caseStudies.sort((a, b) => a.name.localeCompare(b.name));
}
```

#### **Step 5: Managing Favorites**

- Teach how to save and display favorites dynamically.

**Example Code**:

```javascript
function addToFavorites(caseStudy) {
  favorites.push(caseStudy);
  displayFavorites(favorites);
}
```

---

## **Common Mistakes to Address**

1. **Incorrect DOM Selection**:

   - Remind students to check element IDs and classes when updating the DOM.

2. **Array and Object Mismanagement**:

   - Ensure students understand how to add, modify, and access objects within arrays.

3. **CSS Overlaps**:
   - Teach students how to use classes effectively to avoid style conflicts.

---

## **Teaching Strategies**

1. **Encourage Incremental Development**:

   - Build and test one feature at a time (e.g., filtering before sorting).

2. **Debugging Practice**:

   - Show students how to use `console.log` to inspect data and troubleshoot errors.

3. **Focus on Personalization**:
   - Allow students to customize styles and narratives to make the project their own.

---

## **Expected Outcomes**

By the end of this milestone, students should:

1. Understand how to integrate HTML, CSS, and JavaScript to build a cohesive project.
2. Demonstrate mastery of arrays, objects, and functional programming methods.
3. Create a fully functional and interactive portfolio-like Case Studies Hub.

---

## **Additional Resources**

1. **Arrays**: [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
2. **Objects** [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)
3. **CSS Grid and Flexbox**: [CSS Tricks](https://css-tricks.com/)

---
