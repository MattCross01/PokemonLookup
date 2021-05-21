const router = require('express').Router();

// Import the model
const Pokemon = require('../../models/Pokemon');

// CREATE a pokemon
router.post('/', (req, res) => {
  // Use Sequelize's `create()` method to add a row to the table
  // Similar to `INSERT INTO` in plain SQL
  Pokemon.create({
    name: req.body.name,
    type: req.body.type,
    is_evolved: true
  })
    .then((newPokemon) => {
      // Send the newly created row as a JSON object
      res.json(newPokemon);
    })
    .catch((err) => {
      res.json(err);
    });
});

// CREATE multiple pokemon
router.post('/seed', (req, res) => {
  // Multiple rows can be created with `bulkCreate()` and an array
  // This could also be moved to a separate Node.js script to ensure it only happens once
  Pokemon.bulkCreate([
    {
      name: 'Pikachu',
      type: 'Electirc',
      hp: '35',
      attack: 55,
      defense: 40,
      is_evolved: false
    },
  ])
    .then(() => {
      res.send('Database seeded!');
    })
    .catch((err) => {
      res.json(err);
    });
});

module.exports = router;
