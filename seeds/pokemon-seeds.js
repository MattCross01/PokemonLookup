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
  {
    id: 2,
    name: "Bulbasaur",
    type: "Grass",
    hp: "45",
    attack: "49",
    defense: "49"
  },
  {
    id: 3,
    name: "Squirtle",
    type: "Water",
    hp: "44",
    attack: "48",
    defense: "65"
  },
  {
    id: 4,
    name: "Caterpie",
    type: "Bug",
    hp: "45",
    attack: "30",
    defense: "35"
  },
]

const seedPokemon = () => Pokemon.bulkCreate(pokemonData);

module.exports = seedPokemon;
