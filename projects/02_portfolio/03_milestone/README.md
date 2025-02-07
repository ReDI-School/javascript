# **Week 7: Functional Programming**

## **Overview**

In Week 7, we’ll begin by introducing **arrays** and **objects**, two fundamental data structures in JavaScript. These concepts are crucial for managing and manipulating collections of data. We will then explore **functional programming** methods like `map`, `filter`, and `reduce` to write clean, efficient code.

This week’s project enhances the Pokémon Showcase by enabling advanced functionality such as filtering and sorting Pokémon data using these newly introduced concepts.

---

## **Learning Objectives**

1. **Understand Arrays and Objects**:

   - Learn what arrays and objects are and how they are used to store and organize data.
   - Differentiate between arrays (ordered lists) and objects (key-value pairs).

2. **Explore Functional Programming**:

   - Learn about `map`, `filter`, and `reduce` for working with arrays.
   - Apply functional programming principles to process and transform data.

3. **Apply Concepts to the Project**:
   - Add filtering and sorting functionality to the Pokémon Showcase.
   - Use arrays and objects to store and manipulate Pokémon data.

---

## **What Are Arrays and Objects?**

### **Arrays**

An **array** is an ordered list of values. Each value in an array is called an element, and each element has an index (starting from 0).

**Example**:

```javascript
const pokemonNames = ["Pikachu", "Bulbasaur", "Charmander"];
console.log(pokemonNames[0]); // Outputs: Pikachu
```

#### **Key Points**:

- Arrays are great for storing collections of related data.
- Elements can be accessed using their index.

### **Objects**

An **object** is a collection of key-value pairs, where each key (or property) is a unique identifier associated with a value.

**Example**:

```javascript
const pikachu = {
  name: "Pikachu",
  type: "Electric",
  baseExperience: 112,
};
console.log(pikachu.name); // Outputs: Pikachu
```

#### **Key Points**:

- Objects are used to store data with descriptive keys.
- Keys are like labels for values, making data easier to understand.

### **Using Arrays and Objects Together**

You can use objects within arrays to represent more complex data.

**Example**:

```javascript
const pokemonList = [
  { name: "Pikachu", baseExperience: 112 },
  { name: "Charmander", baseExperience: 120 },
];
console.log(pokemonList[0].name); // Outputs: Pikachu
```

---

## **What Is Functional Programming?**

Functional programming is a way of writing code where you focus on **functions** and how data flows through them. In JavaScript, functional programming often involves **array methods** like `map`, `filter`, and `reduce`.

### **Key Array Methods**

1. **`map`**:

   - Transforms each element in an array and returns a new array.
   - Example:
     ```javascript
     const names = ["Pikachu", "Bulbasaur"];
     const upperNames = names.map((name) => name.toUpperCase());
     console.log(upperNames); // Outputs: ["PIKACHU", "BULBASAUR"]
     ```

2. **`filter`**:

   - Returns a new array containing only the elements that meet a condition.
   - Example:
     ```javascript
     const pokemon = [
       { name: "Pikachu", baseExperience: 112 },
       { name: "Charmander", baseExperience: 120 },
     ];
     const highExp = pokemon.filter((p) => p.baseExperience > 115);
     console.log(highExp); // Outputs: [{ name: "Charmander", baseExperience: 120 }]
     ```

3. **`reduce`**:
   - Combines all elements in an array into a single value.
   - Example:
     ```javascript
     const experiences = [112, 120, 90];
     const totalExp = experiences.reduce((total, exp) => total + exp, 0);
     console.log(totalExp); // Outputs: 322
     ```

---

## **Project Requirements**

1. **Enhance the Pokémon Showcase**:

   - Add functionality to filter Pokémon by base experience or abilities.
   - Sort Pokémon by name or base experience.

2. **Use Arrays and Objects**:

   - Store fetched Pokémon as objects in an array.

3. **Functional Programming**:
   - Use `map`, `filter`, and `reduce` to manipulate Pokémon data.

---

## **Steps to Complete**

### **1. Update the HTML**

- Add new controls for filtering and sorting Pokémon.

**Example Code**:

```html
<div id="additional-controls" class="controls">
  <button id="filter-high-exp">Filter High Experience</button>
  <button id="sort-by-name">Sort by Name</button>
  <button id="sort-by-exp">Sort by Base Experience</button>
</div>
```

### **2. Work with Arrays and Objects**

- Store fetched Pokémon as objects in an array.

**Example Code**:

```javascript
const pokemonList = [];

function addPokemonToList(data) {
  const pokemon = {
    name: data.name,
    baseExperience: data.base_experience,
    abilities: data.abilities.map((a) => a.ability.name),
  };
  pokemonList.push(pokemon);
}
```

### **3. Implement Functional Programming**

#### **Filter High Experience Pokémon**

Use `filter` to return Pokémon with high base experience.

**Code**:

```javascript
function filterHighExperience(threshold) {
  return pokemonList.filter((p) => p.baseExperience > threshold);
}
```

#### **Sort Pokémon by Name or Base Experience**

**Code**:

```javascript
function sortByName() {
  pokemonList.sort((a, b) => a.name.localeCompare(b.name));
}

function sortByBaseExperience() {
  pokemonList.sort((a, b) => b.baseExperience - a.baseExperience);
}
```

### **4. Update the Display**

- Dynamically update the DOM to reflect changes in the Pokémon list.

---

## **Expected Output**

1. Users can filter and sort Pokémon dynamically.
2. Pokémon data is managed using arrays and objects.

---

## **Bonus Challenge**

1. Allow users to filter by specific abilities.
2. Persist the Pokémon list in `localStorage`.

---

## **Resources**

1. **Arrays**: [MDN Web Docs - Arrays](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
2. **Objects**: [JavaScript.info - Objects](https://javascript.info/object)
3. **Functional Programming**: [Hackernoon - Functional Programming With Javascript](https://hackernoon.com/functional-programming-with-javascript-a-deep-dive)

---
