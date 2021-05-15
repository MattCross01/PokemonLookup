// basic function to lookup pokemon
function findPokemon(id) {
  fetch(`https://pokeapi.co/api/v2/ability/${id}}/`)
    .then((res) => res.json())
    .then((data) => console.log(data));
}

// basic function to lookup pokemon characteristics
function pokeChar(id) {
  fetch(`https://pokeapi.co/api/v2/ability/${id}/`)
    .then((res) => res.json())
    .then((data) => console.log(data));
}

// basic function for pokemon locations
function pokeLocation(id) {
  fetch(`https://pokeapi.co/api/v2/pokemon/${id}/encounters`)
    .then((res) => res.json())
    .then((data) => console.log(data));
}

//basic function for pokemon habitats
function pokeHabitat(id) {
  fetch(`https://pokeapi.co/api/v2/pokemon-habitat/${id}/`)
    .then((res) => res.json())
    .then((data) => console.log(data));
}

// basic function to get pokemon stats
function pokeStats(id) {
  fetch(`https://pokeapi.co/api/v2/stat/${id}/`)
    .then((res) => res.json())
    .then((data) => console.log(data));
}

// basic function to get pokemon type
function pokeType(id) {
  fetch(`https://pokeapi.co/api/v2/type/${id}/`)
    .then((res) => res.json())
    .then((data) => console.log(data));
}

// basic function to get evolution chains
function pokeEvolveChain(id) {
  fetch(`https://pokeapi.co/api/v2/evolution-chain/${id}`)
    .then((res) => res.json())
    .then((data) => console.log(data));
}

// basic function to get evolution triggers
function pokeEvolveTrigger(id) {
  fetch(`https://pokeapi.co/api/v2/evolution-trigger/${id}/`)
    .then((res) => res.json())
    .then((data) => console.log(data));
}