# **Teacher Guide – Week 7: Functional Programming with Arrays and Objects**

## **Introduction**

This guide helps instructors introduce students to **arrays** and **objects**, two foundational data structures in JavaScript. Students will also learn functional programming techniques using methods like `map`, `filter`, and `reduce`. By the end of this milestone, students will enhance their Pokémon Showcase with filtering and sorting functionality.

---

## **Teaching Objectives**

1. **Introduce Arrays and Objects**:

   - Explain what arrays and objects are, and how they store and organize data.
   - Provide practical examples of how to access and manipulate arrays and objects.

2. **Explore Functional Programming**:

   - Teach array methods (`map`, `filter`, `reduce`) and their use cases.
   - Show how these methods enable clean and efficient data processing.

3. **Integrate Concepts into the Project**:
   - Guide students in enhancing the Pokémon Showcase by filtering and sorting Pokémon data.

---

## **Classroom Flow**

### **1. Introducing Arrays**

- Start with an analogy: Arrays are like shelves where each item has a specific position (index).
- Demonstrate creating and accessing arrays.

**Example Code**:

```javascript
const pokemonNames = ["Pikachu", "Bulbasaur", "Charmander"];
console.log(pokemonNames[0]); // Outputs: Pikachu
```

#### **Discussion Prompt**:

- When would you use an array instead of an object?

---

### **2. Introducing Objects**

- Explain objects as collections of key-value pairs, similar to labeled boxes holding specific items.
- Demonstrate creating and accessing objects.

**Example Code**:

```javascript
const pikachu = {
  name: "Pikachu",
  type: "Electric",
  baseExperience: 112,
};
console.log(pikachu.name); // Outputs: Pikachu
```

#### **Discussion Prompt**:

- How are objects different from arrays?

---

### **3. Combining Arrays and Objects**

- Show how arrays can store objects, making it possible to manage complex datasets.

**Example Code**:

```javascript
const pokemonList = [
  { name: "Pikachu", baseExperience: 112 },
  { name: "Charmander", baseExperience: 120 },
];
console.log(pokemonList[1].name); // Outputs: Charmander
```

---

### **4. Functional Programming Concepts**

#### **Using `map`**:

- Transform an array into a new array.

**Example Code**:

```javascript
const names = ["Pikachu", "Charmander"];
const upperNames = names.map((name) => name.toUpperCase());
console.log(upperNames); // Outputs: ["PIKACHU", "CHARMANDER"]
```

#### **Using `filter`**:

- Filter elements based on a condition.

**Example Code**:

```javascript
const pokemon = [
  { name: "Pikachu", baseExperience: 112 },
  { name: "Charmander", baseExperience: 120 },
];
const highExpPokemon = pokemon.filter((p) => p.baseExperience > 115);
console.log(highExpPokemon); // Outputs: [{ name: "Charmander", baseExperience: 120 }]
```

#### **Using `reduce`**:

- Combine elements into a single value.

**Example Code**:

```javascript
const experiences = [112, 120, 90];
const totalExp = experiences.reduce((total, exp) => total + exp, 0);
console.log(totalExp); // Outputs: 322
```

---

### **5. Applying Concepts to the Project**

- Guide students in storing fetched Pokémon data as objects in an array.
- Show how to filter and sort the Pokémon list.

**Key Code Examples**:

1. **Storing Pokémon in an Array**:

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

2. **Filtering Pokémon by Base Experience**:

   ```javascript
   function filterHighExperience(threshold) {
     return pokemonList.filter((p) => p.baseExperience > threshold);
   }
   ```

3. **Sorting Pokémon by Name**:
   ```javascript
   function sortByName() {
     pokemonList.sort((a, b) => a.name.localeCompare(b.name));
   }
   ```

---

## **Common Mistakes to Address**

1. **Array vs. Object Confusion**:

   - Clarify when to use arrays (ordered lists) versus objects (key-value pairs).

2. **Functional Programming Misunderstandings**:

   - Emphasize the difference between `map`, `filter`, and `reduce`.

3. **DOM Selection Errors**:
   - Ensure students correctly select and update DOM elements when displaying filtered/sorted data.

---

## **Teaching Strategies**

1. **Visualize Data Structures**:

   - Use diagrams to show how arrays and objects store data.

2. **Incremental Development**:

   - Encourage students to build and test one feature (e.g., filtering) before moving on to the next.

3. **Debugging Practice**:
   - Teach students to use `console.log` to inspect arrays and objects during development.

---

## **Expected Outcomes**

By the end of this milestone, students should:

1. Understand how to use arrays and objects to store and organize data.
2. Apply functional programming methods to manipulate data.
3. Enhance the Pokémon Showcase with filtering and sorting functionality.

---

## **Additional Resources**

1. **Arrays**: [MDN Web Docs - Arrays](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
2. **Objects**: [JavaScript.info - Objects](https://javascript.info/object)
3. **Functional Programming**: [Hackernoon - Functional Programming With Javascript](https://hackernoon.com/functional-programming-with-javascript-a-deep-dive)

---
