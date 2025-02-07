// About Me Module
export const aboutModule = (() => {
  let aboutText = "This is a brief introduction about me.";

  function updateAbout(newText) {
    aboutText = newText;
    document.getElementById("about-content").textContent = aboutText;
  }

  return { updateAbout };
})();

// Projects Module
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

// Contact Module
export const contactModule = (() => {
  // ... fill in later
})();
