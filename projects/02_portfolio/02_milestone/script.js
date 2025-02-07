
// Fetch a specific Pokémon by name or ID
async function fetchPokemon(nameOrId) {
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${nameOrId}`);
        if (!response.ok) {
            throw new Error("Pokémon not found!");
        }
        const data = await response.json();
        displayPokemon(data);
    } catch (error) {
        alert(error.message);
    }
}

// Display Pokémon details on the page
function displayPokemon(data) {
    const display = document.getElementById("pokemon-display");
    display.innerHTML = `
        <h3>${data.name.toUpperCase()}</h3>
        <img src="${data.sprites.front_default}" alt="${data.name}">
        <p><strong>Base Experience:</strong> ${data.base_experience}</p>
        <p><strong>Abilities:</strong> ${data.abilities.map(a => a.ability.name).join(", ")}</p>
    `;
    display.classList.add("highlight");
    setTimeout(() => display.classList.remove("highlight"), 1000);
}

// Fetch a random Pokémon
async function fetchRandomPokemon() {
    const randomId = Math.floor(Math.random() * 898) + 1; // Pokémon IDs range from 1 to 898
    await fetchPokemon(randomId);
}

// Attach event listeners to buttons
document.getElementById("fetch-pokemon").addEventListener("click", () => {
    const name = document.getElementById("pokemon-name").value.trim().toLowerCase();
    if (name) fetchPokemon(name);
});

document.getElementById("fetch-random").addEventListener("click", fetchRandomPokemon);
