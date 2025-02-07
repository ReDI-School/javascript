
# **Week 5: Modules and Closures – Code Guide**

## **Introduction**
This project demonstrates how to use **modules** and **closures** to organize and secure your JavaScript code. By building a modular personal portfolio, you learned to separate functionality into distinct parts, encapsulate data with closures, and dynamically update content using JavaScript.

This guide explains the key aspects of the code in `index.html`, `script.js`, and `style.css`.

---

## **What’s Happening in index.html?**
The `index.html` file structures the portfolio into three main sections: About Me, Projects, and Contact. Each section includes buttons for user interaction.

1. **About Me Section**:
   - Displays a brief introduction with a button to update the content dynamically.
   - Example:
     ```html
     <section id="about-me">
         <h2>About Me</h2>
         <p id="about-content">This is a brief introduction about me.</p>
         <button id="update-about">Update About Me</button>
     </section>
     ```

2. **Projects Section**:
   - Includes a list for dynamically added projects and a button to add new ones.
   - Example:
     ```html
     <section id="projects">
         <h2>Projects</h2>
         <ul id="project-list"></ul>
         <button id="add-project">Add Project</button>
     </section>
     ```

3. **Contact Section**:
   - Displays contact details with a button for updates.
   - Example:
     ```html
     <section id="contact">
         <h2>Contact</h2>
         <p id="contact-content">Email: example@example.com</p>
         <button id="update-contact">Update Contact</button>
     </section>
     ```

---

## **What’s Happening in script.js?**
The `script.js` file contains modules for each section and integrates them into the main script.

### **1. About Me Module**
Encapsulates the "About Me" content in a closure. The `updateAbout` function updates the displayed text dynamically.

**Code Example**:
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

### **2. Projects Module**
Uses a closure to store and manage a list of projects. The `addProject` function adds a new project to the list dynamically.

**Code Example**:
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

### **3. Main Script**
Imports the modules and links them to buttons for user interaction.

**Code Example**:
```javascript
import { aboutModule } from './about.js';
import { projectModule } from './projects.js';

document.getElementById("update-about").addEventListener("click", () => {
    const newAbout = prompt("Update About Me:");
    if (newAbout) {
        aboutModule.updateAbout(newAbout);
    }
});

document.getElementById("add-project").addEventListener("click", () => {
    const projectName = prompt("Enter project name:");
    if (projectName) {
        projectModule.addProject(projectName);
    }
});
```

---

## **What’s Happening in style.css?**
The `style.css` file provides a clean and professional appearance for the portfolio.

1. **General Layout**:
   - Centers content with adequate padding and spacing for readability.
   - Example:
     ```css
     main {
         max-width: 800px;
         margin: 20px auto;
         padding: 20px;
         background: white;
         box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
         border-radius: 10px;
     }
     ```

2. **Buttons**:
   - Styled with hover effects to improve user experience.
   - Example:
     ```css
     button {
         background: #6c63ff;
         color: white;
         border: none;
         padding: 10px 15px;
         border-radius: 5px;
         cursor: pointer;
         transition: background 0.3s ease;
     }

     button:hover {
         background: #594ae2;
     }
     ```

3. **Footer**:
   - Simple and cohesive design to complete the page.
   - Example:
     ```css
     footer {
         text-align: center;
         padding: 10px;
         background: #333;
         color: white;
         margin-top: 20px;
     }
     ```

---

## **Summary**
1. **index.html**:
   - Provides a clean structure for the portfolio with placeholders for dynamic content.

2. **script.js**:
   - Demonstrates modularity and encapsulation using ES6 modules and closures.

3. **style.css**:
   - Enhances the visual design with a modern and clean look.

---
