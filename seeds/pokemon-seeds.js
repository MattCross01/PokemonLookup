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
  {
    id: 5,
    name: "Charizard",
    type: "Fire",
    hp: "78",
    attack: "84",
    defense: "78"
  },
  {
    id: 6,
    name: "Blastoise",
    type: "Water",
    hp: "79",
    attack: "83",
    defense: "100"
  },
  {
    id: 7,
    name: "Beedrill",
    type: "Bug",
    hp: "65",
    attack: "90",
    defense: "40"
  },
  {
    id: 8,
    name: "Pidgey",
    type: "Normal",
    hp: "40",
    attack: "45",
    defense: "40"
  },
  {
    id: 9,
    name: "Rattata",
    type: "Normal",
    hp: "30",
    attack: "56",
    defense: "35"
  },
  {
    id: 10,
    name: "Raichu",
    type: "Electric",
    hp: "60",
    attack: "90",
    defense: "55"
  },
  {
    id: 11,
    name: "Sandshrew",
    type: "Ground",
    hp: "50",
    attack: "75",
    defense: "85"
  },
  {
    id: 12,
    name: "Nidoran",
    type: "Poison",
    hp: "55",
    attack: "47",
    defense: "52"
  },
  {
    id: 13,
    name: "Clefairy",
    type: "Fairy",
    hp: "70",
    attack: "45",
    defense: "48"
  },
  {
    id: 14,
    name: "Vulpix",
    type: "Fire",
    hp: "38",
    attack: "41",
    defense: "40"
  },
  {
    id: 15,
    name: "Ninetails",
    type: "Fire",
    hp: "73",
    attack: "76",
    defense: "75"
  },
  {
    id: 16,
    name: "Jigglypuff",
    type: "Fairy",
    hp: "115",
    attack: "45",
    defense: "20"
  },
  {
    id: 17,
    name: "Zubat",
    type: "Poison",
    hp: "40",
    attack: "45",
    defense: "35"
  },
  {
    id: 18,
    name: "Paras",
    type: "Bug",
    hp: "35",
    attack: "70",
    defense: "55"
  },
  {
    id: 19,
    name: "Diglett",
    type: "Ground",
    hp: "10",
    attack: "55",
    defense: "25"
  },
  {
    id: 20,
    name: "Meowth",
    type: "Normal",
    hp: "40",
    attack: "45",
    defense: "35"
  },
]

const seedPokemon = () => Pokemon.bulkCreate(pokemonData);

module.exports = seedPokemon;
