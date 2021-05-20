const { Pokemon } = require('../models');

const pokemonData = [
  {
    id: 1,
    name: "Bulbasaur",
    type: "Grass/Poison",
    hp: "45",
    attack: "49",
    defense: "49"
  },
  {
    id: 2,
    name: "Ivysaur",
    type: "Grass/Poison",
    hp: "60",
    attack: "62",
    defense: "63"
  },
  {
    id: 3,
    name: "Venusaur",
    type: "Grass/Poison",
    hp: "80",
    attack: "82",
    defense: "83"
  },
  {
    id: 4,
    name: "Charmander",
    type: "Fire",
    hp: "39",
    attack: "52",
    defense: "43"
  },
  {
    id: 5,
    name: "Charmeleon",
    type: "Fire",
    hp: "58",
    attack: "64",
    defense: "58"
  },
  {
    id: 6,
    name: "Charizard",
    type: "Fire/Flying",
    hp: "78",
    attack: "84",
    defense: "78"
  },
  {
    id: 7,
    name: "Squirtle",
    type: "Water",
    hp: "44",
    attack: "48",
    defense: "65"
  },
  {
    id: 8,
    name: "Wartortle",
    type: "Water",
    hp: "59",
    attack: "63",
    defense: "80"
  },
  {
    id: 9,
    name: "Blastoise",
    type: "Water",
    hp: "79",
    attack: "83",
    defense: "100"
  },
  {
    id: 10,
    name: "Caterpie",
    type: "Bug",
    hp: "45",
    attack: "30",
    defense: "35"
  },
  {
    id: 11,
    name: "Metapod",
    type: "Bug",
    hp: "50",
    attack: "20",
    defense: "55"
  },
  {
    id: 12,
    name: "Butterfree",
    type: "Bug/Flying",
    hp: "60",
    attack: "45",
    defense: "50"
  },
  {
    id: 13,
    name: "Weedle",
    type: "Bug/Poison",
    hp: "40",
    attack: "35",
    defense: "30"
  },
  {
    id: 14,
    name: "Kakuna",
    type: "Bug/Poison",
    hp: "45",
    attack: "25",
    defense: "50"
  },
  {
    id: 15,
    name: "Beedrill",
    type: "Bug/Poison",
    hp: "65",
    attack: "90",
    defense: "40"
  },
  {
    id: 16,
    name: "Pidgey",
    type: "Normal/Flying",
    hp: "40",
    attack: "45",
    defense: "40"
  },
  {
    id: 17,
    name: "Pidgeotto",
    type: "Normal/Flying",
    hp: "63",
    attack: "60",
    defense: "55"
  },
  {
    id: 18,
    name: "Pidgeot",
    type: "Normal/Flying",
    hp: "83",
    attack: "80",
    defense: "75"
  },
  {
    id: 19,
    name: "Rattata",
    type: "Normal",
    hp: "30",
    attack: "56",
    defense: "35"
  },
  {
    id: 20,
    name: "Raticate",
    type: "Normal",
    hp: "55",
    attack: "81",
    defense: "60"
  },
  {
    id: 21,
    name: "Spearow",
    type: "Normal/Flying",
    hp: "30",
    attack: "60",
    defense: "30"
  },
  {
    id: 22,
    name: "Fearow",
    type: "Normal/Flying",
    hp: "65",
    attack: "90",
    defense: "65"
  },
  {
    id: 23,
    name: "Ekans",
    type: "Poison",
    hp: "35",
    attack: "60",
    defense: "44"
  },
  {
    id: 24,
    name: "Arbok",
    type: "Poison",
    hp: "60",
    attack: "95",
    defense: "69"
  },
  {
    id: 25,
    name: "Pikachu",
    type: "Electric",
    hp: "35",
    attack: "55",
    defense: "40"
  },
  {
    id: 26,
    name: "Raichu",
    type: "Electric",
    hp: "60",
    attack: "90",
    defense: "55"
  },
  {
    id: 27,
    name: "Sandshrew",
    type: "Ground",
    hp: "50",
    attack: "75",
    defense: "85"
  },
  {
    id: 28,
    name: "Sandslash",
    type: "Ground",
    hp: "75",
    attack: "100",
    defense: "110"
  },
  {
    id: 29,
    name: "Nidoran",
    type: "Poison",
    hp: "55",
    attack: "47",
    defense: "52"
  },
  {
    id: 30,
    name: "Nidorina",
    type: "Poison",
    hp: "70",
    attack: "62",
    defense: "67"
  },
  {
    id: 31,
    name: "Nidoqueen",
    type: "Poison/Ground",
    hp: "90",
    attack: "92",
    defense: "87"
  },
  {
    id: 32,
    name: "Nidorino",
    type: "Poison",
    hp: "61",
    attack: "72",
    defense: "57"
  },
  {
    id: 33,
    name: "Nidoking",
    type: "Poison/Ground",
    hp: "81",
    attack: "102",
    defense: "77"
  },
  {
    id: 34,
    name: "Clefairy",
    type: "Fairy",
    hp: "70",
    attack: "45",
    defense: "48"
  },
  {
    id: 35,
    name: "Clefable",
    type: "Fairy",
    hp: "95",
    attack: "70",
    defense: "73"
  },
  {
    id: 36,
    name: "Vulpix",
    type: "Fire",
    hp: "38",
    attack: "41",
    defense: "40"
  },
  {
    id: 37,
    name: "Ninetales",
    type: "Fire",
    hp: "73",
    attack: "76",
    defense: "75"
  },
  {
    id: 38,
    name: "Jigglypuff",
    type: "Fairy/Normal",
    hp: "115",
    attack: "45",
    defense: "20"
  },
  {
    id: 39,
    name: "Wigglytuff",
    type: "Fairy/Normal",
    hp: "140",
    attack: "70",
    defense: "45"
  },
  {
    id: 40,
    name: "Zubat",
    type: "Poison/Flying",
    hp: "40",
    attack: "45",
    defense: "35"
  },
  {
    id: 41,
    name: "Golbat",
    type: "Poison/Flying",
    hp: "75",
    attack: "80",
    defense: "70"
  },
  {
    id: 42,
    name: "Oddish",
    type: "Grass/Poison",
    hp: "45",
    attack: "50",
    defense: "55"
  },
  {
    id: 43,
    name: "Gloom",
    type: "Grass/Poison",
    hp: "60",
    attack: "65",
    defense: "70"
  },
  {
    id: 44,
    name: "Vileplume",
    type: "Grass/Poison",
    hp: "75",
    attack: "80",
    defense: "85"
  },
  {
    id: 45,
    name: "Paras",
    type: "Bug/Grass",
    hp: "35",
    attack: "70",
    defense: "55"
  },
  {
    id: 46,
    name: "Parasect",
    type: "Bug/Grass",
    hp: "60",
    attack: "95",
    defense: "80"
  },
  {
    id: 47,
    name: "Venonat",
    type: "Bug/Poison",
    hp: "60",
    attack: "55",
    defense: "50"
  },
  {
    id: 48,
    name: "Venomoth",
    type: "Bug/Poison",
    hp: "70",
    attack: "65",
    defense: "60"
  },
  {
    id: 49,
    name: "Diglett",
    type: "Ground",
    hp: "10",
    attack: "55",
    defense: "25"
  },
  {
    id: 50,
    name: "Dugtrio",
    type: "Ground",
    hp: "35",
    attack: "100",
    defense: "50"
  },
  {
    id: 51,
    name: "Meowth",
    type: "Normal",
    hp: "40",
    attack: "45",
    defense: "35"
  },
  {
    id: 52,
    name: "Persian",
    type: "Normal",
    hp: "65",
    attack: "70",
    defense: "60"
  },
  {
    id: 53,
    name: "Psyduck",
    type: "Water",
    hp: "50",
    attack: "52",
    defense: "48"
  },
  {
    id: 54,
    name: "Golduck",
    type: "Water",
    hp: "80",
    attack: "82",
    defense: "78"
  },
  {
    id: 55,
    name: "Mankey",
    type: "Fighting",
    hp: "40",
    attack: "80",
    defense: "35"
  },
  {
    id: 56,
    name: "Primeape",
    type: "Fighting",
    hp: "65",
    attack: "105",
    defense: "60"
  },
  {
    id: 57,
    name: "Growlithe",
    type: "Fire",
    hp: "55",
    attack: "70",
    defense: "45"
  },
  {
    id: 58,
    name: "Arcanine",
    type: "Fire",
    hp: "90",
    attack: "110",
    defense: "80"
  },
  {
    id: 59,
    name: "Poliwag",
    type: "Water",
    hp: "40",
    attack: "50",
    defense: "40"
  },
  {
    id: 60,
    name: "Poliwhirl",
    type: "Water",
    hp: "65",
    attack: "65",
    defense: "65"
  },
  {
    id: 61,
    name: "Poliwrath",
    type: "Water/Fighting",
    hp: "90",
    attack: "95",
    defense: "95"
  },
  {
    id: 62,
    name: "Abra",
    type: "Psychic",
    hp: "25",
    attack: "20",
    defense: "15"
  },
  {
    id: 63,
    name: "Kadabra",
    type: "Psychic",
    hp: "40",
    attack: "35",
    defense: "30"
  },
  {
    id: 64,
    name: "Alakazam",
    type: "Psychic",
    hp: "55",
    attack: "50",
    defense: "45"
  },
  {
    id: 65,
    name: "Machop",
    type: "Fighting",
    hp: "70",
    attack: "80",
    defense: "50"
  },
  {
    id: 66,
    name: "Machoke",
    type: "Fighting",
    hp: "70",
    attack: "100",
    defense: "70"
  },
  {
    id: 67,
    name: "Machamp",
    type: "Fighting",
    hp: "90",
    attack: "130",
    defense: "80"
  },
  {
    id: 68,
    name: "Bellsprout",
    type: "Grass/Poison",
    hp: "50",
    attack: "75",
    defense: "35"
  },
  {
    id: 69,
    name: "Weepinbell",
    type: "Grass/Poison",
    hp: "65",
    attack: "90",
    defense: "50"
  },
  {
    id: 70,
    name: "Victreebel",
    type: "Grass/Poison",
    hp: "80",
    attack: "105",
    defense: "65"
  },
  {
    id: 71,
    name: "Tentacool",
    type: "Water/Poison",
    hp: "40",
    attack: "40",
    defense: "35"
  },
  {
    id: 72,
    name: "Geodude",
    type: "Rock/Ground",
    hp: "40",
    attack: "80",
    defense: "100"
  },
  {
    id: 73,
    name: "Graveler",
    type: "Rock/Ground",
    hp: "55",
    attack: "95",
    defense: "115"
  },
  {
    id: 74,
    name: "Golem",
    type: "Rock/Ground",
    hp: "80",
    attack: "120",
    defense: "130"
  },
  {
    id: 75,
    name: "Ponyta",
    type: "Fire",
    hp: "50",
    attack: "85",
    defense: "55"
  },
  {
    id: 76,
    name: "Rapidash",
    type: "Fire",
    hp: "65",
    attack: "100",
    defense: "70"
  },
  {
    id: 77,
    name: "Slowpoke",
    type: "Water/Psychic",
    hp: "90",
    attack: "65",
    defense: "65"
  },
  {
    id: 78,
    name: "Slowbro",
    type: "Water/Psychic",
    hp: "95",
    attack: "75",
    defense: "110"
  },
  {
    id: 79,
    name: "Magnemite",
    type: "Electric/Steel",
    hp: "25",
    attack: "35",
    defense: "70"
  },
  {
    id: 80,
    name: "Magneton",
    type: "Electric/Steel",
    hp: "50",
    attack: "60",
    defense: "95"
  },
  {
    id: 81,
    name: "Farfetch'd",
    type: "Normal/Flying",
    hp: "52",
    attack: "90",
    defense: "55"
  },
  {
    id: 82,
    name: "Doduo",
    type: "Normal/Flying",
    hp: "35",
    attack: "85",
    defense: "45"
  },
  {
    id: 83,
    name: "Dodrio",
    type: "Normal/Flying",
    hp: "60",
    attack: "110",
    defense: "70"
  },
  {
    id: 84,
    name: "Seel",
    type: "Water",
    hp: "65",
    attack: "45",
    defense: "55"
  },
  {
    id: 85,
    name: "Dewgong",
    type: "Water/Ice",
    hp: "90",
    attack: "70",
    defense: "80"
  },
  {
    id: 86,
    name: "Grimer",
    type: "Poison",
    hp: "80",
    attack: "80",
    defense: "50"
  },
  {
    id: 87,
    name: "Muk",
    type: "Poison",
    hp: "105",
    attack: "105",
    defense: "75"
  },
  {
    id: 88,
    name: "Shellder",
    type: "Water",
    hp: "30",
    attack: "65",
    defense: "100"
  },
  {
    id: 89,
    name: "Cloyster",
    type: "Water/Ice",
    hp: "50",
    attack: "95",
    defense: "180"
  },
  {
    id: 90,
    name: "Gastly",
    type: "Ghost/Poison",
    hp: "30",
    attack: "35",
    defense: "40"
  },
  {
    id: 91,
    name: "Haunter",
    type: "Ghost/Poison",
    hp: "45",
    attack: "50",
    defense: "45"
  },
  {
    id: 92,
    name: "Gengar",
    type: "Ghost/Poison",
    hp: "60",
    attack: "65",
    defense: "60"
  },
  {
    id: 93,
    name: "Onix",
    type: "Rock/Ground",
    hp: "35",
    attack: "45",
    defense: "160"
  },
  {
    id: 94,
    name: "Drowzee",
    type: "Psychic",
    hp: "60",
    attack: "48",
    defense: "45"
  },
  {
    id: 95,
    name: "Hypno",
    type: "Psychic",
    hp: "85",
    attack: "73",
    defense: "70"
  },
  {
    id: 96,
    name: "Krabby",
    type: "Water",
    hp: "30",
    attack: "105",
    defense: "90"
  },
  {
    id: 97,
    name: "Kingler",
    type: "Water",
    hp: "55",
    attack: "130",
    defense: "115"
  },
  {
    id: 98,
    name: "Voltorb",
    type: "Electric",
    hp: "40",
    attack: "30",
    defense: "50"
  },
  {
    id: 99,
    name: "Electrode",
    type: "Electric",
    hp: "60",
    attack: "50",
    defense: "70"
  },
  {
    id: 100,
    name: "Exeggcute",
    type: "Grass/Psychic",
    hp: "95",
    attack: "95",
    defense: "85"
  },
  {
    id: 101,
    name: "Exeggutor",
    type: "Grass/Psychic",
    hp: "95",
    attack: "95",
    defense: "85"
  },
  {
    id: 102,
    name: "Cubone",
    type: "Ground",
    hp: "50",
    attack: "50",
    defense: "95"
  },
  {
    id: 103,
    name: "Marowak",
    type: "Ground",
    hp: "60",
    attack: "80",
    defense: "100"
  },
  {
    id: 104,
    name: "Hitmonlee",
    type: "Fighting",
    hp: "50",
    attack: "120",
    defense: "53"
  },
  {
    id: 105,
    name: "Hitmonchan",
    type: "Fighting",
    hp: "50",
    attack: "105",
    defense: "79"
  },
  {
    id: 106,
    name: "Lickitung",
    type: "Normal",
    hp: "90",
    attack: "55",
    defense: "75"
  },
  {
    id: 107,
    name: "Koffing",
    type: "Poison",
    hp: "40",
    attack: "65",
    defense: "95"
  },
  {
    id: 108,
    name: "Weezing",
    type: "Poison",
    hp: "65",
    attack: "90",
    defense: "120"
  },
  {
    id: 109,
    name: "Rhyhorn",
    type: "Ground/Rock",
    hp: "80",
    attack: "85",
    defense: "95"
  },
  {
    id: 110,
    name: "Rhydon",
    type: "Ground/Rock",
    hp: "105",
    attack: "130",
    defense: "120"
  },
  {
    id: 111,
    name: "Chansey",
    type: "Normal",
    hp: "250",
    attack: "5",
    defense: "5"
  },
  {
    id: 112,
    name: "Tangela",
    type: "Grass",
    hp: "65",
    attack: "55",
    defense: "115"
  },
  {
    id: 113,
    name: "Kangaskhan",
    type: "Normal",
    hp: "105",
    attack: "95",
    defense: "80"
  },
  {
    id: 114,
    name: "Horsea",
    type: "Water",
    hp: "30",
    attack: "40",
    defense: "70"
  },
  {
    id: 115,
    name: "Seadra",
    type: "Water",
    hp: "55",
    attack: "65",
    defense: "95"
  },
  {
    id: 116,
    name: "Goldeen",
    type: "Water",
    hp: "45",
    attack: "67",
    defense: "70"
  },
  {
    id: 117,
    name: "Seaking",
    type: "Water",
    hp: "80",
    attack: "92",
    defense: "65"
  },
  {
    id: 118,
    name: "Staryu",
    type: "Water",
    hp: "30",
    attack: "45",
    defense: "55"
  },
  {
    id: 119,
    name: "Starmie",
    type: "Water/Psychic",
    hp: "60",
    attack: "75",
    defense: "85"
  },
  {
    id: 120,
    name: "Mr.Mime",
    type: "Psychic/Fairy",
    hp: "40",
    attack: "45",
    defense: "65"
  },
  {
    id: 121,
    name: "Scyther",
    type: "Bug/Flying",
    hp: "70",
    attack: "110",
    defense: "80"
  },
  {
    id: 122,
    name: "Jynx",
    type: "Ice/Psychic",
    hp: "60",
    attack: "50",
    defense: "35"
  },
  {
    id: 123,
    name: "Electrabuzz",
    type: "Electric",
    hp: "65",
    attack: "83",
    defense: "57"
  },
  {
    id: 124,
    name: "Magmar",
    type: "Fire",
    hp: "65",
    attack: "95",
    defense: "57"
  },
  {
    id: 125,
    name: "Pinsir",
    type: "Bug",
    hp: "65",
    attack: "125",
    defense: "100"
  },
  {
    id: 126,
    name: "Tauros",
    type: "Normal",
    hp: "75",
    attack: "100",
    defense: "95"
  },
  {
    id: 127,
    name: "Magikarp",
    type: "Water",
    hp: "20",
    attack: "10",
    defense: "55"
  },
  {
    id: 128,
    name: "Gyarados",
    type: "Water/Flying",
    hp: "95",
    attack: "125",
    defense: "79"
  },
  {
    id: 129,
    name: "Lapras",
    type: "Water/Ice",
    hp: "130",
    attack: "85",
    defense: "80"
  },
  {
    id: 130,
    name: "Ditto",
    type: "Normal",
    hp: "48",
    attack: "48",
    defense: "48"
  },
  {
    id: 131,
    name: "Eevee",
    type: "Normal",
    hp: "55",
    attack: "55",
    defense: "50"
  },
  {
    id: 132,
    name: "Vaporeon",
    type: "Water",
    hp: "130",
    attack: "65",
    defense: "60"
  },
  {
    id: 133,
    name: "Jolteon",
    type: "Electric",
    hp: "65",
    attack: "65",
    defense: "60"
  },
  {
    id: 134,
    name: "Flareon",
    type: "Fire",
    hp: "65",
    attack: "130",
    defense: "60"
  },
  {
    id: 135,
    name: "Porygon",
    type: "Normal",
    hp: "65",
    attack: "60",
    defense: "70"
  },
  {
    id: 136,
    name: "Omanyte",
    type: "Rock/Water",
    hp: "35",
    attack: "40",
    defense: "100"
  },
  {
    id: 137,
    name: "Omastar",
    type: "Rock/Water",
    hp: "70",
    attack: "60",
    defense: "125"
  },
  {
    id: 138,
    name: "Kabuto",
    type: "Rock/Water",
    hp: "30",
    attack: "80",
    defense: "90"
  },
  {
    id: 139,
    name: "Kabutops",
    type: "Rock/Water",
    hp: "60",
    attack: "115",
    defense: "105"
  },
  {
    id: 140,
    name: "Aerodactyl",
    type: "Rock/Flying",
    hp: "80",
    attack: "105",
    defense: "65"
  },
  {
    id: 141,
    name: "Snorlax",
    type: "Normal",
    hp: "160",
    attack: "110",
    defense: "65"
  },
  {
    id: 142,
    name: "Articuno",
    type: "Ice/Flying",
    hp: "90",
    attack: "85",
    defense: "100"
  },
  {
    id: 143,
    name: "Zapdos",
    type: "Electric/Flying",
    hp: "90",
    attack: "90",
    defense: "85"
  },
  {
    id: 144,
    name: "Moltres",
    type: "Fire/Flying",
    hp: "90",
    attack: "100",
    defense: "90"
  },
  {
    id: 145,
    name: "Dratini",
    type: "Dragon",
    hp: "41",
    attack: "64",
    defense: "45"
  },
  {
    id: 146,
    name: "Dragonair",
    type: "Dragon",
    hp: "61",
    attack: "84",
    defense: "65"
  },
  {
    id: 147,
    name: "Dragonite",
    type: "Dragon/Flying",
    hp: "91",
    attack: "134",
    defense: "95"
  },
  {
    id: 148,
    name: "Mewtwo",
    type: "Psychic",
    hp: "106",
    attack: "110",
    defense: "90"
  },
  {
    id: 149,
    name: "Mew",
    type: "Psychic",
    hp: "100",
    attack: "100",
    defense: "100"
  },
  {
    id: 150,
    name: "Tentacruel",
    type: "Ice/Psychic",
    hp: "80",
    attack: "70",
    defense: "65"
  },
]

const seedPokemon = () => Pokemon.bulkCreate(pokemonData);

module.exports = seedPokemon;
