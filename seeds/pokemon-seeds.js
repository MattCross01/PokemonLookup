const { Pokemon } = require('../models');

const pokemonData = [
  {
    id: 1,
    name: "Pikachu",
    type: "Electric",
    hp: "35",
    attack: "55",
    defense: "40"
  },
]

const seedPokemon = () => Pokemon.bulkCreate(pokemonData);

module.exports = seedPokemon;
