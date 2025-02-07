
// Store fetched Pokémon in an array
const pokemonList = [];

// Fetch a specific Pokémon by name or ID
async function fetchPokemon(nameOrId) {
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${nameOrId}`);
        if (!response.ok) {
            throw new Error("Pokémon not found!");
        }
        const data = await response.json();
        addPokemonToList(data);
        displayPokemon(data);
    } catch (error) {
        alert(error.message);
    }
}

// Fetch a random Pokémon
async function fetchRandomPokemon() {
    const randomId = Math.floor(Math.random() * 898) + 1;
    await fetchPokemon(randomId);
}

// Add fetched Pokémon to the list
function addPokemonToList(data) {
    const pokemon = {
        name: data.name,
        baseExperience: data.base_experience,
        abilities: data.abilities.map(a => a.ability.name)
    };
    pokemonList.push(pokemon);
    console.log(pokemonList); // Debug: View the updated list of Pokémon
}

// Display a single Pokémon
function displayPokemon(data) {
    const display = document.getElementById("pokemon-display");
    display.innerHTML = `
        <div class="card">
            <h3>${data.name.toUpperCase()}</h3>
            <img src="${data.sprites.front_default}" alt="${data.name}">
            <p><strong>Base Experience:</strong> ${data.base_experience}</p>
            <p><strong>Abilities:</strong> ${data.abilities.map(a => a.ability.name).join(", ")}</p>
        </div>
    `;
}

// Display all Pokémon in the list
function displayAllPokemon(list = pokemonList) {
    const display = document.getElementById("pokemon-display");
    display.innerHTML = list
        .map(pokemon => `
            <div class="card">
                <h3>${pokemon.name.toUpperCase()}</h3>
                <p><strong>Base Experience:</strong> ${pokemon.baseExperience}</p>
                <p><strong>Abilities:</strong> ${pokemon.abilities.join(", ")}</p>
            </div>
        `)
        .join("");
}

// Filter Pokémon by base experience
function filterHighExperience(threshold) {
    return pokemonList.filter(p => p.baseExperience > threshold);
}

// Sort Pokémon by name
function sortByName() {
    pokemonList.sort((a, b) => a.name.localeCompare(b.name));
}

// Sort Pokémon by base experience
function sortByBaseExperience() {
    pokemonList.sort((a, b) => b.baseExperience - a.baseExperience);
}

// Event Listeners
document.getElementById("fetch-pokemon").addEventListener("click", () => {
    const name = document.getElementById("pokemon-name").value.trim().toLowerCase();
    if (name) fetchPokemon(name);
});

document.getElementById("fetch-random").addEventListener("click", fetchRandomPokemon);

document.getElementById("filter-high-exp").addEventListener("click", () => {
    const highExpPokemon = filterHighExperience(100);
    displayAllPokemon(highExpPokemon);
});

document.getElementById("sort-by-name").addEventListener("click", () => {
    sortByName();
    displayAllPokemon();
});

document.getElementById("sort-by-exp").addEventListener("click", () => {
    sortByBaseExperience();
    displayAllPokemon();
});
