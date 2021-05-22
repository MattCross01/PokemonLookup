const { Roster } = require('../models');

const rosterData = [
    {
        id: 1,
        user_id: 3,
        pokemon_id: 4
    },
    {
        id: 2,
        user_id: 3,
        pokemon_id: 1
    },
    {
        id: 3,
        user_id: 3,
        pokemon_id: 7
    },
    {
        id: 4,
        user_id: 3,
        pokemon_id: 58
    },
    {
        id: 5,
        user_id: 4,
        pokemon_id: 50
    },
    {
        id: 6,
        user_id: 4,
        pokemon_id: 35
    },
    {
        id: 7,
        user_id: 4,
        pokemon_id: 20
    },
]

const seedRoster = () => Roster.bulkCreate(rosterData);

module.exports = seedRoster;