// Main Script
import { aboutModule, projectModule } from "./modules/index.js";

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

// Contact Module - fill it in yourself
// ...
