
# **Week 5: Modules and Closures**

## **Overview**
In Week 5, we will take a significant step toward writing more organized and reusable JavaScript code by exploring **modules** and **closures**. These concepts allow you to structure your code efficiently, reduce redundancy, and protect variables from unwanted access or modification.

This week’s project builds a **modular personal portfolio**, where each section of the page (e.g., About Me, Projects, Contact) is managed separately. By using modules and closures, we’ll make the code cleaner, reusable, and easier to maintain.

---

## **Learning Objectives**
1. **Understand Modules**:
   - Learn how to structure your code using ES6 modules.
   - Import and export functions, variables, and objects.

2. **Explore Closures**:
   - Understand closures as functions that "remember" the environment in which they were created.
   - Use closures to create private variables and encapsulate logic.

3. **Apply Concepts to the Project**:
   - Implement a modular approach to manage different sections of a personal portfolio.
   - Use closures to handle dynamic interactions securely.

---

## **Why Learn These Concepts?**
Think of modules as separate containers for different parts of your application. They help you avoid mixing unrelated functionality, just like keeping different tools in separate drawers. Closures, on the other hand, are like lockers with keys—only specific functions can access or modify the data inside.

---

## **Project Requirements**
1. **HTML Setup**:
   - Create a simple personal portfolio layout with sections for About Me, Projects, and Contact.
   - Add buttons to dynamically update or display content.

2. **JavaScript Features**:
   - Use modules to separate the logic for each section.
   - Implement closures to handle private data and encapsulated logic.

3. **Dynamic Updates**:
   - Allow users to interact with the portfolio (e.g., add projects, update contact details).

---

## **Steps to Complete**

### **1. Set Up the HTML**
- Create sections for the portfolio with placeholders for dynamic content.

**Example Code**:
```html
<section id="about-me">
    <h2>About Me</h2>
    <p id="about-content">This is a brief introduction about me.</p>
    <button id="update-about">Update About Me</button>
</section>
<section id="projects">
    <h2>Projects</h2>
    <ul id="project-list"></ul>
    <button id="add-project">Add Project</button>
</section>
<section id="contact">
    <h2>Contact</h2>
    <p id="contact-content">Email: example@example.com</p>
    <button id="update-contact">Update Contact</button>
</section>
```

---

### **2. Use Modules**
- Create separate modules for About Me, Projects, and Contact sections.

**Example Code** (in `about.js`):
```javascript
export const aboutModule = (() => {
    let aboutText = "This is a brief introduction about me.";

    function updateAbout(newText) {
        aboutText = newText;
        document.getElementById("about-content").textContent = aboutText;
    }

    return { updateAbout };
})();
```

**Main Module** (in `script.js`):
```javascript
import { aboutModule } from './about.js';

document.getElementById("update-about").addEventListener("click", () => {
    const newAbout = prompt("Update About Me:");
    if (newAbout) {
        aboutModule.updateAbout(newAbout);
    }
});
```

---

### **3. Use Closures**
- Use closures to handle private variables securely.

**Example Code** (in `projects.js`):
```javascript
export const projectModule = (() => {
    let projects = [];

    function addProject(name) {
        projects.push(name);
        const li = document.createElement("li");
        li.textContent = name;
        document.getElementById("project-list").appendChild(li);
    }

    return { addProject };
})();
```

**Main Module**:
```javascript
import { projectModule } from './projects.js';

document.getElementById("add-project").addEventListener("click", () => {
    const projectName = prompt("Enter project name:");
    if (projectName) {
        projectModule.addProject(projectName);
    }
});
```

---

### **4. Combine Modules**
- Import all modules into the main script and link buttons to respective functions.

---

## **Expected Output**
1. Users can update the "About Me" section dynamically.
2. Projects can be added to the list interactively.
3. Contact details can be updated securely.

---

## **Bonus Challenge**
1. Add a feature to remove projects using closures.
2. Save and load the portfolio state using `localStorage`.

---

## **Resources**
1. **Modules**: [MDN Web Docs - Modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules)
2. **Closures**: [JavaScript.info - Closures](https://javascript.info/closure)
3. **Event Handling**: [MDN Web Docs - Event Handlers](https://developer.mozilla.org/en-US/docs/Web/API/EventListener)

---
