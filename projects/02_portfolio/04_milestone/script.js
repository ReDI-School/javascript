
// Data storage for case studies and favorites
const caseStudies = [];
const favorites = [];

// Fetch case study data
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

// Add case study to the list
function addCaseStudy(data) {
    const caseStudy = {
        name: data.name,
        complexity: data.base_experience,
        technologies: data.abilities.map(a => a.ability.name)
    };
    caseStudies.push(caseStudy);
    displayCaseStudies(caseStudies);
}

// Display all case studies
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

// Add a case study to favorites
function addToFavorites(name) {
    const favorite = caseStudies.find(cs => cs.name === name);
    if (favorite && !favorites.includes(favorite)) {
        favorites.push(favorite);
        displayFavorites(favorites);
    }
}

// Display favorites
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

// Filter and sort functions
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

// Event listeners for controls
document.getElementById("filter-high-exp").addEventListener("click", () => {
    filterHighComplexity(100);
});

document.getElementById("sort-by-name").addEventListener("click", sortByName);
document.getElementById("sort-by-exp").addEventListener("click", sortByComplexity);

// Example data for testing
fetchCaseStudy("pikachu");
fetchCaseStudy("bulbasaur");
fetchCaseStudy("charmander");
